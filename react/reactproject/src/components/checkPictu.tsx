import { useState } from "react";
import HeaderPage from "./homeComponents/header";
// פונקציה לדימוי של קריאה ל-API
const checkSkinCancer = async (image: string) => {
  try {
    const response = await fetch("https://api.clarifai.com/v2/models/skin-cancer-detection/outputs", {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_CLARIFAI_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: [
          {
            data: {
              image: {
                base64: image,
              }
            }
          }
        ]
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
  const [image, setImage] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null); // סטייט לתשובה מה-API
  const [loading, setLoading] = useState(false); // סטייט למעקב אחרי טעינה

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFeedback(null); // אפס את המשוב אם נבחרה תמונה חדשה
    }
  };

  const handleSubmit = async () => {
    if (image) {
      setLoading(true);
      const result = await checkSkinCancer(image); // קריאה ל-API
      setFeedback(result.message); // הצגת התשובה שהתקבלה
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderPage />
      <img src="../src/images/white.jpg" className="backgroundAboutUs" alt="hospital img" />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: "none" }}
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          👆 להעלאת תמונה
        </label>

        {image && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={image}
              alt="תמונה שהועלתה"
              style={{
                width: "500px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        )}

        {image && (
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={handleSubmit}
              style={{
                padding: "10px 20px",
                backgroundColor: "#2196F3",
                color: "white",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              לשלוח לבדיקה
            </button>
          </div>
        )}

        {loading && (
          <div style={{ marginTop: "20px" }}>
            <p>מחכים לתשובה...⏳</p>
          </div>
        )}

        {feedback && (
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                padding: "20px",
                backgroundColor: feedback === "אין חשש לסרטן עור" ? "#4CAF50" : "#F44336",
                color: "white",
                borderRadius: "10px",
                fontWeight: "bold",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              {feedback}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
