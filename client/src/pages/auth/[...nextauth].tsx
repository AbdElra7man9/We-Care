import { FC } from 'react'

interface nextauthProps {
  
}

const nextauth: FC<nextauthProps> = ({}) => {
  return <div>[...nextauth]</div>
}

export default nextauth
// 'use client';
// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"
// import FacebookProvider from "next-auth/providers/facebook"

// export const authOptions = {
//     // Configure one or more authentication providers
//     providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID as string,
//             clientSecret: process.env.GITHUB_SECRET as string,
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID as string,
//             clientSecret: process.env.GOOGLE_SECRET as string,
//         }),
//         FacebookProvider({
//             clientId: process.env.FACEBOOK_ID as string,
//             clientSecret: process.env.FACEBOOK_SECRET as string,
//         }),
//     ],
// }

// export default NextAuth(authOptions)