import React from 'react'
import {connect} from 'react-redux'
import Answers from './Answers'
import Loading from '../Loading/Loading'

const AnswersCon = ({currentUser}) => {

    return (
        <div>
            {
              currentUser ?   <div>
               <Answers currentUser={currentUser} /> </div>: <Loading />
              
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  
  export default connect(mapStateToProps)(AnswersCon)