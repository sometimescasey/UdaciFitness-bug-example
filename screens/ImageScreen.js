import * as React from 'react';
import {
  View,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import Live from '../components/Live';
import ImageWidget from '../components/ImageWidget';

function ImageScreen (props) {
    return (
        <ImageWidget/>
    );
}

export default ImageScreen;