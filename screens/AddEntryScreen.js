import * as React from 'react';
import {
  View
} from 'react-native';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import reducer from '../reducers';
import AddEntry from '../components/AddEntry';

function AddEntryScreen (props) {
    return (
        <AddEntry/>
    );
}

export default connect()(AddEntryScreen);

