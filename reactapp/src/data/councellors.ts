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
    static getAppointmentTypes(): { [key: string]: boolean } {
        const typeStrings = [...new Set(councellors.map(c => c.appointment_types).flat())];
        let types: { [key: string]: boolean } = {};
        typeStrings.forEach(type => {
            types[type] = false;
        });
        return types;
    }
    static getSpecialisms(): { [key: string]: boolean } {
        const specialismStrings = [...new Set(councellors.map(c => c.specialisms).flat())];
        let specialisms: { [key: string]: boolean } = {};
        specialismStrings.forEach(specialism => {
            specialisms[specialism] = false;
        });
        return specialisms;
    }
    static getMediums(): { [key: string]: boolean } {
        const mediumStrings = [...new Set(councellors.map(c => c.appointment_mediums).flat())];
        let mediums: { [key: string]: boolean } = {};
        mediumStrings.forEach(medium => {
            mediums[medium] = false;
        });
        return mediums;
    }

    getAvailableAppointmentTimes(type: string, date: string): string[] {
        const allTimes = this.councellorAvailability
            .filter(c => c.appointment_types.some(t => t === type))
            .flatMap(cA => cA.availability!.flatMap(a => a.datetime));
        const filteredByDate = allTimes.filter(t => t.includes(date));
        const unique = [...new Set(filteredByDate)];
        const times = unique.map(u => u.substring(11, 16)).sort();
        return times;
    }
    getAvailableCouncellors(type: string, date: string, time: string): Councellor[] {
        // Data string must confirm to HTML date input YYYY-MM-DD
        // TODO: Check correct format and make a fuss if its wrong
        const councellorList = this.councellorAvailability.filter((c: Councellor) => {
            return c.appointment_types.some(t => t === type) && c.availability!.some(a => a.datetime.includes(`${date}T${time}`));
        })

        return councellorList;
    }
}

// Get Councellors by availability
