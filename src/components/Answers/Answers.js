import React, { useEffect, useState } from 'react'
import './Answers.scss'
import {setCurrentAnswers} from '../../redux/Questions/Questions.actions'
import {connect}  from 'react-redux'
import firebase from '../../firebase/firebase'
import Loading from '../Loading/Loading'
import Answer from './Answer'



const Answers = ({setCurrentAnswers, currentUser, currentAnswers, history}) => {
    const [answers, setAnswersArray] = useState([])
    
    useEffect(() => {
        const answerRef =firebase.firestore().collection('users').doc(currentUser.id).collection('questions')
        answerRef.get().then(result => {
            const fetchedAnswers = [];
            result.forEach(doc => {
                const fetchedAnswer = {
                    id: doc.id,
                    ...doc.data()
                };
                fetchedAnswers.push(fetchedAnswer)
                setCurrentAnswers(fetchedAnswer)
              
                 
            })
            setAnswersArray(fetchedAnswers)
        })

    }, [])
    
  


    return (
        <>
       { answers.length === 0 ? <p className='answered'>You haven't answered the questions yet</p> :
       <>
        {
            currentAnswers ? <Answer currentAnswers={currentAnswers} currentUser={currentUser} history={history}/> : <Loading />
        }
        </>}
        </>
    
    
    )
}
const mapStateToProps = state => ({
    currentAnswers: state.answer.currentAnswers

})

const mapDispatchToProps = dispatch => ({
    setCurrentAnswers: answers => dispatch(setCurrentAnswers(answers))
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(Answers)