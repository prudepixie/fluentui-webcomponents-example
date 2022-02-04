import {
    fluentButton,
    fluentDesignSystemProvider,
    provideFluentDesignSystem,
} from "@fluentui/web-components";

provideFluentDesignSystem().register(
    fluentDesignSystemProvider(),
    fluentButton(),
);

