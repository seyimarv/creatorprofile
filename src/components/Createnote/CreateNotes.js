import React, {useEffect, useState} from 'react'
import './Notes.scss'
import {connect} from 'react-redux'
// import {setCurrentNote} from '../../redux/Notes/Notes.actions'
import firebase from '../../firebase/firebase'
// import {convertNotesSnapshotToMap} from '../../firebase/firebase'
import firestore from '../../firebase/firebase'

const CreateNote = ({currentUser}) => {
    const [note, setNote] = useState({title:'', text: ''})
     const {text, title} = note
     const {id} = currentUser


     const onChange = e => {
         const {name, value} = e.target

         setNote({...note, [name]: value})
     }
      const onSubmit = () => {
        const userRef= firebase.firestore()
        userRef.collection('users').doc(id).collection('notes').add({
            text: text,
            title: title
        })
          setNote({
              text: '',
              title: ''
          })
      }


    



    return (
        <div className='notes pt-3'>
         <div className='container pt-3'>
         <form>
          <div className='row'>
          <div className='title'>
          <input class="form-control form-control-sm" type="text" onChange={onChange} name='title' maxLength={50} value={title} placeholder="write title here, max of 50 characters" />
          </div>
           <div class="form-group textarea pt-3">
               
                <textarea class="form-control textarea" id="exampleFormControlTextarea1" placeholder='write text here, max of 500 characters' onChange={onChange} name='text' value={text} maxLength={500} rows="3"></textarea>
            </div>
          </div>
          <div className='text-center pt-5'>
          <button type="button" class="btn btn-primary" onClick={onSubmit}>Submit</button>
          
          </div>
          </form>

         </div>

        </div>
    )
}
 

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  
  
 export default connect(mapStateToProps)(CreateNote)


