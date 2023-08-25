"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Component() {
  const { data: session, status } = useSession();
  if (status === "authenticated")
    return (
      <div>
        <Image alt="Profile" width={30} height={30} src={session?.user?.image || ''}></Image>{" "}
        {session?.user?.email}
        {JSON.stringify(session.user)}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
}
