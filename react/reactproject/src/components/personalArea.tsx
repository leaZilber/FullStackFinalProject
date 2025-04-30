// // "use client"
// // import { useState } from "react"
// // import {
// //   Box,
// //   Typography,
// //   Paper,
// //   List,
// //   ListItem,
// //   ListItemIcon,
// //   ListItemText,
// //   Drawer,
// //   useMediaQuery,
// //   AppBar,
// //   Toolbar,
// //   IconButton,
// // } from "@mui/material"
// // import { styled, ThemeProvider, createTheme } from "@mui/material/styles"
// // import {
// //   CloudUpload as UploadIcon,
// //   History as HistoryIcon,
// //   CalendarMonth as CalendarIcon,
// //   Menu as MenuIcon,
// // } from "@mui/icons-material"
// // import { CheckPicture } from "./checkPictu"
// // import { Appointments } from "./appointments"
// // import { MedicalHistory } from "./medicalHistory"

// // // Create a custom theme with turquoise, gray and white
// // const theme = createTheme({
// //   direction: "rtl",
// //   palette: {
// //     primary: {
// //       main: "#00bcd4", // Turquoise
// //     },
// //     secondary: {
// //       main: "#f5f5f5", // Light Gray
// //     },
// //     background: {
// //       default: "#ffffff", // White
// //       paper: "#f5f5f5", // Light Gray
// //     },
// //   },
// //   typography: {
// //     fontFamily: "Roboto, Arial, sans-serif",
// //   },
// // })

// // const drawerWidth = 240

// // const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
// //   open?: boolean
// // }>(({ theme, open }) => ({
// //   flexGrow: 1,
// //   padding: theme.spacing(3),
// //   transition: theme.transitions.create("margin", {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.leavingScreen,
// //   }),
// //   marginRight: 0,
// //   ...(open && {
// //     transition: theme.transitions.create("margin", {
// //       easing: theme.transitions.easing.easeOut,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //     marginRight: drawerWidth,
// //   }),
// // }))

// // export const PersonalArea = () => {
// //   const [activeSection, setActiveSection] = useState<string>("uploadImage")
// //   const [userName, setUserName] = useState<string>("ישראל ישראלי")
// //   const [mobileOpen, setMobileOpen] = useState(false)
// //   const isMobile = useMediaQuery(theme.breakpoints.down("md"))

// //   const handleNavigation = (section: string) => {
// //     setActiveSection(section)
// //     if (isMobile) {
// //       setMobileOpen(false)
// //     }
// //   }

// //   const handleDrawerToggle = () => {
// //     setMobileOpen(!mobileOpen)
// //   }

// //   const drawer = (
// //     <Box sx={{ bgcolor: "background.paper", height: "100%" }}>
// //       <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
// //         <Typography variant="h6" component="div" align="right">
// //           אזור אישי
// //         </Typography>
// //       </Box>
// //       <List>
// //         <ListItem button onClick={() => handleNavigation("uploadImage")}>
// //           <ListItemText primary="העלאת תמונה" sx={{ textAlign: "right" }} />
// //           <ListItemIcon sx={{ color: "primary.main", minWidth: "auto", ml: 2 }}>
// //             <UploadIcon />
// //           </ListItemIcon>
// //         </ListItem>
// //         <ListItem button onClick={() => handleNavigation("medicalHistory")}>
// //           <ListItemText primary="היסטוריה רפואית" sx={{ textAlign: "right" }} />
// //           <ListItemIcon sx={{ color: "primary.main", minWidth: "auto", ml: 2 }}>
// //             <HistoryIcon />
// //           </ListItemIcon>
// //         </ListItem>
// //         <ListItem button onClick={() => handleNavigation("appointments")}>
// //           <ListItemText primary="תורים" sx={{ textAlign: "right" }} />
// //           <ListItemIcon sx={{ color: "primary.main", minWidth: "auto", ml: 2 }}>
// //             <CalendarIcon />
// //           </ListItemIcon>
// //         </ListItem>
// //       </List>
// //     </Box>
// //   )

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <Box sx={{ display: "flex", direction: "rtl" }}>
// //         <AppBar position="fixed" sx={{ bgcolor: "white", color: "text.primary", boxShadow: 1 }}>
// //           <Toolbar>
// //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //               שלום, {userName}
// //             </Typography>
// //             {isMobile && (
// //               <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
// //                 <MenuIcon />
// //               </IconButton>
// //             )}
// //           </Toolbar>
// //         </AppBar>

