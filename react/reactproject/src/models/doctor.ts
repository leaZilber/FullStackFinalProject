// import { Schedule } from "./schedule";

// export class Doctor {
//     DoctorId: number | undefined;
//     DoctorName: string;
//     FieldOfSpecialization: string;
//     LicenseNumber: number;
//     DoctorSchedule: Schedule;

//     constructor(data: Partial<Doctor> = {}) {
//         this.DoctorId = data.DoctorId != undefined ? Number(data.DoctorId) : undefined;
//         this.DoctorName = data.DoctorName ?? "";
//         this.FieldOfSpecialization = data.FieldOfSpecialization ?? "";
//         this.LicenseNumber = data.LicenseNumber ?? 0;
//         this.DoctorSchedule = data.DoctorSchedule ?? new Schedule();
//     }
// }
// export class Doctor {
//     DoctorId?: number
//     DoctorName = ""
//     FieldOfSpecialization = ""
//     LicenseNumber = 0
//     ScheduleId?: number
//     schedule?: any // This matches your backend property name (lowercase)
  
//     // We'll also keep DoctorSchedule for compatibility with your existing code
//     DoctorSchedule?: {
//       Turns: any[]
//     }
  
//     constructor(data: any = {}) {
//       this.DoctorId = data.DoctorId !== undefined ? Number(data.DoctorId) : undefined
//       this.DoctorName = data.DoctorName || ""
//       this.FieldOfSpecialization = data.FieldOfSpecialization || ""
//       this.LicenseNumber = data.LicenseNumber || 0
//       this.ScheduleId = data.ScheduleId
  
//       // Handle both possible property names from the backend
//       if (data.schedule) {
//         this.schedule = data.schedule
//         // Also map to DoctorSchedule for compatibility
//         this.DoctorSchedule = {
//           Turns: data.schedule.Turns || [],
//         }
//       } else if (data.DoctorSchedule) {
//         this.DoctorSchedule = data.DoctorSchedule
//       } else {
//         this.DoctorSchedule = { Turns: [] }
//       }
//     }
//   }
import { Schedule } from "./schedule"

export class Doctor {
  DoctorId?: number
  DoctorName = ""
  FieldOfSpecialization = ""
  LicenseNumber = 0
  ScheduleId?: number
  schedule?: Schedule

  // We'll also keep DoctorSchedule for compatibility with your existing code
  DoctorSchedule?: {
    Turns: any[]
  }

  constructor(data: any = {}) {
    this.DoctorId = data.DoctorId !== undefined ? Number(data.DoctorId) : undefined
    this.DoctorName = data.DoctorName || ""
    this.FieldOfSpecialization = data.FieldOfSpecialization || ""
    this.LicenseNumber = data.LicenseNumber || 0
    this.ScheduleId = data.ScheduleId

    // Handle both possible property names from the backend
    if (data.schedule) {
      this.schedule = new Schedule(data.schedule)
      // Also map to DoctorSchedule for compatibility
      this.DoctorSchedule = {
        Turns: this.schedule.Turns || [],
      }
    } else if (data.DoctorSchedule) {
      this.DoctorSchedule = {
        Turns: Array.isArray(data.DoctorSchedule.Turns) ? data.DoctorSchedule.Turns : [],
      }
    } else {
      this.DoctorSchedule = { Turns: [] }
    }
  }
}
