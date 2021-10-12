import { Counsellor, counsellors } from "./counsellor-data";
import { availability } from "./availability-data";


export class CounsellorAppointmentData {
    counsellorAvailability: Counsellor[];
    constructor() {
        this.counsellorAvailability = counsellors.map((councellor) => {
            const c = { ...councellor };
            c.availability = availability[c.id] || [];
            return c;
        });
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
    static getCounsellorAvailability(counsellor: Counsellor, date: string) {
        const availableTimes = counsellor.availability!.filter(a => a.datetime.includes(date)).map(a => a.datetime);
        return availableTimes || [];
    }
    getCounsellorAvailabilityById(id: string, date: string): string[] {
        const counsellor = this.counsellorAvailability.find(c => c.id = id);
        const availableTimes = counsellor!.availability!.filter(a => a.datetime.includes(date)).map(a => a.datetime);
        return availableTimes || [];
    }
}

// Get Counsellors by availability
