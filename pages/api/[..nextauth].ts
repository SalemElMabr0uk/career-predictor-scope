import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "johndoe@email.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials ?? {};

          const res = await fetch("http://localhost:8000", {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          if (!res.ok) {
            return null;
          }

          const parsedResponse = await res.json();
          const jwt = parsedResponse.access_token;

          // Ensure that the returned object matches the expected User type
          return {
            id: parsedResponse.user.id, // Assuming the user object has an id
            name: parsedResponse.user.name, // Assuming the user object has a name
            email, // Assuming the user object has an email
            jwt,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  
});
