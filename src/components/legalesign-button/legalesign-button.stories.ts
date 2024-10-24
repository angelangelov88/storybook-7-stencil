export default {
  title: 'Components/legalesign-button',
};

const Template = (args: any) => `
  <legalesign-button variant="${args.variant}" outline="${args.outline}" size="${args.size}" rounded="${args.rounded}">${args.children}</legalesign-button>
`;

export const Default = Template.bind({});
Default.args = {
  // variant: 'secondary',
  // outline: true,
  // size: 'lg',
  // rounded: 'lg',
  // children: 'Click me1',
  // loading: true,
};

export const FirstStory = Template.bind({});
FirstStory.args = {
  variant: 'secondary',
  outline: true,
  size: 'lg',
  rounded: 'lg',
  children: 'Click me1',
  loading: true,
};
export const SecondStory = Template.bind({});
SecondStory.args = {
  variant: 'secondary',
  outline: true,
  size: 'lg',
  rounded: 'lg',
  children: 'Click me2',
  loading: true,
};
export const ThirdStory = Template.bind({});
ThirdStory.args = {
  variant: 'secondary',
  outline: true,
  size: 'lg',
  rounded: 'lg',
  children: 'Click me3',
  loading: true,
};
