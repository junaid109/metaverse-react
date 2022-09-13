import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis';
function Login() {

    const { authenticate, isAuthenticated, isAuthenticating, user } = useMoralis();


  return (
    <div className='bg-black relative '>
    
        <h1>Login Screen </h1>

        <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
            <Image className='object-cover rounded-full' src="https://links.papareact.com/t4i" layout="fill" height={200} width={200} />
            
            <button onClick={() => authenticate} className='bg-blue-500 p-5 rounded-full text-white font-bold animate-pulse'>Login with Metamask</button>
        </div>



        <div className='w-full h-screen'>
            <Image
                src="https://links.papareact.com/55n"
                layout='fill'
                objectFit='cover'
            
            />

        </div>
    </div>

       
    

  )
}

export default Login