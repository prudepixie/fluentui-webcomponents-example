import { FASTElement, customElement, css, html } from '@microsoft/fast-element';

const template = html<ExampleCard>`
    <fluent-card>
        <slot name="header"></slot>
        <slot name="body"></slot>
    </fluent-card>
`;

const styles = css`
    :host fluent-card {
        background-color: rgb(250, 249, 248);
        padding: 1rem;
        box-sizing: border-box;
        width: 18.75rem;
    }
    :host fluent-card:hover {
        background-color: rgb(237, 235, 233);
    }
`

@customElement({
  name: 'fluent-card-container',
  template,
  styles
})

export class ExampleCard extends FASTElement {}