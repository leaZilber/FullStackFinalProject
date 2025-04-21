// import { useState } from "react";
// import { Doctor } from "../models/doctor";
// import { Turn } from "../models/turn";
// import "./Schedule.css";
// import HeaderPage from "./homeComponents/header";

// interface ScheduleProps {
//     doctors: Doctor[];
// }

// export const Schedule1: React.FC<ScheduleProps> = ({ doctors }) => {
//     const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
//     const [selectedTurn, setSelectedTurn] = useState<Turn | null>(null);
//     const registerTurn = async (turn: Turn) => {
//         try {
//             const response = await fetch("https://localhost:7245/api/Turn", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     turnId: turn.TurnId,
//                     userId: turn.TurnUserId, 
//                     doctorId: turn.DoctorCode,
//                     date: turn.DateTurn,
//                     location: turn.TurnLocate,
//                 }),
//             });
//             if (!response.ok) {
//                 throw new Error("הרשמה נכשלה, נסה שוב.");
//             }
//             alert("נרשמת בהצלחה לתור!");
//         } catch (error) {
//             console.error("שגיאה בהרשמה לתור:", error);
//             alert("אירעה שגיאה בהרשמה לתור.");
//         }
//     };

//     return (
//         <>
//             <HeaderPage />
//             <img src="../src/images/white.jpg" className="backgroundAboutUs" alt="hospital img" />
//             <div className="schedule-container">
//                 <h2>לוח זמנים</h2>
//                 <div className="doctor-selection">
//                     <label>בחר רופא:</label>
//                     <select onChange={(e) => {
//                         const doctor = doctors.find(d => d.DoctorCode === Number(e.target.value));
//                         setSelectedDoctor(doctor || null);
//                     }}>
//                         <option value="">-- בחר רופא --</option>
//                         {doctors.map((doctor) => (
//                             <option key={doctor.DoctorCode} value={doctor.DoctorCode}>
//                                 {doctor.FieldOfSpecialization} - {doctor.DoctorCode}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 {selectedDoctor && (
//                     <div className="schedule-table">
//                         <h3>תורים של {selectedDoctor.FieldOfSpecialization}</h3>
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>תאריך</th>
//                                     <th>מיקום</th>
//                                     <th>הרשמה</th>
//                                     <th>פרטים</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {selectedDoctor.DoctorSchedule.Turns.map(turn => (
//                                     <tr key={turn.TurnId}>
//                                         <td>{turn.DateTurn.toLocaleDateString()} {turn.Hour}</td>  {/* הצגת שעה */}
//                                         <td>{turn.TurnLocate}</td>
//                                         <td>
//                                             <button onClick={() => setSelectedTurn(turn)}>הרשמה</button>
//                                         </td>
//                                         <td>
//                                             <button onClick={() => setSelectedTurn(turn)}>פרטים</button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}

//                 {selectedTurn && (
//                     <div className="turn-details">
//                         <h3>פרטי תור</h3>
//                         <p><strong>רופא:</strong> {selectedTurn.DoctorName}</p>
//                         <p><strong>תאריך:</strong> {selectedTurn.DateTurn.toLocaleDateString()}</p>
//                         <p><strong>שעה:</strong> {selectedTurn.Hour}</p>  {/* הוספת שעת התור */}
//                         <p><strong>מיקום:</strong> {selectedTurn.TurnLocate}</p>
//                         <div className="turn-actions">
//                         <button onClick={() => registerTurn(selectedTurn!)}>אישור הרשמה</button>
//                         <button onClick={() => setSelectedTurn(null)}>סגירה</button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

/*נסיון 3 */
// import { useState, useEffect } from 'react';
// // import HeaderPage from './homeComponents/header';
// import { Doctor } from '../models/doctor';

// const SchedulePage = () => {
//   const [doctors, setDoctors] = useState<Doctor[]>([]);
//   const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
//   const [selectedTurn, setSelectedTurn] = useState<any | null>(null);

//   const loadDoctors = async () => {
//     try {
//       const response = await fetch('https://localhost:7245/api/Doctor');
//       console.log("doctor get");
//       const data = await response.json();
//       setDoctors(data.map((doctorData: any) => new Doctor(doctorData)));
//     } catch (error) {
//       console.error('Error loading doctors:', error);
//     }
//   };

