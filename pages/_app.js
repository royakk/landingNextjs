import '../styles/globals.css'
// import AuthWrapper from '../src/component/AuthWrapper';
import { SessionProvider } from "next-auth/react";



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      
      {/* <AuthWrapper> */}
      <Component {...pageProps} />
      
      {/* </AuthWrapper>  */}
       
    </SessionProvider>
  )
}