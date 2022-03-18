const accordion = `<fluent-accordion>
<fluent-accordion-item expanded>
  <span slot="heading">Panel One</span>
  Panel one content
</fluent-accordion-item>
<fluent-accordion-item>
  <span slot="heading">Panel two</span>
  Panel two content
</fluent-accordion-item>
<fluent-accordion-item>
  <span slot="heading">Panel three</span>
  Panel three content
</fluent-accordion-item>
</fluent-accordion>`;

const avatar = `
<fluent-avatar name="Jane Doe"></fluent-avatar>
`;
const badge = `
<fluent-badge>Badge</fluent-badge>
`;
const button = `
<fluent-button appearance="primary">Button</fluent-button>`;
const checkbox = `
<div>
  <fluent-checkbox><label>My checkbox</label></fluent-checkbox>
  <fluent-checkbox disabled><label>My checkbox</label></fluent-checkbox>
  <fluent-checkbox checked><label>Checked</label></fluent-checkbox>
</div>
`;
const card = `
<fluent-card>
    <fluent-card-header>
      <img
        slot="image"
        src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-card/assets/avatar_mauricio.svg"
        alt="Placeholder user photo"
      />
      <span><b>Chris</b> + 7 others edited</span>
      <p slot="description">Fluent v9 + Web Components</p>
      <fluent-button slot="action" appearance="transparent">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 6a1.25 1.25 0 110-2.5A1.25 1.25 0 0110 6zm0 5.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-1.25 4a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z"
          ></path>
        </svg>
      </fluent-button>
    </fluent-card-header>
    <fluent-card-preview>
      <img
        src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-card/assets/doc_template.png"
        alt="Preview of a Word document "
      />
      <img
        slot="logo"
        src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-card/assets/word_logo.svg"
        alt="Microsoft Word logo"
      />
    </fluent-card-preview>
    <fluent-card-footer>
      <fluent-button>
        <svg
          slot="start"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M3.7 9l3.4 3.39a.5.5 0 01-.64.76l-.07-.05-4.24-4.25a.5.5 0 01-.06-.63l.06-.07L6.39 3.9a.5.5 0 01.76.64l-.05.07L3.7 8H10a7.5 7.5 0 017.5 7.26v.24a.5.5 0 01-1 0A6.5 6.5 0 0010.23 9H3.7l3.4 3.39L3.7 9z"
          ></path>
        </svg>
        Reply
      </fluent-button>
      <fluent-button>
        <svg
          slot="start"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M13.33 12.84l4.5-4.42.05-.07a.59.59 0 00-.05-.77l-4.5-4.42-.06-.05c-.36-.27-.9-.01-.9.47V5.7l-.22.01C8.6 6.01 6.5 8.26 6 12.35c-.06.53.54.85.93.5a9.64 9.64 0 014.45-2.38c.24-.06.5-.1.74-.12l.26-.02v2.17c.06.46.61.67.95.34zm-1.1-6.12l1.15-.08V4.61L16.82 8l-3.44 3.39V9.23l-1.36.12c-1.7.19-3.32.87-4.83 2 .3-1.33.8-2.34 1.47-3.06a5.2 5.2 0 013.57-1.57zM5.5 4A2.5 2.5 0 003 6.5v8A2.5 2.5 0 005.5 17h8a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 014 14.5v-8C4 5.67 4.67 5 5.5 5h3a.5.5 0 000-1h-3z"
          ></path>
        </svg>
        Share
      </fluent-button>
    </fluent-card-footer>
  </fluent-card>
`;
const compoundButton = `<fluent-compound-button appearance="primary">Button <span slot="description">Secondary content</span></fluent-compound-button>
`;
const counterBadge = `<fluent-counter-badge count="5"></fluent-counter-badge>`;
const divider = `<fluent-divider></fluent-divider>`;
const image = `<fluent-image><img alt="Image placeholder" src="https://via.placeholder.com/300x300" /></fluent-image>`;
const link = `
<fluent-link>this is a link</fluent-link>`;
const menuButton = `<fluent-menu-button>Button</fluent-menu-button>`;
const presenceBadge = `<div class="container">
<fluent-presence-badge status="available"></fluent-presence-badge>
<fluent-presence-badge status="away"></fluent-presence-badge>
<fluent-presence-badge status="busy"></fluent-presence-badge>
<fluent-presence-badge status="donotdisturb"></fluent-presence-badge>
<fluent-presence-badge status="offline"></fluent-presence-badge>
<fluent-presence-badge status="outofoffice"></fluent-presence-badge>
<fluent-presence-badge status="unknown"></fluent-presence-badge>
</div>`;
const radioGroup = `
<fluent-radio-group name="numbers">
<fluent-radio value="one">One</fluent-radio>
<fluent-radio value="two">Two</fluent-radio>
<fluent-radio value="three">Three</fluent-radio>
<fluent-radio value="four">Four</fluent-radio>
</fluent-radio-group>`;
const radio = `<fluent-radio>label</fluent-radio>`;

const splitButton = `
<fluent-split-button><fluent-button>Button</fluent-button><fluent-menu-button aria-label="Menu Button"></menu-button></fluent-split-button>`;

const tabs = `
<fluent-tabs id="myTab" activeId="TabTwo">
  <fluent-tab id="TabOne">First tab</fluent-tab>
  <fluent-tab id="TabTwo">Second tab</fluent-tab>
  <fluent-tab id="TabThree">Third tab</fluent-tab>
  <fluent-tab-panel id="TabPanelOne"> First tab content. This is for testing. </fluent-tab-panel>
  <fluent-tab-panel id="TabPanelTwo"> Second tab content. This is for testing. </fluent-tab-panel>
  <fluent-tab-panel id="TabPanelThree"> Third tab content. This is for testing. </fluent-tab-panel>
</fluent-tabs>`;

const text = `<fluent-text><span>Default text styles</span></fluent-text>`;
const toggleButton = `<fluent-toggle-button>Button</fluent-toggle-button>`;
export default {
  accordion,
  avatar,
  badge,
  button,
  card,
  checkbox,
  compoundButton,
  counterBadge,
  divider,
  image,
  link,
  menuButton,
  presenceBadge,
  radioGroup,
  radio,
  splitButton,
  tabs,
  text,
  toggleButton,
};
