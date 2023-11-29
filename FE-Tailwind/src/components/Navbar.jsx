import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';

import Logo from "../assets/lamongan2.png"
import { Link } from "react-router-dom";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import fi_login from "../assets/images/fi_log-in.svg"

const CompNavbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [isToken, setIsToken] = useState(false);
    const cookies = new Cookies()
    const token = cookies.get("token")

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));

        if (token) {
            setIsToken(true)
        } else {
            setIsToken(false)
        }
    }, [token]);

    const logoItem =
        <Link to="/">
            <Image src={Logo} alt="Logo" width="200" />
        </Link>
    return (
        <>
            <Navbar className="fixed top-0 z-10 mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-2">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <div className="flex gap-6 items-center justify-between">
                        {logoItem}
                    </div>
                    <Link to={"/login"}>
                        <div className="flex items-center w-26 h-12 rounded-xl bg-primary2 hover:bg-purple1" >
                            <Image src={fi_login} alt="login" className="mx-2 pl-1" />
                        <div className=" pr-4">Masuk</div>
                                    </div>
                    </Link>    
                    </div>
            </Navbar>
        </>
    );
};

export default CompNavbar;