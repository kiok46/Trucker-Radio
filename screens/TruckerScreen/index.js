import React from 'react';
import { ActivityIndicator, ScrollView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Colors from '../../constants/Colors';


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

  componentWillMount = () => {
      this.props.fetchData()
  }

  renderCoverImage = () => {
      if (this.props.isFetching === false){
          return (
              <Image
                 style={styles.imageStyle}
                 source={{ uri: this.props.data.cover }}
              />
          )
      } else {
          return (
              <View
                style={styles.imageStyle}
              >
                <ActivityIndicator />
              </View>

          )
      }
  }

  renderTitle = () => {
      return (
          <Text
            style={{ fontWeight: 'bold', marginLeft: 10, marginRight: 10 }}
          >
            {this.props.data.title}
          </Text>
      )
  }

  renderArtist = () => {
      return (
          <Text>
            {this.props.data.artist}
          </Text>
      )
  }

  render() {
    return (
      <View style={styles.container}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}
          >
            <View
                style={[styles.sideButtonStyle, {marginLeft: 5}]}
            >
            </View>
            {this.renderCoverImage()}
            <View
                style={[styles.sideButtonStyle, {marginRight: 5}]}
            >
            </View>
          </View>

          <View
            style={{ alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}
          >
            {this.renderTitle()}
            {this.renderArtist()}
          </View>

          <View>

          </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageViewStyle: {
      backgroundColor: Colors.tintColor,
      alignItems: 'center',
      justifyContent: 'center',
  },
  imageContainerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  sideButtonStyle: {
      backgroundColor: Colors.lighttintColor,
      width: 20,
      marginTop: 10,
      marginBottom: 10,
  },
  imageStyle: {
      height: 250,
      flex: 1,
      width: null,
      marginLeft: 20,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

const mapStateToProps = (state) => {
    return {
        data: state.TruckerReducer.data,
        isFetching: state.TruckerReducer.isFetching,
        error: state.TruckerReducer.error,
    }
}


export default connect(mapStateToProps, actions)(TruckerScreen);
