import {
  LitElement,
  css,
  html,
} from "https://cdn.jsdelivr.net/npm/lit@3.1.2/+esm";

export class Layout extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex: 1;
      padding: 2rem;
      max-width: 75%;
      margin: 0 auto;
    }
  `;

  render() {
    return html`
      <theory-ucla-navbar></theory-ucla-navbar>
      <slot name="hero"></slot>
      <main>
        <slot></slot>
      </main>
      <theory-ucla-footer></theory-ucla-footer>
    `;
  }
}
