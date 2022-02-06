import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

const Input= ({ inputValue, inputChange }) => (
  <View style={styles.inputContainer}>
    <TextInput
   value={inputValue}
   style={styles.input}
   placeholder = 'Add your notes here!'
   placeholderTextColor = 'black'
   selectionColor='red'
   onChangeText={inputChange}/>
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
  marginLeft: 25,
  marginRight: 25,
  shadowOpacity: 0.2,
  shadowRadius: 3,
  shadowColor: '#000000',
  shadowOffset: {width: 2, height: 2}
  },
  input: {
  height: 50,
  backgroundColor: '#ffffff',
  paddingLeft: 15,
  paddingRight: 15,
  }
})

export default Input