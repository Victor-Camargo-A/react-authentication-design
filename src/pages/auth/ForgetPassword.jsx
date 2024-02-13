import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { CiUnlock } from "react-icons/ci";
import { IoIosEye, IoIosEyeOff  } from "react-icons/io";

export const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='bg-secundary-100 p-8 rounded-xl shadow-xl w-[400px] text-center'>
      <h1 className='text-3xl uppercase font-bold tracking-[5px] mb-8 text-amber-500'>Recuperar Contraseña</h1>
      <form>
        
        
        <div className='relative mb-8 '>
          <HiOutlineMail className='absolute top-1/2 -translate-y-1/2 left-2' />
          <input
            type="email" 
            className='outline-none py-2 pl-8 pr-4 w-full bg-secundary-900 rounded-lg ' 
            placeholder='Correo Electrónico'
          />    
        </div>
      
        <div className='flex items-center justify-center'>
          <button 
            type="submit" 
            className=' flex-1 bg-secundary-900 px-4 py-2 rounded-lg hover:bg-amber-500  transition-colors hover:text-secundary-900'
          >Enviar Instrucciones</button>
        </div>
        <div className='text-center mt-4'>
         <Link  to="/auth">¿Ya tienes Cuenta? <span className='  text-amber-500 hover:text-primary'>Ingresa</span></Link> 
        </div>  
        <div className='text-center'>
         <Link  to="/auth/registro">¿No tienes Cuenta? <span className='  text-amber-500 hover:text-primary'>Registrate</span></Link> 
        </div>         

      </form>
    </div>
  );
};
