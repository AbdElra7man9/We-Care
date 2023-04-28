'use client';
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { useSigninMutation } from "@Redux/APIs/AuthApi";
import { NextApiRequest, NextApiResponse } from 'next';
const url = process.env.NEXT_PUBLIC_API_KEY;

interface credentialsProps {
  email: string;
  password: string;
}
type NextAuthOptionsCallback = (req: NextApiRequest, res: NextApiResponse) => NextAuthOptions
// export default async function auth(req: NextApiRequest, res: NextApiResponse) {
// }
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
    }),
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials: credentialsProps, req: NextApiRequest, res: NextApiResponse) {
        // try {
        // const [signin, { isLoading, isError, error }] = useSigninMutation();
        const data = { email: credentials.email, password: credentials.password }
        // const { token } = await signin(data).unwrap()
        // console.log(error)
        const resp = await fetch(url + "/api/v1/users/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const user = await resp.json();
        if (user.is_success) {
          console.log(user)
          return user;
        } else {
          console.log("check your credentials");
          return null;
        }
        // const cookies = response.headers['set-cookie']

        // res.setHeader('Set-Cookie', `Bearer ${token}`)

        // I can see cookies here
      }
      // catch (error: any) {
      //   console.log(error)
      //   throw (Error(error.response.data.M))
      //   }
      // }
    }),
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
  },
}

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   return NextAuth(req, res, authOptions(req, res))
// }
export default NextAuth(authOptions)