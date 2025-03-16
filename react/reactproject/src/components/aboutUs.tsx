import HeaderPage from "./homeComponents/header"

export const AboutUs = () => {
    return (
        <>
            <div className="infoTitle">
                <p className="infoText">
                    About Us
                </p>
            </div>
            <img src="../src/images/white.jpg" className="backgroundAboutUs" alt="hospital img" />
            <HeaderPage />
            <div id="galery">
                <img src="../src/images/img1.jpg" className="imgGalery" alt="hospital img" />
                <img src="../src/images/img2.jpg" className="imgGalery" alt="hospital img" />
                <img src="../src/images/img3.jpg" className="imgGalery" alt="hospital img" />
                <img src="../src/images/img4.jpg" className="imgGalery" alt="hospital img" />
                <img src="../src/images/img5.jpg" className="imgGalery" alt="hospital img" />
                <img src="../src/images/img6.jpg" className="imgGalery" alt="hospital img" />
                <img src="../src/images/img7.jpg" className="imgGalery" alt="hospital img" />
                <img src="../src/images/img8.jpg" className="imgGalery" alt="hospital img" />
                <img src="../src/images/img9.jpg" className="imgGalery" alt="hospital img" />
                <img src="../src/images/img10.jpg" className="imgGalery" alt="hospital img" />
            </div>
        </>
    )
}