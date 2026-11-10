/* ============================================================
   DETETIVE — RESOLVA O CASO
   storage.js — Persistência local (localStorage) + progressão
   ------------------------------------------------------------
   Tudo é salvo no navegador. Se o localStorage estiver
   indisponível, um armazenamento em memória assume o papel,
   mantendo o jogo funcional durante a sessão.
   ============================================================ */
var DetStorage = (function () {
  "use strict";

  var VERSION = 2;
  var K_STATE = "detetive.state.v1";
  var K_RESULTS = "detetive.results.v1";
  var K_CURRENT = "detetive.current.v1";

  var mem = {};
  var canUseLS = (function () {
    try {
      var probe = "__detetive_probe__";
      window.localStorage.setItem(probe, "1");
      window.localStorage.removeItem(probe);
      return true;
    } catch (e) {
      return false;
    }
  })();

  function read(key, fallback) {
    try {
      var raw = canUseLS ? window.localStorage.getItem(key) : mem[key];
      if (raw === null || raw === undefined) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      var raw = JSON.stringify(value);
      if (canUseLS) window.localStorage.setItem(key, raw);
      else mem[key] = raw;
    } catch (e) {
      /* armazenamento cheio ou bloqueado: mantém em memória */
      try { mem[key] = JSON.stringify(value); } catch (e2) {}
    }
  }

  function remove(key) {
    try {
      if (canUseLS) window.localStorage.removeItem(key);
      else delete mem[key];
    } catch (e) {}
  }

  function defaultPrefs() {
    return {
      confirmConclude: true,
      autoScrollTop: true,
      hideSpoilersInShare: true
    };
  }

  function defaultState() {
    return {
      version: VERSION,
      cases: {},
      solvedCount: 0,
      totalScore: 0,
      investigations: 0,
      bonus: 0,
      achievements: {},
      prefs: defaultPrefs()
    };
  }

  function getState() {
    var s = read(K_STATE, null);
    if (!s || typeof s !== "object") s = defaultState();
    if (!s.cases || typeof s.cases !== "object") s.cases = {};
    if (typeof s.solvedCount !== "number") s.solvedCount = 0;
    if (typeof s.totalScore !== "number") s.totalScore = 0;
    if (typeof s.investigations !== "number") s.investigations = 0;
    if (typeof s.bonus !== "number") s.bonus = 0;
    if (!s.achievements || typeof s.achievements !== "object") s.achievements = {};
    var p = s.prefs && typeof s.prefs === "object" ? s.prefs : {};
    var def = defaultPrefs();
    s.prefs = {
      confirmConclude: p.confirmConclude !== false,
      autoScrollTop: p.autoScrollTop !== false,
      hideSpoilersInShare: p.hideSpoilersInShare !== false === def.hideSpoilersInShare ? p.hideSpoilersInShare !== false : def.hideSpoilersInShare
    };
    s.version = VERSION;
    return s;
  }

  function setState(s) {
    write(K_STATE, s);
    return s;
  }

  function getPrefs() {
    return getState().prefs;
  }

  function setPref(key, value) {
    var s = getState();
    s.prefs[key] = value;
    setState(s);
    return s.prefs;
  }

  function getResults() {
    var r = read(K_RESULTS, []);
    return Array.isArray(r) ? r : [];
  }

  function saveResult(res) {
    var r = getResults();
    var idx = -1;
    for (var i = 0; i < r.length; i++) {
      if (r[i] && r[i].runId === res.runId) { idx = i; break; }
    }
    if (idx >= 0) r[idx] = res;
    else r.unshift(res);
    if (r.length > 10) r = r.slice(0, 10);
    write(K_RESULTS, r);
    return r;
  }

  function clearResults() {
    remove(K_RESULTS);
  }

  function getCurrent() {
    var c = read(K_CURRENT, null);
    if (!c || typeof c !== "object" || !c.caseId) return null;
    if (!Array.isArray(c.examinedEv)) c.examinedEv = [];
    if (!Array.isArray(c.hypotheses)) c.hypotheses = [];
    if (!Array.isArray(c.selectedEvidence)) c.selectedEvidence = [];
    if (typeof c.hintsUsed !== "number") c.hintsUsed = 0;
    if (typeof c.attempts !== "number") c.attempts = 0;
    if (typeof c.startedAt !== "number") c.startedAt = Date.now();
    return c;
  }

  function setCurrent(c) {
    write(K_CURRENT, c);
    return c;
  }

  function clearCurrent() {
    remove(K_CURRENT);
  }

  function caseRecord(state, id) {
    var c = state.cases[id];
    if (!c || typeof c !== "object") c = { best: 0, solved: false, runs: 0, lastAt: 0 };
    if (typeof c.best !== "number") c.best = 0;
    if (typeof c.runs !== "number") c.runs = 0;
    return c;
  }

  function recomputeAggregates(state) {
    var ids = Object.keys(state.cases);
    var solved = 0;
    var sum = 0;
    for (var i = 0; i < ids.length; i++) {
      var c = state.cases[ids[i]];
      if (c && c.solved) {
        solved++;
        sum += c.best || 0;
      }
    }
    state.solvedCount = solved;
    state.totalScore = sum;
    return state;
  }

  function recordCompletion(caseObj, result) {
    var s = getState();
    var c = caseRecord(s, caseObj.id);
    c.runs++;
    if (result && result.correct) c.solved = true;
    if (result && result.score > c.best) c.best = result.score;
    c.lastAt = Date.now();
    s.cases[caseObj.id] = c;
    s.investigations++;
    recomputeAggregates(s);
    setState(s);
    return s;
  }

  function average(state) {
    state = state || getState();
    if (!state.solvedCount) return 0;
    return Math.round(state.totalScore / state.solvedCount);
  }

  function bestScore(caseId) {
    var s = getState();
    var c = s.cases[caseId];
    return c && c.best ? c.best : 0;
  }

  function isSolved(caseId) {
    var s = getState();
    return !!(s.cases[caseId] && s.cases[caseId].solved);
  }

  function casesSolvedCount() {
    return getState().solvedCount;
  }

  var LEVEL_RULES = {
    2: { solved: 2, avg: 0 },
    3: { solved: 4, avg: 60 },
    4: { solved: 6, avg: 65 }
  };

  function computeLevel(state) {
    state = state || getState();
    var solved = state.solvedCount;
    var avg = average(state);
    var lvl = 1;
    if (solved >= LEVEL_RULES[2].solved) lvl = 2;
    if (solved >= LEVEL_RULES[3].solved && avg >= LEVEL_RULES[3].avg) lvl = 3;
    if (solved >= LEVEL_RULES[4].solved && avg >= LEVEL_RULES[4].avg) lvl = 4;
    return lvl;
  }

  function levelProgress(state) {
    state = state || getState();
    var lvl = computeLevel(state);
    if (lvl >= 4) {
      return { current: 4, next: null, text: "Nível máximo alcançado: Investigador especial." };
    }
    var rule = LEVEL_RULES[lvl + 1];
    var needSolved = Math.max(0, rule.solved - state.solvedCount);
    var parts = [];
    if (needSolved > 0) parts.push(needSolved + (needSolved === 1 ? " caso resolvido" : " casos resolvidos"));
    if (rule.avg > 0) {
      var a = average(state);
      if (a < rule.avg) parts.push("média ≥ " + rule.avg + " (atual: " + a + ")");
    }
    return {
      current: lvl,
      next: lvl + 1,
      text: parts.length ? "Para o nível " + (lvl + 1) + ": " + parts.join(" e ") + "." : "Pronto para subir de nível."
    };
  }

  /* ---------- Progressão por etapas (conjuntos) ---------- */

  /* Casos já resolvidos dentro de uma etapa específica. */
  function countSolvedInStage(stageId, state) {
    state = state || getState();
    var ids = CasesData.getStageCaseIds(stageId) || [];
    var n = 0;
    for (var i = 0; i < ids.length; i++) {
      var c = state.cases[ids[i]];
      if (c && c.solved) n++;
    }
    return n;
  }

  /* Casos resolvidos antes de uma etapa (todas as etapas anteriores). */
  function countSolvedInPriorStages(caseObj, state) {
    var stage = CasesData.getStageOf(caseObj.id);
    if (!stage) return 0;
    var before = 0;
    var stages = CasesData.STAGES;
    for (var i = 0; i < stages.length && stages[i].id !== stage.id; i++) {
      before += countSolvedInStage(stages[i].id, state);
    }
    return before;
  }

  /* Pontuação exibida ao jogador: soma das melhores notas + bônus de conquistas. */
  function getTotalScore(state) {
    state = state || getState();
    return state.totalScore + (state.bonus || 0);
  }

  function isUnlocked(caseObj, state) {
    if (!caseObj) return false;
    state = state || getState();
    /* Uma vez resolvido, o caso permanece jogável. */
    var c = state.cases[caseObj.id];
    if (c && c.solved) return true;
    var stage = CasesData.getStageOf(caseObj.id);
    if (stage && stage.requiredSolved > 0) {
      /* Etapas após a primeira: exigem todos os casos das etapas anteriores. */
      return countSolvedInPriorStages(caseObj, state) >= stage.requiredSolved;
    }
    /* Primeira etapa: desbloqueio por patente, como sempre funcionou. */
    if (caseObj.difficulty <= computeLevel(state)) return true;
    return false;
  }

  function isAvailable() {
    return canUseLS;
  }

  function rawSize() {
    try {
      var keys = [K_STATE, K_RESULTS, K_CURRENT];
      var total = 0;
      for (var i = 0; i < keys.length; i++) {
        var v = canUseLS ? window.localStorage.getItem(keys[i]) : mem[keys[i]];
        if (v) total += v.length;
      }
      return total;
    } catch (e) { return 0; }
  }

  function resetProgress() {
    var s = getState();
    s.cases = {};
    s.solvedCount = 0;
    s.totalScore = 0;
    s.investigations = 0;
    s.bonus = 0;
    s.achievements = {};
    setState(s);
    clearCurrent();
    return s;
  }

  function resetAll() {
    remove(K_STATE);
    remove(K_RESULTS);
    remove(K_CURRENT);
  }

  function seed() {
    var s = getState();
    recomputeAggregates(s);
    setState(s);
    return s;
  }

  return {
    VERSION: VERSION,
    getState: getState,
    setState: setState,
    getPrefs: getPrefs,
    setPref: setPref,
    getResults: getResults,
    saveResult: saveResult,
    clearResults: clearResults,
    getCurrent: getCurrent,
    setCurrent: setCurrent,
    clearCurrent: clearCurrent,
    recordCompletion: recordCompletion,
    average: average,
    bestScore: bestScore,
    isSolved: isSolved,
    casesSolvedCount: casesSolvedCount,
    computeLevel: computeLevel,
    levelProgress: levelProgress,
    isUnlocked: isUnlocked,
    countSolvedInStage: countSolvedInStage,
    getTotalScore: getTotalScore,
    isAvailable: isAvailable,
    rawSize: rawSize,
    resetProgress: resetProgress,
    resetAll: resetAll,
    seed: seed
  };
})();
