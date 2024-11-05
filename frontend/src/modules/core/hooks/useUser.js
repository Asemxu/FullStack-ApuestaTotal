import useAuthStore from "../../auth/store/authStore";
export  const useUser = () => {
  const { user } = useAuthStore();
  return { user };
};



