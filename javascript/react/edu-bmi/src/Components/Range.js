import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: props.value
    };
  }

  static defaultProps = {
    min: 160,
    max: 245,
    step: 1
  }

  onChange(event) {
    this.props.onChange(this.state.value);
    this.setState({value:event.target.value});
  }

  render() {
    return (
      <div className="range">
        <input 
            type="range" 
            value={this.state.value}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired
};

export default Range;
