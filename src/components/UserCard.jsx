import React from 'react'

const UserCard = ({user,deleteUserById,setUpdateInfo}) => {

    const handleDelete = () =>{
          deleteUserById(user.id) //le asigno el id del elemento actual que entra como props
        }
  
    const handleUpdate = () =>{
        setUpdateInfo(user)

    }

  return ( 
    <article>
    <h2>{user.first_name} {user.last_name}</h2> 
    <ul>
        <li><span>Email</span><span>{user.email}</span></li>
        <li><span>Birthday</span><span>{user.birthday}</span></li>
    </ul>   

    <footer>
        <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button onClick={handleUpdate}><i className='bx bx-edit'></i></button>
    </footer>
    </article>
  )
}

export default UserCard