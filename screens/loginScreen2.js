import { StatusBar } from "expo-status-bar";
import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack";
import {AsyncStorage} from '@react-native-async-storage/async-storage';

const userInfo = {username:'admin', password:'pass12345'}

class HomeScreen extends Component {
  static navigationOptions = {
      header:null
  }

  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }

  render(){
      return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#1e90ff" barStyle="light-content" />
        <Text style={styles.welcome}>Login to My App</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Username"
          onChangeText={(username)=>this.setState(({username}))} 
          value={this.state.username}
          autoCapitalize="none"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry 
          onChangeText={(password)=>this.setState(({password}))} 
          value={this.state.password}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userBtn}
            //onPress={() => this.props.navigation.navigate('Details')}
            onPress={this._login}
         >
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => alert("Login Works")}
          >
            <Text style={styles.btnTxt}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _login = async()=>{
    if(userInfo.username === this.state.username && userInfo.password === this.state.password){
      this.props.navigation.navigate('Details')
    }else{
      alert('log in failed')
    }
  }
}


class DetailsScreen extends Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
  
}

const RootStack = createStackNavigator(
  {
    Home:HomeScreen,
    Details:DetailsScreen
  },
  {
    initialRouteName:'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render(){
      return(
        <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1e90ff",
    alignItems: "center",
  },
  welcome: {
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  userBtn: {
    backgroundColor: "#FFD700",
    padding: 15,
    width: "45%",
  },
  btnTxt: {
    fontSize: 18,
    textAlign: "center",
  },
});
