import {
    provideFluentDesignSystem,
    fluentCard
} from "@fluentui/web-components";
import { ExampleCard } from "./card";

provideFluentDesignSystem()
    .register(
        fluentCard()
    );

ExampleCard