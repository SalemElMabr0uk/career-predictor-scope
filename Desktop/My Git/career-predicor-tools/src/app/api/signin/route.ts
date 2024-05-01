// app/api/users/login/route.ts

import { connect  } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
 
 import Google from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { signIn } from "next-auth/react";
connect()
// Calls the connect function to establish a connection to the database.
 

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;

            // Find the user in the database by email
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials.' });
            }

            // Compare the provided password with the stored password hash
            const isValidPassword = await bcryptjs.compare(password, user.password);

            if (!isValidPassword) {
                return res.status(401).json({ error: 'Invalid credentials.' });
            }

            // Authentication successful, create a JWT token and return it
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

 