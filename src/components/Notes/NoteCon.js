import React from 'react'
import {connect} from 'react-redux'
import NotesPage from './Notes'
import Loading from '../Loading/Loading'

const NoteCon = ({currentUser}) => {

    return (
        <div>
            {
              currentUser ?   <div>
               <NotesPage/> </div>: <Loading />
              
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  
  export default connect(mapStateToProps)(NoteCon)
