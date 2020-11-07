import React from 'react'
import {connect} from 'react-redux'
import CreateQuestions from './Createquestions'
import Loading from '../Loading/Loading'

const CreateQuestionsCon = ({currentUser}) => {

    return (
        <div>
            {
              currentUser ?   <div>
               <CreateQuestions/> </div>: <Loading />
              
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  
  export default connect(mapStateToProps)(CreateQuestionsCon)