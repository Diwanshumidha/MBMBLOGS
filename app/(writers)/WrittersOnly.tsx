"use client";
// WriterOnly.tsx
import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import Loader from "@/components/Loader/Loader";
interface ProtectedProps {
  children: ReactNode;
}
const WriterOnly: React.FC<ProtectedProps> = ({ children }) => {
  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") return <Loader/>;

  // @ts-expect-error
  if (session.user?.role === "writer"){}
  //@ts-expect-error
  else if(session.user?.role === "admin"){}
  else return "Not Authorised";


  return <>{children}</>;
};

export default WriterOnly;
