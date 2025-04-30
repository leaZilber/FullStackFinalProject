// "use client"

// import { useState, useEffect } from "react"
// import {
//   Box,
//   Typography,
//   Paper,
//   Button,
//   List,
//   Chip,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Snackbar,
//   Alert,
//   CircularProgress,
// } from "@mui/material"
// import {
//   Email as EmailIcon,
//   CalendarToday as CalendarIcon,
//   AccessTime as TimeIcon,
//   Person as PersonIcon,
//   LocationOn as LocationIcon,
// } from "@mui/icons-material"
// import { styled } from "@mui/material/styles"

// // Define the appointment type
// interface Appointment {
//   id: string
//   date: string
//   time: string
//   doctor: string
//   department: string
//   location: string
//   status: "upcoming" | "completed" | "cancelled"
// }

// // Sample data - in a real app, this would come from an API
// const sampleAppointments: Appointment[] = [
//   {
//     id: "1",
//     date: "2024-05-20",
//     time: "09:30",
//     doctor: 'ד"ר כהן',
//     department: "עיניים",
//     location: "מרפאת תל אביב, קומה 3",
//     status: "upcoming",
//   },
//   {
//     id: "2",
//     date: "2024-06-15",
//     time: "11:00",
//     doctor: 'ד"ר לוי',
//     department: "אורתופדיה",
//     location: "מרפאת ירושלים, קומה 2",
//     status: "upcoming",
//   },
//   {
//     id: "3",
//     date: "2024-04-10",
//     time: "14:15",
//     doctor: 'ד"ר ישראלי',
//     department: "רפואה כללית",
//     location: "מרפאת חיפה, קומה 1",
//     status: "completed",
//   },
// ]

// const AppointmentItem = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2),
//   marginBottom: theme.spacing(2),
//   borderRadius: theme.spacing(1),
//   position: "relative",
//   transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
//   "&:hover": {
//     transform: "translateY(-3px)",
//     boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
//   },
// }))

// const StatusChip = styled(Chip)<{ status: string }>(({ theme, status }) => ({
//   position: "absolute",
//   top: theme.spacing(2),
//   left: theme.spacing(2),
//   ...(status === "upcoming" && {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.primary.contrastText,
//   }),
//   ...(status === "completed" && {
//     backgroundColor: theme.palette.success.main,
//     color: theme.palette.success.contrastText,
//   }),
//   ...(status === "cancelled" && {
//     backgroundColor: theme.palette.error.main,
//     color: theme.palette.error.contrastText,
//   }),
// }))

// const formatDate = (dateString: string) => {
//   const options: Intl.DateTimeFormatOptions = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   }
//   return new Date(dateString).toLocaleDateString("he-IL", options)
// }

// const getStatusText = (status: string) => {
//   switch (status) {
//     case "upcoming":
//       return "קרוב"
//     case "completed":
//       return "הושלם"
//     case "cancelled":
//       return "בוטל"
//     default:
//       return status
//   }
// }

// export const Appointments = () => {
//   const [appointments, setAppointments] = useState<Appointment[]>([])
//   const [loading, setLoading] = useState(true)
//   const [openDialog, setOpenDialog] = useState(false)
//   const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
//   const [sendingEmail, setSendingEmail] = useState(false)
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success" as "success" | "error",
//   })

//   useEffect(() => {
//     // Simulate API call
//     const fetchAppointments = async () => {
//       try {
//         // In a real app, fetch data from an API
//         // const response = await fetch('/api/appointments');
//         // const data = await response.json();

//         // Using sample data for now
//         setTimeout(() => {
//           setAppointments(sampleAppointments)
//           setLoading(false)
//         }, 1000)
//       } catch (error) {
//         console.error("Error fetching appointments:", error)
//         setLoading(false)
//       }
//     }

//     fetchAppointments()
//   }, [])

//   const handleSendReminder = (appointment: Appointment) => {
//     setSelectedAppointment(appointment)
//     setOpenDialog(true)
//   }

//   const handleCloseDialog = () => {
//     setOpenDialog(false)
//   }

//   const handleConfirmSendReminder = async () => {
//     if (!selectedAppointment) return

//     setSendingEmail(true)

//     try {
//       // In a real app, send a request to the server
//       // const response = await fetch('/api/send-reminder', {
//       //   method: 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       //   body: JSON.stringify({ appointmentId: selectedAppointment.id }),
//       // });

//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500))

