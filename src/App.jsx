import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithPopup,
          loginWithRedirect, 
          logout, 
          user, 
          isAuthenticated
        } =   useAuth0;

  
  return (
    <>
      <div>
        <h1>Auth0 authentication</h1>
        <button className="bg-green-500" onClick={loginWithPopup}>Login with Popup</button>
        <button onClick={loginWithRedirect}>Login with redirect</button>
        <button onClick={logout}>Logout</button>
      </div>
      <div>
        <h1>User is { isAuthenticated ? "Logged in" : "Not logged in, Please register"}</h1>
        <pre className="text-center text-teal-700 font-bold">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </>
  );
}

export default App;
