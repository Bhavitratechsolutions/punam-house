// "use client"; // This is a client component 👈🏽
import '/public/css/custom-admin.css'

import Header from "@/component/Header";
import SideBar from "@/component/Sidebar";
import AuthProvider from './context/AuthProvider';
import Script from 'next/script';


const AdminRootLayout = ({ children, }: Readonly<{ children: React.ReactNode }>) => {



    return (
        <>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
            <AuthProvider>

        
                <div className="d-flex justify-content-between">

                    <SideBar />

                    <div className="flex-grow-1">

                        <Header />
                        <main className="py-3 p-md-5 overflow-hidden">
                            {children}
                        </main>

                    </div>
                </div>
            </AuthProvider>
            {/* <Script src="./js/script.js" strategy="afterInteractive" /> */}
        </>
    )
}

export default AdminRootLayout;

