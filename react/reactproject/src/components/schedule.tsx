// import { useState, useEffect } from 'react';
// import { Doctor } from '../models/doctor';
// import './Schedule.css';
// import React from 'react';

// const SchedulePage = () => {
//   const [doctors, setDoctors] = useState<Doctor[]>([]);
//   const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
//   const [selectedTurn, setSelectedTurn] = useState<any | null>(null);

//   // טוען את כל הרופאים מהשרת
//   const loadDoctors = async () => {
//     try {
//       const response = await fetch('https://localhost:7245/api/Doctor');
//       const data = await response.json();
//       console.log("✅ Fetched doctors:", data);
//       setDoctors(data.map((doctorData: any) => new Doctor(doctorData)));
//     } catch (error) {
//       console.error('❌ Error loading doctors:', error);
//     }
//   };

//   // טוען את התורים של רופא מסוים לפי ה־ID
//   const loadDoctorTurns = async (doctorId: number) => {
//     if (!doctorId || isNaN(doctorId)) {
//       console.warn("⚠️ Invalid doctor ID:", doctorId);
//       return;
//     }

//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${doctorId}`);
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//       const text = await response.text();
//       if (!text) throw new Error("Empty response from server");

//       const data = JSON.parse(text);
//       setSelectedDoctor({
//         ...data,
//         DoctorSchedule: {
//           Turns: data.DoctorSchedule?.Turns?.filter((t: any) => !t.ConfirmationStatus) || []
//         }
//       });
//     } catch (error) {
//       console.error('❌ Error loading doctor turns:', error);
//     }
//   };

//   // רישום לתור
//   const registerTurn = async (turn: any) => {
//     if (!selectedDoctor?.DoctorId) return;

//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${selectedDoctor.DoctorId}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...turn, ConfirmationStatus: true })
//       });

//       if (response.ok) {
//         alert('התור נקבע בהצלחה!');
//         await loadDoctorTurns(selectedDoctor.DoctorId); // טען מחדש את התורים
//       } else {
//         console.error('❌ Error registering turn');
//       }
//     } catch (error) {
//       console.error('❌ Error registering turn:', error);
//     }
//   };

//   // טען את הרופאים פעם אחת ברינדור ראשון
//   useEffect(() => {
//     if (doctors.length === 0) {
//       console.log("⏳ Loading doctors...");
//       loadDoctors();
//     }
//   }, [doctors.length]);

//   return (
//     <>
//       <img src="../src/images/white.jpg" className="backgroundAboutUs" alt="hospital img" />

//       <div className="schedule-container">
//         <h2>לוח זמנים</h2>

//         <div className="doctor-selection">
//           <label>בחר רופא:</label>
//           {/* <select
//             onChange={(e) => {
//               const id = Number(e.target.value);
//               loadDoctorTurns(id);
//             }} */}

//           {/* > */}
//           <select
//             onChange={(e) => {
//               const value = e.target.value;
//               if (!value) {
//                 setSelectedDoctor(null); // אם המשתמש בחר ב"ריק" – ננקה את הבחירה
//                 return;
//               }

//               const id = Number(value);
//               if (!isNaN(id)) {
//                 loadDoctorTurns(id);
//               }
//             }}
//           >
//             <option value="">-- בחר רופא --</option>
//             {doctors.map((doctor, index) => (
//               <option key={doctor.DoctorId ?? `doctor-${index}`} value={doctor.DoctorId}>
//                 {doctor.DoctorName} - {doctor.FieldOfSpecialization}
//               </option>
//             ))}

//             {/* {doctors.map((doctor) => (
//               <option key={doctor.DoctorId} value={doctor.DoctorId}>
//                 {doctor.DoctorName} - {doctor.FieldOfSpecialization}
//               </option>
//             ))} */}
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
//                 {selectedDoctor.DoctorSchedule?.Turns.map((turn: any) => (
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
//             <p><strong>רופא:</strong> {selectedDoctor?.DoctorName}</p>
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


/*נסיון מוי אפס */

// "use client"

// import { useState, useEffect } from "react"
// import {
//   Box,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   CircularProgress,
//   Alert,
//   Snackbar,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material"
// import { CalendarMonth, AccessTime, LocationOn, Info, CheckCircle, Close } from "@mui/icons-material"
// import { Doctor } from "../models/doctor"
// import { styled } from "@mui/material/styles"
// import rtlPlugin from "stylis-plugin-rtl"
// import { prefixer } from "stylis"
// import { CacheProvider } from "@emotion/react"
// import createCache from "@emotion/cache"

// // Create RTL cache for right-to-left support
// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [prefixer, rtlPlugin],
// })

// // Custom theme with turquoise, white and gray
// const theme = createTheme({
//   direction: "rtl",
//   palette: {
//     primary: {
//       main: "#4DD0E1", // Light turquoise
//       contrastText: "#fff",
//     },
//     secondary: {
//       main: "#78909C", // Gray
//     },
//     background: {
//       default: "#ffffff",
//       paper: "#ffffff",
//     },
//     text: {
//       primary: "#4DD0E1", // Turquoise for primary text
//       secondary: "#78909C", // Gray for secondary text
//     },
//   },
//   typography: {
//     fontFamily: "Roboto, Arial, sans-serif",
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//         },
//       },
//     },
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           borderRadius: 12,
//           boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
//         },
//       },
//     },
//   },
// })

