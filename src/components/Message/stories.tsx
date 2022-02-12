import { Story, Meta } from '@storybook/react/types-6-0';

import Message, { MessageProps } from './index';

export default {
  title: 'Message',
  component: Message,
  args: {
    id: 1,
    avatar_url: 'https://avatars.githubusercontent.com/u/26118546?v=4',
    login: 'joaoD3V',
    created_at: new Date().toJSON(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ante ut mi euismod, ut consectetur tortor tincidunt. Aliquam lobortis augue vel diam hendrerit, blandit dictum elit placerat. ',
    name: 'João Pedro Silva',
  },
} as Meta;

export const Basic: Story<MessageProps> = (args) => <Message {...args} />;
