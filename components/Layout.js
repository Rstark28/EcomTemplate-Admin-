import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();

  return (
    <div className="home-container">
      <div className="main-content">
        {session ? (
          <>
            <Nav />
            {children}
          </>
        ) : (
          <div>
            <button onClick={() => signIn("google")}>Sign in</button>
          </div>
        )}
      </div>
    </div>
  );
}
