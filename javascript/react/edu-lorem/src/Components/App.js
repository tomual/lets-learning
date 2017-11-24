import React, {Component} from 'react';
import Output from './Output';
import Text from './Controls/Text';
import Select from './Controls/Select';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paras: 4,
            html: true,
            text: ''
        }
    }

    componentWillMount() {
        this.getText();
    }

    getText() {
        var url = 'https://baconipsum.com/api/?type=all-meat&paras=' + this.state.paras + '&format=' + (this.state.html === true ? 'html' : 'text');
        axios.get(url)
        .then((response) => {
            this.setState({text: response.data}, function() {
                //console.log(this.state);
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    changeParas(number) {
        this.setState({paras: number}, this.getText);
    }

    showHtml(show) {
        this.setState({html: show}, this.getText);
    }

    render() {
        return(
            <div className="container">
                <h1>Bacom Ipsum Generator</h1>
                <Output value={this.state.text} />
                <h3>Real Time Option</h3>
                <form>
                    <div>
                        <label>Paragraphs:</label>
                        <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
                    </div>
                    <div>
                        <label>Include HTML:</label>
                        <Select value={this.state.html} onChange={this.showHtml.bind(this)} />
                    </div>
                </form>
            </div>
        );
    }
}

export default App;