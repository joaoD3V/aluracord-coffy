import { Story, Meta } from '@storybook/react/types-6-0';

import MessageList, { MessageListProps } from './index';

const messages = [
  {
    id: 1,
    avatar_url: 'https://avatars.githubusercontent.com/u/26118546?v=4',
    login: 'joaoD3V',
    created_at: new Date().toJSON(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ante ut mi euismod, ut consectetur tortor tincidunt. Aliquam lobortis augue vel diam hendrerit, blandit dictum elit placerat. ',
    name: 'João Pedro Silva',
  },
  {
    id: 2,
    avatar_url: 'https://avatars.githubusercontent.com/u/26118546?v=4',
    login: 'joaoD3V',
    created_at: new Date().toJSON(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ante ut mi euismod, ut consectetur tortor tincidunt. Aliquam lobortis augue vel diam hendrerit, blandit dictum elit placerat. ',
    name: 'João Pedro Silva',
  },
];

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