// // Styled components
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   color: theme.palette.text.secondary,
//   "&.MuiTableCell-head": {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.primary.contrastText,
//     fontWeight: "bold",
//   },
// }))

// const ActionButton = styled(Button)(({ theme }) => ({
//   margin: theme.spacing(0.5),
//   borderRadius: 20,
// }))

// const SchedulePage = () => {
//   const [doctors, setDoctors] = useState<Doctor[]>([])
//   const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
//   const [selectedTurn, setSelectedTurn] = useState<any | null>(null)
//   const [loading, setLoading] = useState<boolean>(false)
//   const [error, setError] = useState<string | null>(null)
//   const [success, setSuccess] = useState<string | null>(null)

//   // Load all doctors from the server
//   const loadDoctors = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       const response = await fetch("https://localhost:7245/api/Doctor")
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

//       const data = await response.json()
//       console.log("✅ Fetched doctors:", data)
//       setDoctors(data.map((doctorData: any) => new Doctor(doctorData)))
//     } catch (error) {
//       console.error("❌ Error loading doctors:", error)
//       setError("שגיאה בטעינת רשימת הרופאים. אנא נסה שוב מאוחר יותר.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Load turns for a specific doctor by ID
//   const loadDoctorTurns = async (doctorId: number) => {
//     if (!doctorId || isNaN(doctorId)) {
//       console.warn("⚠️ Invalid doctor ID:", doctorId)
//       return
//     }

//     setLoading(true)
//     setError(null)
//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${doctorId}`)
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

//       const data = await response.json()
//       console.log("✅ Fetched doctor turns:", data)

//       // Make sure we're properly handling the data structure
//       const doctorWithTurns = {
//         ...data,
//         DoctorSchedule: {
//           Turns: Array.isArray(data.DoctorSchedule?.Turns)
//             ? data.DoctorSchedule.Turns.filter((t: any) => !t.ConfirmationStatus)
//             : [],
//         },
//       }

//       setSelectedDoctor(doctorWithTurns)

//       // Debug log to check if turns are available
//       console.log("Available turns:", doctorWithTurns.DoctorSchedule?.Turns || [])
//     } catch (error) {
//       console.error("❌ Error loading doctor turns:", error)
//       setError("שגיאה בטעינת התורים של הרופא. אנא נסה שוב מאוחר יותר.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Register for an appointment
//   const registerTurn = async (turn: any) => {
//     if (!selectedDoctor?.DoctorId) return

//     setLoading(true)
//     setError(null)
//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${selectedDoctor.DoctorId}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...turn, ConfirmationStatus: true }),
//       })

//       if (response.ok) {
//         setSuccess("התור נקבע בהצלחה!")
//         setSelectedTurn(null)
//         await loadDoctorTurns(selectedDoctor.DoctorId) // Reload turns
//       } else {
//         throw new Error("Failed to register turn")
//       }
//     } catch (error) {
//       console.error("❌ Error registering turn:", error)
//       setError("שגיאה בקביעת התור. אנא נסה שוב מאוחר יותר.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Load doctors on first render
//   useEffect(() => {
//     if (doctors.length === 0) {
//       console.log("⏳ Loading doctors...")
//       loadDoctors()
//     }
//   }, [doctors.length])

//   // Format date to Hebrew locale
//   const formatDate = (dateString: string) => {
//     try {
//       return new Date(dateString).toLocaleDateString("he-IL")
//     } catch (e) {
//       return dateString
//     }
//   }

//   return (
//     <CacheProvider value={cacheRtl}>
//       <ThemeProvider theme={theme}>
//         <Box
//           sx={{
//             bgcolor: "background.default",
//             minHeight: "100vh",
//             p: 3,
//             direction: "rtl",
//           }}
//         >
//           <Paper elevation={3} sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
//             <Typography variant="h4" component="h1" color="primary" gutterBottom align="center" fontWeight="bold">
//               לוח זמנים לתורים
//             </Typography>

//             {/* Doctor selection */}
//             <Box sx={{ mb: 4, mt: 3 }}>
//               <FormControl fullWidth variant="outlined">
//                 <InputLabel id="doctor-select-label">בחר רופא</InputLabel>
//                 <Select
//                   labelId="doctor-select-label"
//                   id="doctor-select"
//                   value={selectedDoctor?.DoctorId || ""}
//                   label="בחר רופא"
//                   onChange={(e) => {
//                     const value = e.target.value
//                     if (!value) {
//                       setSelectedDoctor(null)
//                       return
//                     }
//                     const id = Number(value)
//                     if (!isNaN(id)) {
//                       loadDoctorTurns(id)
//                     }
//                   }}
//                   disabled={loading}
//                 >
//                   <MenuItem value="">
//                     <em>-- בחר רופא --</em>
//                   </MenuItem>
//                   {doctors.map((doctor, index) => (
//                     <MenuItem key={doctor.DoctorId ?? `doctor-${index}`} value={doctor.DoctorId}>
//                       {doctor.DoctorName} - {doctor.FieldOfSpecialization}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Box>

//             {/* Loading indicator */}
//             {loading && (
//               <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
//                 <CircularProgress color="primary" />
//               </Box>
//             )}

//             {/* Error message */}
//             {error && (
//               <Alert severity="error" sx={{ mb: 3 }}>
//                 {error}
//               </Alert>
//             )}

