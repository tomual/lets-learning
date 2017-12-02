import React, { Component } from 'react';
import axios from 'axios';
import {Appbar, Container, Button} from 'muicss/react';
import './App.css';
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  componentWillMount() {
    this.getTasks();
  }

  getTasks() {
    axios.get('https://api.mlab.com/api/1/databases/edu-todo/collections/tasks?apiKey=#APIKEYHERE')
    .then((response) => {
      this.setState({tasks: response.data}, () => {
        console.log(this.state);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  editState(task, checked) {
    console.log(task);
    console.log(checked);

    axios.request({
      method: 'put',
      url: 'https://api.mlab.com/api/1/databases/edu-todo/collections/tasks/' + task._id.$oid + '?apiKey=#APIKEYHERE',
      data: {
        text: task.text,
        completed: checked
      }
    })
    .then((response) => {
      let tasks = this.state.tasks;
      for (var i = tasks.length - 1; i >= 0; i--) {
        if(tasks[i]._id.$oid === response.data._id.$oid) {
          tasks[i].completed = checked;
        }
      }
      this.setState({tasks: tasks});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  addTask(text) {

    axios.request({
      method: 'post',
      url: 'https://api.mlab.com/api/1/databases/edu-todo/collections/tasks?apiKey=#APIKEYHERE',
      data: {
        text: text,
        completed: false
      }
    })
    .then((response) => {
      let tasks = this.state.tasks;
      tasks.push({
        _id: response.data._id,
        text: text,
        completed: false
      });
      this.setState({tasks: tasks});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  clearComplete() {
    let tasks = this.state.tasks;
    let i = tasks.length;

    while(i--) {
      if(tasks[i].completed === true) {
        let id = tasks[i]._id.$oid;
        tasks.splice(i, 1);
        axios.request({
          method: 'delete',
          url: 'https://api.mlab.com/api/1/databases/edu-todo/collections/tasks/' + id + '?apiKey=#APIKEYHERE',
        })
        .then((response) => {

        })
        .catch((error) => {
          console.log(error);
        })
      }
    }

    this.setState({tasks: tasks});
  }

  render() {
    return (
      <div className="App">
        <Appbar>
        <Container>
          <table width="100%">
             <tbody>
               <tr>
                 <td className="mui--appbar-height">React Todo</td>
               </tr>
             </tbody>
           </table>
           </Container>
        </Appbar>
        <br />
        <Container>
          <AddTask onAddTask={this.addTask.bind(this)} />
          <Tasks onEditState={this.editState.bind(this)} tasks={this.state.tasks} />
          <Button color="danger" onClick={this.clearComplete.bind(this)}>Clear Tasks</Button>
        </Container>
      </div>
    );
  }
}

export default App;
