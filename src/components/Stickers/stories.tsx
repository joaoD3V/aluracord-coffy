import { Story, Meta } from '@storybook/react/types-6-0';

import Stickers, { StickersProps } from './index';

import { stickers } from './stickers';

export default {
  title: 'Stickers',
  component: Stickers,
  args: {
    stickers,
  },
} as Meta;

export const Basic: Story<StickersProps> = (args) => <Stickers {...args} />;
