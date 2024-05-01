import { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from "next-auth"
import User from "@/../models/userModel";
import { compare } from 'bcryptjs';

import { connect } from '@/../dbConfig/dbConfig';

async function authorize(credentials: any, req: any) {
    const { email, password } = credentials;
    const db = await connect(); // Connect to your MongoDB database

    const user = await User.findOne({ email })


    if (!user) {
        return null; // User not found
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
        return null; // Invalid password
    }

    // Authentication successful, return user data
    return {
        id: user._id,
        email: user.email,
        // Add any additional user properties you need
    };
}
export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID as string,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email Address',
                    type: 'text',
                    placeholder: 'Email address...'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Password...'
                },
            },
            authorize,


        }),

    ], callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token;
            return session;
        },
    },
    pages: {

    }
}

const handler = NextAuth(options)
export { handler as GET, handler as POST }
