import React from 'react'
import { signOut } from 'next-auth/react';


export default function LogOut() {
    signOut({ callbackUrl: 'http://localhost:3000/landingPage' });
 
}
