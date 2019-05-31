import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import FriendListItem from '../components/FriendListItem'

export default class HomeScreen extends React.Component {

  //Quitar el navigation de una vista 
  //static navigationOptions = { header : null }
  static navigationOptions = ({navigation}) => {
    return {
        title: 'Your friends',
    }
  }

  state = { data: [], isLoading: true };

  _fetchData = async () => {

    //const data =  [
      //{ key: '1', first: 'Alice', last: 'Smith', email: 'Alice.Smith@example.com'},
      //{ key: '2', first: 'Bob', last: 'Lopez', email: 'Alice_Lopez@example.com'},
      //{ key: '3', first: 'Joe', last: 'Gay', email: 'Alice_Gay@example.com'},
      //{ key: '4', first: 'Jane', last: 'Campos', email: 'Alice.Campos@example.com'}
    //];

    //await new Promise(_ => setTimeout(_, 3000));

    //Randomuser.me
    try{
      const response = await fetch('https://randomuser.me/api/?results=500');

      const responseJSON = await response.json();

      this.setState({
        data: responseJSON.results,
        isLoading: false
      });
    }catch(error){
      alert('Sin conexión a internet');
      this.setState({
        isLoading: false
      });
    }
  }

  __refresh = () => {
    this.setState({isLoading: true});
    this._fetchData()
  }

  componentDidMount(){
    this._fetchData();
  }

    render() {
      if(this.state.isLoading)
      return(
        <View style={styles.container}>
          <ActivityIndicator size="large" color="darkorange" />
        </View>
      );
      return (
        <View style={styles.container}>

          <FlatList data={this.state.data}
          //Key Extra es por si no tiene el objeto una columna key
          keyExtractor={item => item.email}
          renderItem={ ({item}) => (<FriendListItem friend={item} onPress={() => this.props.navigation.navigate('FriendScreen', {friend: item})} />) }
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
          ListEmptyComponent={() => ( <Text style={styles.listEmpty} > No hay datos cargados </Text> )}
          refreshing={this.state.isLoading}
          onRefresh={this._refresh}
          />

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingTop: 5,
    },
    listSeparator: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: 'lightsalmon',
      marginVertical: 5,
    },
    listEmpty: {
      paddingTop: 100,
      fontSize: 32,
      textAlign: 'center',
    },
  });
  