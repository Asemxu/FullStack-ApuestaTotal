import useAdmin from "../../hooks/useAdmin"

export const TableAdmin = ({
    isAccept = true
}) => {
    const { data } = useAdmin()
    return (
        <div className="mt-4  relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID USER
                        </th>
                        <th scope="col" className="px-6 py-3">
                            REGISTRADOS
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ARCHIVO
                        </th>
                        <th scope="col" className="px-6 py-3">
                            MEDALLA
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ESTADO
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((accept, i) => {
                        return (
                            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {accept.id}
                                </th>
                                <td className="px-6 py-4">
                                    {accept.total_registers}
                                </td>
                                <td className="px-6 py-4">
                                    {accept.extension_file}
                                </td>
                                <td className="px-6 py-4">
                                    {accept.medal}
                                </td>
                                <td className="px-6 py-4">
                                    {isAccept &&
                                        <div className="flex gap-2">
                                            <button
                                                className="bg-green-500 px-3 py-2 rounded-lg text-white   text-right"
                                            >
                                                Aceptar
                                            </button>
                                            <button
                                                className="bg-red-500 px-3 py-2 rounded-lg text-white   text-right"
                                            >
                                                Rechazar
                                            </button>
                                        </div>
                                    }
                                    {!isAccept &&
                                        <h1 className={`${accept.status_accept ? 'text-green-500' : 'text-red-500'}`}> {accept.status_accept ? 'Aceptado' : 'Rechazado'}</h1>
                                    }
                                </td>

                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>

    )
}