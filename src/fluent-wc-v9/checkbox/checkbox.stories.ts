import addons from "@storybook/addons";
import { STORY_RENDERED } from "@storybook/core-events";
import { Checkbox as FluentCheckbox } from "./checkbox";
import CheckboxTemplate from "./fixtures/checkbox.html";
import "./index";

addons.getChannel().addListener(STORY_RENDERED, (name: string) => {
    if (name.toLowerCase().startsWith("checkbox")) {
        document
            .querySelectorAll(".set-indeterminate")
            .forEach((el: FluentCheckbox) => {
                console.log(el);
                el.indeterminate = true;
            });
    }
});
export default {
    title: "Checkbox",
};

export const Checkbox = () => CheckboxTemplate;
