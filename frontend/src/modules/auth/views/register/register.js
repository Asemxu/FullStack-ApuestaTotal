import React, { useState } from 'react';
import { LoginIcon } from '../../../core/components/icons';
import { LoginForm } from '../../components/forms/loginForm'

export const Register = () => {
  const [idUser, setIdUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('id',idUser)
    formData.append('password',password)
    console.log('Login attempt:', { idUser, password });
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <LoginIcon />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Registro de usuario</h2>
          </div>

          <LoginForm
            idUser={idUser}
            password={password}
            onIdUserChange={(e) => setIdUser(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}