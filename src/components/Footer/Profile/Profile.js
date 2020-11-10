import React from 'react'
import './profile.scss'
import {connect} from 'react-redux'
import {ReactComponent as Write} from '../../../assets/write.svg'
import {ReactComponent as Notes} from '../../../assets/ViewNotes.svg'
import  {ReactComponent as Questions} from '../../../assets/undraw_Questions_re_1fy7.svg'
import {Link} from 'react-router-dom'
import Loading from '../../Loading/Loading'


const ProfilePage = ({currentUser}) => {
  const {firstName, userName, secondName} = currentUser

   

    return (
      <div>
       { currentUser ? (<div className='profilepage pt-3'>
            <div className='container'>
               <div className='row'>
                <div className='col-lg-8 col-md-12 col-sm-12'>
                  <div className='box-1'>
                   <div className='container'>
                   <div className='row'>
                    <div className='col-12'>
                    
                    <header className='Dash pt-3' >Dashboard</header>
                  
                    <hr />
                    </div>
                     <div className='row'>
                     
                      
                      <div class="card ml-5 col-3" style={{width: 18 + "rem"}}>
                        <Write class="image" />
                        <hr />
                       <Link to={'/ProfilePage/CreateNote'} ><p>Write a note</p></Link>
                      
                    

                      </div>
                     
                        <div class="card ml-2 col-3" style={{width: 18 + "rem"}}>
                        <Notes class="image" />
                        <hr />
                        <Link to='ProfilePage/ViewNotes' > <p>view notes</p></Link>
                          
                       

                       </div>
                       
                       <div class="card ml-2 col-3" style={{width: 18 + "rem"}}>
                       <Questions class="image" />
                        <hr />
                        <Link to={'ProfilePage/CreateQuestions'}> <p>Answer questions</p> </Link>
                       </div>
                       </div>


                     </div>
                     <hr />
                     <div className='row'>
                     <Link to='AnswersCon'><p className='Answers col-12'>View Answers</p></Link>
                     </div>

                  </div>
                  </div>

                </div>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                  <div className='box-1'>
                    <div className='container'>
                     <div className='pb-5'>
                      <p className='title'>welcome back,</p>
                      <p className='title2'>{userName}</p>
                      <div className=' title3'>
                        <p className=''>Full Name:</p>
                        <p className='pl-2 '>{firstName}</p>
                        <p className='pl-2'>{secondName}</p>
                       </div>
                      </div>
                      <hr className=''/>
                      <div className='text-center'>
                     <Link to={'/ProfilePage/EditProfile'} firstName={firstName}><button type="submit" class="btn btn-primary text-center mt-2">Edit profile</button></Link>
                      </div>
                     </div>
                     
                      

                  </div>

                </div>

               </div>
            </div>
        </div>) : <div><Loading /></div>
        
       }
       </div>
    )
}



const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentAnswers: state.answer.currentAnswers


})


export default connect(mapStateToProps)(ProfilePage)