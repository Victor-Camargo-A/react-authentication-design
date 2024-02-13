import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { CiUnlock } from "react-icons/ci";
import { IoIosEye, IoIosEyeOff  } from "react-icons/io";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='bg-secundary-100 p-8 rounded-xl shadow-xl'>
      <h1 className='text-center text-3xl uppercase font-bold tracking-[5px] mb-8 text-amber-500'>Iniciar Sesión</h1>
      <form>
        <button className='flex items-center gap-4 justify-center w-full bg-secundary-900 py-2 px-4 rounded-full mb-3 hover:font-semibold'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' 
          className='w-4 h-4'/>
          Ingresa con Google
        </button>
        <button className='flex items-center gap-4 justify-center w-full bg-secundary-900 py-2 px-4 rounded-full mb-8 hover:font-semibold'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' 
          className='w-4 h-4'/>
          Ingresa con Facebook
        </button>
        
        <div className='relative mb-2 '>
          <HiOutlineMail className='absolute top-1/2 -translate-y-1/2 left-2' />
          <input
            type="email" 
            className='outline-none py-2 pl-8 pr-4 w-full bg-secundary-900 rounded-lg ' 
            placeholder='Correo Electrónico'
          />    
        </div>
        <div className='relative mb-2'>
          <CiUnlock className='absolute top-1/2 -translate-y-1/2 left-2' />
          <input
            type={showPassword ? "text" : "password"}
            className='outline-none py-2 px-8 pr-4 w-full bg-secundary-900 rounded-lg' 
            placeholder='Contraseña'
          />
          {showPassword ? ( <IoIosEye 
            onClick={() => setShowPassword(!showPassword)} 
            className='text-amber-500 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
          />):( <IoIosEyeOff 
            onClick={() => setShowPassword(!showPassword)} 
            className='text-amber-500 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
          />)
          }
        </div>
        <div className='flex items-center justify-center'>
          <button 
            type="submit" 
            className=' flex-1 bg-secundary-900 px-4 py-2 rounded-lg hover:bg-amber-500  transition-colors hover:text-secundary-900'
          >Ingresar</button>
        </div>
        <Link to="/auth/registro">
            <button 
              className='w-full  bg-secundary-900  py-2 mt-1 rounded-lg hover:bg-sky-800  transition-colors hover:text-secundary-900'
            >
              Registrar
            </button>
          </Link>
        <div className='mt-2'>
         <Link className='hover:text-primary transition-colors ' to="olvide-Password">¿Olvidaste tu contraseña?</Link> 
        </div>

      </form>
    </div>
  );
};
