import { Meta, StoryObj } from '@storybook/react';

import { Toast } from '../components';

const meta: Meta<typeof Toast> = {
	component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
	args: {
		status: '204',
		position: 'right',
		duration: '5000',
		message: '',
		lang: 'pt',
		customStyle: {}
	},
};
