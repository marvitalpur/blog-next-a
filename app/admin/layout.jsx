import { assets } from "@/assets/assets";
import Sidebar from "@/components/dmincomponents/sidebar";
import Image from "next/image";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
    return (
        <>
             <div className="flex">
                <Sidebar />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-2 border-black">
                        <h3 className="font-medium">Admin Panel</h3>
                        <Image 
                          src={assets.profile_icon} 
                          width={40} 
                          alt="Profile Icon" 
                        />
                    </div>
                    {children}
                </div>
            </div>
            {/* ToastContainer should be outside of the main flex container */}
            <ToastContainer theme="dark" />


        </>
    )
}