import React, { Component } from 'react';
import './App.css';

var uuid = require('uuid');
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyAo9Is_RYk5nphA10CPXlg76gqyzKM88mQ",
  authDomain: "edu-survey.firebaseapp.com",
  databaseURL: "https://edu-survey.firebaseio.com",
  projectId: "edu-survey",
  storageBucket: "edu-survey.appspot.com",
  messagingSenderId: "1014210188081"
};
firebase.initializeApp(config);


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: uuid.v1(),
      name: '',
      answers: {
        q1: '',
        q2: '',
        q3: ''
      },
      submitted: false
    };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);

  }

  handleNameSubmit(event) {
    var name = this.refs.name.value;
    this.setState({name:name}, function() {
      console.log(this.state);
    });
    
    event.preventDefault();
  }

  handleQuestionSubmit(event){
    firebase.database().ref('surveys/' + this.state.id).set({
      name: this.state.name,
      answers: this.state.answers
    });

    this.setState({submitted: true}, function() {
      console.log('Questions Submitted ...');
    });
    event.preventDefault();
  }

  handleQuestionChange(event) {
    var answers = this.state.answers;
    console.log(event.target.value);
    if(event.target.name === 'q1') {
      answers.q1 = event.target.value;
    } else if(event.target.name === 'q2') {
      answers.q2 = event.target.value;
    } else if(event.target.name === 'q3') {
      answers.q3 = event.target.value;
    }

    this.setState({answers:answers}, function() {
      console.log(this.state);
    })
  }

  render() {
    var user;
    var questions;
    if(this.state.name && this.state.submitted === false) {
      user = <h2>Welcome {this.state.name}</h2>;
      questions = <span>
        <h3>Survey Questions</h3>
        <form onSubmit={this.handleQuestionSubmit.bind(this)}>
            <div>
              <label>What is your favorite operating system</label><br/>
              <input type="radio" name="q1" value="Windows" onChange={this.handleQuestionChange}/>Windows <br />
              <input type="radio" name="q1" value="OSX" onChange={this.handleQuestionChange}/>OSX <br />
              <input type="radio" name="q1" value="Linux" onChange={this.handleQuestionChange}/>Linux <br />
              <input type="radio" name="q1" value="Solaris" onChange={this.handleQuestionChange}/>Solaris <br />
              <input type="radio" name="q1" value="Other" onChange={this.handleQuestionChange}/>Other <br />
            </div>

            <div>
              <label>What is your favorite smartphone brand</label><br/>
              <input type="radio" name="q2" value="morning" onChange={this.handleQuestionChange}/>Apple <br />
              <input type="radio" name="q2" value="afternoon" onChange={this.handleQuestionChange}/>Samsung <br />
              <input type="radio" name="q2" value="evening" onChange={this.handleQuestionChange}/>Nexus <br />
              <input type="radio" name="q2" value="night" onChange={this.handleQuestionChange}/>Blackberry <br />
              <input type="radio" name="q2" value="other" onChange={this.handleQuestionChange}/>Other <br />
            </div>

            <div>
              <label>What is your favorite food</label><br/>
              <input type="radio" name="q3" value="Sushi" onChange={this.handleQuestionChange}/>Sushi <br />
              <input type="radio" name="q3" value="Pizza" onChange={this.handleQuestionChange}/>Pizza <br />
              <input type="radio" name="q3" value="Smoothie" onChange={this.handleQuestionChange}/>Smoothie <br />
              <input type="radio" name="q3" value="Chicken Salad" onChange={this.handleQuestionChange}/>Chicken Salad <br />
              <input type="radio" name="q3" value="Other" onChange={this.handleQuestionChange}/>Other <br />
            </div>

            <input type="submit" />
        </form>
      </span>;
    } else if(!this.state.name && this.state.submitted === false) {
      user = <span>
      <h2>Please enter your name to begin the survey</h2>
      <form onSubmit={this.handleNameSubmit.bind(this)}>
      <input type="text" placeholder="Name" ref="name" />
      </form>
      </span>;
      questions = '';
    } else if(this.state.submitted) {
      user = <h2>Thanmk you {this.state.name}</h2>;
    }
    return (
      <div className="App">
        <header className="App-header text-center">
          <h1 className="App-title">Simple Survey</h1>
        </header>
        <div className="text-center"> 
          {user}
        </div>
        <div className="container">
        {questions}
        </div>
      </div>
    );
  }
}

export default App;
