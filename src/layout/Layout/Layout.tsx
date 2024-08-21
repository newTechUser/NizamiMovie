import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <main className='content'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
