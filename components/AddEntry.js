import React, { Component } from 'react';
import { View, Text,
  TouchableOpacity, StyleSheet } from 'react-native';
import { getMetricMetaInfo,
	timeToString,
	getDailyReminderValue,
	clearLocalNotification,
	setLocalNotification } from '../utils/helpers';
import UdaciSlider from './UdaciSlider';
import UdaciSteppers from './UdaciSteppers';
import DateHeader from './DateHeader';
import { Ionicons } from '@expo/vector-icons';
// import TextButton from './TextButton';
import { submitEntry, removeEntry } from '../utils/api';
import { connect } from 'react-redux';
import { addEntry } from '../actions';
import { mainStyles } from '../styles';
import { white, purple } from '../utils/colors';

function SubmitBtn({ onPress, children }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={Platform.OS === 'ios'
			? styles.iosSubmitBtn
			: styles.androidSubmitBtn }>
			<Text style={styles.submitBtnText}>
				{children ? children : "Submit"}
			</Text>
		</TouchableOpacity>
		)
}

class AddEntry extends Component {
	state = {
		run: 0,
		bike: 0,
		swim: 0,
		sleep: 0,
		eat: 0,
	};

	increment = (metric) => {
		const { max, step } = getMetricMetaInfo(metric);
		this.setState((state) => {
			const count = state[metric] + step;

			return {
				...state,
				[metric]: count > max ? max : count
			}

		}

			);
	};

	decrement = (metric) => {
		const { step } = getMetricMetaInfo(metric);
		this.setState((state) => {
			const count = state[metric] - step;

			return {
				...state,
				[metric]: count < 0 ? 0 : count
			}

		}

			);
	};

	slide = (metric, value) => {
		this.setState(() => {
			return {
				[metric]: value
			};
		});
	};

	submit = () => {
		const { dispatch } = this.props;

		const key = timeToString();
		const entry = this.state;

		// update Redux store
		dispatch(addEntry({
			[key]: entry
		}));

		// blank out state
		this.setState(() => (
				{
					run: 0,
					bike: 0,
					swim: 0,
					sleep: 0,
					eat: 0,
				}
			));

		// Navigate to Home
		submitEntry({ key, entry });
		clearLocalNotification()
			.then(setLocalNotification);



	};

	reset = () => {
		const { dispatch } = this.props;

		const key = timeToString();

		// update Redux store
		dispatch(addEntry({
			[key]: getDailyReminderValue()
		}));

		// Route to home
		// Update database
		removeEntry(key);

	};

	render() {
		const metaInfo = getMetricMetaInfo();

		if (this.props.alreadyLogged) {
			return (
				<View style={styles.center}>
					<Ionicons name='ios-happy'
					size={100}
					/>
					<Text style={{paddingBottom: 20}} >You already logged your information for today!</Text>
					<SubmitBtn onPress={this.reset}>
						Reset
					</SubmitBtn>
				</View>
				);
		}

		return (
			<View style={styles.container}>
				<DateHeader
					date={(new Date()).toLocaleDateString()}
				/>

				{
					Object.keys(metaInfo).map((key) => {
						const { getIcon, type, ...rest } = metaInfo[key];
						const value = this.state[key];

						return (
							<View key={key} style={styles.row}>
								{getIcon()}
								{
									type === 'slider'
									? (<UdaciSlider
										value={value}
										onChange={(value) => this.slide(key, value)}
										{...rest}
									/>)
									: (<UdaciSteppers
										value={value}
										onIncrement={(value) => this.increment(key)}
										onDecrement={(value) => this.decrement(key)}
										{...rest}
									/>)
								}
							</View>
							);
					})
				}
			<View style={styles.btnWrapper}>
				<SubmitBtn onPress={this.submit}/>
			</View>
			</View>
			);
	}
}

function mapStateToProps(state) {
	const key = timeToString();

	return {
		alreadyLogged: state[key] && typeof state[key].today === 'undefined'
	};

};

export default connect(mapStateToProps)(AddEntry);

const styles = consolidateStyles();

function consolidateStyles() {

	return StyleSheet.create({
		...mainStyles,
		iosSubmitBtn: {
			backgroundColor: purple,
			padding: 10,
			borderRadius: 7,
			height: 45,
			marginLeft: 40,
			marginRight: 40,
		},
		androidSubmitBtn: {
			backgroundColor: purple,
			padding: 10,
			paddingLeft: 30,
			paddingRight: 30,
			height: 45,
			borderRadius: 2,
			alignSelf: 'flex-end',
			justifyContent: 'center',
			alignItems: 'center',
		},
		submitBtnText: {
			color: white,
			fontSize: 22,
			textAlign: 'center',
		},
		container: {
			flex: 1,
			padding: 20,
			backgroundColor: white,
		},
		row: {
			flexDirection: 'row',
			flex: 1,
			alignItems: 'center',
		},
		center: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			marginRight: 30,
			marginLeft: 30,
		}
	});
}



