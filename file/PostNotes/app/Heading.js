import React, {Component} from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Heading = () => (
  <View style={styles.header}>
   <Text style={styles.headerText}>PostNotes</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
  marginTop: 15
  },
  headerText: {
  textAlign: 'center',
  fontSize: 73,
  color: 'rgba(215, 212, 23, 1)',
  fontWeight: '100'
  }
})

export default Heading