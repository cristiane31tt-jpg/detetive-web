/* ============================================================
   DETETIVE — RESOLVA O CASO
   sharing.js — Compartilhamento e cópia do resultado
   ------------------------------------------------------------
   Usa a Web Share API quando disponível; caso contrário,
   copia o texto para a área de transferência e informa o
   usuário. A solução só entra no texto se autorizada.
   Também monta mensagens para o WhatsApp (wa.me), usando uma
   URL pública configurável (PUBLIC_URL) quando o jogo estiver
   publicado; em execução local, o texto não inventa link.
   ============================================================ */
var DetSharing = (function () {
  "use strict";

  var PUBLIC_URL = "";

  function setPublicUrl(url) {
    PUBLIC_URL = url || "";
  }

  function publicUrl() {
    return PUBLIC_URL;
  }

  function buildWhatsAppUrl(text) {
    return "https://wa.me/?text=" + encodeURIComponent(String(text == null ? "" : text));
  }

  function shareWhatsApp(text) {
    var url = buildWhatsAppUrl(text);
    var w = window.open(url, "_blank", "noopener,noreferrer");
    if (!w && typeof location !== "undefined") location.href = url;
  }

  function buildProgressText(state) {
    state = state || DetStorage.getState();
    var solved = state.solvedCount || 0;
    var total = CasesData.CASES.length;
    var lines = [
      "🕵️ DETETIVE — Resolva o Caso",
      "📂 Resolvi " + solved + " de " + total + " casos",
      "🏆 " + DetStorage.getTotalScore(state) + " pontos · média " + DetStorage.average(state) + "/100"
    ];
    return lines.join("\n");
  }

  function buildInviteText() {
    var lines = [
      "🕵️ DETETIVE — Resolva o Caso",
      "Quer ser detetive? Cada pista pode mudar tudo."
    ];
    if (PUBLIC_URL) lines.push("▶ Jogue agora: " + PUBLIC_URL);
    else lines.push("O jogo roda localmente no navegador — sem instalação.");
    return lines.join("\n");
  }

  function buildSummary(resultData, includeSolution, solutionText) {
    var lines = [];
    lines.push("🕵️ DETETIVE — Resolva o Caso");
    lines.push("📁 Caso " + resultData.code + " — " + resultData.title);
    lines.push("🏆 Pontuação: " + resultData.score + "/100");
    lines.push(resultData.gradeLabel ? "Classificação: " + resultData.gradeLabel : "");
    lines.push(resultData.resultLabel ? resultData.resultLabel : "Conclusão: caso resolvido!");
    if (includeSolution && solutionText) {
      lines.push("");
      lines.push("🧩 Solução: " + solutionText);
    }
    lines.push("");
    lines.push("Você também resolve este? 🎯");
    return lines.filter(Boolean).join("\n");
  }

  function canShare() {
    return typeof navigator !== "undefined" && !!navigator.share;
  }

  /* Retorna uma Promise<string> com o status (share | copy | error). */
  function shareOrCopy(text) {
    if (canShare()) {
      return navigator.share({ text: text })
        .then(function () { return "share"; })
        .catch(function (err) {
          if (err && (err.name === "AbortError" || err.name === "NotAllowedError")) {
            return "canceled";
          }
          return copyText(text).then(function () { return "copy"; });
        });
    }
    return copyText(text).then(function () { return "copy"; });
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; })
        .catch(function () { return legacyCopy(text); });
    }
    return new Promise(function (resolve) {
      resolve(legacyCopy(text));
    });
  }

  function legacyCopy(text) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function buildSolutionText(caseObj) {
    if (!caseObj || !caseObj.solution) return "";
    return caseObj.solution.title
      + " — " + (caseObj.solution.motive || "");
  }

  return {
    buildSummary: buildSummary,
    buildSolutionText: buildSolutionText,
    shareOrCopy: shareOrCopy,
    canShare: canShare,
    copyText: copyText,
    setPublicUrl: setPublicUrl,
    publicUrl: publicUrl,
    buildWhatsAppUrl: buildWhatsAppUrl,
    shareWhatsApp: shareWhatsApp,
    buildProgressText: buildProgressText,
    buildInviteText: buildInviteText
  };
})();