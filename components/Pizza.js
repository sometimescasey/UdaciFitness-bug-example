import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Pizza(props) {
	return (
		<Fragment>
			<FontAwesome5
				name="pizza-slice"
				size={24}
				color="black" />
			<Text>
				Pizza!
			</Text>
		</Fragment>
			);
}