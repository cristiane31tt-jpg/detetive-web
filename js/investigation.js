/* ============================================================
   DETETIVE — RESOLVA O CASO
   investigation.js — Fluxo do caso: briefing, investigação,
   conclusão e resultado.
   ============================================================ */
var DetInvest = (function () {
  "use strict";

  var active = DetStorage.getCurrent();
  var tab = "evidence";

  var TAB_META = {
    evidence: { title: "Evidências", desc: "Examine cada item para revelar a descrição completa." },
    suspects: { title: "Suspeitos", desc: "Perfil, comportamento e álibi de cada envolvido." },
    testimonies: { title: "Depoimentos", desc: "Compare o que cada pessoa declarou à polícia." },
    timeline: { title: "Linha do tempo", desc: "Reconstitua a ordem dos acontecimentos." },
    contradictions: { title: "Contradições", desc: "Incoerências e pontos que se confirmam." },
    hypotheses: { title: "Hipóteses", desc: "Registre suas deduções. Anotar vale +5 pontos." }
  };

  function caseOf(caseId) {
    return CasesData.getCase(caseId || (active && active.caseId));
  }

  function save() {
    if (active) DetStorage.setCurrent(active);
  }

  function persistCurrent(run) {
    active = run;
    DetStorage.setCurrent(active);
  }

  /* ---------- Início / continuidade ---------- */

  function startCase(caseId) {
    var c = CasesData.getCase(caseId);
    if (!c) { DetUI.toast("Caso não encontrado."); return; }
    if (!DetStorage.isUnlocked(c)) {
      DetUI.toast("Este caso está bloqueado. Avance de nível para liberá-lo.");
      return;
    }
    var cur = DetStorage.getCurrent();
    if (cur && cur.caseId === caseId && !cur.resolved) {
      active = cur;
    } else {
      persistCurrent({
        runId: "run_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
        caseId: caseId,
        startedAt: Date.now(),
        examinedEv: [],
        hypotheses: [],
        selectedEvidence: [],
        selectedAnswer: null,
        hintsUsed: 0,
        attempts: 0,
        resolved: false
      });
    }
    tab = "evidence";
    DetNav.show("briefing", { caseId: caseId });
  }

  function currentRun() { return active; }
  function currentCaseId() { return active && !active.resolved ? active.caseId : null; }

  /* ---------- Briefing ---------- */

  function renderBriefing(params) {
    var c = caseOf(params && params.caseId);
    if (!c) { DetNav.home(); return; }
    if (!active || active.caseId !== c.id) {
      var cur = DetStorage.getCurrent();
      if (cur && cur.caseId === c.id) active = cur;
      else persistCurrent({
        runId: "run_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
        caseId: c.id, startedAt: Date.now(), examinedEv: [], hypotheses: [],
        selectedEvidence: [], selectedAnswer: null, hintsUsed: 0, attempts: 0, resolved: false
      });
    }
    var cat = CasesData.getCategory(c.category);
    var lvl = CasesData.getLevelInfo(c.difficulty);
    var susList = c.suspects.map(function (s) {
      return "<li><b>" + DetUI.esc(s.name) + "</b> — " + DetUI.esc(s.role) + "</li>";
    }).join("");

    var html =
      '<div class="briefing-wrap">' +
        '<div class="briefing-main">' +
          '<div class="briefing-kicker">' + DetUI.esc(c.code) + " · " + DetUI.esc(cat.label) + " · Nível " + c.difficulty + "</div>" +
          "<h2>" + DetUI.esc(c.title) + "</h2>" +
          '<div class="occ"><p>' + DetUI.esc(c.brief) + "</p></div>" +
          '<div class="meta-list">' +
            metaRow("pin", "Cenário", c.context) +
            metaRow("calendar", "Momento", c.date) +
            metaRow("board", "Categoria", cat.label) +
            metaRow("medal", "Nível", lvl.name + " — " + lvl.desc) +
          "</div>" +
          '<div class="briefing-actions">' +
            '<button type="button" class="btn btn-primary btn-lg" data-action="begin">' + DetUI.icon("play") + " Começar a investigar</button>" +
            '<button type="button" class="btn" data-action="cases">Voltar aos casos</button>' +
          "</div>" +
        "</div>" +
        '<aside class="briefing-side">' +
          "<h3>Seu objetivo</h3>" +
          "<ul>" +
            "<li>Reunir evidências e ouvir todos os depoimentos.</li>" +
            "<li>Montar a linha do tempo e apontar contradições.</li>" +
            "<li>Na conclusão, indicar o responsável e as provas decisivas.</li>" +
            "<li>Usar dicas custa 8 pontos. Anote hipóteses para ganhar pontos.</li>" +
          "</ul>" +
          "<h3>Suspeitos</h3>" +
          '<ul>' + susList + "</ul>" +
        "</aside>" +
      "</div>";

    document.getElementById("briefing-content").innerHTML = html;
  }

  function metaRow(icon, key, value) {
    return '<div class="meta-row"><span class="mi">' + DetUI.icon(icon) + '</span><span class="mk">' + DetUI.esc(key) + '</span><span class="mv">' + DetUI.esc(value) + "</span></div>";
  }

  /* ---------- Painel de investigação ---------- */

  function render() {
    var c = caseOf();
    if (!c) { DetNav.home(); return; }
    document.getElementById("investigation-content").innerHTML = buildInvestigation(c);
  }

  function refresh() {
    var c = caseOf();
    if (!c) return;
    var host = document.getElementById("investigation-content");
    if (host) host.innerHTML = buildInvestigation(c);
  }

  function buildInvestigation(c) {
    var rail = buildRail(c);
    var main = buildMain(c);
    var board = buildBoard(c);
    return '<div class="inv-grid">' + rail + main + board + "</div>";
  }

  function railCount(t, c) {
    if (t === "evidence") return active.examinedEv.length + "/" + c.evidence.length;
    if (t === "suspects") return String(c.suspects.length);
    if (t === "testimonies") return String(c.testimonies.length);
    if (t === "timeline") return String(c.timeline.length);
    if (t === "contradictions") return String(c.contradictions.length);
    if (t === "hypotheses") return String(active.hypotheses.length);
    return "";
  }

  function railIcon(t) {
    return { evidence: "camera", suspects: "users", testimonies: "chat", timeline: "clock", contradictions: "target", hypotheses: "edit" }[t];
  }

  function railLabel(t) {
    return { evidence: "Evidências", suspects: "Suspeitos", testimonies: "Depoimentos", timeline: "Linha do tempo", contradictions: "Contradições", hypotheses: "Hipóteses" }[t];
  }

  function buildRail(c) {
    var tabs = ["evidence", "suspects", "testimonies", "timeline", "contradictions", "hypotheses"];
    var btns = tabs.map(function (t) {
      return '<button type="button" class="rail-btn' + (t === tab ? " active" : "") + '" data-tab="' + t + '">' +
        DetUI.icon(railIcon(t)) + "<span>" + railLabel(t) + '</span><span class="rail-count">' + railCount(t, c) + "</span></button>";
    }).join("");
    var hintsLeft = 3 - active.hintsUsed;
    return '<aside class="inv-rail">' +
      '<div class="inv-case-head"><div class="inv-code">' + DetUI.esc(c.code) + '</div><h3>' + DetUI.esc(c.title) + "</h3></div>" +
      btns +
      '<button type="button" class="btn rail-hint-btn" data-action="hint">' + DetUI.icon("lightbulb") + " Pedir dica (" + active.hintsUsed + "/3)</button>" +
      '<button type="button" class="btn btn-primary rail-conclude" data-action="conclude">' + DetUI.icon("flag") + " Ir para a conclusão</button>" +
    "</aside>";
  }

  function buildMain(c) {
    var meta = TAB_META[tab] || TAB_META.evidence;
    return '<section class="inv-main">' +
      '<div class="inv-tab-head"><div><h3>' + meta.title + "</h3><p>" + meta.desc + "</p></div></div>" +
      '<div class="inv-tab-body" id="inv-tab-body">' + buildTabBody(tab, c) + "</div>" +
    "</section>";
  }

  function buildTabBody(t, c) {
    if (t === "evidence") return buildEvidence(c);
    if (t === "suspects") return buildSuspects(c);
    if (t === "testimonies") return buildTestimonies(c);
    if (t === "timeline") return buildTimeline(c);
    if (t === "contradictions") return buildContradictions(c);
    if (t === "hypotheses") return buildHypotheses(c);
    return "";
  }

  function isExamined(id) { return active.examinedEv.indexOf(id) !== -1; }

  function buildEvidence(c) {
    var cards = c.evidence.map(function (ev) {
      var done = isExamined(ev.id);
      return '<div class="ev-card' + (done ? " examined" : "") + '">' +
        '<div class="ev-top"><span class="ev-icon">' + DetUI.icon(ev.icon || "search") + "</span>" +
          "<div><h4>" + DetUI.esc(ev.title) + '</h4><div class="ev-type">' + DetUI.esc(ev.type || "Vestígio") + "</div></div></div>" +
        "<p>" + DetUI.esc(ev.summary) + "</p>" +
        '<span class="ev-status ' + (done ? "ok" : "pending") + '">' + (done ? "Examinada" : "Não examinada") + "</span>" +
        '<button type="button" class="btn btn-sm examine" data-action="examine" data-ev="' + ev.id + '">' + (done ? "Ver detalhes" : "Examinar") + "</button>" +
      "</div>";
    }).join("");
    return '<div class="ev-grid">' + cards + "</div>";
  }

  function buildSuspects(c) {
    return c.suspects.map(function (s) {
      return '<div class="item-card">' +
        '<span class="ic-icon">' + DetUI.icon("users") + "</span>" +
        '<div class="ic-body"><div class="ic-title">' + DetUI.esc(s.name) + '</div>' +
          '<div class="ic-sub">' + DetUI.esc(s.role) + (s.age ? " · " + s.age + " anos" : "") + "</div>" +
          '<div class="ic-tagrow"><span class="tag">Álibi: ' + DetUI.esc(shorten(s.alibi, 42)) + "</span></div>" +
          '<button type="button" class="btn btn-sm examine" data-action="open-suspect" data-sus="' + s.id + '">Abrir ficha completa</button>' +
        "</div></div>";
    }).join("");
  }

  function buildTestimonies(c) {
    return c.testimonies.map(function (t) {
      return '<div class="item-card">' +
        '<span class="ic-icon">' + DetUI.icon("chat") + "</span>" +
        '<div class="ic-body"><div class="ic-title">' + DetUI.esc(t.person) + '</div>' +
          '<div class="ic-sub">' + DetUI.esc(t.role) + "</div>" +
          "<p>" + DetUI.esc(shorten(t.text, 120)) + "</p>" +
          '<button type="button" class="btn btn-sm examine" data-action="open-testimony" data-test="' + t.id + '">Ler depoimento completo</button>' +
        "</div></div>";
    }).join("");
  }

  function buildTimeline(c) {
    var items = c.timeline.map(function (x) {
      return '<div class="tl-item"><span class="tl-dot"></span><div class="tl-time">' + DetUI.esc(x.time) + '</div><div class="tl-event">' + DetUI.esc(x.event) + "</div></div>";
    }).join("");
    return '<div class="timeline">' + items + "</div>";
  }

  function buildContradictions(c) {
    return c.contradictions.map(function (k) {
      var confirm = k.type === "confirmation";
      return '<div class="contrad-card' + (confirm ? " confirm" : "") + '">' +
        "<h4>" + (confirm ? DetUI.icon("check") : DetUI.icon("target")) + " " + DetUI.esc(k.title) + "</h4>" +
        '<div class="contrad-between">' + DetUI.esc(k.between) + "</div>" +
        "<p>" + DetUI.esc(k.analysis) + "</p></div>";
    }).join("");
  }

  function buildHypotheses(c) {
    var items = active.hypotheses.map(function (h, i) {
      return '<div class="hyp-item"><div class="hyp-meta"><span>Hipótese ' + (i + 1) + "</span>" +
        '<button type="button" class="btn btn-sm btn-ghost" data-action="hyp-del" data-idx="' + i + '">Remover</button></div>' +
        DetUI.esc(h.text) + "</div>";
    }).join("");
    return '<div class="hyp-box"><textarea id="hyp-input" placeholder="Ex.: O suspeito estava no local antes do horário declarado..."></textarea>' +
      '<div class="hyp-actions"><button type="button" class="btn btn-primary" data-action="hyp-add">' + DetUI.icon("plus") + " Registrar hipótese</button></div></div>" +
      (items || '<div class="board-note">Nenhuma hipótese registrada ainda.</div>');
  }

  function buildBoard(c) {
    var hypMini = active.hypotheses.slice(0, 3).map(function (h) {
      return '<div class="hyp-mini">' + DetUI.esc(shorten(h.text, 80)) + "</div>";
    }).join("");
    return '<aside class="inv-board">' +
      "<h3>Progresso</h3>" +
      '<div class="board-row"><span>Evidências examinadas</span><b>' + active.examinedEv.length + "/" + c.evidence.length + "</b></div>" +
      '<div class="board-row"><span>Depoimentos lidos</span><b>' + c.testimonies.length + "</b></div>" +
      '<div class="board-row"><span>Contradições</span><b>' + c.contradictions.length + "</b></div>" +
      '<div class="board-row"><span>Hipóteses registradas</span><b>' + active.hypotheses.length + "</b></div>" +
      '<div class="board-row"><span>Dicas usadas</span><b>' + active.hintsUsed + "/3</b></div>" +
      '<div class="board-row"><span>Conclusões erradas</span><b>' + active.attempts + "</b></div>" +
      '<p class="board-note">Analise bem: apontar as 3 evidências decisivas na conclusão é o que mais soma pontos.</p>' +
      (hypMini ? '<div class="board-note" style="margin-top:4px">Suas hipóteses:</div>' + hypMini : "") +
    "</aside>";
  }

  /* ---------- Ações da investigação ---------- */

  function setTab(t) {
    if (!TAB_META[t]) return;
    tab = t;
    refresh();
  }

  function examine(evId) {
    var c = caseOf();
    if (!c) return;
    var ev = null;
    for (var i = 0; i < c.evidence.length; i++) { if (c.evidence[i].id === evId) { ev = c.evidence[i]; break; } }
    if (!ev) return;
    if (!isExamined(evId)) { active.examinedEv.push(evId); save(); }
    refresh();
    DetUI.modal({
      wide: true,
      title: ev.title,
      sub: (ev.type || "Vestígio") + " · " + c.code,
      body:
        '<div style="display:flex;gap:16px;align-items:flex-start">' +
          '<span class="evidence-detail-icon">' + DetUI.icon(ev.icon || "search") + "</span>" +
          '<div style="flex:1">' +
            '<div class="ev-type-badge">' + DetUI.esc(ev.type || "Vestígio") + "</div>" +
            '<div class="section-label">Descrição</div><p class="solution-text">' + DetUI.esc(ev.description) + "</p>" +
            '<div class="section-label">O que isso indica</div><p class="solution-text">' + DetUI.esc(ev.significance) + "</p>" +
          "</div>" +
        "</div>",
      footer: "<button type='button' class='btn btn-primary' data-action='modal-close'>Entendi</button>"
    });
  }

  function openSuspect(id) {
    var c = caseOf();
    if (!c) return;
    var s = null;
    for (var i = 0; i < c.suspects.length; i++) { if (c.suspects[i].id === id) { s = c.suspects[i]; break; } }
    if (!s) return;
    var initials = s.name.split(" ").map(function (p) { return p.charAt(0); }).slice(0, 2).join("").toUpperCase();
    var profile = (s.profile || []).map(function (p) { return "<p>" + DetUI.esc(p) + "</p>"; }).join("");
    var dep = null;
    for (var j = 0; j < c.testimonies.length; j++) { if (c.testimonies[j].person === s.name) { dep = c.testimonies[j]; break; } }
    DetUI.modal({
      wide: true,
      title: "Ficha do suspeito",
      sub: c.code + " · " + c.title,
      body:
        '<div class="suspect-header">' +
          '<div class="suspect-avatar">' + DetUI.esc(initials) + "</div>" +
          "<div><h4>" + DetUI.esc(s.name) + '</h4><div class="suspect-role">' + DetUI.esc(s.role) + '</div>' +
            '<div class="suspect-meta">' + (s.age ? s.age + " anos" : "") + "</div></div>" +
        "</div>" +
        '<div class="section-label">Perfil</div>' + profile +
        '<div class="section-label">Comportamento</div><p class="solution-text">' + DetUI.esc(s.behavior) + "</p>" +
        '<div class="section-label">Álibi declarado</div><p class="solution-text">' + DetUI.esc(s.alibi) + "</p>" +
        (dep ? '<div class="section-label">Depoimento</div><div class="testimony-quote">“' + DetUI.esc(dep.text) + "”</div>" : ""),
      footer: "<button type='button' class='btn btn-primary' data-action='modal-close'>Fechar</button>"
    });
  }

  function openTestimony(id) {
    var c = caseOf();
    if (!c) return;
    var t = null;
    for (var i = 0; i < c.testimonies.length; i++) { if (c.testimonies[i].id === id) { t = c.testimonies[i]; break; } }
    if (!t) return;
    DetUI.modal({
      wide: true,
      title: t.person,
      sub: t.role,
      body: '<div class="testimony-quote">“' + DetUI.esc(t.text) + "”</div>",
      footer: "<button type='button' class='btn btn-primary' data-action='modal-close'>Fechar</button>"
    });
  }

  function addHypothesis() {
    var ta = document.getElementById("hyp-input");
    if (!ta) return;
    var val = (ta.value || "").trim();
    if (val.length < 4) { DetUI.toast("Escreva uma hipótese um pouco mais detalhada."); return; }
    active.hypotheses.push({ text: val, at: Date.now() });
    save();
    refresh();
    DetUI.toast("Hipótese registrada.");
  }

  function deleteHypothesis(idx) {
    if (idx < 0 || idx >= active.hypotheses.length) return;
    active.hypotheses.splice(idx, 1);
    save();
    refresh();
  }

  function useHint() {
    var c = caseOf();
    if (!c) return;
    var idx = active.hintsUsed;
    var hints = c.hints || [];
    var body;
    if (idx >= hints.length) {
      DetUI.modal({
        title: "Dicas esgotadas",
        body: '<p class="solution-text">Você já revelou todas as dicas disponíveis para este caso.</p>',
        footer: "<button type='button' class='btn btn-primary' data-action='modal-close'>Fechar</button>"
      });
      return;
    }
    var apply = function () {
      active.hintsUsed++;
      save();
      refresh();
    };
    var bodyHtml = '<div class="hint-tier used"><div class="ht-label">' + (idx + 1) + '</div><div class="ht-body">' +
      '<div class="ht-title">Dica ' + (idx + 1) + " de " + hints.length + '</div><p>' + DetUI.esc(hints[idx]) + "</p></div></div>" +
      '<p class="board-note">Cada dica reduz 8 pontos da sua pontuação final.</p>';
    DetUI.modal({
      title: "Dica " + (idx + 1),
      sub: c.code + " · " + c.title,
      body: bodyHtml,
      footer: "<button type='button' class='btn btn-ghost' data-action='modal-close'>Cancelar</button>" +
        "<button type='button' class='btn btn-primary' data-action='hint-confirm'>Usar esta dica</button>"
    });
    var ok = document.querySelector('[data-action="hint-confirm"]');
    if (ok) ok.addEventListener("click", function () { DetUI.closeModal(); apply(); DetUI.toast("Dica revelada (−8 pontos)."); });
  }

  function goConclusion() {
    DetNav.show("conclusion");
  }

  /* ---------- Conclusão ---------- */

  function renderConclusion() {
    var c = caseOf();
    if (!c) { DetNav.home(); return; }
    document.getElementById("conclusion-content").innerHTML = buildConclusion(c);
  }

  function refreshConclusion() {
    var c = caseOf();
    if (!c) return;
    var host = document.getElementById("conclusion-content");
    if (host) host.innerHTML = buildConclusion(c);
  }

  function buildConclusion(c) {
    var answers = c.answerOptions.map(function (a) {
      var sel = active.selectedAnswer === a.id;
      return '<button type="button" class="answer-opt' + (sel ? " selected" : "") + '" data-action="choose-answer" data-ans="' + a.id + '">' +
        '<span class="rad"></span><span><span class="ans-title">' + DetUI.esc(a.label) + '</span>' +
        '<span class="ans-sub">' + DetUI.esc(a.sub || "") + "</span></span></button>";
    }).join("");

    var evs = c.evidence.map(function (ev) {
      var done = isExamined(ev.id);
      var checked = active.selectedEvidence.indexOf(ev.id) !== -1;
      return '<label class="ev-check' + (done ? "" : " locked") + '">' +
        '<input type="checkbox" data-ev="' + ev.id + '"' + (checked ? " checked" : "") + (done ? "" : " disabled") + ">" +
        '<span><span class="ec-title">' + DetUI.esc(ev.title) + '</span>' +
        '<span class="ec-sub">' + DetUI.esc(ev.type || "Vestígio") + (done ? "" : ' <span class="ec-status">examine na investigação</span>') + "</span></span></label>";
    }).join("");

    return '<div class="concl-grid">' +
      '<div class="concl-col"><h3>Quem é o responsável?</h3><p>Escolha a conclusão que a sua investigação sustenta.</p>' + answers + "</div>" +
      '<div class="concl-col"><h3>Provas decisivas</h3><p>Marque as evidências que sustentam sua conclusão (até 3 valem pontos).</p>' + evs + "</div>" +
    "</div>" +
    '<div class="concl-foot">' +
      '<button type="button" class="btn" data-action="back-investigation">Voltar à investigação</button>' +
      '<button type="button" class="btn btn-primary" data-action="submit">' + DetUI.icon("check") + " Confirmar conclusão</button>" +
      '<span class="hint-msg">Dicas usadas: ' + active.hintsUsed + " · Conclusões erradas: " + active.attempts + "</span>" +
    "</div>";
  }

  function chooseAnswer(ansId) {
    active.selectedAnswer = ansId;
    save();
    refreshConclusion();
  }

  function readSelectedEvidence() {
    var host = document.getElementById("conclusion-content");
    var out = [];
    if (!host) return out;
    var boxes = host.querySelectorAll('input[type="checkbox"][data-ev]');
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].checked) out.push(boxes[i].getAttribute("data-ev"));
    }
    active.selectedEvidence = out;
    save();
    return out;
  }

  function submitConclusion() {
    var c = caseOf();
    if (!c) return;
    if (!active.selectedAnswer) { DetUI.toast("Escolha uma conclusão antes de confirmar."); return; }
    readSelectedEvidence();
    var correct = active.selectedAnswer === c.solution.correctAnswer;

    if (!correct) {
      active.attempts++;
      save();
      DetUI.modal({
        title: "Conclusão inconsistente",
        sub: c.code + " · " + c.title,
        body: '<p class="solution-text">As evidências reunidas não sustentam essa conclusão. Releia os depoimentos, confira a linha do tempo e reveja as contradições antes de tentar de novo.</p>' +
          '<p class="board-note">Esta tentativa custou 10 pontos.</p>',
        footer: "<button type='button' class='btn' data-action='back-investigation'>Continuar investigando</button>" +
          "<button type='button' class='btn btn-primary' data-action='modal-close'>Revisar conclusão</button>"
      });
      refreshConclusion();
      return;
    }

    var proceed = function () { finalize(c); };
    if (DetStorage.getPrefs().confirmConclude !== false) {
      var decisiveHits = active.selectedEvidence.filter(function (id) { return c.solution.decisiveEvidence.indexOf(id) !== -1; }).length;
      DetUI.confirmBox({
        title: "Confirmar conclusão?",
        message: "Você apontou " + active.selectedEvidence.length + " evidência(s), sendo " + decisiveHits + " decisiva(s). Deseja enviar sua conclusão?",
        body: '<p class="board-note">Depois de confirmar, a solução completa será revelada.</p>',
        okLabel: "Enviar conclusão",
        onOk: proceed
      });
    } else {
      proceed();
    }
  }

  function finalize(c) {
    var score = DetScoring.compute({
      correct: true,
      selectedEvidence: active.selectedEvidence,
      decisiveIds: c.solution.decisiveEvidence,
      hintsUsed: active.hintsUsed,
      attempts: active.attempts,
      hasHypothesis: active.hypotheses.length > 0
    });
    var timeSec = Math.max(0, Math.round((Date.now() - active.startedAt) / 1000));
    var result = {
      runId: active.runId,
      caseId: c.id,
      code: c.code,
      title: c.title,
      category: c.category,
      categoryLabel: CasesData.getCategory(c.category).label,
      difficulty: c.difficulty,
      date: Date.now(),
      score: score.total,
      gradeKey: score.grade.key,
      gradeLabel: score.grade.label,
      resultLabel: "Caso resolvido",
      correct: true,
      breakdown: score.breakdown,
      decisiveHits: score.details.decisiveHits,
      decisiveIds: c.solution.decisiveEvidence,
      selectedEvidence: active.selectedEvidence.slice(),
      wrongEvidence: score.details.wrongEvidence.slice(),
      hintsUsed: active.hintsUsed,
      attempts: active.attempts,
      hasHypothesis: active.hypotheses.length > 0,
      timeSec: timeSec
    };
    DetStorage.recordCompletion(c, result);
    DetStorage.saveResult(result);
    result.newAchievements = DetAchievements.sync();
    active.resolved = true;
    DetStorage.clearCurrent();
    active = null;
    DetNav.show("result", { result: result });
  }

  /* ---------- Resultado ---------- */

  function renderResult(params) {
    var result = params && params.result;
    if (!result) { DetNav.home(); return; }
    var c = CasesData.getCase(result.caseId);
    document.getElementById("result-content").innerHTML = buildResult(result, c);
  }

  function buildResult(result, c) {
    var prefs = DetStorage.getPrefs();
    var ring = '<div class="score-ring"><div class="ring-val">' + result.score + '</div><div class="ring-total">de 100</div><div class="ring-label">Pontuação</div></div>';
    var hero = '<div class="result-hero">' + ring +
      "<div><div class='result-sub'>" + DetUI.esc(result.resultLabel) + "</div>" +
        "<h2>" + DetUI.esc(result.title) + "</h2>" +
        '<div class="result-code">' + DetUI.esc(result.code) + " · " + DetUI.esc(result.categoryLabel) + " · Nível " + result.difficulty + "</div>" +
        '<span class="result-grade grade-' + DetUI.esc(result.gradeKey) + '">' + DetUI.esc(result.gradeLabel) + " · " + result.score + "/100</span>" +
      "</div></div>";

    var breakdownRows = result.breakdown.map(function (b) {
      var val = b.value > 0 ? "+" + b.value : String(b.value);
      return '<div class="breakdown-row ' + (b.type || "") + '"><span>' + DetUI.esc(b.label) + (b.note ? ' <span class="dim" style="color:var(--text-faint)">(' + DetUI.esc(b.note) + ")</span>" : "") + '</span><span class="bd-val">' + val + "</span></div>";
    }).join("");
    breakdownRows += '<div class="breakdown-row total"><span>Total</span><span class="bd-val">' + result.score + "/100</span></div>";

    var leftPanel = '<div class="result-panel"><h3>Como foi composta a nota</h3>' + breakdownRows + "</div>";

    var seq = (c.solution.sequence || []).map(function (s, i) {
      return '<div class="sol-seq-item"><span class="step-n">' + (i + 1) + "</span><span>" + DetUI.esc(s) + "</span></div>";
    }).join("");
    var excl = (c.solution.exclusions || []).map(function (e) {
      return '<div class="excl-item"><div class="excl-who">' + DetUI.esc(e.who) + "</div><p>" + DetUI.esc(e.why) + "</p></div>";
    }).join("");

    var evRows = result.decisiveIds.map(function (id) {
      var ev = findEv(c, id);
      var hit = result.selectedEvidence.indexOf(id) !== -1;
      return '<div class="ev-result-row' + (hit ? "" : " missed") + '">' + DetUI.icon(ev ? ev.icon : "search", "ev-icon2") +
        "<span>" + DetUI.esc(ev ? ev.title : id) + '</span><span class="er-flag ' + (hit ? "hit" : "miss") + '">' + (hit ? "apontada" : "não apontada") + "</span></div>";
    }).join("");
    if (result.wrongEvidence && result.wrongEvidence.length) {
      evRows += result.wrongEvidence.map(function (id) {
        var ev = findEv(c, id);
        return '<div class="ev-result-row"><span class="er-flag miss">✕</span>' + (ev ? DetUI.esc(ev.title) : id) + '<span class="er-flag miss">apontada por engano</span></div>';
      }).join("");
    }

    var rightPanel = '<div class="result-panel"><h3>Solução do caso</h3>' +
      '<p class="solution-text"><strong>' + DetUI.esc(c.solution.title) + "</strong></p>" +
      '<div class="section-label">Motivo</div><p class="solution-text">' + DetUI.esc(c.solution.motive) + "</p>" +
      '<div class="section-label">Como aconteceu</div><div class="sol-seq">' + seq + "</div>" +
      '<div class="section-label">Evidências decisivas</div>' + evRows +
      '<div class="section-label">Raciocínio</div><p class="solution-text">' + DetUI.esc(c.solution.reasoning) + "</p>" +
      '<div class="section-label">Por que os outros não podem ser</div>' + excl +
    "</div>";

var defaultInclude = prefs.hideSpoilersInShare === false;
    var actions = '<div class="result-actions">' +
      '<label class="set-row" style="flex:1 1 100%;margin:0 0 4px"><span class="set-info"><span class="set-title">Incluir a solução no texto compartilhado</span><span class="set-desc">Se desmarcado, o texto não revela o responsável.</span></span>' +
        '<span class="toggle"><input type="checkbox" id="share-include-solution"' + (defaultInclude ? " checked" : "") + '><span class="track"></span></span></label>' +
      '<button type="button" class="btn btn-primary" data-action="share">' + DetUI.icon("share") + " Compartilhar</button>" +
      '<button type="button" class="btn" data-action="copy">' + DetUI.icon("copy") + " Copiar resultado</button>" +
      '<button type="button" class="btn" data-action="share-whatsapp">' + DetUI.icon("chat") + " WhatsApp</button>" +
      '<button type="button" class="btn" data-action="replay" data-case="' + DetUI.esc(result.caseId) + '">' + DetUI.icon("refresh") + " Investigar novamente</button>" +
      '<button type="button" class="btn" data-action="cases">Casos disponíveis</button>' +
      '<button type="button" class="btn" data-action="home">' + DetUI.icon("home") + " Tela inicial</button>" +
    "</div>";

    var achNew = (result.newAchievements && result.newAchievements.length)
      ? '<div class="ach-new">' +
          "<h3>" + DetUI.icon("medal") + " Novas conquistas desbloqueadas</h3>" +
          result.newAchievements.map(function (a) {
            return '<div class="ach-new-item">' + DetUI.icon(a.icon || "medal") +
              '<div class="ach-copy">' +
                '<div class="ach-title">' + DetUI.esc(a.title) + "</div>" +
                '<div class="ach-desc">' + DetUI.esc(a.desc) + (a.bonus ? ' · <b>+' + a.bonus + " pts</b>" : "") + "</div>" +
              "</div></div>";
          }).join("") +
        "</div>"
      : "";

    return '<div class="result-wrap">' + hero +
      '<div class="result-cols">' + leftPanel + rightPanel + "</div>" +
      achNew + actions + "</div>";
  }

  function findEv(c, id) {
    if (!c) return null;
    for (var i = 0; i < c.evidence.length; i++) { if (c.evidence[i].id === id) return c.evidence[i]; }
    return null;
  }

  function shareResult(withSolution) {
    var result = lastResult();
    if (!result) return;
    var c = CasesData.getCase(result.caseId);
    var text = DetSharing.buildSummary(result, withSolution, withSolution ? DetSharing.buildSolutionText(c) : "");
    DetSharing.shareOrCopy(text).then(function (status) {
      if (status === "share") DetUI.toast("Compartilhado.");
      else if (status === "copy") DetUI.toast("Resultado copiado para a área de transferência.");
      else if (status === "canceled") { /* silencioso */ }
      else DetUI.toast("Não foi possível compartilhar.");
    });
  }

  function copyResult(withSolution) {
    var result = lastResult();
    if (!result) return;
    var c = CasesData.getCase(result.caseId);
    var text = DetSharing.buildSummary(result, withSolution, withSolution ? DetSharing.buildSolutionText(c) : "");
    DetSharing.copyText(text).then(function (ok) {
      DetUI.toast(ok ? "Resultado copiado." : "Não foi possível copiar.");
    });
  }

  function shareWhatsApp() {
    var result = lastResult();
    if (!result) return;
    var c = CasesData.getCase(result.caseId);
    var cb = document.getElementById("share-include-solution");
    var withSolution = cb ? cb.checked : false;
    var text = DetSharing.buildSummary(result, withSolution, withSolution ? DetSharing.buildSolutionText(c) : "");
    DetSharing.shareWhatsApp(text);
  }

  var displayedResult = null;
  function lastResult() { return displayedResult; }

  function setDisplayedResult(r) { displayedResult = r; }

  function replay(caseId) {
    startCase(caseId);
  }

  /* wrapper de renderResult para guardar o resultado exibido */
  function renderResultKeep(params) {
    if (params && params.result) displayedResult = params.result;
    renderResult(params);
  }

  function shorten(s, n) {
    s = String(s == null ? "" : s);
    return s.length > n ? s.slice(0, n - 1) + "…" : s;
  }

  DetNav.register("briefing", renderBriefing);
  DetNav.register("investigation", render);
  DetNav.register("conclusion", renderConclusion);
  DetNav.register("result", renderResultKeep);

  return {
    startCase: startCase,
    currentRun: currentRun,
    currentCaseId: currentCaseId,
    setTab: setTab,
    examine: examine,
    openSuspect: openSuspect,
    openTestimony: openTestimony,
    addHypothesis: addHypothesis,
    deleteHypothesis: deleteHypothesis,
    useHint: useHint,
    goConclusion: goConclusion,
    chooseAnswer: chooseAnswer,
    readSelectedEvidence: readSelectedEvidence,
    submitConclusion: submitConclusion,
    shareResult: shareResult,
    copyResult: copyResult,
    shareWhatsApp: shareWhatsApp,
    replay: replay,
    currentTab: function () { return tab; }
  };
})();