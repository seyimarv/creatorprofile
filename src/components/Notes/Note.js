import React  from 'react'
import {ReactComponent as Delete} from '../../assets/delete.svg'
import {deleteNote} from '../../redux/Notes/Notes.actions'
import {connect} from 'react-redux'
import firebase from '../../firebase/firebase'

const Note = ({id, title, text, deleteNote, isDeleted, currentUser}) => {
    const note = {id, title, text}
    const runOnDelete = () => {
       const noteDoc = firebase.firestore().collection('users').doc(currentUser.id).collection('notes').doc(id)
       noteDoc.delete()
       deleteNote(note)
    }
    return (
        // <div>
        //     {title}
        //     {text}
        //      <button >delete</button>
        // </div>
        <div class="card border-secondary" style={{width: 20 + "rem"}}>
            <div class="card-header">
           
            <p>{title}</p>
             <Delete onClick={() => runOnDelete()} title='delete' className='delete'/>
         
            </div>
            <div class="card-body text-secondary">
                <p class="card-text">{text}</p>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    isDeleted : state.note.isDeleted
})
   
const mapDispatchToProps = dispatch => ({
    deleteNote: note => dispatch(deleteNote(note))

})



export default connect(mapStateToProps, mapDispatchToProps)(Note)