import { Counsellor, counsellors } from "./counsellor-data";
import { availability } from "./availability-data";


export class CounsellorAppointmentData {
    counsellorAvailability: Counsellor[];
    constructor() {
        this.counsellorAvailability = counsellors.map((counsellor) => {
            const c = { ...counsellor };
            c.availability = availability[c.id] || [];
            return c;
        });
    }
    static getAppointmentTypes(): string[] {
        const types = [...new Set(counsellors.map(c => c.appointment_types).flat())];
        return types;
    }
    static getSpecialisms(): string[] {
        const specialisms = [...new Set(counsellors.map(c => c.specialisms).flat())];
        return specialisms;
    }
    static getMediums(): string[] {
        const mediums = [...new Set(counsellors.map(c => c.appointment_mediums).flat())];
        return mediums;
    }

    getAvailableAppointmentTimes(type: string, date: string): string[] {
        const allTimes = this.counsellorAvailability
            .filter(c => c.appointment_types.some(t => t === type))
            .flatMap(cA => cA.availability!.flatMap(a => a.datetime));
        const filteredByDate = allTimes.filter(t => t.includes(date));
        const unique = [...new Set(filteredByDate)];
        const times = unique.map(u => u.substring(11, 16)).sort();
        console.info('Times:', times)
        return times;
    }
    getAvailableCounsellors(type: string, date: string, time: string): Counsellor[] {
        // Data string must confirm to HTML date input YYYY-MM-DD
        // TODO: Check correct format and make a fuss if its wrong
        const counsellorList = this.counsellorAvailability.filter((c: Counsellor) => {
            return c.appointment_types.some(t => t === type) && c.availability!.some(a => a.datetime.includes(`${date}T${time}`));
        })

        return counsellorList;
    }
}

// Get Counsellors by availability
