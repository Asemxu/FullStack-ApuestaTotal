import useAuthStore from "../../auth/store/authStore";
export  const useUser = () => {
  const { user , rol , totalMedals } = useAuthStore();
  return { user , rol , totalMedals };
};



