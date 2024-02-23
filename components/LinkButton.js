import {
  LitElement,
  css,
  html,
} from "https://cdn.jsdelivr.net/npm/lit@3.1.2/+esm";

export class LinkButton extends LitElement {
  static properties = {
    href: {},
    target: {},
  };

  static styles = css`
    a {
      font-weight: bold;
      background: white;
      color: black;
      text-decoration: none;
      border-radius: 9999px;
      padding: 0.5rem 1rem;
      /* https://tailwindcss.com/docs/drop-shadow */
      filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
        drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
      transition: all 0.3s;
    }

    a:hover {
      opacity: 0.75;
    }
  `;

  render() {
    return html`
      <a href="${this.href}" target="${this.target}"><slot></slot></a>
    `;
  }
}
