import {
  LitElement,
  css,
  html,
} from "https://cdn.jsdelivr.net/npm/lit@3.1.2/+esm";

export class Footer extends LitElement {
  static styles = css`
    footer {
      color: white;
      background-color: #000d;
      backdrop-filter: blur(8px);
      padding: 0.5rem 0;
    }

    #footer-content {
      display: flex;
      justify-content: space-between;
      max-width: 75%;
      margin: 0 auto;
    }

    #brand {
      font-weight: bold;
      text-decoration: none;
      color: white;
      transition: all 0.3s;
    }

    #brand:hover {
      opacity: 0.75;
    }
  `;

  render() {
    return html`
      <footer>
        <div id="footer-content">
          <a id="brand" href="/"><p>Theory@UCLA</p></a>
          <p>&copy; 2022 – ${new Date().getFullYear()}</p>
        </div>
      </footer>
    `;
  }
}
