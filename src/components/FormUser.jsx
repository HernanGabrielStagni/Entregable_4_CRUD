import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'


const FormUser = ({createNewUser,updateInfo,updateUserById,setUpdateInfo}) => {

    const{register,handleSubmit,reset}=useForm() //destructuro lo que me trae el hook
   
    /*todo lo que registramos en los input lo esta enviandpo a submit*/
    const submit = (data ) =>{ 
        
        if(updateInfo){
             //actualizo. necesito id y la info. 
             updateUserById(updateInfo.id,data)// va data porque es lo nuevo que esta en el formulario, en cambio en el estado esta lo viejo
             setUpdateInfo()
        }else{
          createNewUser(data)
        }
      
        reset(defaultValues)
    }

    useEffect(() => {
      reset(updateInfo) 
    }, [updateInfo])
    


  return (
   <>
   <form onSubmit={handleSubmit(submit)}>

      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')}type="password" id="password" />
      </div>

      <div>
        <label htmlFor="first_name">First Name</label>
        <input {...register('first_name')} type="text" id="first_name" />
      </div>

      <div>
        <label htmlFor="last_name">Last Name</label>
        <input {...register('last_name')} type="text" id="last_name" />
      </div>
 
      <div>
        <label htmlFor="birthday">Birthdat</label>
        <input {...register('birthday')} type="date" id="birthday" />
      </div>

      <button>{updateInfo ? "Update" :"Create"}</button>

    </form>

    </>
  )
}

export default FormUser