import react from "react";
import { CounsellorAppointmentData } from "../../data/councellors";
import { FilterInput } from "./FilterInput";
interface SearchFilterProps {
    filterResults: (filters: SearchFilterState) => void
}
export interface SearchFilterState {
    types: { [key: string]: boolean },
    specialisms: { [key: string]: boolean },
    mediums: { [key: string]: boolean },
    selectedDate: string
}
export class SearchFilter extends react.Component<SearchFilterProps, SearchFilterState> {
    constructor(props: SearchFilterProps) {
        super(props)
        this.state = {
            types: CounsellorAppointmentData.getAppointmentTypes(),
            specialisms: CounsellorAppointmentData.getSpecialisms(),
            mediums: CounsellorAppointmentData.getMediums(),
            selectedDate: '2021-08-17'
        }
        this.addRemoveTypeFilter = this.addRemoveTypeFilter.bind(this);
        this.addRemoveSpecialismFilter = this.addRemoveSpecialismFilter.bind(this);
        this.addRemoveMediumFilter = this.addRemoveMediumFilter.bind(this);
        this.handleSelectDate = this.handleSelectDate.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    addRemoveTypeFilter(key: string) {
        const types: { [key: string]: boolean } = { ...this.state.types };
        types[key] = !types[key];
        this.setState({
            types: types
        });
    }
    addRemoveSpecialismFilter(key: string) {
        const specialisms: { [key: string]: boolean } = { ...this.state.specialisms };
        specialisms[key] = !specialisms[key];
        this.setState({
            specialisms: specialisms
        });
    }
    addRemoveMediumFilter(key: string) {
        const mediums: { [key: string]: boolean } = { ...this.state.mediums };
        mediums[key] = !mediums[key];
        this.setState({
            mediums: mediums
        });
    }
    handleSelectDate(event: react.ChangeEvent<HTMLInputElement>) {
        this.setState({
            selectedDate: event.target.value
        })

    }
    handleSearch() {
        const filters = { ...this.state }
        this.props.filterResults(filters);
        console.info('Called filter: ', filters)
    }
    render() {
        const renderInput = (filter: { [key: string]: boolean; }, func: { (key: string): void; }) => {
            const inputs = [];
            for (const key in filter) {
                inputs.push(<FilterInput type={{ key: key, selected: filter[key] }} handleCheck={func} />)
            }
            return inputs;
        }
        const renderAppointmentTypes = renderInput(this.state.types, this.addRemoveTypeFilter);
        const renderSpecialisms = renderInput(this.state.specialisms, this.addRemoveSpecialismFilter)
        const renderMediums = renderInput(this.state.mediums, this.addRemoveMediumFilter)
        return (
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar" >
                <div className="card search-filter">
                    <div className="card-header">
                        <h4 className="card-title mb-0">Search Filter</h4>
                    </div>
                    <div className="card-body">
                        <div className="filter-widget">
                            <input type="date" className="form-control" placeholder="Select Date" value={this.state.selectedDate} onChange={this.handleSelectDate} />
                        </div>
                        <div className="filter-widget">
                            <h4>Appointment Type</h4>
                            {renderAppointmentTypes}
                        </div>
                        <div className="filter-widget">
                            <h4>Appointment Mediums</h4>
                            {renderMediums}
                        </div>
                        <div className="filter-widget">
                            <h4>Specialisms</h4>
                            {renderSpecialisms}
                        </div>
                        <div className="btn-search">
                            <button type="button" onClick={this.handleSearch} className="btn btn-block">Search</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}