//             {/* Appointment table */}
//             {selectedDoctor && !loading && (
//               <Box sx={{ mt: 4 }}>
//                 <Typography variant="h5" color="primary" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
//                   <CalendarMonth sx={{ mr: 1 }} />
//                   תורים של {selectedDoctor.DoctorName}
//                 </Typography>

//                 {selectedDoctor.DoctorSchedule?.Turns.length === 0 ? (
//                   <Alert severity="info" sx={{ mt: 2 }}>
//                     אין תורים פנויים לרופא זה כרגע.
//                   </Alert>
//                 ) : (
//                   <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 2 }}>
//                     <Table>
//                       <TableHead>
//                         <TableRow>
//                           <StyledTableCell align="right">תאריך</StyledTableCell>
//                           <StyledTableCell align="right">שעה</StyledTableCell>
//                           <StyledTableCell align="right">מיקום</StyledTableCell>
//                           <StyledTableCell align="right">פרטים</StyledTableCell>
//                           <StyledTableCell align="right">הרשמה</StyledTableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {selectedDoctor.DoctorSchedule?.Turns.map((turn: any) => (
//                           <TableRow key={turn.TurnId} hover>
//                             <TableCell align="right" sx={{ display: "flex", alignItems: "center" }}>
//                               <CalendarMonth fontSize="small" sx={{ ml: 1, color: "primary.main" }} />
//                               {formatDate(turn.DateTurn)}
//                             </TableCell>
//                             <TableCell align="right">
//                               <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//                                 <AccessTime fontSize="small" sx={{ ml: 1, color: "primary.main" }} />
//                                 {turn.Hour}
//                               </Box>
//                             </TableCell>
//                             <TableCell align="right">
//                               <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//                                 <LocationOn fontSize="small" sx={{ ml: 1, color: "primary.main" }} />
//                                 {turn.TurnLocate}
//                               </Box>
//                             </TableCell>
//                             <TableCell align="right">
//                               <ActionButton
//                                 variant="outlined"
//                                 color="secondary"
//                                 startIcon={<Info />}
//                                 onClick={() => setSelectedTurn(turn)}
//                               >
//                                 פרטים
//                               </ActionButton>
//                             </TableCell>
//                             <TableCell align="right">
//                               <ActionButton
//                                 variant="contained"
//                                 color="primary"
//                                 startIcon={<CheckCircle />}
//                                 onClick={() => registerTurn(turn)}
//                               >
//                                 קבע תור
//                               </ActionButton>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 )}
//               </Box>
//             )}

//             {/* Appointment details dialog */}
//             <Dialog
//               open={selectedTurn !== null}
//               onClose={() => setSelectedTurn(null)}
//               maxWidth="sm"
//               fullWidth
//               dir="rtl"
//             >
//               <DialogTitle sx={{ bgcolor: "primary.main", color: "white" }}>
//                 פרטי תור
//                 <IconButton
//                   aria-label="close"
//                   onClick={() => setSelectedTurn(null)}
//                   sx={{
//                     position: "absolute",
//                     right: 8,
//                     top: 8,
//                     color: "white",
//                   }}
//                 >
//                   <Close />
//                 </IconButton>
//               </DialogTitle>
//               <DialogContent sx={{ pt: 3, pb: 1 }}>
//                 {selectedTurn && (
//                   <Box sx={{ p: 1 }}>
//                     <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
//                       <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
//                         רופא:
//                       </Typography>
//                       {selectedDoctor?.DoctorName}
//                     </Typography>
//                     <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
//                       <CalendarMonth sx={{ ml: 1, color: "primary.main" }} />
//                       <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
//                         תאריך:
//                       </Typography>
//                       {formatDate(selectedTurn.DateTurn)}
//                     </Typography>
//                     <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
//                       <AccessTime sx={{ ml: 1, color: "primary.main" }} />
//                       <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
//                         שעה:
//                       </Typography>
//                       {selectedTurn.Hour}
//                     </Typography>
//                     <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
//                       <LocationOn sx={{ ml: 1, color: "primary.main" }} />
//                       <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
//                         מיקום:
//                       </Typography>
//                       {selectedTurn.TurnLocate}
//                     </Typography>
//                   </Box>
//                 )}
//               </DialogContent>
//               <DialogActions sx={{ p: 2, justifyContent: "center" }}>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   onClick={() => setSelectedTurn(null)}
//                   startIcon={<Close />}
//                 >
//                   סגירה
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => selectedTurn && registerTurn(selectedTurn)}
//                   startIcon={<CheckCircle />}
//                   disabled={loading}
//                 >
//                   {loading ? <CircularProgress size={24} /> : "אישור הרשמה"}
//                 </Button>
//               </DialogActions>
//             </Dialog>

//             {/* Success message */}
//             <Snackbar
//               open={success !== null}
//               autoHideDuration={6000}
//               onClose={() => setSuccess(null)}
//               anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//             >
//               <Alert onClose={() => setSuccess(null)} severity="success" sx={{ width: "100%" }}>
//                 {success}
//               </Alert>
//             </Snackbar>
//           </Paper>
//         </Box>
//       </ThemeProvider>
//     </CacheProvider>
//   )
// }

// // Missing IconButton import
// const IconButton = styled(Button)(({ theme }) => ({
//   minWidth: "unset",
//   padding: theme.spacing(1),
// }))

