import * as React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import History from '../components/History';



function MainScreen (props) {
    return (
            <View style={{flex:1}}>
                <History />
            </View>
    );
}

export default connect()(MainScreen);

