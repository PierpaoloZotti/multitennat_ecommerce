import {Navbar} from "@/app/(home)/navbar";

interface props{
    children: React.ReactNode;
}

const Layout = ({children}: props) => {
    return (
        <div className={'flex flex-col min-h-screen'}>
            <Navbar />
            {children}
        </div>
    )
}
export default Layout;