import react from "react";
import { CounsellorAppointmentData } from "../../data/councellors";
import { Counsellor } from "../../data/counsellor-data";
import { CounsellorResults } from "./CounsellorResults";
import { SearchFilter, SearchFilterState } from "./SearchFilter";
interface CounsellorSearchProps {
    counsellorAppointmentData: CounsellorAppointmentData,
    goToBookingPage: (counsellor: Counsellor, date: string) => void
}
interface CounsellorSearchState {
    selectedDate: string,
    appointmentTypes: string[],
    appointmentMediums: string[]
    counsellorSpecialisms: string[]
    availableCounsellors: Counsellor[]
}
export class CounsellorSearch extends react.Component<CounsellorSearchProps, CounsellorSearchState> {
    constructor(props: CounsellorSearchProps) {
        super(props)
        this.state = {
            selectedDate: '2021-08-17',
            appointmentTypes: [],
            appointmentMediums: [],
            counsellorSpecialisms: [],
            availableCounsellors: props.counsellorAppointmentData.counsellorAvailability
        }
        this.filterResults = this.filterResults.bind(this);
        this.goToBookingPage = this.goToBookingPage.bind(this);
    }
    filterResults(filters: SearchFilterState) {
        const types: string[] = [];
        for (const key in filters.types) {
            if (filters.types[key]) {
                types.push(key)
            }
        }
        const mediums: string[] = [];
        for (const key in filters.mediums) {
            if (filters.mediums[key]) {
                mediums.push(key)
            }
        }
        const specialisms: string[] = [];
        for (const key in filters.specialisms) {
            if (filters.specialisms[key]) {
                specialisms.push(key)
            }
        }
        const state: any = {
            selectedDate: filters.selectedDate,
            appointmentTypes: types.length ? types : Object.keys(CounsellorAppointmentData.getAppointmentTypes()),
            appointmentMediums: mediums.length ? mediums : Object.keys(CounsellorAppointmentData.getMediums()),
            counsellorSpecialisms: specialisms.length ? specialisms : Object.keys(CounsellorAppointmentData.getSpecialisms())
        };
        state['availableCounsellors'] = this.props.counsellorAppointmentData.getAvailableCounsellors(state.selectedDate, state.appointmentTypes, state.appointmentMediums, state.counsellorSpecialisms)
        this.setState(state);

    }
    goToBookingPage(counsellor: Counsellor) {
        this.props.goToBookingPage(counsellor, this.state.selectedDate)
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <SearchFilter filterResults={this.filterResults} />
                    <CounsellorResults goToBookingPage={this.goToBookingPage} counsellorList={this.state.availableCounsellors} />
                </div>
            </div>
        )
    }
}