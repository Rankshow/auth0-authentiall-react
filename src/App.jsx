import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithPopup,
          loginWithRedirect, 
          logout, 
          user, 
          isAuthenticated
        } =   useAuth0();

  
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-4">Auth0 authentication</h1>
        <button className="bg-green-500 p-2 rounded-md hover:bg-slate-500 hover:text-white m-2" onClick={loginWithPopup}>Login with Popup</button>
        <button className="bg-yellow-500 p-2 rounded-md hover:bg-slate-500 hover:text-white m-2"  onClick={loginWithRedirect}>Login with redirect</button>
        <button className="bg-red-500 p-2 rounded-md hover:bg-slate-500 hover:text-white m-2"  onClick={logout}>Logout</button>
      </div>
      <div className="mt-4">
        <h1>User is <span className="bg-red-400 p-1 rounded-md">{ isAuthenticated ? "Logged in" : "Not logged in, Please register"}</span></h1>
        {isAuthenticated && (
          <pre className="text-left text-xl text-teal-700 font-light">
            {JSON.stringify(user, null, 2)}
          </pre>)
        }
      </div>
    </>
  );
}

export default App;
