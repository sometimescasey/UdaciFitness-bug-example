import * as React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Slider,
  Switch,
  TextInput,
  Image,
  KeyboardAvoidingView,

} from 'react-native';
import AddEntry from './components/AddEntry';
import getReviews from './reviews';

function Review({ url, text, name }) {
  return (
      <View>
        <Text style={styles.urlText}>{url}</Text>
        <Text>{text}</Text>
        <Text>{name}</Text>
      </View>
    );
}

export default class App extends React.Component {
  renderItem = ({ item }) => {
    return (
      <Review {...item}/>
      );
  };

  state = {
    sliderValue: 0,
    input: '',
    showInput: false,
  };

  componentDidMount() {
    console.log("hmm");
  }

  handlePress = () => {
    // alert("Hello!");
  };

  handleToggleSwitch = () => {
    this.setState((cs) => ({
      showInput: !cs.showInput
    }));
  };

  handleTextChange = (t) => {
    this.setState((cs) => ({
      input: t
    }));
  };

  render() {
    const { input, showInput } = this.state;

    return (
      <View style={styles.mainWrapper}>
      <Image
        source={require('./wonder_bread.png')}
        style={styles.img}
        />
        <Switch
          value={showInput}
          onValueChange={this.handleToggleSwitch}
        />
        {
          (showInput === true)
          ? (
          <TextInput
            placeholder='placeholder text'
            value={input}
            style={styles.input}
            onChangeText={this.handleTextChange}/>
          )
          :
          (
            <View style={styles.inputPlaceholder}></View>
            )
        }


      </View>
    );
  }


}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#e53224',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30
  },
  btnText: {
    color: '#fff',
  },
  urlText: {
    fontSize: 30,
  },
  imgWrapper: {
    margin: 10,
  },
  img: {
    width: 700*0.3,
    height: 432*0.3,
    margin: 30,
  },
  input: {
    margin: 20,
    height: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: '70%',
  },
  inputPlaceholder: {
    margin: 20,
    height: 40,
  },
});
