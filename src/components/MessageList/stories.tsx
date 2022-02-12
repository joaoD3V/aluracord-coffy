import { Story, Meta } from '@storybook/react/types-6-0';

import MessageList, { MessageListProps } from './index';

import { messages } from './messages';

export default {
  title: 'MessageList',
  component: MessageList,
  args: {
    messages,
  },
} as Meta;

export const Basic: Story<MessageListProps> = (args) => (
  <div style={{ width: '90vw', height: '90vh', margin: '0 auto' }}>
    <MessageList {...args} />
  </div>
);
