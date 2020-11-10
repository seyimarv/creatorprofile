import React, {useState} from 'react'
import EditAnswers from './EditAnswers'




const Answer =({currentAnswers, currentUser, history}) => {
    const {nickname, sport, country, partner, hobby, pets, bestfriend, live} = currentAnswers
    const [Editing, setEditing] = useState(false)
    const {userName} = currentUser
    
    const onClick = () => {
        setEditing(true)
    }
    return (
       <div>

        { !currentAnswers ? <p>no answers yet</p> : <div>
{  Editing ? <EditAnswers currentAnswers={currentAnswers} currentUser={currentUser} setEditing={setEditing}/>  :    <div className='answers pt-5'>
            <div className='container'>
            <div className='row'>
            <div className='col-6 pt-5'>
            <p className='name'>{userName}!</p>
            </div>
            <div className='col-6 btn pt-5 pl-5'>
            <button type="button" class="btn btn-primary" onClick={onClick}>Edit</button>
            </div>
            </div>
                <div className='row'>
              
                    <div className="col-md-2"></div>
                        <div className='col-md-8'>
                            <div className='row'>
                            <div className='col-md-6 list'>
                            <h1 className='header'>nickname</h1>
                            <li class="list-group-item list-group-item-light">{nickname}</li>
                            </div>
                            <div className='col-md-6 list'>
                            <h1 className='header'>country</h1>
                            <li class="list-group-item list-group-item-light">{country}</li>
                            </div>
                            <div className='col-md-6 list'>
                            <h1 className='header'>sport</h1>
                            <li class="list-group-item list-group-item-light">{sport}</li>
                            </div>
                            <div className='col-md-6 list'>
                            <h1 className='header'>partner</h1>
                            <li class="list-group-item list-group-item-light">{partner}</li>
                            </div>
                            <div className='col-md-6 list'>
                            <h1 className='header'>hobby</h1>
                            <li class="list-group-item list-group-item-light">{hobby}</li>
                            </div>
                            <div className='col-md-6 list'>
                            <h1 className='header'>bestfriend</h1>
                            <li class="list-group-item list-group-item-light">{bestfriend}</li>
                            </div>
                            <div className='col-md-6 list'>
                            <h1 className='header'>pets</h1>
                            <li class="list-group-item list-group-item-light">{pets}</li>
                            </div>
                            <div className='col-md-6 list'>
                            <h1 className='header'>address</h1>
                            <li class="list-group-item list-group-item-light">{live}</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>}
    </div>}
    </div>
    )
}


export default Answer