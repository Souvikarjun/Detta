import React from 'react'
import GoogleLogin from 'react-google-login';
// import { useNavigation } from 'react-router-dom';
import{ FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

// import { client } from '../client';

const Login = () => {
  // const navigate = useNavigation();

  // const responseGoogle= (response) =>{
  //   localStorage.setItem('user', JSON.stringify(response.profileObj))
    
  //   const {name, googleId, imageUrl} = response.profileObj;
  //   const doc = {
  //     _id: googleId,
  //     _type: 'user',
  //     userName: name,
  //     image: imageUrl
  //   }

  //   client.createIfNotExist(doc)
  //     .then(() => 
  //       navigate('/*', { replace: true})
  //     )
  // }

  const responseGoogle = (response) =>{
    console.log(response);
  }

  
  
  return (
    <div className='flex justify-start item-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          type = 'video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-neutral-800 mix-blend-hard-light' >
          <div className='p-5'>
            <img src={logo} width='130px' alt='logo'/>
          </div>
          <div className='shadow-2xl'>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type='button'
                  className='bg-white flex justify-center item-center p-3 rounded-lg cursor-pointer outline-none'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className='m-1'/> Sign in with google

                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy='single_host_origin'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
