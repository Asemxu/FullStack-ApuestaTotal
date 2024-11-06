import { Link } from "react-router-dom";
import { BtnLogout } from "../buttons";

export const NavbarAdmin = () => {
  return (
    <div className="navbar-admin bg-white p-4 text-center flex gap-4 items-center justify-between">
      <div className="flex gap-2 w-full justify-around">
        <Link className="font-bold text-red-500" to="/admin/accept">
          Aceptar Registros
        </Link>
        <Link className="font-bold text-red-500" to="/admin/history-accepts">
          Historial de registros
        </Link>
      </div>
      <BtnLogout />
    </div>
  );
};
