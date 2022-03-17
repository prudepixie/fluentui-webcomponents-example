import { FluentBadge, FluentButton } from "./fluent-wc-v9";
FluentBadge;
FluentButton;
import {
  FASTElement,
  customElement,
  observable,
  html,
  repeat,
} from "@microsoft/fast-element";

const templatesByType = {
  badge: html`<fluent-badge>Badge</fluent-badge>`,
  button: html`<fluent-button appearance="primary">Button</fluent-button>`,
  card: html`<fluent-card>I'm a Card</fluent-card>`,
};

const template = html<ComponentList>`${repeat(
  (x) => x.componentTemplate,
  html`${(x) => x}`
)}`;

@customElement({
  name: "component-container",
  template,
})
export class ComponentList extends FASTElement {
  @observable componentTemplate: string[] = [];

  connectedCallback() {
    super.connectedCallback();
    const params = new URLSearchParams(document.location.search);
    const component = params.get("component") || "button";
    const repeatNum = parseInt(params.get("repeatNum")) || 1;

    this.componentTemplate = Array.from(
      { length: repeatNum },
      (x) => templatesByType[component]
    );
  }
}
