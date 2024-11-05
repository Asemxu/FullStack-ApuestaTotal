import useAuthStore from "../../../auth/store/authStore";
import { Link } from "react-router-dom";
import { FormUploadUsers } from "../../components";
export const UploadUsers = () => {
  const { user } = useAuthStore();

  return (
    <div className="mt-4">
      <h2 className="font-bold text-start">
        Cuantos clientes registrastes hoy?
      </h2>
      <div className="text-center my-4 px-3 py-2 text-white w-full m-auto rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
        ID : {user}
      </div>
      <FormUploadUsers />
      <div className="text-center">
        <Link className="mt-4 font-bold text-red-500" to="/user/achievements">
          Ver todas mis medallas
        </Link>
      </div>
    </div>
  );
};
