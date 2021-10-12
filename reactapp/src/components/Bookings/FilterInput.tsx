import react from "react";

interface FilterInputProps {
    type: { key: string, selected: boolean }
    handleCheck: (key: string) => void
}
interface FilterInputState {
}

export class FilterInput extends react.Component<FilterInputProps, FilterInputState> {
    constructor(props: FilterInputProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.props.handleCheck(this.props.type.key)
    }
    render() {
        return (
            <div>
                <label className="custom_check" style={{ 'textTransform': 'capitalize' }}>
                    <input onClick={this.handleChange} type="checkbox" name="gender_type" defaultChecked={this.props.type.selected} />
                    <span className="checkmark"></span> {this.props.type.key.replace(/_/i, ' ')}
                </label>
            </div >
        )
    }
}