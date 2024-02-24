import {
  LitElement,
  css,
  html,
  unsafeCSS,
} from "https://cdn.jsdelivr.net/npm/lit@3.1.2/+esm";
import { THEME_COLOR_HEX } from "./constants.js";

export class Navbar extends LitElement {
  static styles = css`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      color: white;
      /* background-color: #000e0; */
      /* backdrop-filter: blur(8px); */
    }

    #navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 75%;
      margin: 0 auto;
      padding: 0.5rem 0;
    }

    #navbar-links {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    #navbar-links > a {
      transition: all 0.3s;
    }

    #navbar-links > a:hover {
      opacity: 0.5;
    }

    #navbar-links > a:not(#brand) {
      margin-right: 1.5rem;
    }

    #brand {
      display: flex;
      align-items: center;
      color: white;
      font-weight: bold;
      text-decoration: none;
      margin-right: 2rem;
      font-family: "Roboto Slab";
    }

    #brand svg {
      height: 2rem;
      margin-right: 0.75rem;
    }

    #brand h1 {
      margin: 0;
    }
  `;

  render() {
    return html`
      <nav>
        <div id="navbar-content">
          <div id="navbar-links">
            <a id="brand" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-layers-3"
              >
                <path
                  d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                />
                <path
                  d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
                />
                <path
                  d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
                />
              </svg>
              <h3>Theory@UCLA</h3>
            </a>
            <a>Reading Groups</a>
            <a>Review Sessions</a>
            <a>People</a>
            <a>Socials</a>
          </div>
          <theory-ucla-link-button
            href="https://discord.gg/KJzWu7Zz"
            target="_blank"
          >
            Join Us
          </theory-ucla-link-button>
        </div>
      </nav>
    `;
  }
}
