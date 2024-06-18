import Icon from "@mui/material/Icon"

import { Link, useLocation } from "react-router-dom"
import { useAuth } from "./AuthContext";

export default function HamMenu({navlinks, close}) {
    const { user } = useAuth();
    const loc = useLocation()
    return (
        <div className="HamMenu" onClick={close}>
            { navlinks.map(link => (
                <Link  to={link.path} className={loc.pathname === link.path ? "hamlink active" : "hamlink"} key={link.name}>
                    <Icon className="hamicon">{link.icon}</Icon>
                    {link.name}
                </Link>
                )) }
            {user ? (
                <>
                    <Link to="/profile" className={loc.pathname === "/profile" ? "hamlink active" : "hamlink"}>
                    <Icon className="hamicon">persons</Icon>
                    Profile
                    </Link>
                </>
            ) : (
                <Link to="/joinus" className={loc.pathname === "/joinus" ? "hamlink active" : "hamlink"}>
                    <Icon className="hamicon">login</Icon>
                    Join Us
                </Link>
            )}
        </div>
    )
}