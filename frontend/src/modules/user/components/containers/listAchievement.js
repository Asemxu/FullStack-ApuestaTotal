import { MEDALS , NOTMEDALS } from "../../constants";
import useAuthStore from "../../../auth/store/authStore";
import { Achievement } from "./achievement";
export const ListAchievement = () => {
  const { totalMedals } = useAuthStore();
  return (
    <div
      className={`flex flex-wrap justify-between gap-2 ${
        totalMedals === NOTMEDALS ? "opacity-50" : "opacity-100"
      }`}
    >
      {Object.entries(MEDALS).map(([key,medal]) => {
        return (
            <Achievement key={key} medal={medal} />
        )
      })}
    </div>
  );
};