//   // טעינת תורים לרופא נבחר
//   const loadDoctorTurns = async (doctorId: number) => {
//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${doctorId}`);

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const text = await response.text();
//       if (!text) {
//         throw new Error("Empty response from server");
//       }

//       const data = JSON.parse(text);
//       setSelectedDoctor({
//         ...data,
//         DoctorSchedule: {
//           Turns: data.DoctorSchedule?.Turns?.filter((t: any) => !t.ConfirmationStatus) || []
//         }
//       });
//     } catch (error) {
//       console.error('Error loading doctor turns:', error);
//     }
//   };

//   // קביעת תור ועדכון הסטטוס בדאטה בייס
//   const registerTurn = async (turn: any) => {
//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${selectedDoctor?.DoctorId}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...turn, ConfirmationStatus: true })
//       });
//       if (response.ok) {
//         alert('התור נקבע בהצלחה!');
//         loadDoctorTurns(selectedDoctor?.DoctorId!); // רענון התורים
//       } else {
//         console.error('Error registering turn');
//       }
//     } catch (error) {
//       console.error('Error registering turn:', error);
//     }
//   };
//   useEffect(() => {
//     console.log("loading...");
//     if (doctors.length === 0) {
//       loadDoctors();
//     } 
//   }, []);

//   return (
//     <>
//       <img src="../src/images/white.jpg" className="backgroundAboutUs" alt="hospital img" />
//       <div className="schedule-container">
//         <h2>לוח זמנים</h2>
//         <div className="doctor-selection">
//           <label>בחר רופא:</label>
//           <select onChange={(e) => loadDoctorTurns(Number(e.target.value))}>
//             <option value="">-- בחר רופא --</option>
//             <select onChange={(e) => loadDoctorTurns(Number(e.target.value))}>
//               <option value="">-- בחר רופא --</option>
//               {doctors.map((doctor) => (
//                 <option key={doctor.DoctorId} value={doctor.DoctorId}>
//                   {doctor.DoctorName} - {doctor.FieldOfSpecialization}
//                 </option>
//               ))}
//             </select>
//           </select>
//         </div>
//         {selectedDoctor && (
//           <div className="schedule-table">
//             <h3>תורים של {selectedDoctor.DoctorName}</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>תאריך</th>
//                   <th>שעה</th>
//                   <th>מיקום</th>
//                   <th>הרשמה</th>
//                   <th>פרטים</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {selectedDoctor.DoctorSchedule.Turns.map((turn: any) => (
//                   <tr key={turn.TurnId}>
//                     <td>{new Date(turn.DateTurn).toLocaleDateString()}</td>
//                     <td>{turn.Hour}</td>
//                     <td>{turn.TurnLocate}</td>
//                     <td>
//                       <button className="register-btn" onClick={() => registerTurn(turn)}>קבע תור</button>
//                     </td>
//                     <td>
//                       <button className="details-btn" onClick={() => setSelectedTurn(turn)}>פרטים</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {selectedTurn && (
//           <div className="turn-details">
//             <h3>פרטי תור</h3>
//             <p><strong>רופא:</strong> {selectedTurn.DoctorName}</p>
//             <p><strong>תאריך:</strong> {new Date(selectedTurn.DateTurn).toLocaleDateString()}</p>
//             <p><strong>שעה:</strong> {selectedTurn.Hour}</p>
//             <p><strong>מיקום:</strong> {selectedTurn.TurnLocate}</p>
//             <div className="turn-actions">
//               <button className="confirm-btn" onClick={() => registerTurn(selectedTurn)}>אישור הרשמה</button>
//               <button className="close-btn" onClick={() => setSelectedTurn(null)}>סגירה</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
// export default SchedulePage;

// import { useState, useEffect } from 'react';
// import { Doctor } from '../models/doctor';
// import { Schedule } from '../models/schedule';

// const SchedulePage = () => {
//   const [doctors, setDoctors] = useState<Map<number, Doctor>>(new Map());
//   const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
//   const [selectedTurn, setSelectedTurn] = useState<any | null>(null);
//   interface DoctorApiResponse {
//     DoctorId: number;
//     DoctorName: string;
//     FieldOfSpecialization: string;
//     schedule: Schedule
//   }

