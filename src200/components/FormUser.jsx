import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import './styles/formUser.css'

const FormUser = ({createNewUser,updateInfo,updateUserById,setUpdateInfo,setFormClose,formClose}) => {

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
  
   
   const handleClose = () =>{
   setFormClose(true)
   }


    useEffect(() => {
      reset(updateInfo) 
    }, [updateInfo])
    


  return (
   <div className={`form__container ${formClose ? 'close' : ''}`}>
   
   <form className='form' onSubmit={handleSubmit(submit)}>
      
       <h3 className='form__title'>{ updateInfo ?'Update User Information' :' ➕ Create New User'}</h3>
       <span onClick={handleClose} className='form__exit'>✖</span>
      
      <div className='form__item'>
        <label className='form__label' htmlFor="email">Email</label>
        <input className='form__input' {...register('email')} type="email" id="email" required />
      </div>

      <div className='form__item'>
        <label className='form__label' htmlFor="password">Password</label>
        <input className='form__input' {...register('password')}type="password" id="password" required/>
      </div>

      <div className='form__item'>
        <label className='form__label' htmlFor="first_name">First Name</label>
        <input className='form__input' {...register('first_name')} type="text" id="first_name" required/>
      </div>

      <div className='form__item'>
        <label className='form__label' htmlFor="last_name">Last Name</label>
        <input className='form__input' {...register('last_name')} type="text" id="last_name" required/>
      </div>
 
      <div className='form__item'>
        <label className='form__label' htmlFor="birthday">Birthdat</label>
        <input className='form__input' {...register('birthday')} type="date" id="birthday" required/>
      </div>

      <button className='form__btn'>{updateInfo ? "Update" :"Create"}</button>

    </form>

    </div>
  )
}

export default FormUser