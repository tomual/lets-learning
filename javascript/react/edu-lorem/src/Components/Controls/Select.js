import React, {Component} from 'react';

class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(event) {
        this.setState({value: event.target.value}, function() {
            this.props.onChange(this.state.value);
        });
    }

    render() {
        return(
            <div>
                <select onChange={this.onChange.bind(this)}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
        );
    }
}

export default Select;