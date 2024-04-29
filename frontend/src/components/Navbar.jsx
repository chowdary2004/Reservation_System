import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <nav>
                <div className="logo">ZEESH</div>
                <div className={show ? "navLinks showmenu" : "navLinks"}>
                    <div className="links">
                        {data[0].navbarLinks.map((element) => (
                            <Link
                                key={element.id}
                                to={element.link}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                {element.title}
                            </Link>
                        ))}
                        
                        <Link
                            to="menu" 
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="heading" 
                        >
                            MENU
                        </Link>
                    </div>
                    <div className="hamburger" onClick={() => setShow(!show)}>
                        <GiHamburgerMenu />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;