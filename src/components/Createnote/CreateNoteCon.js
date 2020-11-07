import React from 'react'

import {connect} from 'react-redux'
import CreateNote from './CreateNotes.js'
import Loading from '../Loading/Loading'

const CreateNoteContainer = ({currentUser}) => {

    return (
        <div>
            {
              currentUser ?   <div>
               <CreateNote /> </div>: <Loading />
              
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  
  export default connect(mapStateToProps)(CreateNoteContainer)
