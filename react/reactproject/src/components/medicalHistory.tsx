// "use client"
// import { useState, useEffect } from "react"
// import { Box, Typography, List, Paper, Grid, Card, CardMedia, CardContent, Skeleton, Chip } from "@mui/material"
// import { styled } from "@mui/material/styles"

// // Define the medical record type
// interface MedicalRecord {
//   id: string
//   date: string
//   diagnosis: string
//   doctor: string
//   notes: string
//   imageUrl: string
// }

// // Sample data - in a real app, this would come from an API
// const sampleMedicalHistory: MedicalRecord[] = [
//   {
//     id: "1",
//     date: "2023-05-15",
//     diagnosis: "בדיקת עיניים שגרתית",
//     doctor: 'ד"ר כהן',
//     notes: "תוצאות תקינות, מומלץ לחזור בעוד שנה",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: "2",
//     date: "2023-03-10",
//     diagnosis: "צילום רנטגן",
//     doctor: 'ד"ר לוי',
//     notes: "לא נמצאו ממצאים חריגים",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: "3",
//     date: "2022-11-22",
//     diagnosis: "בדיקת דם שנתית",
//     doctor: 'ד"ר ישראלי',
//     notes: "רמות כולסטרול גבוהות במקצת, מומלץ לשפר תזונה",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
// ]

// const StyledCard = styled(Card)(({ theme }) => ({
//   display: "flex",
//   marginBottom: theme.spacing(2),
//   borderRadius: theme.spacing(1),
//   overflow: "hidden",
//   boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
//   transition: "transform 0.3s ease-in-out",
//   "&:hover": {
//     transform: "translateY(-4px)",
//     boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
//   },
// }))

// const formatDate = (dateString: string) => {
//   const options: Intl.DateTimeFormatOptions = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   }
//   return new Date(dateString).toLocaleDateString("he-IL", options)
// }

// export const MedicalHistory = () => {
//   const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     // Simulate API call
//     const fetchMedicalHistory = async () => {
//       try {
//         // In a real app, fetch data from an API
//         // const response = await fetch('/api/medical-history');
//         // const data = await response.json();

//         // Using sample data for now
//         setTimeout(() => {
//           setMedicalRecords(sampleMedicalHistory)
//           setLoading(false)
//         }, 1000)
//       } catch (error) {
//         console.error("Error fetching medical history:", error)
//         setLoading(false)
//       }
//     }

//     fetchMedicalHistory()
//   }, [])

//   return (
//     <Box sx={{ p: 2 }}>
//       <Typography variant="h5" component="h2" gutterBottom align="right" sx={{ mb: 4, color: "primary.main" }}>
//         היסטוריה רפואית
//       </Typography>

//       {loading ? (
//         // Loading skeleton
//         Array.from(new Array(3)).map((_, index) => (
//           <StyledCard key={index}>
//             <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
//               <Box sx={{ width: "30%" }}>
//                 <Skeleton variant="rectangular" height={200} />
//               </Box>
//               <Box sx={{ width: "70%", p: 2 }}>
//                 <Skeleton variant="text" height={30} width="60%" />
//                 <Skeleton variant="text" height={20} width="40%" />
//                 <Skeleton variant="text" height={20} width="80%" />
//                 <Skeleton variant="text" height={20} width="70%" />
//               </Box>
//             </Box>
//           </StyledCard>
//         ))
//       ) : (
//         <List sx={{ width: "100%", p: 0 }}>
//           {medicalRecords.map((record) => (
//             <StyledCard key={record.id}>
//               <Grid container>
//                 <Grid item xs={12} sm={8} md={9} sx={{ display: "flex", flexDirection: "column" }}>
//                   <CardContent sx={{ flex: "1 0 auto", textAlign: "right" }}>
//                     <Typography component="div" variant="h6" color="primary.main">
//                       {record.diagnosis}
//                     </Typography>
//                     <Typography variant="subtitle1" color="text.secondary" component="div">
//                       {formatDate(record.date)}
//                     </Typography>
//                     <Chip
//                       label={record.doctor}
//                       size="small"
//                       sx={{
//                         my: 1,
//                         bgcolor: "primary.light",
//                         color: "white",
//                         fontWeight: "medium",
//                       }}
//                     />
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                       {record.notes}
//                     </Typography>
//                   </CardContent>
//                 </Grid>
//                 <Grid item xs={12} sm={4} md={3}>
//                   <CardMedia
//                     component="img"
//                     sx={{ height: 200, objectFit: "cover" }}
//                     image={record.imageUrl}
//                     alt={record.diagnosis}
//                   />
//                 </Grid>
//               </Grid>
//             </StyledCard>
//           ))}
//         </List>
//       )}

