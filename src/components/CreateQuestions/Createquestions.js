import React, {useState} from 'react'
import './createquestions.scss'
import firebase from '../../firebase/firebase'
import {connect} from 'react-redux'



const CreateQuestions = ({currentUser}) => {
    const {id} = currentUser
   const [answers, setAnswers] = useState({
       nickname: '',
       sport: '',
       country: '',
       partner: '',
       hobby: '',
       pets: '',
       bestfriend: '',
       live: ''

   })
   const {nickname, sport, country, partner, hobby, pets, bestfriend, live} = answers

   const  handleChange = e => {
    const { name, value } = e.target;

    setAnswers({...answers, [name]: value });
  };

  const onSubmit = async (e) => {
      e.preventDefault()
  try {
    const queRef = firebase.firestore().collection('users').doc(id).collection('questions')
   await queRef.add({
        nickname: nickname,
        sport: sport,
        country: country,
        partner: partner,
        hobby: hobby,
        pets: pets,
        bestfriend: bestfriend,
        live: live
    })
    
    setAnswers({
        nickname: '',
        sport: '',
        country: '',
        partner: '',
        hobby: '',
        pets: '',
        bestfriend: '',
        live: ''
      })
  } catch (error) {
    console.error(error);
  }
     
  }


    return (
        <div className='createQuestions pt-5'>
         <div className='container'>
         <form  onSubmit={onSubmit}>
          <div className='row'>
           <div className='col-12'>
             <p className='title'>Answers some questions about yourself</p>
           </div>
           <div className='col-lg-6 col-md-12 col-sm-12'>
               <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">what's your nickname?</span>
                    </div>
                    <input type="text" class="form-control" onChange={handleChange} name='nickname' value={nickname} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">what's your favourite sport?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} name='sport' value={sport} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">what is the name of your country?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} name='country' value={country} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">what is the name of your partner?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} name='partner' value={partner} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">what is your hobby?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} aria-label="Sizing example input" name='hobby' value={hobby} aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">who is your bestfriend?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} aria-label="Sizing example input" name='bestfriend' value={bestfriend} aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">do you like pets?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} aria-label="Sizing example input" name='pets' value={pets} aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">where do you live</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} aria-label="Sizing example input" name='live' value={live} aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
          </div>
                   <div className='button text-center'>
                        <button type="submit" class="btn btn-primary mt-3">Submit Answers</button>
                        </div>
           
          </form>
         </div>

        </div>
    )
}


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  
  export default connect(mapStateToProps)(CreateQuestions)



