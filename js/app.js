/* ============================================================
   DETETIVE — RESOLVA O CASO
   app.js — Inicialização, telas estáticas e eventos globais
   ============================================================ */
var DetApp = (function () {
  "use strict";

  /* ---------- Utilidades ---------- */

  function stars(level) {
    var s = "";
    for (var i = 1; i <= 4; i++) s += i <= level ? "★" : "☆";
    return s;
  }

  function fmtDate(ts) {
    try {
      var d = new Date(ts);
      return d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    } catch (e) { return ""; }
  }

  function fmtDuration(sec) {
    sec = Math.max(0, sec | 0);
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + "m " + (s < 10 ? "0" : "") + s + "s";
  }

  function truncate(s, n) {
    s = String(s == null ? "" : s);
    return s.length > n ? s.slice(0, n - 1) + "…" : s;
  }

  function lockedStageMessage(st) {
    if (!st || !(st.requiredSolved > 0)) return "";
    var stages = CasesData.STAGES || [];
    var prior = [];
    for (var i = 0; i < stages.length; i++) {
      if (stages[i].id === st.id) break;
      prior.push(stages[i].name);
    }
    var where = prior.length ? " de " + prior.join(" e ") : "";
    return "Resolva os " + st.requiredSolved + " casos" + where + " para liberar.";
  }

  function refreshChrome() {
    var state = DetStorage.getState();
    var level = DetStorage.computeLevel(state);
    var lvl = CasesData.getLevelInfo(level);
var status = document.getElementById("appbar-status");
    var score = document.getElementById("appbar-score");
    if (status) status.innerHTML = "Nível " + level + " · " + DetUI.esc(lvl.name);
    if (score) score.innerHTML = "★ " + DetStorage.getTotalScore(state) + " pts";
  }

  /* ---------- Tela inicial ---------- */

  function renderHome() {
    var state = DetStorage.getState();
    var level = DetStorage.computeLevel(state);
    var lvl = CasesData.getLevelInfo(level);
    var prog = DetStorage.levelProgress(state);

    var cont = document.getElementById("home-continue");
    var activeCase = DetInvest.currentCaseId();
    if (cont) {
      if (activeCase) {
        var c = CasesData.getCase(activeCase);
        cont.innerHTML =
          '<div class="continue-box">' +
            '<span class="cb-icon">' + DetUI.icon("clock") + "</span>" +
            '<div><div class="cb-title">Investigação em andamento</div>' +
            '<div class="cb-sub">' + DetUI.esc(c.code) + " · " + DetUI.esc(c.title) + "</div></div>" +
            '<button type="button" class="btn btn-primary btn-sm" data-action="continue-case" data-case="' + DetUI.esc(c.id) + '">Continuar</button>' +
          "</div>";
      } else {
        cont.innerHTML = "";
      }
    }

    var total = CasesData.CASES.length;
    var solved = state.solvedCount;
    var panel = document.getElementById("home-panel");
    if (panel) {
      panel.innerHTML =
        '<div class="rank-card">' +
          '<div class="rank-label">Patente atual</div>' +
          '<div class="rank-name">' + DetUI.esc(lvl.name) + "</div>" +
          '<div class="rank-stars">' + stars(level) + "</div>" +
          '<div class="rank-lvl">Nível ' + level + " de 4</div>" +
        "</div>" +
'<div class="stat-row">' +
          statBox(solved, "Resolvidos") +
          statBox(DetStorage.average(state), "Média") +
          statBox(DetStorage.getTotalScore(state), "Pontos") +
        "</div>" +
        '<div class="progress-hint">' +
          '<div class="progress-bar"><i style="width:' + progressPercent(state) + '%"></i></div>' +
          DetUI.esc(prog.text) +
          '<div style="margin-top:6px">Casos resolvidos: <b>' + solved + "</b> de " + total + ".</div>" +
        "</div>";
    }
    refreshChrome();
  }

  function statBox(value, label) {
    return '<div class="stat-box"><div class="stat-value">' + value + '</div><div class="stat-label">' + DetUI.esc(label) + "</div></div>";
  }

  function progressPercent(state) {
    var level = DetStorage.computeLevel(state);
    if (level >= 4) return 100;
    var target = { 2: 2, 3: 4, 4: 6 }[level + 1];
    return Math.min(100, Math.floor((state.solvedCount / target) * 100));
  }

  /* ---------- Categorias ---------- */

  function renderCategories() {
    var host = document.getElementById("categories-grid");
    if (!host) return;
    host.innerHTML = CasesData.CATEGORIES.map(function (cat) {
      var cases = CasesData.casesByCategory(cat.id);
      var solvedCount = cases.filter(function (c) { return DetStorage.isSolved(c.id); }).length;
      return '<button type="button" class="cat-card" data-action="category" data-cat="' + cat.id + '">' +
        '<span class="cat-icon">' + DetUI.icon(cat.icon || "search") + "</span>" +
        "<h3>" + DetUI.esc(cat.label) + "</h3>" +
        "<p>" + DetUI.esc(cat.desc) + "</p>" +
        '<div class="cat-meta"><span><b>' + cases.length + "</b> casos</span><span><b>" + solvedCount + "</b> resolvidos</span></div>" +
      "</button>";
    }).join("");
    refreshChrome();
  }

  /* ---------- Lista de casos ---------- */

  function renderCases(params) {
    params = params || {};
    var state = DetStorage.getState();
    var list = params.category ? CasesData.casesByCategory(params.category) : CasesData.CASES.slice();
    var cat = params.category ? CasesData.getCategory(params.category) : null;

var title = document.getElementById("cases-title");
    var sub = document.getElementById("cases-subtitle");
    if (title) title.textContent = cat ? "Casos de " + cat.label : "Casos disponíveis";
    if (sub) {
      sub.textContent = cat
        ? (list.length + (list.length === 1 ? " caso" : " casos") + " nesta categoria.")
        : "Todos os casos do arquivo, liberados por etapas. Resolva todos os casos de uma etapa para abrir a seguinte.";
    }

    var host = document.getElementById("cases-list");
    if (!host) return;
    if (!list.length) {
      host.innerHTML = '<div class="empty-state">' + DetUI.icon("search") + "<p>Nenhum caso nesta categoria.</p></div>";
      refreshChrome();
      return;
    }
    var stages = CasesData.STAGES.map(function (st) {
      var done = DetStorage.countSolvedInStage(st.id, state);
      var totalSt = st.caseIds ? st.caseIds.length : 0;
      var complete = done >= totalSt;
      return '<div class="stage-chip' + (complete ? " complete" : "") + '">' +
        '<span class="stage-chip-name">' + DetUI.esc(st.name) + "</span>" +
        '<span class="stage-chip-prog">' + done + "/" + totalSt + (complete ? " ✓" : "") + "</span>" +
      "</div>";
    }).join("");
    host.innerHTML = '<div class="stage-bar">' + stages + "</div>" + list.map(function (c) {
      var unlocked = DetStorage.isUnlocked(c, state);
      var solved = DetStorage.isSolved(c.id);
      var cat2 = CasesData.getCategory(c.category);
      var best = DetStorage.bestScore(c.id);
      var tags = '<span class="tag tag-level">Nível ' + c.difficulty + "</span>";
      if (solved) tags += '<span class="tag tag-done">Resolvido</span>';
      else if (!unlocked) tags += '<span class="tag tag-locked">Bloqueado</span>';
      var foot;
      if (solved) {
        foot = '<span class="cc-best">Melhor nota: ' + best + "/100</span>" +
          '<button type="button" class="btn btn-sm" data-action="open-case" data-case="' + c.id + '">Jogar de novo</button>';
      } else if (unlocked) {
        foot = '<span class="cc-best">Ainda não resolvido</span>' +
          '<button type="button" class="btn btn-sm btn-primary" data-action="open-case" data-case="' + c.id + '">Investigar</button>';
} else {
        var lockedMsg = (function () {
          var st = CasesData.getStageOf(c.id);
          var msg = lockedStageMessage(st);
          if (msg) return msg;
          return "Alcance o nível " + c.difficulty;
        })();
        foot = '<span class="cc-best">' + DetUI.esc(lockedMsg) + "</span>" +
          '<button type="button" class="btn btn-sm" data-action="locked">Bloqueado</button>';
      }
      return '<div class="case-card">' +
        '<div class="case-card-top">' +
          '<span class="cc-art">' + DetUI.icon(cat2.icon || "search") + "</span>" +
          '<div><div class="cc-code">' + DetUI.esc(c.code) + '</div><div class="cc-cat">' + DetUI.esc(cat2.label) + "</div></div>" +
        "</div>" +
        '<div class="case-card-body">' +
          "<h3>" + DetUI.esc(c.title) + "</h3>" +
          '<p class="cc-desc">' + DetUI.esc(truncate(c.brief, 150)) + "</p>" +
          '<div class="case-tags">' + tags + "</div>" +
        "</div>" +
        '<div class="case-card-foot">' + foot + "</div>" +
      "</div>";
    }).join("");
    refreshChrome();
  }

  /* ---------- Histórico ---------- */

  function renderHistory() {
    var host = document.getElementById("history-content");
    if (!host) return;
    var results = DetStorage.getResults();
    if (!results.length) {
      host.innerHTML = '<div class="empty-state">' + DetUI.icon("book") + "<p>Nenhuma investigação registrada ainda.<br>Resolva um caso para começar seu histórico.</p></div>";
      refreshChrome();
      return;
    }
    host.innerHTML = '<div class="history-list">' + results.map(function (r) {
      return '<div class="hist-card">' +
        '<div class="hist-score">' + r.score + "<small>/100</small></div>" +
        '<div class="hist-body">' +
          '<div class="hist-cat">' + DetUI.esc(r.categoryLabel || "") + "</div>" +
          '<div class="hist-title">' + DetUI.esc(r.title) + "</div>" +
          '<div class="hist-meta">' + DetUI.esc(r.code) + " · " + DetUI.esc(r.gradeLabel || "") + " · " + fmtDate(r.date) + " · " + fmtDuration(r.timeSec) + "</div>" +
        "</div>" +
        '<div style="text-align:right">' +
          '<div class="hist-status resolved">Resolvido</div>' +
          '<button type="button" class="btn btn-sm" style="margin-top:6px" data-action="view-result" data-run="' + DetUI.esc(r.runId) + '">Detalhes</button>' +
        "</div>" +
      "</div>";
    }).join("") + "</div>" +
      '<div class="concl-foot"><button type="button" class="btn btn-danger" data-action="clear-history">' + DetUI.icon("trash") + ' Limpar histórico</button></div>';
    refreshChrome();
  }

  /* ---------- Desempenho ---------- */

  function renderPerformance() {
    var state = DetStorage.getState();
    var level = DetStorage.computeLevel(state);
    var lvl = CasesData.getLevelInfo(level);
    var avg = DetStorage.average(state);
    var best = 0;
    CasesData.CASES.forEach(function (c) {
      var b = DetStorage.bestScore(c.id);
      if (b > best) best = b;
    });
    var host = document.getElementById("performance-content");
    if (!host) return;

    var table = CasesData.CASES.map(function (c) {
      var solved = DetStorage.isSolved(c.id);
      var b = DetStorage.bestScore(c.id);
      var cat = CasesData.getCategory(c.category);
      return "<tr><td><b>" + DetUI.esc(c.code) + "</b></td><td>" + DetUI.esc(c.title) + "</td><td>" + DetUI.esc(cat.short || cat.label) +
        "</td><td>Nível " + c.difficulty + "</td><td>" + (solved ? '<b style="color:var(--green)">' + b + "/100</b>" : '<span style="color:var(--text-faint)">—</span>') + "</td></tr>";
    }).join("");

    host.innerHTML =
      '<div class="perf-grid">' +
        '<div>' +
          '<div class="perf-card">' +
            "<h3>Patente</h3>" +
            '<div class="perf-level">' +
              '<div class="rank-medal">' + level + "</div>" +
              '<div><div class="pl-name">' + DetUI.esc(lvl.name) + '</div><div class="pl-desc">' + DetUI.esc(lvl.desc) + "</div>" +
              '<div class="rank-stars">' + stars(level) + "</div></div>" +
            "</div>" +
          "</div>" +
          '<div class="perf-card">' +
            "<h3>Estatísticas</h3>" +
            statLine("Casos resolvidos", state.solvedCount + " de " + CasesData.CASES.length) +
            statLine("Média por caso", avg + "/100") +
            statLine("Pontos acumulados", DetStorage.getTotalScore(state) + " pts") +
            statLine("Melhor nota", best + "/100") +
            statLine("Investigações enviadas", String(state.investigations)) +
          "</div>" +
'<div class="perf-card"><h3>Progressão</h3>' +
            '<p class="solution-text">' + DetUI.esc(DetStorage.levelProgress(state).text) + "</p>" +
            '<div class="progress-bar"><i style="width:' + progressPercent(state) + '%"></i></div>' +
          "</div>" +
          '<div class="perf-card"><h3>Compartilhar</h3>' +
            '<div class="btn-row">' +
              '<button type="button" class="btn" data-action="share-progress">' + DetUI.icon("share") + " Compartilhar progresso</button>" +
              '<button type="button" class="btn" data-action="share-invite">' + DetUI.icon("users") + " Convidar para jogar</button>" +
            "</div>" +
          "</div>" +
        "</div>" +
        '<div class="perf-card"><h3>Seus casos</h3>' +
          '<table class="best-table"><thead><tr><th>Cód.</th><th>Título</th><th>Tipo</th><th>Nível</th><th>Melhor</th></tr></thead>' +
          "<tbody>" + table + "</tbody></table>" +
        "</div>" +
      "</div>";
    refreshChrome();
  }

function statLine(label, value) {
    return '<div class="stat-line"><span class="dim">' + DetUI.esc(label) + '</span><b>' + value + "</b></div>";
  }

  /* ---------- Conquistas ---------- */

  function renderAchievements() {
    var host = document.getElementById("achievements-content");
    if (!host) return;
    var state = DetStorage.getState();
    var claims = state.achievements || {};
    var sum = DetAchievements.summary(state);
    host.innerHTML =
      '<div class="ach-summary">' +
        '<div class="ach-stat"><b>' + sum.earned + '</b><span>conquistas desbloqueadas</span></div>' +
        '<div class="ach-stat"><b>' + sum.total + '</b><span>conquistas no total</span></div>' +
        '<div class="ach-stat"><b>+' + sum.bonus + '</b><span>pontos de bônus</span></div>' +
      "</div>" +
      '<div class="ach-grid">' + DetAchievements.list().map(function (a) {
        var done = !!claims[a.id];
        return '<div class="ach-card' + (done ? " earned" : " locked") + (a.card ? " card" : "") + '">' +
          '<span class="ach-icon">' + DetUI.icon(a.icon || "medal") + "</span>" +
          '<div class="ach-copy">' +
            '<div class="ach-title">' + DetUI.esc(a.title) + "</div>" +
            '<div class="ach-desc">' + DetUI.esc(a.desc) + "</div>" +
          "</div>" +
          (a.bonus ? '<div class="ach-bonus">+' + a.bonus + " pts</div>" : "") +
          '<div class="ach-state">' + (done ? "Conquistada" : "Bloqueada") + "</div>" +
        "</div>";
      }).join("") + "</div>";
    refreshChrome();
  }

  /* ---------- Instruções ---------- */

  var INSTRUCTIONS = [
    {
      icon: "search",
      title: "Como investigar",
      description: "Percorra o painel e reúna informação antes de concluir.",
      steps: [
        "Observe todas as evidências e examine cada item para liberar a descrição completa.",
        "Leia as fichas de todos os suspeitos e compare o que cada um declarou.",
        "Monte a linha do tempo e confira as contradições entre os depoimentos."
      ],
      quote: "Examinar as evidências decisivas é o que mais soma pontos na conclusão."
    },
    {
      icon: "edit",
      title: "Hipóteses",
      description: "Pensar no papel ajuda a organizar a investigação.",
      steps: [
        "Registre hipóteses na aba apropriada; elas ficam salvas na investigação.",
        "Cada investigação com pelo menos uma hipótese registrada ganha +5 pontos.",
        "Hipóteses não precisam estar certas: o valor está no registro do raciocínio."
      ],
      quote: "Anote suas deduções conforme lê depoimentos e examina as provas."
    },
    {
      icon: "flag",
      title: "A conclusão",
      description: "Na hora de concluir, dois passos importam.",
      steps: [
        "Escolha o responsável que sua investigação sustenta.",
        "Marque até 3 provas decisivas que sustentam a conclusão.",
        "Uma conclusão errada custa 10 pontos e devolve você à investigação."
      ],
      quote: "Os 3 itens decisivos de cada caso são a chave para a pontuação máxima."
    },
    {
      icon: "chart",
      title: "Como a nota é calculada",
      description: "A nota varia de 0 a 100.",
      steps: [
        "Conclusão correta: +60 pontos.",
        "Cada prova decisiva apontada: +10 (até 3 valem pontos).",
        "Hipótese registrada: +5. Precisão total (sem prova equivocada): +5.",
        "Dica usada: −8 pontos. Conclusão errada: −10 pontos."
      ],
      quote: "O teto é 100 quando tudo é feito com precisão."
    },
    {
      icon: "medal",
      title: "Patentes e níveis",
      description: "Resolva casos para elevar sua patente.",
      steps: [
        "Nível 1 — Detetive iniciante: casos simples, pistas diretas.",
        "Nível 2 — Investigador: 2 casos resolvidos liberam novas investigações.",
        "Nível 3 — Detetive experiente: 4 resolvidos com média ≥ 60.",
        "Nível 4 — Investigador especial: 6 resolvidos com média ≥ 65."
      ],
      quote: "Quanto maior a patente, mais complexos são os casos disponíveis."
    }
  ];

  function renderInstructions() {
    var host = document.getElementById("instructions-content");
    if (!host) return;
    host.innerHTML = '<div class="inst-wrap"><div class="inst-grid">' + INSTRUCTIONS.map(function (sect) {
      var steps = sect.steps.map(function (t, i) {
        return '<div class="inst-step"><span class="inst-num">' + (i + 1) + '</span><div>' + DetUI.esc(t) + "</div></div>";
      }).join("");
      return '<div class="inst-card">' +
        '<div class="inst-head">' +
          '<span class="inst-icon">' + DetUI.icon(sect.icon || "search") + "</span>" +
          "<h3>" + DetUI.esc(sect.title) + "</h3>" +
        "</div>" +
        "<p>" + DetUI.esc(sect.description || "") + "</p>" +
        '<div class="inst-steps">' + steps + "</div>" +
        (sect.quote ? '<div class="inst-quote">' + DetUI.esc(sect.quote) + "</div>" : "") +
      "</div>";
    }).join("") + "</div></div>";
    refreshChrome();
  }

  /* ---------- Configurações ---------- */

  function renderSettings() {
    var host = document.getElementById("settings-content");
    if (!host) return;
    var prefs = DetStorage.getPrefs();
    host.innerHTML =
      '<div class="settings-card">' +
        "<h3>Preferências</h3>" +
        toggleRow(
          "confirmConclude",
          "Pedir confirmação ao concluir",
          "Exibir uma pergunta de confirmação antes de enviar a conclusão.",
          prefs.confirmConclude !== false
        ) +
        toggleRow(
          "autoScrollTop",
          "Rolar ao topo ao trocar de tela",
          "Quando ativado, cada nova tela abre no início do conteúdo.",
          prefs.autoScrollTop !== false
        ) +
        toggleRow(
          "hideSpoilersInShare",
          "Ocultar a solução ao compartilhar",
          "O texto compartilhado ou copiado não revela o responsável pelo caso.",
          prefs.hideSpoilersInShare !== false
        ) +
      "</div>" +
      '<div class="settings-card">' +
        "<h3>Dados</h3>" +
        '<p class="settings-desc">Seu progresso fica salvo localmente neste navegador. Você pode exportar um arquivo de backup e importá-lo em outro dispositivo.</p>' +
        '<div class="btn-row">' +
          '<button type="button" class="btn" data-action="export-data">' + DetUI.icon("box") + " Exportar dados</button>" +
          '<button type="button" class="btn" data-action="import-data">' + DetUI.icon("key") + " Importar dados</button>" +
        "</div>" +
        '<div class="btn-row danger-row">' +
          '<button type="button" class="btn btn-danger" data-action="reset-progress">' + DetUI.icon("refresh") + " Zerar progresso</button>" +
          '<button type="button" class="btn btn-danger" data-action="reset-all">' + DetUI.icon("trash") + " Apagar tudo</button>" +
        "</div>" +
      "</div>" +
      '<div class="details-foot"><span class="dim">Versão <b>1.0.0</b> · Projeto Detetive</span></div>';

    var cbs = host.querySelectorAll("input[type=checkbox][data-pref]");
    for (var i = 0; i < cbs.length; i++) {
      cbs[i].addEventListener("change", function () {
        DetStorage.setPref(this.dataset.pref, this.checked);
      });
    }
    refreshChrome();
  }

  function toggleRow(name, title, desc, checked) {
    return '<div class="toggle-row">' +
      '<div class="toggle-copy"><div class="toggle-title">' + DetUI.esc(title) + '</div><div class="toggle-desc">' + DetUI.esc(desc) + "</div></div>" +
      '<label class="switch"><input type="checkbox" data-pref="' + name + '"' + (checked ? " checked" : "") + '><span class="slider"></span></label>' +
    "</div>";
  }

  /* ---------- Ações ---------- */

  function handleAction(el) {
    var action = el.dataset.action;
    switch (action) {
      case "start":
        DetNav.show("categories");
        break;
      case "cases":
        DetNav.show("cases");
        break;
      case "category":
        DetNav.show("cases", { category: el.dataset.cat });
        break;
      case "open-case":
        openCase(el.dataset.case);
        break;
      case "continue-case":
        DetInvest.startCase(el.dataset.case);
        DetNav.show("briefing");
        break;
      case "locked":
        DetUI.toast("Este caso ainda está bloqueado.");
        break;
case "settings": DetNav.show("settings"); break;
      case "instructions": DetNav.show("instructions"); break;
      case "history": DetNav.show("history"); break;
      case "performance": DetNav.show("performance"); break;
      case "achievements": DetNav.show("achievements"); break;
      case "share-progress": shareProgress(); break;
      case "share-invite": shareInvite(); break;
      case "share-whatsapp": DetInvest.shareWhatsApp(); break;
      case "home": DetNav.home(); break;
      case "begin":
        DetNav.show("investigation");
        break;
      case "hint": DetInvest.useHint(); break;
      case "conclude": DetInvest.goConclusion(); break;
      case "examine": DetInvest.examine(el.dataset.ev); break;
      case "open-suspect": DetInvest.openSuspect(el.dataset.sus); break;
      case "open-testimony": DetInvest.openTestimony(el.dataset.test); break;
      case "hyp-add": DetInvest.addHypothesis(); break;
      case "hyp-del": DetInvest.deleteHypothesis(parseInt(el.dataset.idx, 10)); break;
      case "choose-answer": DetInvest.chooseAnswer(el.dataset.ans); break;
      case "back-investigation":
        DetUI.closeModal();
        DetNav.back();
        break;
      case "submit": DetInvest.submitConclusion(); break;
      case "modal-close": DetUI.closeModal(); break;
      case "share": shareWithToggle(); break;
      case "copy": copyWithToggle(); break;
      case "replay":
        DetInvest.replay(el.dataset.case);
        DetNav.show("briefing");
        break;
      case "export-data": exportData(); break;
      case "import-data": importData(); break;
      case "reset-progress": confirmResetProgress(); break;
      case "reset-all": confirmResetAll(); break;
      case "clear-history": confirmClearHistory(); break;
      case "view-result": viewResult(el.dataset.run); break;
      default: break;
    }
  }

function openCase(id) {
    var c = CasesData.getCase(id);
    if (!c) return;
    if (!DetStorage.isUnlocked(c)) {
      var st = CasesData.getStageOf(c.id);
      var msg = lockedStageMessage(st) ||
        "Este caso está bloqueado. Avance de nível para liberá-lo.";
      DetUI.toast(msg);
      return;
    }
    DetInvest.startCase(id);
    DetNav.show("briefing");
  }

  function shareProgress() {
    DetSharing.shareWhatsApp(DetSharing.buildProgressText());
    DetUI.toast("Abrindo o WhatsApp…");
  }

  function shareInvite() {
    DetSharing.shareWhatsApp(DetSharing.buildInviteText());
    DetUI.toast("Abrindo o WhatsApp…");
  }

  function shareWithToggle() {
    var cb = document.getElementById("share-include-solution");
    DetInvest.shareResult(cb ? cb.checked : false);
  }

  function copyWithToggle() {
    var cb = document.getElementById("share-include-solution");
    DetInvest.copyResult(cb ? cb.checked : false);
  }

  function viewResult(runId) {
    var results = DetStorage.getResults();
    for (var i = 0; i < results.length; i++) {
      if (results[i].runId === runId) {
        DetNav.show("result", { result: results[i] });
        return;
      }
    }
    DetUI.toast("Registro não encontrado.");
  }

  /* ---------- Exportar / importar ---------- */

  function exportData() {
    var payload = {
      format: "detetive-save",
      version: 1,
      exportedAt: new Date().toISOString(),
      state: DetStorage.getState(),
      results: DetStorage.getResults()
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "detetive-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    DetUI.toast("Backup exportado.");
  }

  function importData(done) {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json,.json";
    input.addEventListener("change", function () {
      var file = input.files && input.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var payload = JSON.parse(String(reader.result || ""));
          if (!payload || payload.format !== "detetive-save" || !payload.state || typeof payload.state.cases !== "object") {
            DetUI.toast("Arquivo inválido.");
            return;
          }
          DetStorage.clearCurrent();
          DetStorage.resetAll();
          var state = DetStorage.getState();
          var imported = payload.state.cases;
          for (var k in imported) {
            if (Object.prototype.hasOwnProperty.call(imported, k)) state.cases[k] = imported[k];
          }
state.solvedCount = typeof payload.state.solvedCount === "number" ? payload.state.solvedCount : 0;
          state.totalScore = typeof payload.state.totalScore === "number" ? payload.state.totalScore : 0;
          state.investigations = typeof payload.state.investigations === "number" ? payload.state.investigations : 0;
          state.bonus = typeof payload.state.bonus === "number" ? payload.state.bonus : 0;
          state.achievements = payload.state.achievements && typeof payload.state.achievements === "object" ? payload.state.achievements : {};
          if (payload.state.prefs) state.prefs = payload.state.prefs;
          DetStorage.setState(state);
          DetStorage.seed();
          DetAchievements.sync();
          if (Array.isArray(payload.results)) {
            for (var r = payload.results.length - 1; r >= 0; r--) {
              if (payload.results[r] && typeof payload.results[r] === "object") DetStorage.saveResult(payload.results[r]);
            }
          }
          if (typeof done === "function") done();
          refreshChrome();
          DetUI.toast("Dados importados.");
        } catch (e) {
          DetUI.toast("Não foi possível importar o arquivo.");
        }
      };
      reader.onerror = function () { DetUI.toast("Não foi possível ler o arquivo."); };
      reader.readAsText(file);
    });
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  }

  /* ---------- Confirmações ---------- */

  function confirmClearHistory() {
    DetUI.confirmBox({
      title: "Limpar histórico",
      message: "Os registros de investigações concluídas serão removidos. As notas de melhor desempenho e o progresso geral também são recalculados.",
      okLabel: "Limpar histórico",
      danger: true,
      onOk: function () {
        DetStorage.clearResults();
        refreshChrome();
        DetNav.show("history");
      }
    });
  }

  function confirmResetProgress() {
    DetUI.confirmBox({
      title: "Zerar progresso",
      message: "As notas, o histórico e o nível serão zerados. Os casos voltarão ao estado original.",
      okLabel: "Zerar progresso",
      danger: true,
      onOk: function () {
        DetStorage.resetProgress();
        refreshChrome();
        DetNav.show("settings");
        DetUI.toast("Progresso zerado.");
      }
    });
  }

  function confirmResetAll() {
    DetUI.confirmBox({
      title: "Apagar tudo",
      message: "Todas as preferências, o histórico e o progresso serão removidos. Esta ação não pode ser desfeita.",
      okLabel: "Apagar tudo",
      danger: true,
      onOk: function () {
        DetStorage.resetAll();
        refreshChrome();
        DetNav.show("settings");
        DetUI.toast("Todos os dados foram apagados.");
      }
    });
  }

  /* ---------- Eventos globais ---------- */

  function bindEvents() {
    document.addEventListener("click", function (e) {
      var t = e.target;
      if (!t || !t.closest) return;
      var el = t.closest("[data-action]");
      if (el) handleAction(el);
      var tabEl = t.closest("[data-tab]");
      if (tabEl) DetInvest.setTab(tabEl.getAttribute("data-tab"));
    });
    var bHome = document.getElementById("btn-home");
    if (bHome) bHome.addEventListener("click", function () { DetNav.home(); });
    var bBack = document.getElementById("btn-back");
    if (bBack) bBack.addEventListener("click", function () { DetNav.back(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (document.querySelector(".modal-wrap")) { DetUI.closeModal(); return; }
        var btn = document.getElementById("btn-back");
        if (btn && btn.style.visibility !== "hidden") btn.click();
      }
    });
  }

  /* ---------- Inicialização ---------- */

  function setup() {
    bindEvents();
DetNav.register("home", renderHome);
    DetNav.register("categories", renderCategories);
    DetNav.register("cases", renderCases);
    DetNav.register("history", renderHistory);
    DetNav.register("performance", renderPerformance);
    DetNav.register("achievements", renderAchievements);
    DetNav.register("instructions", renderInstructions);
    DetNav.register("settings", renderSettings);
    refreshChrome();
    DetNav.show("home");
    refreshChrome();
  }

  var booted = false;
  function boot() {
    if (booted) return;
    booted = true;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", setup);
    } else {
      setup();
    }
  }

return {
    boot: boot,
    refreshChrome: refreshChrome,
    renderHome: renderHome,
    renderCategories: renderCategories,
    renderCases: renderCases,
    renderHistory: renderHistory,
    renderPerformance: renderPerformance,
    renderAchievements: renderAchievements,
    renderInstructions: renderInstructions,
    renderSettings: renderSettings
  };
})();

if (typeof window !== "undefined") {
  DetApp.boot();
}

