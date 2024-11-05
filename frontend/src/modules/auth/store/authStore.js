import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import zukeeper from 'zukeeper'

const useAuthStore = create(
  persist(zukeeper(
    (set) => ({
      user: null,
      accessToken : null,
      setInfoUser: (token , user) => {
        set({ accessToken: token , user : user });
      },
      clearAuth : () => {
        set({ user : null , accessToken : null })
      }
    }),
    
  ),
  {
    name: 'auth-storage', // nombre único para el almacenamiento
    getStorage: () => localStorage, // especifica el tipo de almacenamiento
  })
)

window.store = useAuthStore

export default useAuthStore