// //         <Main open={!isMobile}>
// //           <Toolbar />
// //           <Paper elevation={2} sx={{ p: 3, mt: 2, minHeight: "80vh" }}>
// //             {activeSection === "uploadImage" && <CheckPicture />}
// //             {activeSection === "medicalHistory" && <MedicalHistory />}
// //             {activeSection === "appointments" && <Appointments />}
// //           </Paper>
// //         </Main>

// //         <Drawer
// //           variant={isMobile ? "temporary" : "permanent"}
// //           open={isMobile ? mobileOpen : true}
// //           onClose={handleDrawerToggle}
// //           anchor="right"
// //           sx={{
// //             width: drawerWidth,
// //             flexShrink: 0,
// //             "& .MuiDrawer-paper": {
// //               width: drawerWidth,
// //               boxSizing: "border-box",
// //               bgcolor: "secondary.main",
// //             },
// //           }}
// //         >
// //           {drawer}
// //         </Drawer>
// //       </Box>
// //     </ThemeProvider>
// //   )
// // }


// "use client"

// import { useState } from "react"
// import {
//   Box,
//   Typography,
//   Paper,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Drawer,
//   useMediaQuery,
//   AppBar,
//   Toolbar,
//   IconButton,
// } from "@mui/material"
// import { styled, ThemeProvider, createTheme } from "@mui/material/styles"
// import {
//   CloudUpload as UploadIcon,
//   History as HistoryIcon,
//   CalendarMonth as CalendarIcon,
//   Menu as MenuIcon,
// } from "@mui/icons-material"

// import { Appointments } from "./appointments"
// import { MedicalHistory } from "./medicalHistory"
// import { CheckPicture } from "./checkPictu"

// // Create a custom theme with turquoise, gray and white
// const theme = createTheme({
//   direction: "rtl",
//   palette: {
//     primary: {
//       main: "#00bcd4", // Turquoise
//     },
//     secondary: {
//       main: "#f5f5f5", // Light Gray
//     },
//     background: {
//       default: "#ffffff", // White
//       paper: "#f5f5f5", // Light Gray
//     },
//   },
//   typography: {
//     fontFamily: "Roboto, Arial, sans-serif",
//   },
// })

// const drawerWidth = 240

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
//   open?: boolean
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create("margin", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginRight: 0,
//   ...(open && {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: drawerWidth,
//   }),
// }))

// export const PersonalArea = () => {
//   const [activeSection, setActiveSection] = useState<string>("uploadImage")
//   const [userName, setUserName] = useState<string>("ישראל ישראלי")
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"))

//   const handleNavigation = (section: string) => {
//     setActiveSection(section)
//     if (isMobile) {
//       setMobileOpen(false)
//     }
//   }

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen)
//   }

//   const drawer = (
//     <Box sx={{ bgcolor: "background.paper", height: "100%" }}>
//       <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
//         <Typography variant="h6" component="div" align="right">
//           אזור אישי
//         </Typography>
//       </Box>
//       <List>
//         <ListItem button onClick={() => handleNavigation("uploadImage")}>
//           <ListItemText primary="העלאת תמונה" sx={{ textAlign: "right" }} />
//           <ListItemIcon sx={{ color: "primary.main", minWidth: "auto", ml: 2 }}>
//             <UploadIcon />
//           </ListItemIcon>
//         </ListItem>
//         <ListItem button onClick={() => handleNavigation("medicalHistory")}>
//           <ListItemText primary="היסטוריה רפואית" sx={{ textAlign: "right" }} />
//           <ListItemIcon sx={{ color: "primary.main", minWidth: "auto", ml: 2 }}>
//             <HistoryIcon />
//           </ListItemIcon>
//         </ListItem>
//         <ListItem button onClick={() => handleNavigation("appointments")}>
//           <ListItemText primary="תורים" sx={{ textAlign: "right" }} />
//           <ListItemIcon sx={{ color: "primary.main", minWidth: "auto", ml: 2 }}>
//             <CalendarIcon />
//           </ListItemIcon>
//         </ListItem>
//       </List>
//     </Box>
//   )

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ display: "flex", direction: "rtl" }}>
//         <AppBar position="fixed" sx={{ bgcolor: "white", color: "text.primary", boxShadow: 1 }}>
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               שלום, {userName}
//             </Typography>
//             {isMobile && (
//               <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
//                 <MenuIcon />
//               </IconButton>
//             )}
//           </Toolbar>
//         </AppBar>

