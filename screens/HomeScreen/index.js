import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: "Home",
        headerTintColor: Colors.tintColor
    };

  constructor(props){
      super(props)
  }

  OpenTrucker = () => {
      this.props.navigation.navigate("Trucker")
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabBarInfoContainer}>
            <TouchableOpacity
              onPress={this.OpenTrucker}
            >
              <Text style={styles.tabBarInfoText}>
                Tap to Open Trucker.
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
