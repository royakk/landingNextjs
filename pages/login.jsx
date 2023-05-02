import {useState} from 'react';
import { signIn } from 'next-auth/react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import UserName from '../src/components/UserName/UserName';
import Password from '../src/components/Password/Password';

export default function SignIn({ csrfToken }) {
  const router = useRouter();
  const [error, setError] = useState(null);

  return (
    <>
    
     
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
        
          if (res?.error) {
            setError(res.error);
            router.push('/404')
          } else {
            setError(null);
           
          }
          res.json().then((data) => {
            if(data.errors != null){
              alert(data.errors[0].text)
            }
            console.log("backend errrrrror",data);
          
           
        });
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div 
            className="bg-blue-200 flex flex-col items-center 
            justify-center min-h-screen py-2 shadow-lg">
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-600 font-bold"
                  >
                    username
                    <UserName
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="user name"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    formik={formik}
                  />
                  </label>

                  
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 font-bold"
                  >
                    password
                    <Password
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      formik={formik}
                    />
                  </label>

                </div>
                <div className="mb-6">
                 
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-gray-100 p-3 rounded-lg w-full"
                  >
                    {formik.isSubmitting ? 'Please wait...' : 'Sign In'}
                  </button>
                  
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
      
    
    </>
  );
}


// import * as React from 'react';
// import {useState} from 'react';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';




// const theme = createTheme();

// export default function SignIn() {
//     const router = useRouter();


//     const handleSubmit =async (values) => {
//       console.log("value of formik",values);
//       const res = await signIn('credentials', {
//         username: values.username,
//         password: values.password,
//         callbackUrl: 'http://localhost:3000/panelAdmin',
//       });
    
//       if (res?.error) {
//         setError(res.error);
//         console.log("ifffffff");
//         router.push('/404')
//       } else {
//         console.log("elseee");
//         setError(null);
       
//       }
//       setSubmitting(false);
//     }

//   return (
//     <>
//     <Formik
//         initialValues={{ username: '', password: '' }}
//         validationSchema={Yup.object({
//           username: Yup.string()
//             .max(30, 'Must be 30 characters or less')
//             .required('Please enter your username'),
//           password: Yup.string().required('Please enter your password'),
          
//         })}
//         onSubmit={handleSubmit}
        
//       >
//         {(formik) => (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
        
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="User Name"
//               name="username"
//               autoComplete="username"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
       
        
//       </Container>
//     </ThemeProvider>
//      )}
//      </Formik>
//     </>);
  
// }