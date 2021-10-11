import { Councellor, councellors } from "./councellor-data";
import { availability } from "./availability-data";


export class CouncellorAppointmentData {
    councellorAvailability: Councellor[];
    constructor() {
        this.councellorAvailability = councellors.map((councellor) => {
            const c = { ...councellor };
            c.availability = availability[c.id] || [];
            return c;
        });
    }
    static getAppointmentTypes(): string[] {
        const types = [...new Set(councellors.map(c => c.appointment_types).flat())];
        return types;
    }
    static getSpecialisms(): string[] {
        const specialisms = [...new Set(councellors.map(c => c.specialisms).flat())];
        return specialisms;
    }
    static getMediums(): string[] {
        const mediums = [...new Set(councellors.map(c => c.appointment_mediums).flat())];
        return mediums;
    }
    getAvailableAppointmentTimes(date: string): string[] {
        const allTimes = this.councellorAvailability.flatMap(cA => cA.availability!.flatMap(a => a.datetime));
        const filteredByDate = allTimes.filter(t => t.includes(date));
        const unique = [...new Set(filteredByDate)];
        const times = unique.map(u => u.substring(11, 16)).sort();
        return times;
    }
    getAvailableCouncellors(date: string, time: string): Councellor[] {
        // Data string must confirm to HTML date input YYYY-MM-DD
        // TODO: Check correct format and make a fuss if its wrong
        const councellorList = this.councellorAvailability.filter((c: Councellor) => {
            return c.availability!.some(a => a.datetime.includes(`${date}T${time}`));
        })
        console.info(councellorList);
        return councellorList;
    }
}

// Get Councellors by availability
