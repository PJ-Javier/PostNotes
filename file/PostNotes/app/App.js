import React, {Component} from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import NotesList from './NotesList'
import TabBar from './TabBar'

let noteIndex = 0
class App extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: '',
      notes: [],
      type: 'All'
    }
    this.submitNote = this.submitNote.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
    this.setType = this.setType.bind(this)
  }
  setType (type) {
    this.setState({ type })
  }
  inputChange (inputValue) {
    console.log(' Input Value: ' , inputValue)
    this.setState({ inputValue })
  }
  submitNote () {
    if (this.state.inputValue.match(/^\s*$/)){
    return
    }
    const note = {
    title:this.state.inputValue,
    noteIndex,
    complete: false
    }
    noteIndex++
    const notes = [...this.state.notes, note]
    this.setState({notes, inputValue: ''}, () => {
      console.log('State: ', this.state)
    })
  }
  deleteNote (noteIndex) {
    let { notes } = this.state
    notes = notes.filter((note) => note.noteIndex !== noteIndex)
    this.setState({ notes })
  }
  toggleComplete (noteIndex) {
    let notes = this.state.notes
    notes.forEach((note) => {
      if (note.noteIndex === noteIndex) {
        note.complete = !note.complete
      }
    })
    this.setState({ notes })
  }
  render(){
    const { inputValue, notes, type } = this.state
    return(
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps = 'always'style={styles.content}>
        <Heading/>
        <Input
          inputValue={inputValue}
          inputChange={(text) => this.inputChange (text)} />
        <NotesList
        type={type}
          toggleComplete={this.toggleComplete}
          deleteNote={this.deleteNote}
          notes={notes} />
        <Button submitNote={this.submitNote} />
      </ScrollView>
      <TabBar type={type} setType={this.setType} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#0c0f2b'
  },
  content: {
  flex: 1,
  paddingTop: 60
  }
})
export default App