//       setSnackbar({
//         open: true,
//         message: "תזכורת נשלחה בהצלחה!",
//         severity: "success",
//       })

//       handleCloseDialog()
//     } catch (error) {
//       console.error("Error sending reminder:", error)
//       setSnackbar({
//         open: true,
//         message: "שגיאה בשליחת התזכורת. נסה שוב מאוחר יותר.",
//         severity: "error",
//       })
//     } finally {
//       setSendingEmail(false)
//     }
//   }

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false })
//   }

//   return (
//     <Box sx={{ p: 2 }}>
//       <Typography variant="h5" component="h2" gutterBottom align="right" sx={{ mb: 4, color: "primary.main" }}>
//         התורים שלי
//       </Typography>

//       {loading ? (
//         <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
//           <CircularProgress color="primary" />
//         </Box>
//       ) : (
//         <List sx={{ width: "100%", p: 0 }}>
//           {appointments.map((appointment) => (
//             <AppointmentItem key={appointment.id} elevation={2}>
//               <StatusChip label={getStatusText(appointment.status)} size="small" status={appointment.status} />

//               <Box sx={{ textAlign: "right", mb: 2 }}>
//                 <Typography variant="h6" component="h3" color="primary.main">
//                   {appointment.department}
//                 </Typography>
//               </Box>

//               <Box sx={{ display: "flex", flexDirection: "column", gap: 1, textAlign: "right" }}>
//                 <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1 }}>
//                   <Typography variant="body1">{formatDate(appointment.date)}</Typography>
//                   <CalendarIcon color="primary" fontSize="small" />
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1 }}>
//                   <Typography variant="body1">{appointment.time}</Typography>
//                   <TimeIcon color="primary" fontSize="small" />
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1 }}>
//                   <Typography variant="body1">{appointment.doctor}</Typography>
//                   <PersonIcon color="primary" fontSize="small" />
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1 }}>
//                   <Typography variant="body1">{appointment.location}</Typography>
//                   <LocationIcon color="primary" fontSize="small" />
//                 </Box>
//               </Box>

//               {appointment.status === "upcoming" && (
//                 <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-start" }}>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     startIcon={<EmailIcon />}
//                     onClick={() => handleSendReminder(appointment)}
//                     sx={{ borderRadius: 2 }}
//                   >
//                     שלח תזכורת
//                   </Button>
//                 </Box>
//               )}
//             </AppointmentItem>
//           ))}
//         </List>
//       )}

//       {!loading && appointments.length === 0 && (
//         <Paper sx={{ p: 4, textAlign: "center" }}>
//           <Typography variant="body1">לא נמצאו תורים.</Typography>
//         </Paper>
//       )}

//       {/* Confirmation Dialog */}
//       <Dialog
//         open={openDialog}
//         onClose={handleCloseDialog}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title" sx={{ textAlign: "right" }}>
//           {"שליחת תזכורת לתור"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description" sx={{ textAlign: "right" }}>
//             האם אתה בטוח שברצונך לשלוח תזכורת בדוא"ל עבור התור ב-
//             {selectedAppointment && formatDate(selectedAppointment.date)} בשעה
//             {selectedAppointment && ` ${selectedAppointment.time}`}?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             ביטול
//           </Button>
//           <Button
//             onClick={handleConfirmSendReminder}
//             color="primary"
//             variant="contained"
//             disabled={sendingEmail}
//             startIcon={sendingEmail ? <CircularProgress size={20} /> : <EmailIcon />}
//           >
//             {sendingEmail ? "שולח..." : "שלח תזכורת"}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Success/Error Snackbar */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Typography,
  Paper,
  Button,
  List,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material"
import {
  Email as EmailIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  Person as PersonIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material"
import { styled } from "@mui/material/styles"

// Define the appointment type
interface Appointment {
  id: string
  date: string
  time: string
  doctor: string
  department: string
  location: string
  status: "upcoming" | "completed" | "cancelled"
}

// Sample data - in a real app, this would come from an API
const sampleAppointments: Appointment[] = [
  {
    id: "1",
    date: "2024-05-20",
    time: "09:30",
    doctor: 'ד"ר כהן',
    department: "עיניים",
    location: "מרפאת תל אביב, קומה 3",
    status: "upcoming",
  },
  {
    id: "2",
    date: "2024-06-15",
    time: "11:00",
    doctor: 'ד"ר לוי',
    department: "אורתופדיה",
    location: "מרפאת ירושלים, קומה 2",
    status: "upcoming",
  },
  {
    id: "3",
    date: "2024-04-10",
    time: "14:15",
    doctor: 'ד"ר ישראלי',
    department: "רפואה כללית",
    location: "מרפאת חיפה, קומה 1",
    status: "completed",
  },
]

const AppointmentItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(1),
  position: "relative",
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  },
}))

