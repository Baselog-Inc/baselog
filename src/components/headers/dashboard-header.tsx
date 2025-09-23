import { UserAvatar } from "@/core/auth/components/user-avatar"
import { Header } from "."
import { AppIcon } from "../icons/app-icon"



export const DashboardHeader = () => {
    return (
        <Header.Root>
            <Header.LeftPart><AppIcon /></Header.LeftPart>
            <Header.RightPart>
                <UserAvatar />
            </Header.RightPart>
        </Header.Root>
    )
}