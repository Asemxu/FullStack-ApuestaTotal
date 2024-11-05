import { haveAchivement } from "../../utils"
import useAuthStore from "../../../auth/store/authStore"

export const Achievement = ({
    key,
    medal
}) => {
    const { totalMedals } = useAuthStore()
    return (
        <img
            key={key}
            className={`rounded-full w-3/12 h-[100px] ${haveAchivement(
            totalMedals,
            medal.MAX_ACCEPT
            )}`}
            src={`/medals/${medal.image}.jpg`}
            alt={medal.image}
        />
    )
}
