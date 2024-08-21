import React, { useEffect } from "react";
import "./Navbar.scss";
import Switch from "@mui/material/Switch";
import logo from "@/assets/imgs/logo/logo.png";
import { ReactComponent as User } from "@/assets/svg/user.svg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [checked, setChecked] = React.useState(() => {
        const saved = localStorage.getItem("switch");
        return saved === "true";
    });

    useEffect(() => {
        if (checked) {
            document.body.style.color = "black";
            document.body.style.background = "white";
        } else {
            document.body.style.color = "white";
            document.body.style.background = "black";
        }
    }, [checked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        localStorage.setItem("switch", event.target.checked.toString());
    };

    return (
        <div className="Navbar">
            <Link to="/">
                <img src={logo} alt="logo" className="logoimage" />
            </Link>
            <div className="flexend">
                <Switch
                    className="switchrange"
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                />
                <Link to="/register">
                    <User className="userIcon" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
