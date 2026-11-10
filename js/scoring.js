/* ============================================================
   DETETIVE — RESOLVA O CASO
   scoring.js — Cálculo e apresentação da pontuação
   ------------------------------------------------------------
   Composição da nota (0 a 100):
   • Conclusão correta ........... +60
   • Evidência decisiva apontada . +10 (limitado a 3 = 30)
   • Hipótese registrada ......... +5
   • Precisão (sem evidência
     equivocada) ................ +5
   • Dica utilizada .............. −8 cada
   • Conclusão errada ............ −10 cada (só conta a 1ª,
     já que você investiga até acertar)
   ============================================================ */
var DetScoring = (function () {
  "use strict";

  var BASE = 60;
  var DECISIVE = 10;
  var MAX_DECISIVE = 3;
  var HYPOTHESIS_BONUS = 5;
  var PRECISION_BONUS = 5;
  var HINT_PENALTY = 8;
  var ATTEMPT_PENALTY = 10;

  function compute(o) {
    o = o || {};
    var decisiveIds = Array.isArray(o.decisiveIds) ? o.decisiveIds : [];
    var selected = Array.isArray(o.selectedEvidence) ? o.selectedEvidence : [];
    var hintsUsed = typeof o.hintsUsed === "number" ? Math.max(0, o.hintsUsed) : 0;
    var attempts = typeof o.attempts === "number" ? Math.max(0, o.attempts) : 0;
    var hasHypothesis = !!o.hasHypothesis;
    var correct = !!o.correct;

    var hitSet = [];
    for (var i = 0; i < selected.length; i++) {
      if (decisiveIds.indexOf(selected[i]) !== -1 && hitSet.indexOf(selected[i]) === -1) {
        hitSet.push(selected[i]);
      }
    }
    var decisiveHits = hitSet.length;
    var wrongEvidence = selected.filter(function (id) {
      return decisiveIds.indexOf(id) === -1;
    });

    var breakdown = [];
    if (correct) {
      breakdown.push({ label: "Conclusão correta", value: BASE, type: "pos" });
    } else {
      breakdown.push({ label: "Conclusão correta", value: 0, type: "neg" });
    }
    if (decisiveHits > 0) {
      breakdown.push({ label: "Evidências decisivas apontadas", value: Math.min(decisiveHits, MAX_DECISIVE) * DECISIVE, type: "pos", note: decisiveHits + " de " + decisiveIds.length });
    }
    if (hasHypothesis) {
      breakdown.push({ label: "Hipótese registrada", value: HYPOTHESIS_BONUS, type: "pos" });
    }
    if (correct && wrongEvidence.length === 0) {
      breakdown.push({ label: "Precisão (sem evidência equivocada)", value: PRECISION_BONUS, type: "pos" });
    }
    if (hintsUsed > 0) {
      breakdown.push({ label: "Dicas utilizadas", value: -(hintsUsed * HINT_PENALTY), type: "neg", note: (hintsUsed === 1 ? "1 dica" : hintsUsed + " dicas") });
    }
    if (attempts > 0) {
      breakdown.push({ label: "Conclusões erradas", value: -(attempts * ATTEMPT_PENALTY), type: "neg", note: attempts + (attempts === 1 ? " tentativa" : " tentativas") });
    }

    var total = correct ? BASE : 0;
    total += Math.min(decisiveHits, MAX_DECISIVE) * DECISIVE;
    if (hasHypothesis) total += HYPOTHESIS_BONUS;
    if (correct && wrongEvidence.length === 0) total += PRECISION_BONUS;
    total -= hintsUsed * HINT_PENALTY;
    total -= attempts * ATTEMPT_PENALTY;
    total = Math.max(0, Math.min(100, total));

    return {
      total: total,
      correct: correct,
      breakdown: breakdown,
      grade: gradeFor(total),
      details: {
        decisiveHits: decisiveHits,
        decisiveIds: decisiveIds,
        wrongEvidence: wrongEvidence,
        hits: hitSet,
        hintsUsed: hintsUsed,
        attempts: attempts,
        hasHypothesis: hasHypothesis
      }
    };
  }

  function gradeFor(total) {
    if (total >= 90) return { key: "excellent", label: "Excelente" };
    if (total >= 75) return { key: "great", label: "Ótimo" };
    if (total >= 60) return { key: "good", label: "Bom" };
    if (total >= 40) return { key: "regular", label: "Regular" };
    return { key: "low", label: "Suficiente" };
  }

  /* Estimativa: pontuação possível se as provas certas forem marcadas. */
  function maxPossible(o) {
    o = o || {};
    var hintsUsed = typeof o.hintsUsed === "number" ? o.hintsUsed : 0;
    var attempts = typeof o.attempts === "number" ? o.attempts : 0;
    var pts = BASE + MAX_DECISIVE * DECISIVE + PRECISION_BONUS;
    if (o.hasHypothesis) pts += HYPOTHESIS_BONUS;
    pts -= hintsUsed * HINT_PENALTY;
    pts -= attempts * ATTEMPT_PENALTY;
    return Math.max(0, Math.min(100, pts));
  }

  function resultingSentence(score) {
    if (score.total >= 90) return "Sensacional. A diligência foi impecável.";
    if (score.total >= 75) return "Investigação de alto nível. Poucos escapam de você.";
    if (score.total >= 60) return "Caso encerrado com sucesso. Há espaço para mais rigor.";
    if (score.total >= 40) return "Caso resolvido, mas as provas poderiam ser mais sólidas.";
    return "Conclusão alcançada com dificuldade. Reveja seu método de investigação.";
  }

  return {
    compute: compute,
    grade: gradeFor,
    maxPossible: maxPossible,
    sentence: resultingSentence
  };
})();