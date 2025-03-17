import { useState } from "react";
import { Doctor } from "../models/doctor";
import { Turn } from "../models/turn";
import "./Schedule.css";
import HeaderPage from "./homeComponents/header";

interface ScheduleProps {
    doctors: Doctor[];
}

export const Schedule1: React.FC<ScheduleProps> = ({ doctors }) => {
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const [selectedTurn, setSelectedTurn] = useState<Turn | null>(null);
    const registerTurn = async (turn: Turn) => {
        try {
            const response = await fetch("https://your-api-url.com/register-turn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    turnId: turn.TurnId,
                    userId: turn.TurnUserId, // לוודא שהמשתמש מחובר ויש לו מזהה
                    doctorId: turn.DoctorCode,
                    date: turn.DateTurn,
                    location: turn.TurnLocate,
                }),
            });
            if (!response.ok) {
                throw new Error("הרשמה נכשלה, נסה שוב.");
            }
            alert("נרשמת בהצלחה לתור!");
        } catch (error) {
            console.error("שגיאה בהרשמה לתור:", error);
            alert("אירעה שגיאה בהרשמה לתור.");
        }
    };

    return (
        <>
            <HeaderPage />
            <img src="../src/images/white.jpg" className="backgroundAboutUs" alt="hospital img" />
            <div className="schedule-container">
                <h2>לוח זמנים</h2>
                <div className="doctor-selection">
                    <label>בחר רופא:</label>
                    <select onChange={(e) => {
                        const doctor = doctors.find(d => d.DoctorCode === Number(e.target.value));
                        setSelectedDoctor(doctor || null);
                    }}>
                        <option value="">-- בחר רופא --</option>
                        {doctors.map((doctor) => (
                            <option key={doctor.DoctorCode} value={doctor.DoctorCode}>
                                {doctor.FieldOfSpecialization} - {doctor.DoctorCode}
                            </option>
                        ))}
                    </select>
                </div>
                {selectedDoctor && (
                    <div className="schedule-table">
                        <h3>תורים של {selectedDoctor.FieldOfSpecialization}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>תאריך</th>
                                    <th>מיקום</th>
                                    <th>הרשמה</th>
                                    <th>פרטים</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedDoctor.DoctorSchedule.Turns.map(turn => (
                                    <tr key={turn.TurnId}>
                                        <td>{turn.DateTurn.toLocaleDateString()} {turn.Hour}</td>  {/* הצגת שעה */}
                                        <td>{turn.TurnLocate}</td>
                                        <td>
                                            <button onClick={() => setSelectedTurn(turn)}>הרשמה</button>
                                        </td>
                                        <td>
                                            <button onClick={() => setSelectedTurn(turn)}>פרטים</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {selectedTurn && (
                    <div className="turn-details">
                        <h3>פרטי תור</h3>
                        <p><strong>רופא:</strong> {selectedTurn.DoctorName}</p>
                        <p><strong>תאריך:</strong> {selectedTurn.DateTurn.toLocaleDateString()}</p>
                        <p><strong>שעה:</strong> {selectedTurn.Hour}</p>  {/* הוספת שעת התור */}
                        <p><strong>מיקום:</strong> {selectedTurn.TurnLocate}</p>
                        <div className="turn-actions">
                        <button onClick={() => registerTurn(selectedTurn!)}>אישור הרשמה</button>
                        <button onClick={() => setSelectedTurn(null)}>סגירה</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