// export default SchedulePage


// "use client"

// import { useState, useEffect } from "react"
// import {
//   Box,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   CircularProgress,
//   Alert,
//   Snackbar,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material"
// import { CalendarMonth, AccessTime, LocationOn, Info, CheckCircle, Close } from "@mui/icons-material"
// import { Doctor } from "../models/doctor"
// import { styled } from "@mui/material/styles"
// import rtlPlugin from "stylis-plugin-rtl"
// import { prefixer } from "stylis"
// import { CacheProvider } from "@emotion/react"
// import createCache from "@emotion/cache"

// // Create RTL cache for right-to-left support
// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [prefixer, rtlPlugin],
// })

// // Custom theme with turquoise, white and gray
// const theme = createTheme({
//   direction: "rtl",
//   palette: {
//     primary: {
//       main: "#4DD0E1", // Light turquoise
//       contrastText: "#fff",
//     },
//     secondary: {
//       main: "#78909C", // Gray
//     },
//     background: {
//       default: "#ffffff",
//       paper: "#ffffff",
//     },
//     text: {
//       primary: "#4DD0E1", // Turquoise for primary text
//       secondary: "#78909C", // Gray for secondary text
//     },
//   },
//   typography: {
//     fontFamily: "Roboto, Arial, sans-serif",
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//         },
//       },
//     },
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           borderRadius: 12,
//           boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
//         },
//       },
//     },
//   },
// })

// // Styled components
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   color: theme.palette.text.secondary,
//   "&.MuiTableCell-head": {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.primary.contrastText,
//     fontWeight: "bold",
//   },
// }))

// const ActionButton = styled(Button)(({ theme }) => ({
//   margin: theme.spacing(0.5),
//   borderRadius: 20,
// }))

// const SchedulePage = () => {
//   const [doctors, setDoctors] = useState<Doctor[]>([])
//   const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
//   const [selectedTurn, setSelectedTurn] = useState<any | null>(null)
//   const [loading, setLoading] = useState<boolean>(false)
//   const [error, setError] = useState<string | null>(null)
//   const [success, setSuccess] = useState<string | null>(null)

//   // Load all doctors from the server
//   const loadDoctors = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       const response = await fetch("https://localhost:7245/api/Doctor")
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

//       const data = await response.json()
//       console.log("✅ Fetched doctors:", data)

//       // Check if data is an array
//       if (!Array.isArray(data)) {
//         console.error("❌ Expected an array of doctors, but got:", data)
//         setError("שגיאה בפורמט הנתונים שהתקבלו מהשרת.")
//         setDoctors([])
//         return
//       }

//       // Map the data to Doctor objects and log each one for debugging
//       const mappedDoctors = data.map((doctorData: any) => {
//         const doctor = new Doctor(doctorData)
//         console.log("Mapped doctor:", doctor)
//         return doctor
//       })

//       console.log("All mapped doctors:", mappedDoctors)
//       setDoctors(mappedDoctors)
//     } catch (error) {
//       console.error("❌ Error loading doctors:", error)
//       setError("שגיאה בטעינת רשימת הרופאים. אנא נסה שוב מאוחר יותר.")
//       setDoctors([])
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Load turns for a specific doctor by ID
//   const loadDoctorTurns = async (doctorId: number) => {
//     if (!doctorId || isNaN(doctorId)) {
//       console.warn("⚠️ Invalid doctor ID:", doctorId)
//       return
//     }

//     setLoading(true)
//     setError(null)
//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${doctorId}`)
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

//       const data = await response.json()
//       console.log("✅ Fetched doctor details:", data)

//       // Create a doctor object with the correct structure
//       const doctorWithTurns = new Doctor(data)

//       // Debug the structure to see what we're working with
//       console.log("Doctor with turns structure:", doctorWithTurns)

//       // Check if we have schedule data in the expected format
//       if (!doctorWithTurns.DoctorSchedule?.Turns) {
//         console.warn("⚠️ No turns found in doctor data. Raw data:", data)

//         // Try to extract turns from the backend structure
//         if (data.schedule && Array.isArray(data.schedule.Turns)) {
//           doctorWithTurns.DoctorSchedule = {
//             Turns: data.schedule.Turns.filter((t: any) => !t.ConfirmationStatus),
//           }
//         } else {
//           // Initialize with empty turns if not found
//           doctorWithTurns.DoctorSchedule = { Turns: [] }
//         }
//       }

//       setSelectedDoctor(doctorWithTurns)
//       console.log("Available turns:", doctorWithTurns.DoctorSchedule?.Turns || [])
//     } catch (error) {
//       console.error("❌ Error loading doctor turns:", error)
//       setError("שגיאה בטעינת התורים של הרופא. אנא נסה שוב מאוחר יותר.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Register for an appointment
//   const registerTurn = async (turn: any) => {
//     if (!selectedDoctor?.DoctorId) return

//     setLoading(true)
//     setError(null)
//     try {
//       const response = await fetch(`https://localhost:7245/api/Doctor/${selectedDoctor.DoctorId}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...turn, ConfirmationStatus: true }),
//       })

