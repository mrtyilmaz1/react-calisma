import { useState } from "react";
import "../css/Header.css"
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";





function Header() {
    const [theme, setTheme] = useState(true);
    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "white";
        } else {
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
    }
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <div className="flex-row">
                <img className="logo" src="./src/images/logo.jpg" />
                <p className="logo-text">E-COMMERCE</p>
            </div>
            <div className="flex-row">
                <input className="serch-input" type="text" placeholder="ARA" />
                <div >
                    {
                        theme ? <FaMoon className="icon" onClick={changeTheme} /> : <CiLight className="icon" onClick={changeTheme} />
                    }

                    <CiShoppingBasket className="icon" />
                </div>

            </div>
        </div>
    )
}

export default Header