const StatusChip = styled(Chip)<{ status: string }>(({ theme, status }) => ({
  position: "absolute",
  top: theme.spacing(2),
  left: theme.spacing(2),
  ...(status === "upcoming" && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }),
  ...(status === "completed" && {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  }),
  ...(status === "cancelled" && {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  }),
}))

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Date(dateString).toLocaleDateString("he-IL", options)
}

const getStatusText = (status: string) => {
  switch (status) {
    case "upcoming":
      return "קרוב"
    case "completed":
      return "הושלם"
    case "cancelled":
      return "בוטל"
    default:
      return status
  }
}

export const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [sendingEmail, setSendingEmail] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  })

  useEffect(() => {
    // Simulate API call
    const fetchAppointments = async () => {
      try {
        // In a real app, fetch data from an API
        // const response = await fetch('/api/appointments');
        // const data = await response.json();

        // Using sample data for now
        setTimeout(() => {
          setAppointments(sampleAppointments)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching appointments:", error)
        setLoading(false)
      }
    }

    fetchAppointments()
  }, [])

  const handleSendReminder = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleConfirmSendReminder = async () => {
    if (!selectedAppointment) return

    setSendingEmail(true)

    try {
      // In a real app, send a request to the server
      // const response = await fetch('/api/send-reminder', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ appointmentId: selectedAppointment.id }),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSnackbar({
        open: true,
        message: "תזכורת נשלחה בהצלחה!",
        severity: "success",
      })

      handleCloseDialog()
    } catch (error) {
      console.error("Error sending reminder:", error)
      setSnackbar({
        open: true,
        message: "שגיאה בשליחת התזכורת. נסה שוב מאוחר יותר.",
        severity: "error",
      })
    } finally {
      setSendingEmail(false)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom align="right" sx={{ mb: 4, color: "primary.main" }}>
        התורים שלי
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <List sx={{ width: "100%", p: 0 }}>
          {appointments.map((appointment) => (
            <AppointmentItem key={appointment.id} elevation={2}>
              <StatusChip label={getStatusText(appointment.status)} size="small" status={appointment.status} />

              <Box sx={{ textAlign: "right", mb: 2 }}>
                <Typography variant="h6" component="h3" color="primary.main">
                  {appointment.department}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1, textAlign: "right" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1 }}>
                  <Typography variant="body1">{formatDate(appointment.date)}</Typography>
                  <CalendarIcon color="primary" fontSize="small" />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1 }}>
                  <Typography variant="body1">{appointment.time}</Typography>
                  <TimeIcon color="primary" fontSize="small" />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1 }}>
                  <Typography variant="body1">{appointment.doctor}</Typography>
                  <PersonIcon color="primary" fontSize="small" />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1 }}>
                  <Typography variant="body1">{appointment.location}</Typography>
                  <LocationIcon color="primary" fontSize="small" />
                </Box>
              </Box>

              {appointment.status === "upcoming" && (
                <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-start" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EmailIcon />}
                    onClick={() => handleSendReminder(appointment)}
                    sx={{ borderRadius: 2 }}
                  >
                    שלח תזכורת
                  </Button>
                </Box>
              )}
            </AppointmentItem>
          ))}
        </List>
      )}

      {!loading && appointments.length === 0 && (
        <Paper sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="body1">לא נמצאו תורים.</Typography>
        </Paper>
      )}

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ textAlign: "right" }}>
          {"שליחת תזכורת לתור"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ textAlign: "right" }}>
            האם אתה בטוח שברצונך לשלוח תזכורת בדוא"ל עבור התור ב-
            {selectedAppointment && formatDate(selectedAppointment.date)} בשעה
            {selectedAppointment && ` ${selectedAppointment.time}`}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            ביטול
          </Button>
          <Button
            onClick={handleConfirmSendReminder}
            color="primary"
            variant="contained"
            disabled={sendingEmail}
            startIcon={sendingEmail ? <CircularProgress size={20} /> : <EmailIcon />}
          >
            {sendingEmail ? "שולח..." : "שלח תזכורת"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}