import {
  LitElement,
  css,
  html,
} from "https://cdn.jsdelivr.net/npm/lit@3.1.2/+esm";

export class LinkButton extends LitElement {
  static properties = {
    href: {},
    target: {},
    /** Either `undefined` or "lg" */
    size: {
      type: String,
    },
  };

  static styles = css`
    a {
      font-weight: bold;
      background: white;
      color: black;
      text-decoration: none;
      border-radius: 9999px;
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
      <a
        href="${this.href}"
        target="${this.target}"
        style="
          font-size: ${this.size === "lg" ? "1.25rem" : "1rem"};
          padding: ${this.size === "lg" ? "1rem 2rem" : "0.5rem 1rem"};
        "
      >
        <slot></slot>
      </a>
    `;
  }
}
