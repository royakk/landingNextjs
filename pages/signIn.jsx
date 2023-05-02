import React from 'react';
import { signIn } from 'next-auth/react';

import signUpcss from '../styles/signUp.module.css';
import UserName from '../src/components/UserName/UserName';
import Password from '../src/components/Password/Password';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiUser } from "react-icons/fi";
export default function signUp() {
  return (
   
   <div className={signUpcss.main}>
    <div className={signUpcss.container}>
        <div className={signUpcss.left}>
          <div className={signUpcss.title}>
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
            className={signUpcss.title}
          />
            </div>
          <div className={signUpcss.items}>
            <h1 className={signUpcss.h1} >Sign In for Pilmo</h1>
          <div  className={signUpcss.googlecontainer}>
            <button className={signUpcss.googlebtn}>
              <div className={signUpcss.googleicon}>
              <img src='/icons8.png'/>
              
              </div>
                <span className={signUpcss.span} >
                  Sign In with Google
                </span>
                
            </button>
          </div>
          <div className={signUpcss.textcontainer}>
              <div className={signUpcss.text}>
                Or sign up with e-mail
              </div>
              </div>
          <div className={signUpcss.inputs}>
          <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Please enter your username'),
          password: Yup.string().required('Please enter your password'),
          
        })}
        onSubmit={async (values) => {
          console.log("value of formik",values);
          const res = await signIn('credentials', {
            username: values.username,
            password: values.password,
            callbackUrl: 'http://localhost:3000/contact',
          });
        
         
        }}
      >
        {(formik) => (
          <form  className={signUpcss.form} onSubmit={formik.handleSubmit}>
          <div className={signUpcss.username}>
                    <UserName
                    margin="normal"
                    required
                    id="username"
                    label="user name"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    formik={formik}
                  />
              </div>   
          <div className={signUpcss.username}>
                    <Password
                    
                    margin="normal"
                    required
                    id="password"
                    label="password"
                    name="password"
                    autoComplete="password"
                    autoFocus
                    formik={formik}
                  />
              </div>
              <div className={signUpcss.submitbtn}>
              <button
                    type="submit"
                    className={signUpcss.btn}
                  >
                    <FiUser className={signUpcss.usericon} size='1.5rem'/>
                    {formik.isSubmitting ? 'Please wait...' : 'Sign In'}
                  </button>
              </div> 
              <span className={signUpcss.signUptext}>Do you have any Account?<a href='/signUp' className={signUpcss.ClickHere}>Click Here</a></span>  
          </form>
        )}
        </Formik>
          </div>
          </div> 
        </div>
    <div className={signUpcss.right}>
      <div >
        <img src={'/img.png'} className={signUpcss.imgContainer} />
      </div>
    </div>
    </div>

   </div>
   
  )
}
