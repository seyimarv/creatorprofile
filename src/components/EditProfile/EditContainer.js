import React from 'react'
import {connect} from 'react-redux'
import EditProfile from './EditProfile'
import Loading from '../Loading/Loading'

const EditContainer = ({currentUser, history}) => {
    console.log(history)
    return (
        <div>
            {
              currentUser ?   <div>
               <EditProfile history={history} /> </div>: <Loading />
              
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  
  export default connect(mapStateToProps)(EditContainer)


 