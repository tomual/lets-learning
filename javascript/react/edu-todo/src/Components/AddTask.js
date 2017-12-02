import React, { Component } from 'react';
import {Form, Input} from 'muicss/react';

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ''
    };
  }

  onSubmit(element) {
    this.props.onAddTask(this.state.task);
    element.preventDefault();
  }

  onChange(element) {
    this.setState({task: element.target.value})
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Input hint="Add Task" onChange={this.onChange.bind(this)} />
      </Form>
    );
  }
}

export default AddTask;
