/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Styles,
  Button,
  Text,
  View,
  Component,
} from 'reactxp';


export default class dad_jokes extends Component {
  state = {joke: 'Press button for joke.'}
  handleButtonPress(e){
    this.setState({joke:'...'})
    fetch('https://icanhazdadjoke.com/', {headers:{Accept:'text/plain'}}).then(r=>r.text())
      .then(joke=>this.setState({joke}), e=>this.setState({joke:'Could not get Joke :('}))
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.jokeContainer}>
          <Text style={styles.joke}>
            {this.state.joke}
          </Text>
        </View>
        <Button onPress={()=>this.handleButtonPress()}>
          <Text style={styles.button}>New Joke !</Text>
        </Button>
      </View>
    );
  }
}

const styles = {
  container: Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }),
  jokeContainer: Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    flex:2,
  }),
  joke: Styles.createTextStyle({
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }),
  button: Styles.createButtonStyle({
    fontSize:30,
    paddingBottom: 10,
    marginBottom:10,
  }),
};
