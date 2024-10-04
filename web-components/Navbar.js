import {
  LitElement,
  css,
  html,
} from "https://cdn.jsdelivr.net/npm/lit@3.1.2/+esm";

export class Navbar extends LitElement {
  static properties = {
    isHomePage: {
      type: Boolean,
    },
  };

  static styles = css`
    nav {
      top: 0;
      left: 0;
      right: 0;
      color: white;
    }

    #navbar-content {
      display: block;
      padding: 1rem 2rem;
    }

    @media (min-width: 960px) {
      #navbar-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 75%;
        margin: 0 auto;
        padding: 0.5rem 0;
      }
    }

    #navbar-links {
      display: block;
      text-align: center;
    }

    @media (min-width: 960px) {
      #navbar-links {
        display: flex;
        align-items: center;
      }
    }

    #navbar-links > a {
      color: white;
      text-decoration: none;
      transition: all 0.3s;
    }

    #navbar-links > a:hover {
      opacity: 0.5;
    }

    #navbar-links > a:not(#brand) {
      line-height: 2.5;
      margin-right: 1.5rem;
    }

    #brand {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      text-decoration: none;
      font-family: "Roboto Slab";
      margin-bottom: 0.5rem;
    }

    @media (min-width: 960px) {
      #brand {
        margin-bottom: 0;
        margin-right: 2rem;
      }
    }

    #brand svg {
      height: 2rem;
      margin-right: 0.75rem;
    }

    #brand h1 {
      margin: 0;
    }

    #mobile-button {
      display: inline-block;
      margin: 1rem 0;
    }

    @media (min-width: 960px) {
      #mobile-button {
        display: none;
      }
    }

    #desktop-button {
      display: none;
    }

    @media (min-width: 960px) {
      #desktop-button {
        display: block;
      }
    }
  `;

  render() {
    return html`
      <nav
        style="
          position: ${this.isHomePage ? "absolute" : "static"};
          background: ${this.isHomePage ? "transparent" : "black"}
        "
      >
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
            <a href="/reading-groups/index.html">Reading Groups</a>
            <a href="/people.html">People</a>
            <a href="/socials.html">Socials</a>
            <theory-ucla-link-button
              id="mobile-button"
              href="https://discord.gg/rPnmYRT2ZH"
              target="_blank"
            >
              Join Us
            </theory-ucla-link-button>
          </div>
          <theory-ucla-link-button
            id="desktop-button"
            href="https://discord.gg/rPnmYRT2ZH"
            target="_blank"
          >
            Join Us
          </theory-ucla-link-button>
        </div>
      </nav>
    `;
  }
}
