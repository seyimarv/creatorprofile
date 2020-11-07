import React from 'react'
import {connect} from 'react-redux'
import EditProfile from './EditProfile'
import Loading from '../Loading/Loading'

const EditContainer = ({currentUser}) => {

    return (
        <div>
            {
              currentUser ?   <div>
               <EditProfile /> </div>: <Loading />
              
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  
  export default connect(mapStateToProps)(EditContainer)


 