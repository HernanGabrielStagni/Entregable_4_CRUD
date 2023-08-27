import React from 'react'
import './styles/userCard.css'
const UserCard = ({user,deleteUserById,setUpdateInfo}) => {

    const handleDelete = () =>{
          deleteUserById(user.id) //le asigno el id del elemento actual que entra como props
        }
  
    const handleUpdate = () =>{
        setUpdateInfo(user)

    }

  return ( 
    <article className='user'>
    <h2 className='user__name'>{user.first_name} {user.last_name}</h2> 
    <ul className='user__list'>
        <li className='user__item'>
          <span className='user__label' >Email: </span>
          <span className='user__value'>{user.email}</span>
        </li>
        <li className='user__item'>
          <span className='user__label'>Birthday: </span>
          <span className='user__value'>{user.birthday}</span>
        </li>
    </ul>   

    <footer className='user_footer'>
        <button className='user__btn user__delete' onClick={handleDelete}><i className='bx bx-trash user__icon'></i></button>
        <button className='user__btn user__update user__icon' onClick={handleUpdate}><i className='bx bx-edit'></i></button>
    </footer>
    </article>
  )
}

export default UserCard