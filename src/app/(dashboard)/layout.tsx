import { DashboardHeader } from "@/components/headers/dashboard-header";



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DashboardHeader />
            {children}
        </>
    )
}