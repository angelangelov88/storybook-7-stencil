import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-comp',
  styleUrl: 'my-comp.css',
  // shadow: true,
  shadow: false,
})
export class MyComp {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  private getText(): string {
    console.log('First:', this.first, 'Middle:', this.middle, 'Last:', this.last);

    return format(this.first, this.middle, this.last);
  }

  render() {
    console.log('Render method called');

    console.log('First:', this.first, 'Middle:', this.middle, 'Last:', this.last); // Log the props

    return (
      <div
        class="main"
        style={
          {
            // backgroundColor: 'red',
            // color: 'green',
          }
        }
      >
        Hello, World! I'm {this.getText()}
        <p>First: {this.first}</p>
        <p>Middle: {this.middle}</p>
        <p>Last: {this.last}</p>
        <slot></slot>
      </div>
    );
  }
}
