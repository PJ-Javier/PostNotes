import React from 'react'
import { View } from 'react-native'
import Notes from './Notes'

const NotesList = ({ notes, deleteNote, toggleComplete, type }) => {
  const getVisibleNotes = (notes, type) => {
    switch (type) {
      case 'All' :
      return notes
      case 'Complete' :
      return notes.filter((t) => t.complete)
      case 'Pending' :
      return notes.filter((t) => !t.complete)
    }
  }
  notes = getVisibleNotes(notes, type)
  notes = notes.map((note, i) => {
    return (
      <Notes
        deleteNote={deleteNote}
        toggleComplete={toggleComplete}
        key={note.noteIndex}
        note={note} />
    )
  })
  return (
    <View>
      {notes}
    </View>
  )
}

export default NotesList