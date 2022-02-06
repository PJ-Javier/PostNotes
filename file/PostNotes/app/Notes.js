import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NoteButton from './NoteButton'

const Notes = ({ note, toggleComplete, deleteNote }) => (
  <View style={styles.noteContainer}>
    <Text style={styles.noteText}>{note.title}</Text>
  <View style={styles.buttons}>
    <NoteButton
    name='Done'
    complete={note.complete}
    onPress={ () => toggleComplete (note.noteIndex)} />
    <NoteButton
    name='Del'
    onPress={ () => deleteNote (note.noteIndex)} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  noteContainer:{
  marginLeft: 25,
  marginRight: 25,
  backgroundColor: '#ffffff',
  borderTopWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderColor: '#ededed',
  paddingLeft: 15,
  paddingTop: 7,
  paddingBottom: 7,
  shadowOpacity: 0.2,
  shadowRadius: 3,
  shadowColor: '#000000',
  shadowOffset: { width:2, height: 2 },
  flexDirection: 'row',
  alignItems: 'center'
  },
  noteText: {
  fontSize: 18
  },
  buttons: {
  flex:1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center'
  },
})

export default Notes