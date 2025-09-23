import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export const UserAvatar = () => {
    return (
        <Avatar>
            <AvatarImage
                src={`https://avatar.vercel.sh/example`}
                referrerPolicy="no-referrer"
            />
            <AvatarFallback>
                {"RG"}
            </AvatarFallback>
        </Avatar>
    )
}