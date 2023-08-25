import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";

export const authOptions = {
    // @ts-expect-error
    adapter: PrismaAdapter(prisma),
    session:{
        strategy:'jwt'
    },

    
    // Here Add all the providers
    providers: [
      GithubProvider({
        profile(profile){
          // console.log(profile)
          return {
              name:profile.name,
              role: profile.role ?? "user",
              id: profile.id.toString(),
              image:profile.avatar_url,
              email:profile.email
          }
      },
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],

    callbacks: {
      async session({session}) {
      const user = await prisma.user.findFirst({
          where:{
              email:session?.user?.email
          }
        })
        //@ts-expect-error
        session.user.role = user.role
        return session
      }

    }
  }
  



const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}