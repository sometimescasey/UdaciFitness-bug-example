import * as React from 'react';
import {
  View
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import Live from '../components/Live';

function LiveScreen (props) {
    return (
        <Live/>
    );
}

export default LiveScreen;

