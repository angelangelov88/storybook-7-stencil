/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonRounded, ButtonSize, ButtonType, ButtonVariant } from "./components/legalesign-button/legalesign-button";
export { ButtonRounded, ButtonSize, ButtonType, ButtonVariant } from "./components/legalesign-button/legalesign-button";
export namespace Components {
    interface CoolButton {
        "isPrimary": boolean;
    }
    interface LegalesignButton {
        "customClass"?: string;
        "disabled"?: boolean;
        "loading"?: boolean;
        "outline": boolean;
        "rounded"?: ButtonRounded;
        "size"?: ButtonSize;
        "type"?: ButtonType;
        "variant"?: ButtonVariant;
    }
    interface MyComp {
        "first": string;
        "last": string;
        "middle": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLCoolButtonElement extends Components.CoolButton, HTMLStencilElement {
    }
    var HTMLCoolButtonElement: {
        prototype: HTMLCoolButtonElement;
        new (): HTMLCoolButtonElement;
    };
    interface HTMLLegalesignButtonElement extends Components.LegalesignButton, HTMLStencilElement {
    }
    var HTMLLegalesignButtonElement: {
        prototype: HTMLLegalesignButtonElement;
        new (): HTMLLegalesignButtonElement;
    };
    interface HTMLMyCompElement extends Components.MyComp, HTMLStencilElement {
    }
    var HTMLMyCompElement: {
        prototype: HTMLMyCompElement;
        new (): HTMLMyCompElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "cool-button": HTMLCoolButtonElement;
        "legalesign-button": HTMLLegalesignButtonElement;
        "my-comp": HTMLMyCompElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CoolButton {
        "isPrimary"?: boolean;
    }
    interface LegalesignButton {
        "customClass"?: string;
        "disabled"?: boolean;
        "loading"?: boolean;
        "outline"?: boolean;
        "rounded"?: ButtonRounded;
        "size"?: ButtonSize;
        "type"?: ButtonType;
        "variant"?: ButtonVariant;
    }
    interface MyComp {
        "first"?: string;
        "last"?: string;
        "middle"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "cool-button": CoolButton;
        "legalesign-button": LegalesignButton;
        "my-comp": MyComp;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cool-button": LocalJSX.CoolButton & JSXBase.HTMLAttributes<HTMLCoolButtonElement>;
            "legalesign-button": LocalJSX.LegalesignButton & JSXBase.HTMLAttributes<HTMLLegalesignButtonElement>;
            "my-comp": LocalJSX.MyComp & JSXBase.HTMLAttributes<HTMLMyCompElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
