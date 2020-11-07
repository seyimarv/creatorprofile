import React, {useState, useEffect} from 'react'
import {setCurrentNoteArray} from '../../redux/Notes/Notes.actions'
import firebase from '../../firebase/firebase'
import {connect} from 'react-redux'
import Note from './Note'
import './Notes.scss'
const NotesPage = ({currentUser, setCurrentNoteArray, noteArray}) => {
    const {id} = currentUser
    const [notesArray, setNotesArray] = useState([])
    

    useEffect(() => {
        const userRef= firebase.firestore()
        const noteRef = userRef.collection('users').doc(id).collection('notes');
        noteRef.get().then(result => {
            const fetchedNotes = [];
            result.forEach(doc => {
                const fetchedNote = {
                  id: doc.id,
                  ...doc.data()
                };
                fetchedNotes.push(fetchedNote);
                
               
                
            }
            )
            setCurrentNoteArray(fetchedNotes)
            
            
            
        })
    }, [])
   

    return(
        <div className='notess'>
        { noteArray.length === 0 ? <p className='note'>no notes yet</p> :
        <div className='notes container pt-5'>
        <div className='row notess'>
         {   
            
             noteArray.map(({id, ...otherProps}) => (
               
                 <div className="col-md-6 col-sm-12 col-lg-4">
                  <div className='cards'>
                   <Note key={id} id= {id} currentUser={currentUser} {...otherProps}/>
                   </div>
                  
                </div> 
             )
             )
         }
         </div>

        </div>}
        </div>
    )
}
const mapStateToProps = state => ({
    noteArray: state.note.currentNoteArray,
    currentUser: state.user.currentUser
  })


const mapDispatchToProps = dispatch => ({
        setCurrentNoteArray: noteArray => dispatch(setCurrentNoteArray(noteArray))
    
})



export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);