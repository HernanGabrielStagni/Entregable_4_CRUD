import axios from "axios"
import { useState } from "react"

const useUserCrud = () =>{
    const [users, setUser] = useState() //para guardar la info de la api
    const url="https://users-crud.academlo.tech/users/" //netlify no deja si el sitio no es https

    //GET - llamamos a la informacion
    // creo una funcion que peticiona getAllUsers

    const getAllUsers = () =>{
       axios.get(url)
       .then (res=>setUser(res.data))
       .catch(err =>console.log(err))

    }

    //POST
    const createNewUser = (data) =>{  //la data no viene de la nada, asi que, ya que se obtiene dentro de hay que recibirla como parametro
    axios.post(url,data)
      .then(res => getAllUsers()) //no hace falta la url porque esta declarada en el nivel superior en useUserCrud, por lo que solo se usa.
      .catch(err => console.log(err))
    }   
    //DELETE
    const deleteUserById = (id) =>{ //debo recibir el id de algun lado
      const urlDelete=`${url}${id}/`// hay que hacer una nueva url porque el delete usa un id para identificar
      axios.delete(urlDelete) //ya la url tiene el id
         .then(res=> getAllUsers()) //actualizo la informacion de los usuarios
         .catch(err=> console.log(err))
    }    


    //UPDATE
    const updateUserById = (id,data) =>{
         
       const urlUpdate=`${url}${id}/`
         axios.patch(urlUpdate,data) //ubica el usuario y lo actualiza 
            .then(res => getAllUsers()) // .then( () => getAllUsers()) ...se puede hacer asi tambien ya que res no lo usamos
            .catch(err => console.log (err)) //en cambio aqui el err si nos sirve para guardar el error

    }


    //........................................................
     return { // Acordarse del retorno de cada funcionalidad en este objeto
        users,
        getAllUsers,
        createNewUser,
        deleteUserById,
        updateUserById  
     }
}
export default useUserCrud