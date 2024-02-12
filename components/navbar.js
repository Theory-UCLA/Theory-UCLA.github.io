import {
  LitElement,
  css,
  html,
} from "https://cdn.jsdelivr.net/npm/lit@3.1.2/+esm";
import styles from "../css/style.css" assert { type: "css" };

console.log({ styles });

export class Navbar extends LitElement {
  static styles = styles;

  render() {
    return html`
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand font-weight-bold" href="/">
            <!-- <img src="ucla-logo.png" height="30" alt="Theory@UCLA"> -->
            Theory@UCLA
          </a>

          <!-- Button moved outside the collapsible content -->
          <a class="btn btn-primary" href="https://forms.gle/Ys2NrAjJ9iW4XyZK8"
            >Join us!</a
          >

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <!-- Your navbar items go here -->
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("theory-ucla-navbar", Navbar);
