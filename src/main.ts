import { FluentButton, provideFluentDesignSystem } from "./fluent-wc-v9";
import {
  FASTElement,
  customElement,
  observable,
  html,
  when,
  ViewTemplate,
} from "@microsoft/fast-element";

provideFluentDesignSystem().register(FluentButton);

enum Component {
  Button = "button",
  Mixed = "mixed",
  Card = "card",
}

const templatesByType = {
  button: `<fluent-button appearance="primary">Button</fluent-button>`,
  card: `<fluent-card>I'm a Card</fluent-card>`,
};
const defaultTemplate = templatesByType.button;
const template = html<ComponentList>`<div id="container">
  ${when(
    (x) => x.repeatNum,
    (x) => x.componentTemplate
  )}
</div>`;

@customElement({
  name: "component-container",
  template,
})
export class ComponentList extends FASTElement {
  @observable repeatNum: number = 0;
  @observable component: string | null = "";
  templatestr: string = defaultTemplate;
  componentTemplate: ViewTemplate = html``;

  connectedCallback() {
    super.connectedCallback();
    const params = new URLSearchParams(document.location.search);
    this.component = params.get("component");
    const repeatstr = params.get("repeatNum");
    if (repeatstr) this.repeatNum = parseInt(repeatstr);

    switch (this.component) {
      case Component.Button:
        this.templatestr = templatesByType.button;
        break;
      case Component.Card:
        this.templatestr = templatesByType.card;
        break;
      default:
        this.templatestr = templatesByType.button;
    }
    const repeatedStr = this.templatestr.repeat(this.repeatNum);
    this.componentTemplate = html`${repeatedStr}`;
  }
}
