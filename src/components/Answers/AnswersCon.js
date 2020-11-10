import React from 'react'
import {connect} from 'react-redux'
import Answers from './Answers'
import Loading from '../Loading/Loading'

const AnswersCon = ({currentUser, history}) => {

    return (
        <div>
            {
              currentUser ?   <div>
               <Answers currentUser={currentUser} history={history}/> </div>: <Loading />
              
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  
  export default connect(mapStateToProps)(AnswersCon)