//       if (response.ok) {
//         setSuccess("התור נקבע בהצלחה!")
//         setSelectedTurn(null)
//         await loadDoctorTurns(selectedDoctor.DoctorId) // Reload turns
//       } else {
//         throw new Error("Failed to register turn")
//       }
//     } catch (error) {
//       console.error("❌ Error registering turn:", error)
//       setError("שגיאה בקביעת התור. אנא נסה שוב מאוחר יותר.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Load doctors on first render
//   useEffect(() => {
//     if (doctors.length === 0) {
//       console.log("⏳ Loading doctors...")
//       loadDoctors()
//     }
//   }, [doctors.length])

//   // Format date to Hebrew locale
//   const formatDate = (dateString: string) => {
//     try {
//       return new Date(dateString).toLocaleDateString("he-IL")
//     } catch (e) {
//       return dateString
//     }
//   }

//   return (
//     <CacheProvider value={cacheRtl}>
//       <ThemeProvider theme={theme}>
//         <Box
//           sx={{
//             bgcolor: "background.default",
//             minHeight: "100vh",
//             p: 3,
//             direction: "rtl",
//           }}
//         >
//           <Paper elevation={3} sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
//             <Typography variant="h4" component="h1" color="primary" gutterBottom align="center" fontWeight="bold">
//               לוח זמנים לתורים
//             </Typography>

//             {/* Doctor selection */}
//             <Box sx={{ mb: 4, mt: 3 }}>
//               <FormControl fullWidth variant="outlined">
//                 <InputLabel id="doctor-select-label">בחר רופא</InputLabel>
//                 <Select
//                   labelId="doctor-select-label"
//                   id="doctor-select"
//                   value={selectedDoctor?.DoctorId || ""}
//                   label="בחר רופא"
//                   onChange={(e) => {
//                     const value = e.target.value
//                     if (!value) {
//                       setSelectedDoctor(null)
//                       return
//                     }
//                     const id = Number(value)
//                     if (!isNaN(id)) {
//                       console.log("Selected doctor ID:", id)
//                       loadDoctorTurns(id)
//                     }
//                   }}
//                   disabled={loading}
//                 >
//                   <MenuItem value="">
//                     <em>-- בחר רופא --</em>
//                   </MenuItem>
//                   {doctors.length > 0 ? (
//                     doctors.map((doctor, index) => (
//                       <MenuItem key={doctor.DoctorId ?? `doctor-${index}`} value={doctor.DoctorId}>
//                         {doctor.DoctorName} - {doctor.FieldOfSpecialization}
//                       </MenuItem>
//                     ))
//                   ) : (
//                     <MenuItem disabled>טוען רופאים...</MenuItem>
//                   )}
//                 </Select>
//               </FormControl>
//             </Box>

//             {/* Loading indicator */}
//             {loading && (
//               <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
//                 <CircularProgress color="primary" />
//               </Box>
//             )}

//             {/* Error message */}
//             {error && (
//               <Alert severity="error" sx={{ mb: 3 }}>
//                 {error}
//               </Alert>
//             )}

//             {/* Appointment table */}
//             {selectedDoctor && !loading && (
//               <Box sx={{ mt: 4 }}>
//                 <Typography variant="h5" color="primary" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
//                   <CalendarMonth sx={{ mr: 1 }} />
//                   תורים של {selectedDoctor.DoctorName}
//                 </Typography>

//                 {selectedDoctor.DoctorSchedule?.Turns.length === 0 ? (
//                   <Alert severity="info" sx={{ mt: 2 }}>
//                     אין תורים פנויים לרופא זה כרגע.
//                   </Alert>
//                 ) : (
//                   <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 2 }}>
//                     <Table>
//                       <TableHead>
//                         <TableRow>
//                           <StyledTableCell align="right">תאריך</StyledTableCell>
//                           <StyledTableCell align="right">שעה</StyledTableCell>
//                           <StyledTableCell align="right">מיקום</StyledTableCell>
//                           <StyledTableCell align="right">פרטים</StyledTableCell>
//                           <StyledTableCell align="right">הרשמה</StyledTableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {selectedDoctor.DoctorSchedule?.Turns.map((turn: any) => (
//                           <TableRow key={turn.TurnId} hover>
//                             <TableCell align="right" sx={{ display: "flex", alignItems: "center" }}>
//                               <CalendarMonth fontSize="small" sx={{ ml: 1, color: "primary.main" }} />
//                               {formatDate(turn.DateTurn)}
//                             </TableCell>
//                             <TableCell align="right">
//                               <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//                                 <AccessTime fontSize="small" sx={{ ml: 1, color: "primary.main" }} />
//                                 {turn.Hour}
//                               </Box>
//                             </TableCell>
//                             <TableCell align="right">
//                               <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//                                 <LocationOn fontSize="small" sx={{ ml: 1, color: "primary.main" }} />
//                                 {turn.TurnLocate}
//                               </Box>
//                             </TableCell>
//                             <TableCell align="right">
//                               <ActionButton
//                                 variant="outlined"
//                                 color="secondary"
//                                 startIcon={<Info />}
//                                 onClick={() => setSelectedTurn(turn)}
//                               >
//                                 פרטים
//                               </ActionButton>
//                             </TableCell>
//                             <TableCell align="right">
//                               <ActionButton
//                                 variant="contained"
//                                 color="primary"
//                                 startIcon={<CheckCircle />}
//                                 onClick={() => registerTurn(turn)}
//                               >
//                                 קבע תור
//                               </ActionButton>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 )}
//               </Box>
//             )}

