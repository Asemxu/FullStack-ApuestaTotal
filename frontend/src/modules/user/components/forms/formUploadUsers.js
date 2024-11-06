import { Fragment } from "react";
import { useUser } from "../../../core/hooks";
import { GetImageMedal } from "../../utils";
export const FormUploadUsers = () => {
  const { totalMedals } = useUser()   
  return (
    <Fragment>
      <h2 className="font-bold">Sube tus usuarios por .csv</h2>
      <div className="text-start">
        <label htmlFor="file">Escoge archivo a subir</label>
        <input type="file" id="file" name="file" />
      </div>
      <button
        type="button"
        className="bg-green-700 w-full mt-4 rounded-lg text-white px-3 py-2"
      >
        Enviar
      </button>
      <div className="text-center mt-4">
        <p>Posible Medalla</p>
        <p>(por verificar)</p>
        
        <GetImageMedal  totalMedals={totalMedals}/>
        
        <h2>Mi total de clientes registrados es {totalMedals}</h2>
      </div>
    </Fragment>
  );
};
