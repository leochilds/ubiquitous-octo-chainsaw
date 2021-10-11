import react from 'react';

export class DisclaimerSection extends react.Component<any, any> {
    constructor(props: { [key: string]: any }) {
        super(props);
        this.state = {
            checked: false
        }
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleCheckBox() {
        this.setState({
            checked: !this.state.checked
        })
    }
    handleClick() {
        this.props.changeSlide(1);
    }
    render() {
        return (
            <section style={{ display: this.props.display ? 'block' : 'none' }}>
                <h2>Disclaimer - Spill is not a crisis service</h2>
                <p>We are not an immediate crisis service and we don't employ staff to be on call. We're also not a medical service. If you think you're having an emotional crisis, please call the NHS 111 for non-emergency advice. If you think you might harm yourself or someone else, please call the Samaritans on 116 123, ring 999, or go straight to A&E.</p>
                <label htmlFor='disclaimer-check'>I understand the statement above</label>
                <input id='disclaimer-check' name='disclaimer-check' type='checkbox' className='w3-check' checked={this.state.checked}
                    onChange={this.handleCheckBox} />
                <br />
                <a onClick={this.handleClick} className={`w3-btn w3-green ${!this.state.checked && 'w3-disabled'}`}>Continue with booking</a>
            </section>
        )
    }
}