//             {/* Appointment details dialog */}
//             <Dialog
//               open={selectedTurn !== null}
//               onClose={() => setSelectedTurn(null)}
//               maxWidth="sm"
//               fullWidth
//               dir="rtl"
//             >
//               <DialogTitle sx={{ bgcolor: "primary.main", color: "white" }}>
//                 פרטי תור
//                 <IconButton
//                   aria-label="close"
//                   onClick={() => setSelectedTurn(null)}
//                   sx={{
//                     position: "absolute",
//                     right: 8,
//                     top: 8,
//                     color: "white",
//                   }}
//                 >
//                   <Close />
//                 </IconButton>
//               </DialogTitle>
//               <DialogContent sx={{ pt: 3, pb: 1 }}>
//                 {selectedTurn && (
//                   <Box sx={{ p: 1 }}>
//                     <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
//                       <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
//                         רופא:
//                       </Typography>
//                       {selectedDoctor?.DoctorName}
//                     </Typography>
//                     <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
//                       <CalendarMonth sx={{ ml: 1, color: "primary.main" }} />
//                       <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
//                         תאריך:
//                       </Typography>
//                       {formatDate(selectedTurn.DateTurn)}
//                     </Typography>
//                     <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
//                       <AccessTime sx={{ ml: 1, color: "primary.main" }} />
//                       <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
//                         שעה:
//                       </Typography>
//                       {selectedTurn.Hour}
//                     </Typography>
//                     <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
//                       <LocationOn sx={{ ml: 1, color: "primary.main" }} />
//                       <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
//                         מיקום:
//                       </Typography>
//                       {selectedTurn.TurnLocate}
//                     </Typography>
//                   </Box>
//                 )}
//               </DialogContent>
//               <DialogActions sx={{ p: 2, justifyContent: "center" }}>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   onClick={() => setSelectedTurn(null)}
//                   startIcon={<Close />}
//                 >
//                   סגירה
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => selectedTurn && registerTurn(selectedTurn)}
//                   startIcon={<CheckCircle />}
//                   disabled={loading}
//                 >
//                   {loading ? <CircularProgress size={24} /> : "אישור הרשמה"}
//                 </Button>
//               </DialogActions>
//             </Dialog>

//             {/* Success message */}
//             <Snackbar
//               open={success !== null}
//               autoHideDuration={6000}
//               onClose={() => setSuccess(null)}
//               anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//             >
//               <Alert onClose={() => setSuccess(null)} severity="success" sx={{ width: "100%" }}>
//                 {success}
//               </Alert>
//             </Snackbar>
//           </Paper>
//         </Box>
//       </ThemeProvider>
//     </CacheProvider>
//   )
// }

// // Missing IconButton import
// const IconButton = styled(Button)(({ theme }) => ({
//   minWidth: "unset",
//   padding: theme.spacing(1),
// }))

// export default SchedulePage
"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert,
  Snackbar,
  ThemeProvider,
  createTheme,
  IconButton as MuiIconButton,
} from "@mui/material"
import { CalendarMonth, AccessTime, LocationOn, Info, CheckCircle, Close, Refresh } from "@mui/icons-material"
import { Doctor } from "../models/doctor"
import { styled } from "@mui/material/styles"
import rtlPlugin from "stylis-plugin-rtl"
import { prefixer } from "stylis"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"

// Create RTL cache for right-to-left support
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
})

// Custom theme with turquoise, white and gray
const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#4DD0E1", // Light turquoise
      contrastText: "#fff",
    },
    secondary: {
      main: "#78909C", // Gray
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#4DD0E1", // Turquoise for primary text
      secondary: "#78909C", // Gray for secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
})

// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.text.secondary,
  "&.MuiTableCell-head": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
  },
}))

const ActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: 20,
}))

// Custom IconButton component
const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: "inherit",
}))

