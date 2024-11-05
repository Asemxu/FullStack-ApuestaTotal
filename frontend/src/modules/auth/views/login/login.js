import React, { Fragment, useState } from "react";
import { LoginIcon } from "../../../core/components/icons";
import { LoginForm } from "../../components/forms/loginForm";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../constants/roles";

export const Login = () => {
  const [idUser, setIdUser] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const { setInfoUser } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", idUser);
    formData.append("password", password);
    setInfoUser(idUser, password, isChecked ? ROLES.ADMIN.value : ROLES.USER.value );
    if(isChecked)
      navigate("/admin/accept");
    else
      navigate("/user/upload-users");
  };

  return (
    <Fragment>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <LoginIcon />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          Inicio de Sesión como{" "}
        </h2>
        <label className="mt-3 inline-flex items-center cursor-pointer">
          <input type="checkbox" value={isChecked} className="sr-only peer" onChange={ (e) => setIsChecked(!isChecked)}/>
          <div className="mt-3 relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isChecked ? ROLES.ADMIN.label : ROLES.USER.label} 
          </span>
        </label>
      </div>

      <LoginForm
        idUser={idUser}
        password={password}
        onIdUserChange={(e) => setIdUser(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleSubmit}
      />
    </Fragment>
  );
};
