import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HamMenu from "./HamMenu";
import { useAuth } from "./AuthContext";
import Exit from '@mui/icons-material/ExitToApp';

export default function NavBar() {
    const [showHamBtn, setHamBtn] = useState(false);
    const loc = useLocation();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const navlinks = [
        { name: "Home", path: "/", icon: "home" },
        { name: "Recipes", path: "/recipes", icon: "menu_book" },
        { name: "Forum", path: "/forum", icon: "forum" },
    ];

    function closeHamMenu() {
        setHamBtn(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                !document.querySelector('.navbar').contains(event.target) &&
                !document.querySelector('.HamMenu').contains(event.target)
            ) {
                closeHamMenu();
            }
        }

        if (showHamBtn) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showHamBtn]);

    return (
        <>
            <div className="navbar container navbar-expand">
                <Link to="/" className="weblogo">
                    <img src={`${process.env.PUBLIC_URL}//img/RH_Logo2.png`} alt=""></img>
                </Link>
                <div className="nav-items">
                    {navlinks.map(link => (
                        <Link to={link.path} className={loc.pathname === link.path ? "active" : ""} key={link.name}>
                            {link.name}
                        </Link>
                    ))}
                    {user ? (
                        <>
                            <Link to="/profile" className={loc.pathname === "/profile" ? "active" : ""}>Profile</Link>
                            <Exit onClick={logout} className="logoutBtn"></Exit>
                        </>
                    ) : (
                        <Link to="/joinus" className={loc.pathname === "/joinus" ? "active" : ""}>Join Us</Link>
                    )}
                </div>
                <div onClick={() => setHamBtn(true)} className={showHamBtn ? "ham-btn active" : "ham-btn"}>
                    <div className="bars"></div>
                    <div className="bars"></div>
                    <div className="bars"></div>
                </div>
            </div>
            {showHamBtn && <HamMenu close={closeHamMenu} navlinks={navlinks} />}
        </>
    );
}
