
import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'


function App() {
 const [updateInfo, setUpdateInfo] = useState()
 const [formClose, setFormClose] = useState(true) 
 const { //destructuro para tenerlas disponibles en este nivel y pasarlas como props
  users,
  getAllUsers,
  createNewUser,
  deleteUserById,
  updateUserById
  }=useUserCrud() //ejecuto la funcion y me devuelve un objeto que destructuro 

  useEffect(() => {
    getAllUsers ()
  }, [])
  const handleOpenForm = () =>{
    setFormClose(false )
  }
  return (
  
      <div className='app'>
      <header className='app__header'>
          <h1 className='app__title'>Users</h1>
          <button onClick={handleOpenForm} className='app__btn'>Create New User</button>
      </header>
        <FormUser // le paso a FormUser las props que va a necesitar dentro de el 
          createNewUser={createNewUser} 
          updateInfo={updateInfo} // este es el estado con la info a actualizar
          updateUserById={updateUserById} //ojo que esta es la funcion de actualizacion
          setUpdateInfo={setUpdateInfo}
          setFormClose={setFormClose}
          formClose={formClose}

        /> 

           <div className='app__user-container'>{/*//este div envuelve a todas las */}
            {
              users?.map((user) => (
                <UserCard 
                key={user.id} //paso comp props
                user={user}
                deleteUserById={deleteUserById}
                setUpdateInfo={setUpdateInfo} //le mando setUpdateInfo a UserCard para que capture la informacion del usuario al que se le esta dando cik para actualizar.

                />
                
              ))
            }
             
          </div>
      </div>
  
  )
}

export default App
