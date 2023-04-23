
import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'


function App() {
 const [updateInfo, setUpdateInfo] = useState()
  const { //destructuro para tenerlas disponibles en este nivel y pasarlas como props
  users,
  getAllUsers,
  createNewUser,
  deleteUserById,
  updateUserById
  }=useUserCrud() //ejecuto la funcion y me devuelve un objeto que destructuro 

  useEffect(() => {
    getAllUsers
  }, [])
  
 
  return (
  
      <div>
       <h1>Users Hernan</h1>
        <FormUser // le paso a FormUser las props que va a necesitar dentro de el 
          createNewUser={createNewUser} 
          updateInfo={updateInfo} 
        /> 

          <div>
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
