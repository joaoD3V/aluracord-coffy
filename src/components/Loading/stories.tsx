import { Story, Meta } from '@storybook/react/types-6-0';

import Loading from './index';

export default {
  title: 'Loading',
  component: Loading,
  parameters: {
    layout: 'fullscrenn',
  },
} as Meta;

export const Basic: Story = (args) => <Loading {...args} />;
