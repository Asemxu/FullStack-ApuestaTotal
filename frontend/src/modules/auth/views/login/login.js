import React, { Fragment, useState } from "react";
import { LoginIcon } from "../../../core/components/icons";
import { LoginForm } from "../../components/forms/loginForm";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [idUser, setIdUser] = useState("");
  const [password, setPassword] = useState("");
  const { setInfoUser } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", idUser);
    formData.append("password", password);
    setInfoUser(idUser, password);
    navigate("/user/upload-users");
  };

  return (
    <Fragment>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <LoginIcon />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Inicio de Sesión</h2>
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
