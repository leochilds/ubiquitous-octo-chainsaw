import { Counsellor, counsellors } from "./counsellor-data";
import { availability } from "./availability-data";

export type Appointment = {
    counsellor: Counsellor,
    datetime: string,
    type: string,
    medium: string
}

export class CounsellorAppointmentData {
    counsellorAvailability: Counsellor[];
    appointments: Appointment[];
    constructor() {
        this.counsellorAvailability = counsellors.map((councellor) => {
            const c = { ...councellor };
            c.availability = availability[c.id] || [];
            return c;
        });
        this.appointments = []
    }
    static getAppointmentTypes(): { [key: string]: boolean } {
        const typeStrings = [...new Set(counsellors.map(c => c.appointment_types).flat())];
        let types: { [key: string]: boolean } = {};
        typeStrings.forEach(type => {
            types[type] = false;
        });
        return types;
    }
    static getSpecialisms(): { [key: string]: boolean } {
        const specialismStrings = [...new Set(counsellors.map(c => c.specialisms).flat())];
        let specialisms: { [key: string]: boolean } = {};
        specialismStrings.forEach(specialism => {
            specialisms[specialism] = false;
        });
        return specialisms;
    }
    static getMediums(): { [key: string]: boolean } {
        const mediumStrings = [...new Set(counsellors.map(c => c.appointment_mediums).flat())];
        let mediums: { [key: string]: boolean } = {};
        mediumStrings.forEach(medium => {
            mediums[medium] = false;
        });
        return mediums;
    }
    getAvailableCounsellors(date: string, types: string[], mediums: string[], specialisms: string[]) {
        const availableCounsellors = this.counsellorAvailability
            .filter((counsellor) => {
                return (
                    counsellor.availability!.some(availability => availability.datetime.includes(date)) &&
                    counsellor.appointment_types.some(type => types.includes(type)) &&
                    counsellor.appointment_mediums.some(medium => mediums.includes(medium)) &&
                    counsellor.specialisms.some(specialism => specialisms.includes(specialism))
                )
            })
        return availableCounsellors;
    }
    static getCounsellorAvailability(counsellor: Counsellor, date: string): { datetime: string, id: string }[] {
        const availableTimes = counsellor.availability!.filter(a => a.datetime.includes(date));
        return availableTimes || [];
    }
    bookAppointment(counsellorId: string, appointmentId: string, type: string, medium: string) {
        const counsellorIndex = this.counsellorAvailability.findIndex(c => c.id === counsellorId);
        const counsellor = { ...this.counsellorAvailability[counsellorIndex] };
        const appointmentIndex = counsellor.availability!.findIndex((a: { id: string, datetime: string }) => a.id === appointmentId);
        const { availability, ...selectedCounsellor } = counsellor;
        const appointment: Appointment = {
            counsellor: selectedCounsellor,
            datetime: availability!.find(d => d.id === appointmentId)!.datetime,
            type: type,
            medium: medium
        }
        this.counsellorAvailability[counsellorIndex].availability?.splice(appointmentIndex, 1);
        this.appointments.push(appointment);
        return appointment;
    }
}

// Get Counsellors by availability
