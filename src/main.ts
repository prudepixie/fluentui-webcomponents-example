import AllComponents from "./fluent-wc-v9/custom-elements";
AllComponents;

import {
  FASTElement,
  customElement,
  observable,
  html,
  repeat,
} from "@microsoft/fast-element";
import templateStrings from "./templateStrings";

const template = html<ComponentList>`${repeat(
  (x) => x.componentTemplate,
  html`${(x) => html`${x}`}`
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
    const isMultiple = component.includes(",");
    const repeatNum = parseInt(params.get("repeatNum")) || 1;

    if (isMultiple) {
      const componentList = component.split(",");
      const combinedStrings = componentList.reduce((prev, current) => {
        prev += templateStrings[current].trim();
        return prev;
      }, "");

      this.componentTemplate = Array.from(
        { length: repeatNum },
        (x) => combinedStrings
      );
    } else {
      this.componentTemplate = Array.from({ length: repeatNum }, (x) =>
        templateStrings[component].trim()
      );
    }
  }
}
