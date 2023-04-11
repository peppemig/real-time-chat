import { LucideProps, UserPlus } from "lucide-react";
import {AiFillWechat} from "react-icons/ai"

export const Icons = {
    Logo: () => (
        <AiFillWechat size={50} className="text-indigo-600"/>
    ),
    UserPlus
}

export type Icon = keyof typeof Icons