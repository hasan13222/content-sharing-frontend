import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import RightSidebar from '../page/RightSidebar'

export default function MainLayout() {
    return (
        <>
            <NavigationBar />
            <div className="flex justify-between items-center px-1 sm:px-2 md:px-4 lg:px-36 container mx-auto py-3 bg-background">
                <div className="flex w-full gap-5 justify-between">
                    <div className="font-[family-name:var(--font-geist-sans)]">
                        <main className="flex flex-col gap-8 items-center my-3">
                            <div className="post__items w-[600px]">
                                <Outlet />

                            </div>
                        </main>
                    </div>
                    <RightSidebar />
                </div>
            </div>

        </>

    )
}
