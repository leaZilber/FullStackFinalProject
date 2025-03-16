import HeaderPage from "./homeComponents/header"
import LoginComp from "./homeComponents/login"
import RegisterComp from "./homeComponents/register"

export const HomePage = () => {
    return (
        <>
            <HeaderPage />
            <img src="./src/images/home_background.jpg" id="backgroundHome" alt="home background" />
            <div id="roundLogin">
                <button className="login-btn" onClick={LoginComp}>כניסה</button>
                <button className="signup-btn" onClick={RegisterComp}>הרשמה</button>
            </div>
        </>
    )
}