//       {!loading && medicalRecords.length === 0 && (
//         <Paper sx={{ p: 4, textAlign: "center" }}>
//           <Typography variant="body1">לא נמצאו רשומות רפואיות.</Typography>
//         </Paper>
//       )}
//     </Box>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { Box, Typography, List, Paper, Grid, Card, CardMedia, CardContent, Skeleton, Chip } from "@mui/material"
import { styled } from "@mui/material/styles"

// Define the medical record type
interface MedicalRecord {
  id: string
  date: string
  diagnosis: string
  doctor: string
  notes: string
  imageUrl: string
}

// Sample data - in a real app, this would come from an API
const sampleMedicalHistory: MedicalRecord[] = [
  {
    id: "1",
    date: "2023-05-15",
    diagnosis: "בדיקת עיניים שגרתית",
    doctor: 'ד"ר כהן',
    notes: "תוצאות תקינות, מומלץ לחזור בעוד שנה",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    date: "2023-03-10",
    diagnosis: "צילום רנטגן",
    doctor: 'ד"ר לוי',
    notes: "לא נמצאו ממצאים חריגים",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    date: "2022-11-22",
    diagnosis: "בדיקת דם שנתית",
    doctor: 'ד"ר ישראלי',
    notes: "רמות כולסטרול גבוהות במקצת, מומלץ לשפר תזונה",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
]

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(1),
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
  },
}))

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Date(dateString).toLocaleDateString("he-IL", options)
}

export const MedicalHistory = () => {
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchMedicalHistory = async () => {
      try {
        // In a real app, fetch data from an API
        // const response = await fetch('/api/medical-history');
        // const data = await response.json();

        // Using sample data for now
        setTimeout(() => {
          setMedicalRecords(sampleMedicalHistory)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching medical history:", error)
        setLoading(false)
      }
    }

    fetchMedicalHistory()
  }, [])

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom align="right" sx={{ mb: 4, color: "primary.main" }}>
        היסטוריה רפואית
      </Typography>

      {loading ? (
        // Loading skeleton
        Array.from(new Array(3)).map((_, index) => (
          <StyledCard key={index}>
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
              <Box sx={{ width: "30%" }}>
                <Skeleton variant="rectangular" height={200} />
              </Box>
              <Box sx={{ width: "70%", p: 2 }}>
                <Skeleton variant="text" height={30} width="60%" />
                <Skeleton variant="text" height={20} width="40%" />
                <Skeleton variant="text" height={20} width="80%" />
                <Skeleton variant="text" height={20} width="70%" />
              </Box>
            </Box>
          </StyledCard>
        ))
      ) : (
        <List sx={{ width: "100%", p: 0 }}>
          {medicalRecords.map((record) => (
            <StyledCard key={record.id}>
              <Grid container>
                <Grid item xs={12} sm={8} md={9} sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto", textAlign: "right" }}>
                    <Typography component="div" variant="h6" color="primary.main">
                      {record.diagnosis}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {formatDate(record.date)}
                    </Typography>
                    <Chip
                      label={record.doctor}
                      size="small"
                      sx={{
                        my: 1,
                        bgcolor: "primary.light",
                        color: "white",
                        fontWeight: "medium",
                      }}
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {record.notes}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <CardMedia
                    component="img"
                    sx={{ height: 200, objectFit: "cover" }}
                    image={record.imageUrl}
                    alt={record.diagnosis}
                  />
                </Grid>
              </Grid>
            </StyledCard>
          ))}
        </List>
      )}

      {!loading && medicalRecords.length === 0 && (
        <Paper sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="body1">לא נמצאו רשומות רפואיות.</Typography>
        </Paper>
      )}
    </Box>
  )
}
