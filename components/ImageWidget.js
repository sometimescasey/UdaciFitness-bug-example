import React, { Component } from 'react';
import { Text, View,
StyleSheet,
TouchableOpacity,
Image,
 } from 'react-native';
// import ImageEditor from "@react-native-community/image-editor";
import { ImageManipulator } from 'expo-image-crop';
import * as ImagePicker from 'expo-image-picker';
import { purple, white } from '../utils/colors';

export default class ImageWidget extends Component {
    state = {
        image: null,
        isVisible: false,
    }

    onToggleModal = () => {
        const { isVisible } = this.state;
        this.setState({ isVisible: !isVisible })
    }

    pickImage = () => {
        const { isVisible, image } = this.state;
        ImagePicker.launchImageLibraryAsync({
            allowEditing: true,
            aspect: [2,1],
        }).then((result) => {
            if (result.cancelled) {
                return;
            } else {
                this.setState({ image: result.uri });

                // ImageEditor.cropImage(result.uri, {
                //     offset: {x: 0, y: 0},
                //     size: { width: result.width, height: result.height },
                //     displaySize: { width: 200, height: 200 },
                //     resizeMode: 'contain',
                // }).then((uri) => this.setState({ image: uri }))
                // .catch(
                // () => console.log('Error'));
            }
        });
    }

    render () {
        const { image } = this.state;
        console.log("image: ", image);

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.pkImg}
                  onPress={this.pickImage}>
                    <Text>Pick image</Text>
                </TouchableOpacity>
                { image && <Image style={styles.img} source={{uri: image}}/>}
            </View>
                );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    img: {
        height: 200,
        width: 300,
    },
    pkImg: {
      backgroundColor: 'red',
      padding: 10,
      margin: 10,
      borderRadius: 10,
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