//         <Main open={!isMobile}>
//           <Toolbar />
//           <Paper elevation={2} sx={{ p: 3, mt: 2, minHeight: "80vh" }}>
//             {activeSection === "uploadImage" && <CheckPicture />}
//             {activeSection === "medicalHistory" && <MedicalHistory />}
//             {activeSection === "appointments" && <Appointments />}
//           </Paper>
//         </Main>

//         <Drawer
//           variant={isMobile ? "temporary" : "permanent"}
//           open={isMobile ? mobileOpen : true}
//           onClose={handleDrawerToggle}
//           anchor="right"
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             "& .MuiDrawer-paper": {
//               width: drawerWidth,
//               boxSizing: "border-box",
//               bgcolor: "secondary.main",
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </ThemeProvider>
//   )
// }


"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material"
import { styled, ThemeProvider, createTheme } from "@mui/material/styles"
import {
  CloudUpload as UploadIcon,
  History as HistoryIcon,
  CalendarMonth as CalendarIcon,
  Menu as MenuIcon,
} from "@mui/icons-material"

import { Appointments } from "./appointments"
import { MedicalHistory } from "./medicalHistory"
import { CheckPicture } from "./checkPictu"

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#00bcd4", // Turquoise
    },
    secondary: {
      main: "#f5f5f5", // Light Gray
    },
    background: {
      default: "#f5f5f5", // Gray background across the whole screen
      paper: "#ffffff",   // Paper is white
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
})

const drawerWidth = 240

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: 0,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
  minHeight: "100vh", // Ensure full height
  backgroundColor: theme.palette.background.default,
}))

export const PersonalArea = () => {
  const [activeSection, setActiveSection] = useState<string>("uploadImage")
  const [userName, setUserName] = useState<string>("ישראל ישראלי")
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleNavigation = (section: string) => {
    setActiveSection(section)
    if (isMobile) setMobileOpen(false)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ bgcolor: "background.paper", height: "100%" }}>
      <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
        <Typography variant="h6" align="right">אזור אישי</Typography>
      </Box>
      <List>
        <ListItem button onClick={() => handleNavigation("uploadImage")}>
          <ListItemText primary="העלאת תמונה" sx={{ textAlign: "right" }} />
          <ListItemIcon sx={{ color: "primary.main", minWidth: "auto", ml: 2 }}>
            <UploadIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => handleNavigation("medicalHistory")}>
          <ListItemText primary="היסטוריה רפואית" sx={{ textAlign: "right" }} />
          <ListItemIcon sx={{ color: "primary.main", minWidth: "auto", ml: 2 }}>
            <HistoryIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => handleNavigation("appointments")}>
          <ListItemText primary="תורים" sx={{ textAlign: "right" }} />
          <ListItemIcon sx={{ color: "primary.main", minWidth: "auto", ml: 2 }}>
            <CalendarIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <ThemeProvider theme={theme}>
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      minHeight: "100vh",
      bgcolor: "background.default",
      direction: "rtl",
    }}
  >
    {/* AppBar קבוע למעלה */}
    <AppBar
      position="fixed"
      sx={{ bgcolor: "white", color: "text.primary", boxShadow: 1 }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          שלום, {userName}
        </Typography>
        {isMobile && (
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            edge="end"
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>

    {/* תוכן עיקרי */}
    <Main open={!isMobile}>
      <Toolbar /> {/* מרווח בגלל ה־AppBar הקבוע */}
      <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
        {activeSection === "uploadImage" && <CheckPicture />}
        {activeSection === "medicalHistory" && <MedicalHistory />}
        {activeSection === "appointments" && <Appointments />}
      </Paper>
    </Main>

    {/* תפריט צדדי */}
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? mobileOpen : true}
      onClose={handleDrawerToggle}
      anchor="right"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "secondary.main",
        },
      }}
    >
      {drawer}
    </Drawer>
  </Box>
</ThemeProvider>
  )
}
