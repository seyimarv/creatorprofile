import React, { useState } from 'react'
import './edit.scss'
import firebase from '../../firebase/firebase'

const EditAnswers = ({currentUser, currentAnswers, setEditing}) => {
    const {id} = currentUser
    const {nickname, sport, country, partner, hobby, pets, bestfriend, live} = currentAnswers
    const [answers, editAnswers] = useState({
        newnickname: nickname,
        newsport:sport,
        newcountry: country,
        newpartner: partner,
        newhobby: hobby,
        newpets: pets,
        newbestfriend:bestfriend,
        newlive: live
    })
    const {newnickname, newsport, newcountry, newpartner, newhobby,newpets, newbestfriend, newlive} = answers
    const  handleChange = e => {
        const { name, value } = e.target;
    
        editAnswers({...answers, [name]: value });
      };
 
      const onSubmit = async e => {
          e.preventDefault()

      { const ansRef = firebase.firestore().collection('users').doc(id).collection('questions').doc(currentAnswers.id)
          await ansRef.set({
              nickname: newnickname,
              sport: newsport,
              country: newcountry,
              partner: newpartner,
              hobby: newhobby,
              pets: newpets,
              bestfriend: newbestfriend,
              live: newlive

          })
      
         await editAnswers({
              newnickname: '',
              newbestfriend: '',
              newhobby: '',
              newlive: '',
              newpartner: '',
              newpets: '',
              newcountry: '',
              newsport: ''
          }) 
          alert('Answers Edited')
      }}
    
    
    return (
        <div className='edi pt-3'>
         <div className=' container con'>
         <form onSubmit={onSubmit}>
          <div className='row'>
           <div className='col-12'>
             <p className='title'>Edit your Answers</p>
           </div>
           <div className='col-lg-6 col-md-12 col-sm-12'>
               <div class="input-group input-group-sm mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">what's your nickname?</span>
                    </div>
                    <input type="text" class="form-control" onChange={handleChange} name='newnickname' value={newnickname} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">what's your favourite sport?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} name='newsport' value={newsport} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">what is the name of your country?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} name='newcountry' value={newcountry} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">what is the name of your partner?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} name='newpartner' value={newpartner} required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">what is your hobby?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} aria-label="Sizing example input" name='newhobby' required value={newhobby} aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">who is your bestfriend?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} aria-label="Sizing example input" name='newbestfriend' required value={newbestfriend} aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">do you like pets?</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} aria-label="Sizing example input" name='newpets' required value={newpets} aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div class="input-group input-group-sm mb-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">where do you live</span>
                        </div>
                        <input type="text" class="form-control" onChange={handleChange} aria-label="Sizing example input" name='newlive' required value={newlive} aria-describedby="inputGroup-sizing-sm"/>
                    </div>

            </div>
          </div>
                   <div className='button text-center'>
                        <button type="submit" class="btn btn-primary">Submit Answers</button>
                        </div>
           
          </form>
         </div>

        </div>
    )
}








export default EditAnswers