// const meta: Meta = {
//   title: 'my-comp',
//   component: 'my-comp',
// };

// export default meta;
// type Story = StoryObj;

// const Template = (args: any) => html` <my-comp first="${args.first}" middle="${args.middle}" last="${args.last}">${args.children}</my-comp>`;

// export const Default: Story = Template.bind({});
// Default.args = {
//   first: 'first',
//   middle: 'middle',
//   last: 'last',
//   children: html`<p>this is p</p>`,
// };

// export const FirstStory: Story = Template.bind({});

// FirstStory.args = {
//   first: 'First',
//   middle: 'Middle',
//   last: 'Last',
// };

// export const SecondStory: Story = {
//   args: {
//     first: 'my first name',
//     middle: 'in this second story',
//     last: 'is different',
//   },
// };

export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/my-comp',
};

const Template = (args: any) => `<my-comp first="${args.first}" middle="${args.middle}" last="${args.last}"></my-comp>`;

export const Example = Template.bind({});
Example.args = {
  first: 'Winnie',
  middle: 'The',
  last: 'Pooh',
};
