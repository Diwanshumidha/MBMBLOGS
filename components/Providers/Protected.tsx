'use client'
import { ReactNode } from 'react';
import {useSession} from 'next-auth/react'
import { redirect } from 'next/navigation';


// ---------------Typescript-----------------
interface ProtectedProps {
  children: ReactNode;
}



const Protected: React.FC<ProtectedProps> = ({ children }) => {

    const {data:session, status} = useSession({
        required:true
    })

if(status === 'loading') return 'Loading'
  return (
        <>    
        {children}
        </>
   
  );
};

export default Protected;
