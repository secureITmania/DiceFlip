import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Switch } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = { 
      dice1: require("./src/images/dice1.png"),
      dice2: require("./src/images/dice4.png")

    }
  }
  pickDiceImage1 = (num) => {
    switch (num) {
      
      case 1:
        this.setState({dice1: require("./src/images/dice1.png")})
        break;
      case 2:
        this.setState({dice1: require("./src/images/dice2.png")})
        break;
      case 3:
        this.setState({dice1: require("./src/images/dice3.png")})
        break;
      case 4:
        this.setState({dice1: require("./src/images/dice4.png")})
        break;
      case 5:
        this.setState({dice1: require("./src/images/dice5.png")})
        break;
      case 6:
        this.setState({dice1: require("./src/images/dice6.png")})
        break;
  }
}

pickDiceImage2 = (num2) => {
  switch (num2) {
    
    case 1:
      this.setState({dice2: require("./src/images/dice1.png")})
      break;
    case 2:
      this.setState({dice2: require("./src/images/dice2.png")})
      break;
    case 3:
      this.setState({dice2: require("./src/images/dice3.png")})
      break;
    case 4:
      this.setState({dice2: require("./src/images/dice4.png")})
      break;
    case 5:
      this.setState({dice2: require("./src/images/dice5.png")})
      break;
    case 6:
      this.setState({dice2: require("./src/images/dice6.png")})
      break;
}
}
  rollButtonTrigger = () => {
    a = this.getRandomNUmber();
    b = this.getRandomNUmber();

    this.pickDiceImage1(a)
    this.pickDiceImage2(b)
  }
  getRandomNUmber = () =>{
    var a = Math.floor(Math.random() * 6)+1;
    return a
  }

  render(){
    return(
      <View style={styles.container}>
       <View style={
         {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
         }
       }>
         
        <Image style={styles.imageSize}
        source={this.state.dice1}
        />
        <Image style={styles.imageSize}
        source={this.state.dice2}
        />
      </View>
        <TouchableOpacity
        onPress={this.rollButtonTrigger}>
        <Text style={styles.ClickToRollShape}>Click to Roll</Text>
        </TouchableOpacity>
      </View>
    )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ClickToRollShape: {
    marginTop: 35,
    fontSize: 20,
    color: "#26ae60",
    fontWeight: "bold",
    borderWidth: 2,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5

  },
  imageSize: {
    alignContent: "center",
    width: 150,
    height: 150,
  }
});
