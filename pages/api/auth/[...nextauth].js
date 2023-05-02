import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
 
  providers: [CredentialsProvider({
    name: 'panel-admin',
    
    credentials: {
      username: {
        label: 'name',
        type: 'text',
       
      },
      password: { label: 'Password', type: 'password' },
      
    },
   async authorize(credentials,req){
    console.log("authorize");
    const payload={
      username: credentials.username,
      password: credentials.password,
    };
    const res = await fetch('http://84.241.53.13:9191/general/authenticationService/1.0/authenticate', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            
          },
        });
       
        const user=res.json()
        
        if (!res.ok){
          console.log("ressss if",res);
          throw new Error(user.exception);
        }
        if (res.ok && user) {
          console.log("userrrr",user);
          return user;
          
        } 
        console.log("resssss",res);
        return null;
   } 
  })  
   ],
  secret: process.env.JWT_SECRET,
  // pages: {
  //   signIn: '/login',
  // },
  callbacks: {
    async jwt({ token, user, account }) {
      
      if (account && user) {
        return {
          ...token,
          accessNames:JSON.stringify(user.accessNames),
          accessToken:JSON.stringify(user.token)
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.accessTokenExpires = token.accessTokenExpires;
      session.user.accessNames = token.accessNames;
      ;
console.log('tokennnnnnn',token);
console.log('sessssionnnnnnnnnnnnnn',session);
      return session;
    },
    debug: process.env.NODE_ENV === 'development',
  }
})
