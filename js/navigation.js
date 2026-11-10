/* ============================================================
   DETETIVE — RESOLVA O CASO
   navigation.js — Navegação de telas, modais e ícones
   ------------------------------------------------------------
   DetNav troca as seções de tela, mantém um histórico simples
   de navegação (botão voltar) e reexecuta o renderizador de
   cada tela. DetUI reúne primitivas de interface: ícones SVG,
   modal, toast e utilitários de texto.
   ============================================================ */

var DetUI = (function () {
  "use strict";

  var ICONS = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/><path d="M10 19.5v-5h4v5"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    fingerprint: '<path d="M12 4a8 8 0 0 0-8 8"/><path d="M20 12a8 8 0 0 0-3-6.2"/><path d="M8.5 20a8 8 0 0 1-1-8.5A4.5 4.5 0 1 1 16.5 11c0 2-.3 3.4-.3 4.8"/><path d="M12 12v4"/><path d="M12 8.5a2 2 0 0 1 2 2"/>',
    play: '<path d="M7 5.5 18.5 12 7 18.5z"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z"/>',
    lock: '<rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    medal: '<circle cx="12" cy="9" r="5"/><path d="M8.3 13.4 7 21l5-2.6 5 2.6-1.3-7.6"/><path d="M9 7.5h6"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"/><path d="M15.6 5.2a3.2 3.2 0 0 1 0 5.6"/><path d="M17.5 14.4a5.5 5.5 0 0 1 3 4.8"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.5-4.5"/>',
    lightbulb: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 1 4 10.5c-.7.7-1 1.5-1 2.5H9c0-1-.3-1.8-1-2.5A6 6 0 0 1 12 3z"/>',
    flag: '<path d="M6 21V4"/><path d="M6 4.5h11l-2 4 2 4H6"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    share: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M6 15H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1"/>',
    refresh: '<path d="M20 12a8 8 0 1 0-2.5 5.8"/><path d="M20 4v5h-5"/>',
    trash: '<path d="M4 7h16"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M6 7l1 13h10l1-13"/><path d="M10 11v5M14 11v5"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M3.5 19a2.5 2.5 0 0 1 2.5-2.5H17"/><path d="M8 7h7M8 10h5"/>',
    chart: '<path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="4" width="3" height="13"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.6v.2a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.6h.1a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.6 1h.2a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1z"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    pin: '<path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    board: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    list: '<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
    edit: '<path d="M4 20h4L20 8l-4-4L4 16z"/><path d="M14 6l4 4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.8" r="1"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
    shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    alarm: '<circle cx="12" cy="13" r="7"/><path d="M12 10v3.5l2.5 1.5"/><path d="M5 4.5 7.5 7M19 4.5 16.5 7"/>',
    bank: '<path d="M4 10 12 5l8 5"/><path d="M5.5 10v8M10 10v8M14 10v8M18.5 10v8"/><path d="M3.5 21h17"/>',
    boat: '<path d="M4 15l3 5h10l3-5z"/><path d="M12 4v11"/><path d="M6 9l6-2.5 6 2.5"/>',
    box: '<path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="M4 7l8 4 8-4"/><path d="M12 11v10"/>',
    bus: '<rect x="5" y="4" width="14" height="13" rx="2"/><path d="M5 11h14"/><path d="M8 20v-3M16 20v-3"/><circle cx="8.5" cy="14" r="1"/><circle cx="15.5" cy="14" r="1"/>',
    calendar: '<rect x="4" y="5.5" width="16" height="15" rx="2"/><path d="M4 10h16"/><path d="M8 3.5v4M16 3.5v4"/>',
    camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7l1.5-3h5L16 7"/><circle cx="12" cy="13.5" r="3.5"/>',
    chat: '<path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4V6a1 1 0 0 1 1-1z"/>',
    disappearance: '<circle cx="10" cy="9" r="3.5"/><path d="M3.5 20a6.5 6.5 0 0 1 11.5-4"/><path d="M16.5 8.5a3 3 0 1 1 3 3c0 1.5-1.5 1.8-1.5 3.5"/><circle cx="18" cy="18.5" r="1"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 15.5h6"/>',
    electric: '<path d="M13 3 5 13h6l-1 8 8-10h-6z"/>',
    foot: '<path d="M9 4c2 0 2.5 2 2.5 4s-1 4-1 6.5c0 1.5-.5 2-1.5 2S7.5 16 7.5 14 6 10 6.5 7 7 4 9 4z"/><path d="M8 19h3M11 21h2"/>',
    fraud: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><circle cx="11" cy="14" r="2.5"/>',
    key: '<circle cx="8" cy="8" r="4"/><path d="M11 11 20 20"/><path d="M16 16l-2 2M18 18l-2 2"/>',
    lab: '<path d="M9 3h6"/><path d="M10 3v6l-4 7a2 2 0 0 0 1.8 3h8.4a2 2 0 0 0 1.8-3l-4-7V3"/><path d="M7.5 15h9"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/>',
    murder: '<circle cx="12" cy="12" r="7"/><path d="M12 5v14M5 12h14"/>',
    phone: '<path d="M5 4h4l1.5 4-2.5 2a12 12 0 0 0 6 6l2-2.5 4 1.5v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
    printer: '<path d="M7 8V3h10v5"/><rect x="4" y="8" width="16" height="8" rx="1.5"/><path d="M7 13h10v8H7z"/>',
    receipt: '<path d="M6 3h12v18l-2-1.5-2 1.5-2-1.5L10 21l-2-1.5L6 21z"/><path d="M9 8h6M9 12h6"/>',
    robbery: '<path d="M5 12a7 7 0 0 1 14 0"/><path d="M4 12h16l-1.5 7h-13z"/><path d="M9 15.5h.01M15 15.5h.01"/>',
    screen: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M9 21h6M12 17v4"/>',
    tool: '<path d="M9 4l11 11-2 2L16 16 7 5.5a3.8 3.8 0 1 1 7-2L15 11M5 19l5-5"/>',
    track: '<circle cx="7" cy="7" r="2"/><circle cx="17" cy="17" r="2"/><path d="M9 7h5a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6"/>'
  };

  function icon(name, cls) {
    var inner = ICONS[name] || ICONS.info;
    return '<svg class="icon' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + "</svg>";
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function toast(msg, ms) {
    var root = document.getElementById("toast-root");
    if (!root) return;
    var t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    root.appendChild(t);
    setTimeout(function () {
      t.style.transition = "opacity 0.25s ease";
      t.style.opacity = "0";
      setTimeout(function () {
        if (t.parentNode) t.parentNode.removeChild(t);
      }, 260);
    }, ms || 2400);
  }

  function modal(opts) {
    opts = opts || {};
    var root = document.getElementById("modal-root");
    if (!root) return null;
    closeModal();
    var wrap = document.createElement("div");
    wrap.className = "modal-wrap";
    wrap.innerHTML =
      '<div class="modal-card' + (opts.wide ? " wide" : "") + '" role="dialog" aria-modal="true">' +
        '<div class="modal-head">' +
          '<div style="flex:1;min-width:0">' +
            '<h3>' + esc(opts.title || "") + '</h3>' +
            (opts.sub ? '<div class="mh-sub">' + esc(opts.sub) + "</div>" : "") +
          "</div>" +
          '<button type="button" class="icon-btn" data-action="modal-close" aria-label="Fechar">' + icon("x") + "</button>" +
        "</div>" +
        '<div class="modal-body">' + (opts.body || "") + "</div>" +
        (opts.footer ? '<div class="modal-foot">' + opts.footer + "</div>" : "") +
      "</div>";
    wrap.addEventListener("mousedown", function (e) {
      if (e.target === wrap) closeModal();
    });
    root.appendChild(wrap);
    return wrap;
  }

  function closeModal() {
    var root = document.getElementById("modal-root");
    if (root) root.innerHTML = "";
  }

  function confirmBox(opts) {
    opts = opts || {};
    var body =
      (opts.body || "") +
      '<div class="confirm-box">' +
        "<div class='section-label'>" + DetUI.esc(opts.message || "Tem certeza?") + "</div>" +
        '<div class="confirm-actions">' +
          '<button type="button" class="btn' + (opts.danger ? " btn-danger" : " btn-primary") + '" data-action="confirm-ok">' + esc(opts.okLabel || "Confirmar") + "</button>" +
          '<button type="button" class="btn btn-ghost" data-action="confirm-cancel">Cancelar</button>' +
        "</div>" +
      "</div>";
    modal({
      title: opts.title || "Confirmação",
      sub: opts.sub,
      body: body
    });
    var onOk = opts.onOk || function () {};
    var okBtn = document.querySelector('[data-action="confirm-ok"]');
    var cancelBtn = document.querySelector('[data-action="confirm-cancel"]');
    if (okBtn) okBtn.addEventListener("click", function () {
      closeModal();
      onOk();
    });
    if (cancelBtn) cancelBtn.addEventListener("click", function () {
      closeModal();
      if (opts.onCancel) opts.onCancel();
    });
  }

  return {
    icon: icon,
    esc: esc,
    toast: toast,
    modal: modal,
    closeModal: closeModal,
    confirmBox: confirmBox,
    ICONS: ICONS
  };
})();

