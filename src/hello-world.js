const html = String.raw;

/**
 * A simple custom element that greets the user.
 * @tag hello-world
 * @attribute [greeting=Hello] - the greeting to use
 * @attribute [name=World] - the name to use
 * @cssproperty [--color=black] - the text color
 * @slot before - optional content to insert before the radio buttons
 * @slot after - optional content to insert after the radio buttons
 */
class HelloWorld extends HTMLElement {
  #greeting = "Hello";
  #name = "World";

  static get observedAttributes() {
    return ["greeting", "name"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = html`
      <style>
        div {
          color: var(--color, "black");
        }
      </style>
      <div>
        <slot name="before"></slot>
        <div id="message">${this.#greeting}, ${this.#name}!</div>
        <slot name="after"></slot>
      </div>
    `;
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === "greeting") {
      this.#greeting = newValue;
      this.updateMessage();
    } else if (name === "name") {
      this.#name = newValue;
      this.updateMessage();
    }
  }

  updateMessage() {
    const div = this.shadowRoot.getElementById("message");
    if (div) div.textContent = `${this.#greeting}, ${this.#name}!`;
  }
}

customElements.define("hello-world", HelloWorld);