//   const loadDoctors = async () => {
//     try {
//       const response = await fetch('https://localhost:7245/api/Doctor');
//       const data: DoctorApiResponse[] = await response.json();
//       const doctorsMap = new Map<number, Doctor>(
//         data.map((doctorData: DoctorApiResponse) => [doctorData.DoctorId, new Doctor(doctorData)])
//       );
//       setDoctors(doctorsMap);
//     } catch (error) {
//       console.error('Error loading doctors:', error);
//     }
//   };

//   const loadDoctorTurns = async (doctorId: number) => {
//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${doctorId}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const text = await response.text();
//       if (!text) {
//         throw new Error("Empty response from server");
//       }

//       const data = JSON.parse(text);
//       const doctor = new Doctor(data);
//       setSelectedDoctor({
//         ...doctor,
//         DoctorSchedule: {
//           ScheduleId: doctor.DoctorSchedule.ScheduleId,
//           DoctorId: doctor.DoctorSchedule.DoctorId,
//           Turns: doctor.DoctorSchedule?.Turns?.filter((t: any) => !t.ConfirmationStatus) || []
//         }
//       });
//     } catch (error) {
//       console.error('Error loading doctor turns:', error);
//     }
//   };

//   const registerTurn = async (turn: any) => {
//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${selectedDoctor?.DoctorId}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...turn, ConfirmationStatus: true })
//       });
//       if (response.ok) {
//         alert('התור נקבע בהצלחה!');
//         loadDoctorTurns(selectedDoctor?.DoctorId!); // רענון התורים
//       } else {
//         console.error('Error registering turn');
//       }
//     } catch (error) {
//       console.error('Error registering turn:', error);
//     }
//   };

//   useEffect(() => {
//     console.log("loading...");
//     if (doctors.size === 0) {
//       loadDoctors();
//     }
//   }, [doctors]);

//   return (
//     <>
//       <img src="../src/images/white.jpg" className="backgroundAboutUs" alt="hospital img" />
//       <div className="schedule-container">
//         <h2>לוח זמנים</h2>
//         <div className="doctor-selection">
//           <label>בחר רופא:</label>
//           <select onChange={(e) => loadDoctorTurns(Number(e.target.value))}>
//             <option value="">-- בחר רופא --</option>
//             {[...doctors.values()].map((doctor) => (
//               <option key={doctor.DoctorId} value={doctor.DoctorId}>
//                 {doctor.DoctorName} - {doctor.FieldOfSpecialization}
//               </option>
//             ))}
//           </select>
//         </div>
//         {selectedDoctor && (
//           <div className="schedule-table">
//             <h3>תורים של {selectedDoctor.DoctorName}</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>תאריך</th>
//                   <th>שעה</th>
//                   <th>מיקום</th>
//                   <th>הרשמה</th>
//                   <th>פרטים</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {selectedDoctor.DoctorSchedule.Turns.map((turn: any) => (
//                   <tr key={turn.TurnId}>
//                     <td>{new Date(turn.DateTurn).toLocaleDateString()}</td>
//                     <td>{turn.Hour}</td>
//                     <td>{turn.TurnLocate}</td>
//                     <td>
//                       <button className="register-btn" onClick={() => registerTurn(turn)}>קבע תור</button>
//                     </td>
//                     <td>
//                       <button className="details-btn" onClick={() => setSelectedTurn(turn)}>פרטים</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {selectedTurn && (
//           <div className="turn-details">
//             <h3>פרטי תור</h3>
//             <p><strong>רופא:</strong> {selectedTurn.DoctorName}</p>
//             <p><strong>תאריך:</strong> {new Date(selectedTurn.DateTurn).toLocaleDateString()}</p>
//             <p><strong>שעה:</strong> {selectedTurn.Hour}</p>
//             <p><strong>מיקום:</strong> {selectedTurn.TurnLocate}</p>
//             <div className="turn-actions">
//               <button className="confirm-btn" onClick={() => registerTurn(selectedTurn)}>אישור הרשמה</button>
//               <button className="close-btn" onClick={() => setSelectedTurn(null)}>סגירה</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SchedulePage;

// import { useState, useEffect } from 'react';
// import { Doctor } from '../models/doctor';

// const SchedulePage = () => {
//   const [doctors, setDoctors] = useState<Doctor[]>([]);
//   const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
//   const [selectedTurn, setSelectedTurn] = useState<any | null>(null);