/* ============================================================
   DetNav — troca de telas
   ============================================================ */
var DetNav = (function () {
  "use strict";

  var stack = [];
  var renderers = {};
  var current = null;

  function register(screenId, fn) { renderers[screenId] = fn; }

  function invoke(screenId, params) {
    if (renderers[screenId]) renderers[screenId](params || {});
  }

  function doShow(el, entry) {
    var act = document.querySelector(".screen.active");
    if (act && act !== el) act.classList.remove("active");
    el.classList.add("active");
    current = entry;
    invoke(entry.screen, entry.params);
    scrollTop();
    refreshBack();
  }

  function show(screenId, params) {
    var el = document.getElementById("screen-" + screenId);
    if (!el) return;
    var entry = { screen: screenId, params: params || {} };
    if (current && current.screen === screenId) {
      if (stack.length) stack[stack.length - 1] = entry;
      else stack.push(entry);
    } else {
      stack.push(entry);
    }
    doShow(el, entry);
  }

  function showSame(entry) {
    var el = document.getElementById("screen-" + entry.screen);
    if (!el) return;
    doShow(el, entry);
  }

  function scrollTop() {
    if (DetStorage.getPrefs().autoScrollTop !== false) {
      var main = document.getElementById("app-main");
      if (main) main.scrollTop = 0;
    }
  }

  function back() {
    if (stack.length > 1) {
      stack.pop();
      showSame(stack[stack.length - 1]);
    } else {
      home();
    }
  }

  function home() {
    stack = [];
    current = null;
    show("home");
  }

  function refreshBack() {
    var btn = document.getElementById("btn-back");
    if (btn) btn.style.visibility = stack.length > 1 ? "visible" : "hidden";
  }

  function currentScreen() {
    return current ? current.screen : null;
  }

  return {
    register: register,
    show: show,
    back: back,
    home: home,
    currentScreen: currentScreen,
    stack: function () { return stack.slice(); }
  };
})();

/* Popula os spans [data-icon] estáticos do HTML após o carregamento. */
(function () {
  if (typeof document === "undefined") return;
  var spans = document.querySelectorAll("[data-icon]");
  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    var name = span.getAttribute("data-icon");
    if (name) span.insertAdjacentHTML("beforeend", DetUI.icon(name));
  }
})();