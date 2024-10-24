import {
  Component,
  Element,
  // Event,
  Prop,
  h,
} from '@stencil/core';
// import { clsx } from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'secondaryColour' | 'tertiaryGrey' | 'destructiveTertiary' | 'tertiaryDashed';

export type ButtonSize = 'base' | 'sm' | 'lg' | 'icon';

export type ButtonRounded = 'lg' | 'full';

export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  tag: 'legalesign-button',
  styleUrl: 'legalesign-button.css',
  shadow: true,
})
export class LegalesignButton {
  @Prop() outline: boolean = false;
  @Prop() variant?: ButtonVariant = 'primary';
  @Prop() size?: ButtonSize = 'base';
  @Prop() rounded?: ButtonRounded = 'lg';
  @Prop() type?: ButtonType = 'button';
  @Prop() disabled?: boolean = false;
  // @Event() onClick?: (event: MouseEvent) => void;
  @Prop() customClass?: string;
  @Prop() loading?: boolean = false;
  @Element() el: HTMLElement;

  // private buttonClass = clsx(
  //   'button',
  //   'focusRing',
  //   this.variant && this.variant,
  //   this.outline && `${this.variant}Outline`,
  //   this.size && `size${this.size.charAt(0).toUpperCase() + this.size.slice(1)}`,
  //   this.rounded && `rounded${this.rounded.charAt(0).toUpperCase() + this.rounded.slice(1)}`,
  //   this.disabled && 'disabled',
  //   this.loading && 'loading',
  //   this.customClass,
  // );

  render() {
    return (
      <button
        type={this.type}
        disabled={this.disabled}
        //  onClick={this.onClick}
        // class={this.buttonClass}
        class="main"
        // style={{
        //   backgroundColor: 'yellow',
        // }}
        {...this.el.attributes}
      >
        {this.loading ? <span class="loading-spinner" /> : <slot />}
      </button>
    );
  }
}
