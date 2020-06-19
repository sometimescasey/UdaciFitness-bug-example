import React, { Component } from 'react';
import {
  View, Image, Animated, StyleSheet
} from 'react-native';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import reducer from '../reducers';
import AddEntry from '../components/AddEntry';
import { purple, white } from '../utils/colors';

import { useIsFocused } from '@react-navigation/native';

class AnimatedScreen extends Component {
    state = {
        opacity: new Animated.Value(0),
        width: new Animated.Value(0),
        height: new Animated.Value(0),
    };

    componentDidMount() {
        const { opacity, width, height } = this.state;
        
        Animated.timing(opacity, { toValue: 1, duration: 1000 })
            .start();

        Animated.spring(width, { toValue: 300, speed: 5}).start();
        Animated.spring(height, { toValue: 200, speed: 5}).start();
    }

    render() {
        const { opacity, width, height } = this.state;
        return (
            <View style={styles.center}>
                <Animated.Image
                    style={{...styles.img, opacity: opacity, width: width, height: height }}
                    source={{uri: 'https://i.pinimg.com/originals/26/00/72/260072123d97bd2ea2e008636128c863.jpg'}}/>
            </View>
        );
    }
    
}

export default connect()(AnimatedScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between'
    },
    img: {
        height: 200,
        width: 300,
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 30,
      marginRight: 30,
    },
    button: {
      padding: 10,
      backgroundColor: purple,
      alignSelf: 'center',
      borderRadius: 5,
      margin: 20,
    },
    buttonText :{
      color: white,
      fontSize: 20,
    },
    directionContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    header: {
      fontSize: 35,
      textAlign: 'center',
    },
    direction: {
      color: purple,
      fontSize: 120,
      textAlign: 'center',
    },
    metricContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: purple,
    },
    metric: {
      flex: 1,
      paddingTop: 15,
      paddingBottom: 15,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
    },
    subHeader: {
      fontSize: 25,
      textAlign: 'center',
      marginTop: 5,
    },
  });

