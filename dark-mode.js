const LOCAL_KEY = '_dark_mode_';
const LIGHT = 'light';
const DARK = 'dark';

class DarkModeToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._init();
  }

  connectedCallback() {
    const saved = localStorage.getItem(LOCAL_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.mode = saved || (prefersDark ? DARK : LIGHT);
    this._applyMode();
    this._render();

    this.shadowRoot.querySelector('.wrapper').addEventListener('click', () => {
      this.mode = this.mode === LIGHT ? DARK : LIGHT;
      localStorage.setItem(LOCAL_KEY, this.mode);
      this._applyMode();
      this._render();
    });
  }

  _init() {
    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
      }
      .icon { font-size: 1.2rem; }
      .text { margin-left: 0.5rem; font-family: sans-serif; }
    `;
    this.shadowRoot.appendChild(style);

    this.container = document.createElement('div');
    this.container.className = 'wrapper';
    this.shadowRoot.appendChild(this.container);

    this.icon = document.createElement('span');
    this.icon.className = 'icon';
    this.container.appendChild(this.icon);

    this.text = document.createElement('span');
    this.text.className = 'text';
    this.container.appendChild(this.text);

    this._injectGlobalStyles();
  }

  _injectGlobalStyles() {
    if (document.getElementById('dark-mode-style')) return;
    const style = document.createElement('style');
    style.id = 'dark-mode-style';
    style.textContent = `
      [data-theme="dark"] {
        background: #0d1117;
        color: #c9d1d9;
      }
      [data-theme="light"] {
        background: #fff;
        color: #24292f;
      }
    `;
    document.head.appendChild(style);
  }

  _applyMode() {
    document.documentElement.setAttribute('data-theme', this.mode);
  }

  _safeSVGFromString(svgString) {
    const template = document.createElement('template');
    template.innerHTML = svgString.trim();
    const svg = template.content.firstElementChild;
    if (svg && svg.nodeName.toLowerCase() === 'svg') {
      return svg;
    }
    return null;
  }

  _render() {
    const lightIcon = this.getAttribute('light-icon');
    const darkIcon = this.getAttribute('dark-icon');

    const selected = this.mode === LIGHT ? darkIcon : lightIcon;
    this.icon.innerHTML = '';

    const safeSVG = this._safeSVGFromString(selected || '');
    if (safeSVG) {
      this.icon.appendChild(safeSVG);
    } else {
      this.icon.textContent = this.mode === LIGHT ? '🌒' : '🌞';
    }
  }
}

customElements.define('dark-mode', DarkModeToggle);
