import {
  LitElement,
  css,
  html,
} from "https://cdn.jsdelivr.net/npm/lit@3.1.2/+esm";

export class Layout extends LitElement {
  static styles = css`
    main {
      height: 100%;
      padding: 2rem;
      max-width: 75%;
      margin: 0 auto;
    }
  `;

  render() {
    return html`
      <theory-ucla-navbar></theory-ucla-navbar>
      <main>
        <slot></slot>
      </main>
      <theory-ucla-footer></theory-ucla-footer>
    `;
  }
}
