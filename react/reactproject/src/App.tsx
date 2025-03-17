import './App.css'
// import { Schedule1 } from './components/schedule'
import { Doctor } from './models/doctor';
import { Schedule } from './models/schedule';
import { Turn } from './models/turn';
import { AboutUs } from './components/aboutUs'
// import { InformationPage } from './components/information'
// import LoginComp from './homeComponents/login'
// import RegisterComp from './homeComponents/register'
// import { HomePage } from './components/homePage'
// import { CheckPicture } from './components/checkPictu'

function App() {
  const doctorsArr: Doctor[] = [//להחליף לקריאת API
    new Doctor({
      DoctorCode: 1,
      FieldOfSpecialization: "רופא עור - מומחה לסרטן העור",
      LicenseNumber: 10001,
      DoctorSchedule: new Schedule({
        Turns: [
          new Turn({ TurnId: 1, TurnUserId: "101", DoctorName: "ד\"ר ניר ברקוביץ'", DoctorCode: 1, DateTurn: new Date(2025, 3, 10, 9, 0), TurnLocate: "מרפאת איכילוב - תל אביב", ArrivalConfirmation: true }),
          new Turn({ TurnId: 2, TurnUserId: "102", DoctorName: "ד\"ר ניר ברקוביץ'", DoctorCode: 1, DateTurn: new Date(2025, 3, 12, 11, 30), TurnLocate: "מרפאת איכילוב - תל אביב", ArrivalConfirmation: false }),
          new Turn({ TurnId: 3, TurnUserId: "103", DoctorName: "ד\"ר ניר ברקוביץ'", DoctorCode: 1, DateTurn: new Date(2025, 3, 15, 13, 45), TurnLocate: "מרפאת איכילוב - תל אביב", ArrivalConfirmation: true }),
          new Turn({ TurnId: 4, TurnUserId: "104", DoctorName: "ד\"ר ניר ברקוביץ'", DoctorCode: 1, DateTurn: new Date(2025, 3, 17, 16, 0), TurnLocate: "מרפאת איכילוב - תל אביב", ArrivalConfirmation: false })
        ]
      })
    }),
    new Doctor({
      DoctorCode: 2,
      FieldOfSpecialization: "רופא עור - מומחה לסרטן העור",
      LicenseNumber: 10002,
      DoctorSchedule: new Schedule({
        Turns: [
          new Turn({ TurnId: 5, TurnUserId: "201", DoctorName: "ד\"ר יעל דהן", DoctorCode: 2, DateTurn: new Date(2025, 3, 11, 10, 0), TurnLocate: "מרפאת רמב\"ם - חיפה", ArrivalConfirmation: true }),
          new Turn({ TurnId: 6, TurnUserId: "202", DoctorName: "ד\"ר יעל דהן", DoctorCode: 2, DateTurn: new Date(2025, 3, 14, 12, 15), TurnLocate: "מרפאת רמב\"ם - חיפה", ArrivalConfirmation: false }),
          new Turn({ TurnId: 7, TurnUserId: "203", DoctorName: "ד\"ר יעל דהן", DoctorCode: 2, DateTurn: new Date(2025, 3, 16, 15, 30), TurnLocate: "מרפאת רמב\"ם - חיפה", ArrivalConfirmation: true }),
          new Turn({ TurnId: 8, TurnUserId: "204", DoctorName: "ד\"ר יעל דהן", DoctorCode: 2, DateTurn: new Date(2025, 3, 18, 17, 45), TurnLocate: "מרפאת רמב\"ם - חיפה", ArrivalConfirmation: false })
        ]
      })
    }),
    new Doctor({
      DoctorCode: 3,
      FieldOfSpecialization: "רופא עור - מומחה לסרטן העור",
      LicenseNumber: 10003,
      DoctorSchedule: new Schedule({
        Turns: [
          new Turn({ TurnId: 9, TurnUserId: "301", DoctorName: "ד\"ר אביחי לוי", DoctorCode: 3, DateTurn: new Date(2025, 3, 12, 9, 30), TurnLocate: "מרפאת הדסה - ירושלים", ArrivalConfirmation: false }),
          new Turn({ TurnId: 10, TurnUserId: "302", DoctorName: "ד\"ר אביחי לוי", DoctorCode: 3, DateTurn: new Date(2025, 3, 15, 12, 0), TurnLocate: "מרפאת הדסה - ירושלים", ArrivalConfirmation: true }),
          new Turn({ TurnId: 11, TurnUserId: "303", DoctorName: "ד\"ר אביחי לוי", DoctorCode: 3, DateTurn: new Date(2025, 3, 17, 14, 30), TurnLocate: "מרפאת הדסה - ירושלים", ArrivalConfirmation: false }),
          new Turn({ TurnId: 12, TurnUserId: "304", DoctorName: "ד\"ר אביחי לוי", DoctorCode: 3, DateTurn: new Date(2025, 3, 19, 16, 15), TurnLocate: "מרפאת הדסה - ירושלים", ArrivalConfirmation: true })
        ]
      })
    }),
    new Doctor({
      DoctorCode: 4,
      FieldOfSpecialization: "רופא עור - מומחה לסרטן העור",
      LicenseNumber: 10004,
      DoctorSchedule: new Schedule({
        Turns: [
          new Turn({ TurnId: 13, TurnUserId: "401", DoctorName: "ד\"ר קרן כהן", DoctorCode: 4, DateTurn: new Date(2025, 3, 10, 8, 30), TurnLocate: "מרפאת סורוקה - באר שבע", ArrivalConfirmation: true }),
          new Turn({ TurnId: 14, TurnUserId: "402", DoctorName: "ד\"ר קרן כהן", DoctorCode: 4, DateTurn: new Date(2025, 3, 12, 11, 0), TurnLocate: "מרפאת סורוקה - באר שבע", ArrivalConfirmation: false }),
          new Turn({ TurnId: 15, TurnUserId: "403", DoctorName: "ד\"ר קרן כהן", DoctorCode: 4, DateTurn: new Date(2025, 3, 14, 14, 45), TurnLocate: "מרפאת סורוקה - באר שבע", ArrivalConfirmation: true }),
          new Turn({ TurnId: 16, TurnUserId: "404", DoctorName: "ד\"ר קרן כהן", DoctorCode: 4, DateTurn: new Date(2025, 3, 16, 17, 0), TurnLocate: "מרפאת סורוקה - באר שבע", ArrivalConfirmation: false })
        ]
      })
    })
  ];

  return (
    <>
      {/* <Schedule1 doctors={doctorsArr} /> */}
      {/* <CheckPicture/> */}
      <AboutUs/>
      {/* <InformationPage/> */}
      {/* <HomePage /> */}
    </>
  )
}

export default App
