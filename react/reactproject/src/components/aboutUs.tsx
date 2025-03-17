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
            <div id="aboutUsContainer">
                <h4>
                    About Us – SkinGuard AI
                </h4>
                <p>
                    At SkinGuard AI, we are dedicated to revolutionizing early skin cancer detection through cutting-edge AI technology. Our mission is to provide a smart, accessible, and reliable tool that empowers users to monitor their skin health with confidence.
                </p>
                <h5>
                    Who We Are
                </h5>
                <p>
                    We are a team of passionate developers and AI enthusiasts committed to harnessing the power of computer vision and real-time analysis to assist in the early detection of melanoma and other suspicious skin conditions. By combining advanced technology with medical insights, we aim to create a user-friendly application that makes skin health monitoring simple, efficient, and accessible to everyone.
                </p>
                <h5>
                    What We Do
                </h5>
                <p>
                    <p>
                        SkinGuard AI is a smart skin monitoring application that enables users to:
                    </p>
                    <p>
                        ✅ Scan and analyze moles and skin spots using AI-powered image recognition.
                    </p>
                    <p>
                        ✅ Track changes over time through automatic image comparison and risk analysis.
                    </p>
                    <p>
                        ✅ Receive timely reminders for re-evaluation and check-ups.
                    </p>
                    <p>
                        ✅ Connect with dermatologists for expert consultation.
                    </p>
                    <p>
                        ✅ Access a comprehensive educational hub on skin health and warning signs.
                    </p>
                </p>
                <h5>
                    How It Works
                </h5>
                <p>
                    Our app utilizes deep learning models trained to detect patterns in skin lesions and anomalies. Using AI-driven computer vision technology, it can assess risk factors and alert users if a skin spot requires professional evaluation. We integrate real-time updates and secure data storage, ensuring that users can track their skin’s condition over time with ease.
                </p>
                <h5>
                    Our Vision
                </h5>
                <p>
                    We believe that technology can save lives. By providing an AI-driven, easy-to-use, and medically informed tool, we hope to increase awareness, encourage early detection, and reduce cases of undiagnosed skin cancer. Our goal is to bridge the gap between self-monitoring and professional dermatological care, offering a first line of defense against potential skin health issues.
                </p>
                <p>
                    Join us in making early skin cancer detection accessible to everyone! 💙✨
                </p>
            </div>
        </>
    )
}