//   // Load doctors from the API
//   const loadDoctors = async () => {
//     try {
//       const response = await fetch('https://localhost:7245/api/Doctor');
//       console.log("doctor get");
//       const data = await response.json();
//       setDoctors(data.map((doctorData: any) => new Doctor(doctorData)));
//     } catch (error) {
//       console.error('Error loading doctors:', error);
//     }
//   };

//   // Load turns for the selected doctor
//   const loadDoctorTurns = async (doctorId: number) => {
//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${doctorId}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const text = await response.text();
//       if (!text) {
//         throw new Error("Empty response from server");
//       }

//       const data = JSON.parse(text);
//       setSelectedDoctor({
//         ...data,
//         DoctorSchedule: {
//           Turns: data.DoctorSchedule?.Turns?.filter((t: any) => !t.ConfirmationStatus) || []
//         }
//       });
//     } catch (error) {
//       console.error('Error loading doctor turns:', error);
//     }
//   };

//   // Register a turn for the selected doctor
//   const registerTurn = async (turn: any) => {
//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${selectedDoctor?.DoctorId}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...turn, ConfirmationStatus: true })
//       });
//       if (response.ok) {
//         alert('התור נקבע בהצלחה!');
//         loadDoctorTurns(selectedDoctor?.DoctorId!); // Refresh the turns
//       } else {
//         console.error('Error registering turn');
//       }
//     } catch (error) {
//       console.error('Error registering turn:', error);
//     }
//   };

//   useEffect(() => {
//     console.log("loading...");
//     if (doctors.length === 0) {
//       loadDoctors();
//     }
//   }, [doctors.length]); // Make sure it only triggers once when doctors is empty

//   return (
//     <>
//       <img src="../src/images/white.jpg" className="backgroundAboutUs" alt="hospital img" />
//       <div className="schedule-container">
//         <h2>לוח זמנים</h2>
//         <div className="doctor-selection">
//           <label>בחר רופא:</label>
//           <select onChange={(e) => loadDoctorTurns(Number(e.target.value))}>
//             <option value="">-- בחר רופא --</option>
//             {doctors.map((doctor) => (
//               <option key={doctor.DoctorId} value={doctor.DoctorId}>
//                 {doctor.DoctorName} - {doctor.FieldOfSpecialization}
//               </option>
//             ))}
//           </select>
//         </div>

//         {selectedDoctor && (
//           <div className="schedule-table">
//             <h3>תורים של {selectedDoctor.DoctorName}</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>תאריך</th>
//                   <th>שעה</th>
//                   <th>מיקום</th>
//                   <th>הרשמה</th>
//                   <th>פרטים</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {selectedDoctor.DoctorSchedule.Turns.map((turn: any) => (
//                   <tr key={turn.TurnId}>
//                     <td>{new Date(turn.DateTurn).toLocaleDateString()}</td>
//                     <td>{turn.Hour}</td>
//                     <td>{turn.TurnLocate}</td>
//                     <td>
//                       <button className="register-btn" onClick={() => registerTurn(turn)}>קבע תור</button>
//                     </td>
//                     <td>
//                       <button className="details-btn" onClick={() => setSelectedTurn(turn)}>פרטים</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {selectedTurn && (
//           <div className="turn-details">
//             <h3>פרטי תור</h3>
//             <p><strong>רופא:</strong> {selectedTurn.DoctorName}</p>
//             <p><strong>תאריך:</strong> {new Date(selectedTurn.DateTurn).toLocaleDateString()}</p>
//             <p><strong>שעה:</strong> {selectedTurn.Hour}</p>
//             <p><strong>מיקום:</strong> {selectedTurn.TurnLocate}</p>
//             <div className="turn-actions">
//               <button className="confirm-btn" onClick={() => registerTurn(selectedTurn)}>אישור הרשמה</button>
//               <button className="close-btn" onClick={() => setSelectedTurn(null)}>סגירה</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SchedulePage;
import { useState, useEffect } from 'react';
import { Doctor } from '../models/doctor';

