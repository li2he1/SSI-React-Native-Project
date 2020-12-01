import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login to my App</Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
         <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry 
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => alert("Login Works")}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#1e90ff'
  },
  welcome:{
    fontSize: 30,
    textAlign: 'center',
    margin:10,
    color:"#fff"
  },
  input:{
    width:"90%",
    backgroundColor:"#fff",
    padding:15,
    marginBottom:10
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
