import {
    provideFluentDesignSystem,
    fluentButton,
    fluentCheckbox,
    fluentTextField,
    fluentRadioGroup,
    fluentRadio,
    fluentTextArea,
    fluentSelect,
    fluentOption
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentButton(),
        fluentCheckbox(),
        fluentTextField(),
        fluentRadioGroup(),
        fluentRadio(),
        fluentTextArea(),
        fluentSelect(),
        fluentOption()
    );