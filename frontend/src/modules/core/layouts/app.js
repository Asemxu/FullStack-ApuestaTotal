import React from "react";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import  { useLogout , useUser } from "../hooks"
const App = () => {
  const { Logout } = useLogout()  
  const { user } = useUser()
  return (
    <Fragment>
      <main>
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {user && 
                <div className="flex w-full justify-end">
                <button onClick={() => Logout()} className="bg-red-500 px-3 py-2 rounded-lg text-white   text-right">
                    Cerrar Sesión
                  </button>
                </div>
              }
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
