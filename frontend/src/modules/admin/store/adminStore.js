import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import zukeeper from 'zukeeper'

const useAdminStore = create(
  persist(zukeeper(
    (set) => ({
      data : [
        {
          id: "1234",
          total_registers : 20 ,
          extension_file : 'csv',
          medal : 'hierro',
          status_accept : true
        },
        {
          id: "1234",
          total_registers : 20 ,
          extension_file : 'csv',
          medal : 'hierro',
          status_accept : true
        },
        {
          id: "1234",
          total_registers : 20 ,
          extension_file : 'csv',
          medal : 'hierro',
          status_accept : true
        },
        {
          id: "1234",
          total_registers : 20 ,
          extension_file : 'csv',
          medal : 'hierro',
          status_accept : true
        },
        {
          id: "1234",
          total_registers : 20 ,
          extension_file : 'csv',
          medal : 'hierro',
          status_accept : true
        },
        {
          id: "1234",
          total_registers : 20 ,
          extension_file : 'csv',
          medal : 'hierro',
          status_accept : true
        }
      ],
      clearAuth : () => {
        set({ data : [] })
      }
    }),
    
  ),
  {
    name: 'admin-storage', // nombre único para el almacenamiento
    getStorage: () => localStorage, // especifica el tipo de almacenamiento
  })
)

window.store = useAdminStore

export default useAdminStore