const SchedulePage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedTurn, setSelectedTurn] = useState<any | null>(null);

  // טוען את כל הרופאים מהשרת
  const loadDoctors = async () => {
    try {
      const response = await fetch('https://localhost:7245/api/Doctor');
      const data = await response.json();
      console.log("✅ Fetched doctors:", data);
      setDoctors(data.map((doctorData: any) => new Doctor(doctorData)));
    } catch (error) {
      console.error('❌ Error loading doctors:', error);
    }
  };

  // טוען את התורים של רופא מסוים לפי ה־ID
  const loadDoctorTurns = async (doctorId: number) => {
    if (!doctorId || isNaN(doctorId)) {
      console.warn("⚠️ Invalid doctor ID:", doctorId);
      return;
    }

    try {
      const response = await fetch(`https://localhost:7245/api/Doctor/${doctorId}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const text = await response.text();
      if (!text) throw new Error("Empty response from server");

      const data = JSON.parse(text);
      setSelectedDoctor({
        ...data,
        DoctorSchedule: {
          Turns: data.DoctorSchedule?.Turns?.filter((t: any) => !t.ConfirmationStatus) || []
        }
      });
    } catch (error) {
      console.error('❌ Error loading doctor turns:', error);
    }
  };

  // רישום לתור
  const registerTurn = async (turn: any) => {
    if (!selectedDoctor?.DoctorId) return;

    try {
      const response = await fetch(`https://localhost:7245/api/Doctor/${selectedDoctor.DoctorId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...turn, ConfirmationStatus: true })
      });

      if (response.ok) {
        alert('התור נקבע בהצלחה!');
        await loadDoctorTurns(selectedDoctor.DoctorId); // טען מחדש את התורים
      } else {
        console.error('❌ Error registering turn');
      }
    } catch (error) {
      console.error('❌ Error registering turn:', error);
    }
  };

  // טען את הרופאים פעם אחת ברינדור ראשון
  useEffect(() => {
    if (doctors.length === 0) {
      console.log("⏳ Loading doctors...");
      loadDoctors();
    }
  }, [doctors.length]);

  return (
    <>
      <img src="../src/images/white.jpg" className="backgroundAboutUs" alt="hospital img" />

      <div className="schedule-container">
        <h2>לוח זמנים</h2>

        <div className="doctor-selection">
          <label>בחר רופא:</label>
          <select
            onChange={(e) => {
              const id = Number(e.target.value);
              loadDoctorTurns(id);
            }}
          >
            <option value="">-- בחר רופא --</option>
            {doctors.map((doctor, index) => (
              <option key={doctor.DoctorId ?? `doctor-${index}`} value={doctor.DoctorId}>
                {doctor.DoctorName} - {doctor.FieldOfSpecialization}
              </option>
            ))}

            {/* {doctors.map((doctor) => (
              <option key={doctor.DoctorId} value={doctor.DoctorId}>
                {doctor.DoctorName} - {doctor.FieldOfSpecialization}
              </option>
            ))} */}
          </select>
        </div>

        {selectedDoctor && (
          <div className="schedule-table">
            <h3>תורים של {selectedDoctor.DoctorName}</h3>
            <table>
              <thead>
                <tr>
                  <th>תאריך</th>
                  <th>שעה</th>
                  <th>מיקום</th>
                  <th>הרשמה</th>
                  <th>פרטים</th>
                </tr>
              </thead>
              <tbody>
                {selectedDoctor.DoctorSchedule?.Turns.map((turn: any) => (
                  <tr key={turn.TurnId}>
                    <td>{new Date(turn.DateTurn).toLocaleDateString()}</td>
                    <td>{turn.Hour}</td>
                    <td>{turn.TurnLocate}</td>
                    <td>
                      <button className="register-btn" onClick={() => registerTurn(turn)}>קבע תור</button>
                    </td>
                    <td>
                      <button className="details-btn" onClick={() => setSelectedTurn(turn)}>פרטים</button>
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
            <p><strong>רופא:</strong> {selectedDoctor?.DoctorName}</p>
            <p><strong>תאריך:</strong> {new Date(selectedTurn.DateTurn).toLocaleDateString()}</p>
            <p><strong>שעה:</strong> {selectedTurn.Hour}</p>
            <p><strong>מיקום:</strong> {selectedTurn.TurnLocate}</p>
            <div className="turn-actions">
              <button className="confirm-btn" onClick={() => registerTurn(selectedTurn)}>אישור הרשמה</button>
              <button className="close-btn" onClick={() => setSelectedTurn(null)}>סגירה</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SchedulePage;
