import { useState } from "react";
import HeaderPage from "./homeComponents/header";
import LoginComp from "./homeComponents/login";
import RegisterComp from "./homeComponents/register";

export const HomePage = () => {
    const [showHomePage, setShowHomePage] = useState(true)
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <>< HeaderPage />
            {showHomePage && (
                <>
                    <img src="./src/images/loby.jpg" id="backgroundHome" alt="home background" />
                    <div id="roundLogin">
                        <button className="login-btn" onClick={() => { setShowLogin(true); setShowRegister(false); setShowHomePage(false) }}>כניסה</button>
                        <button className="signup-btn" onClick={() => { setShowRegister(true); setShowLogin(false); setShowHomePage(false) }}>הרשמה</button>
                    </div>
                </>)
            }
            {showLogin && <LoginComp />}
            {showRegister && <RegisterComp />}
        </>
    );
};
