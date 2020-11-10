import React, {useEffect} from 'react';
import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/User.actions'
import SignUp from './components/SignUp/SignUp'
import Login from './components/LogIn/Login';
import { auth, createUserProfile } from './firebase/firebase';


import CreateNoteContainer from './components/Createnote/CreateNoteCon';
import EditContainer from './components/EditProfile/EditContainer';
import ProfileContainer from './components/Footer/Profile/ProfileContainer';
import NoteCon from './components/Notes/NoteCon';
import AnswersCon from './components/Answers/AnswersCon'
import CreateQuestionsCon from './components/CreateQuestions/CreateQuestionsCon';


const App = ({currentUser, setCurrentUser}) =>  {

  let unsubscribeFromAuth = null;
  useEffect(() => { 
  
     
     unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        console.log(userRef)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
       
    });

     return () => {
       unsubscribeFromAuth();
     }
 }, [])
 
 
   return (
   <div>
     <Header currentUser={currentUser}/>
      <Switch>
      <Route exact path = '/' component={Home}/>
      <Route
            exact
            path='/login'
            render={() =>
              currentUser ? (
                <Redirect to='/ProfilePage' />
              ) : (
                 <Login/>
              )
            }
          />
      
      <Route
            exact
            path='/Signup'
            render={() =>
              currentUser ? (
                <Redirect to='/ProfilePage' />
              ) : (
                 <SignUp/>
              )
            }
          />

         <Route exact path='/ProfilePage' component={ProfileContainer} /> 
         <Route path = '/ProfilePage/Editprofile' component={EditContainer}  />
         <Route path='/ProfilePage/CreateNote' component={CreateNoteContainer} />
         <Route path='/ProfilePage/ViewNotes' component={NoteCon} />
         <Route path='/ProfilePage/CreateQuestions' component={CreateQuestionsCon} />
         <Route path='/AnswersCon' component={AnswersCon} />

      </Switch>
      <Footer />
    </div>
   )

}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
  

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);





