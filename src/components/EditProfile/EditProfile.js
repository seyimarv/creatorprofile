import React, {useState} from 'react'
import './EditProfile.scss'
import {connect} from 'react-redux'
import firebase from '../../firebase/firebase'



const EditProfile = ({currentUser}) => {
    const [userDetails, setUserDetails] = useState(currentUser)
    const {id, firstName, userName, secondName} = userDetails

    
    

   
    const handleSubmit =  event => {
        event.preventDefault();

        const userRef= firebase.firestore()
        userRef.collection('users').doc(id).update({
             userName: userName,
             secondName: secondName,
             firstName: firstName
        })

        setUserDetails({
            userName: '',
            secondName: '',
            firstName: ''
        })

    }

    const  handleChange = event => {
        const { name, value } = event.target;
      
        setUserDetails({...userDetails, [name]: value });
        console.log(firstName)
      };
    
    return (
        <div className='edit pt-3'>
                
           <div className='container'>
                <p className='title'>Edit Profile</p>
                <form className='form' onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col pt-3">
                            <input type="text" class="form-control" placeholder="First name" onChange={handleChange} required value={firstName} name='firstName' />
                            </div>
                           
                        </div>
                        <div class="row pt-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" onChange={handleChange} required value={secondName} name='secondName' />
                            </div>
                            </div>
                        <div class="row pt-3">
                            <div class="col">
                            <input type="text" class="form-control" placeholder="Username" onChange={handleChange} required value={userName} name='userName' />
                            </div>
                        </div>
                        <div className='button'>
                        <button type="submit"  class="btn btn-secondary mt-5 ">Edit</button>
                        </div>
                </form>
                
                
                </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  
  
 export default connect(mapStateToProps)(EditProfile)