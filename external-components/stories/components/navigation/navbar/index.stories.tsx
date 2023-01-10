import React from "react";
import { ComponentMeta,ComponentStory } from "@storybook/react";

import { Navbar as Component } from "../../../../src/components";

export default {
	title: "Components/Navigation/Navbar",
	component: Component,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Navbar = Template.bind({});
Navbar.args = {
	label: "Navbar",
};