const SchedulePage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [selectedTurn, setSelectedTurn] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string | null>(null)
  const [showDebug, setShowDebug] = useState<boolean>(false)

  // Load all doctors from the server
  const loadDoctors = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("https://localhost:7245/api/Doctor")
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

      // Get the raw text first for debugging
      const responseText = await response.text()
      setDebugInfo(responseText)

      // Try to parse as JSON
      let data
      try {
        data = JSON.parse(responseText)
      } catch (e) {
        console.error("❌ Failed to parse JSON:", e)
        setError("שגיאה בפענוח תשובת השרת. פורמט לא תקין.")
        return
      }

      console.log("✅ Fetched doctors raw data:", data)

      // Check if data is an array
      if (!Array.isArray(data)) {
        console.error("❌ Expected an array of doctors, but got:", data)
        setError("שגיאה בפורמט הנתונים שהתקבלו מהשרת. מצפה למערך.")
        return
      }

      // Map the data to Doctor objects
      const mappedDoctors = data.map((doctorData: any) => {
        const doctor = new Doctor(doctorData)
        console.log("Mapped doctor:", doctor)
        return doctor
      })

      console.log("All mapped doctors:", mappedDoctors)

      // Check if we have any doctors
      if (mappedDoctors.length === 0) {
        console.warn("⚠️ No doctors found in the response")
      }

      setDoctors(mappedDoctors)
    } catch (error) {
      console.error("❌ Error loading doctors:", error)
      setError("שגיאה בטעינת רשימת הרופאים. אנא נסה שוב מאוחר יותר.")
    } finally {
      setLoading(false)
    }
  }

  // Load turns for a specific doctor by ID
  const loadDoctorTurns = async (doctorId: number) => {
    if (!doctorId || isNaN(doctorId)) {
      console.warn("⚠️ Invalid doctor ID:", doctorId)
      return
    }

    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`https://localhost:7245/api/Doctor/${doctorId}`)
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

      // Get the raw text first for debugging
      const responseText = await response.text()
      setDebugInfo(responseText)

      // Try to parse as JSON
      let data
      try {
        data = JSON.parse(responseText)
      } catch (e) {
        console.error("❌ Failed to parse JSON:", e)
        setError("שגיאה בפענוח תשובת השרת. פורמט לא תקין.")
        return
      }

      console.log("✅ Fetched doctor details raw data:", data)

      // Find the doctor in our existing list to get any missing data
      const existingDoctor = doctors.find((d) => d.DoctorId === doctorId)

      // Create a doctor object with the correct structure
      const doctorWithTurns = new Doctor({
        ...data,
        // If the backend doesn't return these fields, use what we already have
        DoctorName: data.DoctorName || existingDoctor?.DoctorName,
        FieldOfSpecialization: data.FieldOfSpecialization || existingDoctor?.FieldOfSpecialization,
        LicenseNumber: data.LicenseNumber || existingDoctor?.LicenseNumber,
      })

      // Debug the structure to see what we're working with
      console.log("Doctor with turns structure:", doctorWithTurns)

      // Since the backend DTO doesn't include schedule, we need to create a mock schedule
      // This is a temporary solution until the backend is updated
      if (!doctorWithTurns.DoctorSchedule?.Turns || doctorWithTurns.DoctorSchedule.Turns.length === 0) {
        console.warn("⚠️ No turns found in doctor data. Creating mock turns for testing.")

        // Create mock turns for testing - REMOVE THIS IN PRODUCTION
        doctorWithTurns.DoctorSchedule = {
          Turns: [
            {
              TurnId: 1,
              DateTurn: new Date().toISOString(),
              Hour: "09:00",
              TurnLocate: "חדר 101",
              ConfirmationStatus: false,
            },
            {
              TurnId: 2,
              DateTurn: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
              Hour: "10:30",
              TurnLocate: "חדר 102",
              ConfirmationStatus: false,
            },
            {
              TurnId: 3,
              DateTurn: new Date(Date.now() + 172800000).toISOString(), // Day after tomorrow
              Hour: "14:15",
              TurnLocate: "חדר 103",
              ConfirmationStatus: false,
            },
          ],
        }
      }

      setSelectedDoctor(doctorWithTurns)
      console.log("Available turns:", doctorWithTurns.DoctorSchedule?.Turns || [])
    } catch (error) {
      console.error("❌ Error loading doctor turns:", error)
      setError("שגיאה בטעינת התורים של הרופא. אנא נסה שוב מאוחר יותר.")
    } finally {
      setLoading(false)
    }
  }

  // Register for an appointment
  const registerTurn = async (turn: any) => {
    if (!selectedDoctor?.DoctorId) return

    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`https://localhost:7245/api/Doctor/${selectedDoctor.DoctorId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...turn, ConfirmationStatus: true }),
      })

      if (response.ok) {
        setSuccess("התור נקבע בהצלחה!")
        setSelectedTurn(null)
        await loadDoctorTurns(selectedDoctor.DoctorId) // Reload turns
      } else {
        throw new Error("Failed to register turn")
      }
    } catch (error) {
      console.error("❌ Error registering turn:", error)
      setError("שגיאה בקביעת התור. אנא נסה שוב מאוחר יותר.")
    } finally {
      setLoading(false)
    }
  }

  // Load doctors on first render
  useEffect(() => {
    console.log("⏳ Loading doctors...")
    loadDoctors()
  }, []) // Remove doctors.length dependency to ensure it always loads

  // Format date to Hebrew locale
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("he-IL")
    } catch (e) {
      return dateString
    }
  }

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: "background.default",
            minHeight: "100vh",
            p: 3,
            direction: "rtl",
          }}
        >
          <Paper elevation={3} sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
              <Typography variant="h4" component="h1" color="primary" fontWeight="bold">
                לוח זמנים לתורים
              </Typography>

              <Button
                startIcon={<Refresh />}
                variant="outlined"
                color="primary"
                onClick={loadDoctors}
                disabled={loading}
              >
                רענן רשימה
              </Button>
            </Box>

            {/* Debug information toggle */}
            <Box sx={{ mb: 2 }}>
              <Button size="small" variant="text" color="secondary" onClick={() => setShowDebug(!showDebug)}>
                {showDebug ? "הסתר מידע דיבאג" : "הצג מידע דיבאג"}
              </Button>
            </Box>

            {/* Debug information */}
            {showDebug && debugInfo && (
              <Paper sx={{ p: 2, mb: 3, bgcolor: "#f5f5f5", maxHeight: 200, overflow: "auto" }}>
                <Typography variant="caption" component="pre" sx={{ whiteSpace: "pre-wrap" }}>
                  {debugInfo}
                </Typography>
              </Paper>
            )}

            {/* Doctor selection */}
            <Box sx={{ mb: 4, mt: 3 }}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="doctor-select-label">בחר רופא</InputLabel>
                <Select
                  labelId="doctor-select-label"
                  id="doctor-select"
                  value={selectedDoctor?.DoctorId || ""}
                  label="בחר רופא"
                  onChange={(e) => {
                    const value = e.target.value
                    if (!value) {
                      setSelectedDoctor(null)
                      return
                    }
                    const id = Number(value)
                    if (!isNaN(id)) {
                      console.log("Selected doctor ID:", id)
                      loadDoctorTurns(id)
                    }
                  }}
                  disabled={loading}
                >
                  <MenuItem value="">
                    <em>-- בחר רופא --</em>
                  </MenuItem>
                  {doctors.length > 0 ? (
                    doctors.map((doctor, index) => (
                      <MenuItem key={doctor.DoctorId ?? `doctor-${index}`} value={doctor.DoctorId}>
                        {doctor.DoctorName || `רופא ${index + 1}`} - {doctor.FieldOfSpecialization || "לא צוין"}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>טוען רופאים...</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>

            {/* Loading indicator */}
            {loading && (
              <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                <CircularProgress color="primary" />
              </Box>
            )}

            {/* Error message */}
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            {/* Appointment table */}
            {selectedDoctor && !loading && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" color="primary" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                  <CalendarMonth sx={{ mr: 1 }} />
                  תורים של {selectedDoctor.DoctorName || "הרופא הנבחר"}
                </Typography>

                {!selectedDoctor.DoctorSchedule?.Turns || selectedDoctor.DoctorSchedule.Turns.length === 0 ? (
                  <Alert severity="info" sx={{ mt: 2 }}>
                    אין תורים פנויים לרופא זה כרגע.
                  </Alert>
                ) : (
                  <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 2 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <StyledTableCell align="right">תאריך</StyledTableCell>
                          <StyledTableCell align="right">שעה</StyledTableCell>
                          <StyledTableCell align="right">מיקום</StyledTableCell>
                          <StyledTableCell align="right">פרטים</StyledTableCell>
                          <StyledTableCell align="right">הרשמה</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {selectedDoctor.DoctorSchedule?.Turns.map((turn: any) => (
                          <TableRow key={turn.TurnId} hover>
                            <TableCell align="right" sx={{ display: "flex", alignItems: "center" }}>
                              <CalendarMonth fontSize="small" sx={{ ml: 1, color: "primary.main" }} />
                              {formatDate(turn.DateTurn)}
                            </TableCell>
                            <TableCell align="right">
                              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                <AccessTime fontSize="small" sx={{ ml: 1, color: "primary.main" }} />
                                {turn.Hour}
                              </Box>
                            </TableCell>
                            <TableCell align="right">
                              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                <LocationOn fontSize="small" sx={{ ml: 1, color: "primary.main" }} />
                                {turn.TurnLocate}
                              </Box>
                            </TableCell>
                            <TableCell align="right">
                              <ActionButton
                                variant="outlined"
                                color="secondary"
                                startIcon={<Info />}
                                onClick={() => setSelectedTurn(turn)}
                              >
                                פרטים
                              </ActionButton>
                            </TableCell>
                            <TableCell align="right">
                              <ActionButton
                                variant="contained"
                                color="primary"
                                startIcon={<CheckCircle />}
                                onClick={() => registerTurn(turn)}
                              >
                                קבע תור
                              </ActionButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Box>
            )}

            {/* Appointment details dialog */}
            <Dialog
              open={selectedTurn !== null}
              onClose={() => setSelectedTurn(null)}
              maxWidth="sm"
              fullWidth
              dir="rtl"
            >
              <DialogTitle sx={{ bgcolor: "primary.main", color: "white" }}>
                פרטי תור
                <IconButton
                  aria-label="close"
                  onClick={() => setSelectedTurn(null)}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: "white",
                  }}
                >
                  <Close />
                </IconButton>
              </DialogTitle>
              <DialogContent sx={{ pt: 3, pb: 1 }}>
                {selectedTurn && (
                  <Box sx={{ p: 1 }}>
                    <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                      <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
                        רופא:
                      </Typography>
                      {selectedDoctor?.DoctorName || "הרופא הנבחר"}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                      <CalendarMonth sx={{ ml: 1, color: "primary.main" }} />
                      <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
                        תאריך:
                      </Typography>
                      {formatDate(selectedTurn.DateTurn)}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                      <AccessTime sx={{ ml: 1, color: "primary.main" }} />
                      <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
                        שעה:
                      </Typography>
                      {selectedTurn.Hour}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                      <LocationOn sx={{ ml: 1, color: "primary.main" }} />
                      <Typography component="span" fontWeight="bold" color="secondary" sx={{ ml: 1 }}>
                        מיקום:
                      </Typography>
                      {selectedTurn.TurnLocate}
                    </Typography>
                  </Box>
                )}
              </DialogContent>
              <DialogActions sx={{ p: 2, justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setSelectedTurn(null)}
                  startIcon={<Close />}
                >
                  סגירה
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => selectedTurn && registerTurn(selectedTurn)}
                  startIcon={<CheckCircle />}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "אישור הרשמה"}
                </Button>
              </DialogActions>
            </Dialog>

            {/* Success message */}
            <Snackbar
              open={success !== null}
              autoHideDuration={6000}
              onClose={() => setSuccess(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert onClose={() => setSuccess(null)} severity="success" sx={{ width: "100%" }}>
                {success}
              </Alert>
            </Snackbar>
          </Paper>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default SchedulePage