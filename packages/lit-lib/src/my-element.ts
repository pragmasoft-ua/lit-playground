import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles } from "./shared-styles";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = sharedStyles;

  @property({ type: String })
  version = "STARTING";

  render() {
    return html`
      <p class="text-blue-600">Welcome to the web components tutorial!</p>
      <p>This is the ${this.version} code.</p>
    `;
  }
}
