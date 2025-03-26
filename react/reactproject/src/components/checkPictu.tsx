// import { useState } from "react";
// import HeaderPage from "./homeComponents/header";
// // פונקציה לדימוי של קריאה ל-API
// const checkSkinCancer = async (image: string) => {
//   try {
//     const response = await fetch("https://api.clarifai.com/v2/models/skin-cancer-detection/outputs", {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer YOUR_CLARIFAI_API_KEY",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         inputs: [
//           {
//             data: {
//               image: {
//                 base64: image,
//               }
//             }
//           }
//         ]
//       }),
//     });

//     const data = await response.json();
//     if (data.outputs[0].data.concepts) {
//       return { message: data.outputs[0].data.concepts[0].name, result: "success" };
//     }
//     return { message: "לא ניתן לזהות בעיה", result: "error" };
//   } catch (error) {
//     console.error("Error:", error);
//     return { message: "אירעה שגיאה, אנא נסה שוב מאוחר יותר", result: "error" };
//   }
// };

// export const CheckPicture = () => {
//   const [image, setImage] = useState<string | null>(null);
//   const [feedback, setFeedback] = useState<string | null>(null); // סטייט לתשובה מה-API
//   const [loading, setLoading] = useState(false); // סטייט למעקב אחרי טעינה

//   const handleImageChange = (event: any) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//       setFeedback(null); // אפס את המשוב אם נבחרה תמונה חדשה
//     }
//   };

//   const handleSubmit = async () => {
//     if (image) {
//       setLoading(true);
//       const result = await checkSkinCancer(image); // קריאה ל-API
//       setFeedback(result.message); // הצגת התשובה שהתקבלה
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <HeaderPage />
//       <img src="../src/images/white.jpg" className="backgroundAboutUs" alt="hospital img" />
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <input
//           type="file"
//           onChange={handleImageChange}
//           accept="image/*"
//           style={{ display: "none" }}
//           id="fileInput"
//         />
//         <label
//           htmlFor="fileInput"
//           style={{
//             cursor: "pointer",
//             padding: "10px 20px",
//             backgroundColor: "#4CAF50",
//             color: "white",
//             borderRadius: "5px",
//             fontSize: "16px",
//           }}
//         >
//           👆 להעלאת תמונה
//         </label>

//         {image && (
//           <div style={{ marginTop: "20px" }}>
//             <img
//               src={image}
//               alt="תמונה שהועלתה"
//               style={{
//                 width: "500px",
//                 height: "auto",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//               }}
//             />
//           </div>
//         )}

//         {image && (
//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={handleSubmit}
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#2196F3",
//                 color: "white",
//                 borderRadius: "5px",
//                 fontSize: "16px",
//                 cursor: "pointer",
//               }}
//             >
//               לשלוח לבדיקה
//             </button>
//           </div>
//         )}

//         {loading && (
//           <div style={{ marginTop: "20px" }}>
//             <p>מחכים לתשובה...⏳</p>
//           </div>
//         )}

//         {feedback && (
//           <div style={{ marginTop: "20px" }}>
//             <div
//               style={{
//                 padding: "20px",
//                 backgroundColor: feedback === "אין חשש לסרטן עור" ? "#4CAF50" : "#F44336",
//                 color: "white",
//                 borderRadius: "10px",
//                 fontWeight: "bold",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//               }}
//             >
//               {feedback}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
import { useState } from "react";
import HeaderPage from "./homeComponents/header";
import { TestResult } from "../models/testResault";
import SchedulePage from "./schedule";

const checkSkinCancer = async (imageBase64: any) => {
  try {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_CLARIFAI_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: [{ data: { image: { base64: imageBase64 } } }],
      }),
    });

    const data = await response.json();
    if (data.outputs[0].data.concepts) {
      return { message: data.outputs[0].data.concepts[0].name, result: "success" };
    }
    return { message: "לא ניתן לזהות בעיה", result: "error" };
  } catch (error) {
    console.error("Error:", error);
    return { message: "אירעה שגיאה, אנא נסה שוב מאוחר יותר", result: "error" };
  }
};

export const CheckPicture = () => {
  const [image, setImage] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [patientId, setPatientId] = useState(0);
  const [testResults, setTestResults] = useState<TestResult|undefined>(undefined);
  const [redirectToAppointment, setRedirectToAppointment] = useState(false);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(typeof reader.result === "string" ? reader.result : "");      
        setFeedback("null");
      };
    }
  };

  const handleSubmit = async () => {
    if (image) {
      setLoading(true);
      const result = await checkSkinCancer(image.split(",")[1]);
      setFeedback(result.message);

      const newTestResult = new TestResult({
        TestDate: new Date(),
        ImageFile: image,
        PatientId: patientId,
        Summary: result.message,
      });

      await saveTestResultToServer(newTestResult);
      setLoading(false);

      if (result.message.includes("חשש")) {
        setRedirectToAppointment(true);
      }
    }
  };

  const saveTestResultToServer = async (testResult: any) => {
    try {
      const response = await fetch("https://localhost:7245/api/TestResualt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testResult),
      });
  
      if (response.ok) {
        const savedTestResult = await response.json();
        setTestResults(savedTestResult);  // עדכון ב-state עם התוצאה החדשה
      } else {
        console.error("Error saving test result");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <>
      <HeaderPage />
      <img src="../src/images/white.jpg" className="backgroundAboutUs" alt="hospital img" />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input type="file" onChange={handleImageChange} accept="image/*" id="fileInput" style={{ display: "none" }} />
        <label htmlFor="fileInput" style={{ cursor: "pointer", padding: "10px 20px", backgroundColor: "#008B8B", color: "white", borderRadius: "5px" }}>
          👆 להעלאת תמונה
        </label>

        {image && (
          <div style={{ marginTop: "20px" }}>
            <img src={image} alt="תמונה שהועלתה" style={{ width: "500px", height: "auto", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} />
          </div>
        )}

        {image && (
          <div style={{ marginTop: "20px" }}>
            <button onClick={handleSubmit} style={{ padding: "10px 20px", backgroundColor: "#808080", color: "white", borderRadius: "5px", fontSize: "16px", cursor: "pointer" }}>
              לשלוח לבדיקה
            </button>
          </div>
        )}

        {loading && <p>מחכים לתשובה...⏳</p>}

        {feedback && (
          <div style={{ marginTop: "20px" }}>
            <div style={{ padding: "20px", backgroundColor: feedback.includes("חשש") ? "#F44336" : "#4CAF50", color: "white", borderRadius: "10px", fontWeight: "bold", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
              {feedback}
            </div>
          </div>
        )}

        {redirectToAppointment && (
          <div style={{ marginTop: "20px" }}>
            <SchedulePage />
          </div>
        )}
      </div>
    </>
  );
};
