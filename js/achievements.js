/* ============================================================
   DETETIVE — RESOLVA O CASO
   achievements.js — Conquistas e recompensas
   ------------------------------------------------------------
   Cada caso resolvido desbloqueia uma conquista. Marcos de
   progresso (etapas e total de casos) desbloqueiam conquistas
   especiais com recompensas em pontos de bônus. As conquistas
   são lançadas uma única vez (sem duplicar) e os bônus somados
   à pontuação exibida (sem alterar a média por caso).
   ============================================================ */
var DetAchievements = (function () {
  "use strict";

  var MILESTONES = [
    { id: "ach_4_iniciais", title: "Arquivo inicial: metade", desc: "Resolva 4 casos do arquivo inicial.", icon: "star", bonus: 100, stage: "stage1", count: 4 },
    { id: "ach_investigador_experiente", title: "Investigador Experiente", desc: "Resolva todos os 8 casos do arquivo inicial.", icon: "medal", bonus: 0, stage: "stage1", count: 8, card: true },
    { id: "ach_12_casos", title: "Arquivo avançado: maioria", desc: "Resolva 12 casos no total.", icon: "star", bonus: 150, count: 12 },
    { id: "ach_especialista", title: "Investigador Especialista", desc: "Resolva todos os 24 casos do arquivo.", icon: "medal", bonus: 0, count: 24, card: true }
  ];

  var cachedList = null;

  function caseAchievement(c) {
    var cat = CasesData.getCategory(c.category);
    return {
      id: "ach_case_" + c.id,
      title: c.title,
      desc: "Resolva o caso " + c.code + " — " + c.title + ".",
      icon: cat.icon || "search",
      group: "casos",
      caseId: c.id,
      code: c.code,
      bonus: 0,
      card: false
    };
  }

  function milestoneAchievement(m) {
    return {
      id: m.id,
      title: m.title,
      desc: m.desc,
      icon: m.icon,
      group: "marcos",
      bonus: m.bonus || 0,
      card: !!m.card,
      stage: m.stage || "",
      count: m.count
    };
  }

  /* Lista completa de conquistas (casos + marcos), em cache. */
  function list() {
    if (!cachedList) {
      var all = CasesData.CASES.map(caseAchievement);
      for (var i = 0; i < MILESTONES.length; i++) all.push(milestoneAchievement(MILESTONES[i]));
      cachedList = all;
    }
    return cachedList;
  }

  function getById(id) {
    var all = list();
    for (var i = 0; i < all.length; i++) {
      if (all[i].id === id) return all[i];
    }
    return null;
  }

  function milestoneEarned(m, state) {
    if (m.stage) return DetStorage.countSolvedInStage(m.stage, state) >= m.count;
    return state.solvedCount >= m.count;
  }

  /* Quais conquistas devem estar desbloqueadas para este estado. */
  function shouldEarn(state) {
    state = state || DetStorage.getState();
    var out = [];
    var all = list();
    for (var i = 0; i < all.length; i++) {
      var a = all[i];
      var ok = a.group === "casos"
        ? !!(state.cases[a.caseId] && state.cases[a.caseId].solved)
        : milestoneEarned(a, state);
      if (ok) out.push(a.id);
    }
    return out;
  }

  /* Conquistas já registradas (com carimbo de data). */
  function earned(state) {
    state = state || DetStorage.getState();
    var claims = state.achievements || {};
    return list().filter(function (a) { return !!claims[a.id]; });
  }

  /*
     Registra as conquistas merecidas ainda não lançadas,
     recalcula o bônus total e devolve as recém-desbloqueadas
     (para a tela de resultado). Idempotente: não duplica.
  */
  function sync(state) {
    state = state || DetStorage.getState();
    var ids = shouldEarn(state);
    var claims = state.achievements || {};
    var newly = [];
    var now = Date.now();
    for (var i = 0; i < ids.length; i++) {
      if (!claims[ids[i]]) {
        claims[ids[i]] = now;
        newly.push(ids[i]);
      }
    }
    state.achievements = claims;
    var bonus = 0;
    var all = list();
    for (var j = 0; j < all.length; j++) {
      if (claims[all[j].id] && all[j].bonus) bonus += all[j].bonus;
    }
    state.bonus = bonus;
    DetStorage.setState(state);
    var out = [];
    for (var k = 0; k < newly.length; k++) {
      var a = getById(newly[k]);
      if (a) out.push(a);
    }
    return out;
  }

  function summary(state) {
    state = state || DetStorage.getState();
    var claims = state.achievements || {};
    var total = list().length;
    var n = 0;
    for (var id in claims) {
      if (Object.prototype.hasOwnProperty.call(claims, id) && getById(id)) n++;
    }
    return { earned: n, total: total, bonus: state.bonus || 0 };
  }

  return {
    list: list,
    getById: getById,
    shouldEarn: shouldEarn,
    earned: earned,
    sync: sync,
    summary: summary
  };
})();