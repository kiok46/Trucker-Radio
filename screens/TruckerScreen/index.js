import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Colors from '../../constants/Colors';
import { Card } from '../../components/Card';


class TruckerScreen extends React.Component {

    static navigationOptions = ({ router, navigation }) => {

        return {
          header: (
              <View
                  style={{ backgroundColor: Colors.tintColor, flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack(null)}
                    style={{ marginTop: 24, height: 40, marginLeft: 5, flexDirection: 'row'}} >
                     <MaterialCommunityIcons name="arrow-left" size={24} style={{ color: 'white', }} />
                     <Text
                        style={{marginLeft: 15, fontSize: 18, color: 'white', fontWeight: 'bold' }}
                     >Trucker Radio</Text>
                  </TouchableOpacity>
                  <View>
                  </View>
              </View>
          )
       }
    };

  constructor(props){
      super(props)
  }

  onPressMe = () => {
      console.log(this.props.default_value);
      this.props.toggleProfileState(this.props.default_value)
  }

  pressedRender = () => {
      if (this.props.default_value === true){
          return (
             <Text>
                (Press Me: True)
             </Text>
          )
      }
      return (
         <Text>
            (Press Me: False)
         </Text>
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Card
            style={styles.TestContainerStyle}
        >
            <TouchableOpacity
                style={styles.TestTouchableStyle}
                onPress={this.onPressMe}
            >
              <Text
                style={{ color: 'white' }}
              >
                {this.pressedRender()}
              </Text>
            </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TestTouchableStyle: {
      height: 100,
      width: 100,
      backgroundColor: Colors.tintColor,
      alignItems: 'center',
      justifyContent: 'center',
  },
  TestContainerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
  }
});

const mapStateToProps = (state) => {
    return {
        default_value: state.TruckerReducer.default_value
    }
}

export default connect(mapStateToProps, actions)(TruckerScreen);
