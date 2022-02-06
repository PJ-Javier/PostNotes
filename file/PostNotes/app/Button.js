import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Button = ({ submitNote }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor='#efefef'
      style={styles.button}
      onPress={submitNote}>
      <Text style={styles.submit}>Add</Text>
    </TouchableHighlight>
  </View>
)

const styles = StyleSheet.create({
  buttonContainer:{
  alignItems: 'flex-end'
  },
  button:{
  height: 35,
  paddingLeft: 20,
  paddingRight: 20,
  backgroundColor: '#ffffff',
  width: 100,
  marginRight: 150,
  marginTop: 20,
  borderWidth: 1,
  borderColor: 'rgba(180, 150, 0, .1)',
  justifyContent: 'center',
  alignItems: 'center'
  },
  submit:{
  color: 'black',
  fontWeight: '400'
  }
})
export default Button