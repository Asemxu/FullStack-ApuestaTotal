import React from "react";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useUser } from "../hooks";
import { BtnLogout } from "../components/buttons";
import { ROLES } from "../../auth/constants/roles";
import { NavbarAdmin } from "../components/navbar";

const App = () => {
  const { user, rol } = useUser();
  return (
    <Fragment>
      {rol === ROLES.ADMIN.value && (
        <main className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
          <div className="w-full max-w-3xl m-auto">
            <NavbarAdmin />
            <Outlet />
          </div>
        </main>
      )}

      {rol !== ROLES.ADMIN.value && (
        <main>
          <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {user && <BtnLogout />}
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      )}
    </Fragment>
  );
};

export default App;
