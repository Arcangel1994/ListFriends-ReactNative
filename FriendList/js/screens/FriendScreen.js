import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, ScrollView } from 'react-native';


export default class FriendScreen extends React.Component {

    //Un titulo default de una vista
    static navigationOptions = ({navigation}) => {
      const friend = navigation.getParam('friend');
        return {
            title: `${friend.name.first} ${friend.name.last}`
        }
    }

    //Back
    //<Button title="Volver atras" onPress={() => navigation.goBack()}/>
    
    //ScrollView style no incluye el flex: 1 

    render() {

       const navigation = this.props.navigation;
       const friend = navigation.getParam('friend');

      return (
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.container}>
            <Image style={styles.image} source={{uri: friend.picture.thumbnail }}/>
            <Text>{ friend.name.first }</Text>
        </ScrollView>
      );
    }
  }

  const width = Dimensions.get('window').width * 0.75;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    scrollview: {
      backgroundColor: '#fff',
    },
    image: {
      width: width,
      height: width,
      marginBottom: 20,
    }
  });
  