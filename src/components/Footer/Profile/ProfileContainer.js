import React from 'react'
import {connect} from 'react-redux'
import ProfilePage from './Profile'
import Loading from '../../Loading/Loading'
import './profileCon.scss'



const ProfileContainer = ({currentUser}) => {
    return (
        <div className='profileCon'>
        {
            currentUser ? <ProfilePage /> : <Loading />
        }

        </div>
    )
}


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  
  export default connect(mapStateToProps)(ProfileContainer)