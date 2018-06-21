import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Face from './components/face'
import Tongue from './components/tongue'
import Question from './components/question';
import ExaminationApi from './api/examination';
import { defaultFaceAnswers } from './components/selectFace';
import { defaultTongueAnswers } from './components/selectTongue';

class App extends Component {
  constructor(props) {  
      super(props);  
      this.state = {
        face: { ...defaultFaceAnswers },
        tongue: { ...defaultTongueAnswers },
        answers: [{'answer': ['B'], 'id': '1'}, {'answer': ['D'], 'id': '2'}],
      };
      this.onAnswerChange = this.onAnswerChange.bind(this);
      this.postAnswer = this.postAnswer.bind(this);
  } 

  postAnswer() {
    ExaminationApi(this.getApiBody());
  }

  onFaceOrTongueChange(section, value) {
    this.setState({
      [section]: { ...this.state[section], ...value }
    });
  }

  onAnswerChange(value) {
    this.setState({
      answers: {
        ...this.state.answers,
        [value.id-1]: {'answer': value.value, 'id': value.id}
      }
    });
  }

  getApiBody() {
    const body = {
      answers: [],
    };

    if (this.state.face) {
      Object.entries(this.state.face).map(([k, e]) => { body[k] = e.value });
    }

    if (this.state.tongue) {
      Object.entries(this.state.tongue).map(([k, e]) => body[k] = e.value);
    }

    if (this.state.answers) {
      Object.entries(this.state.answers).map(
        ([k, e]) => body.answers.push({ id: k, answer: e })
      );
    }
    return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">中医体检诊断模型</h1>
        </header>
        <p className="App-intro">
          Face
        </p>
        <Face onChange={v => this.onFaceOrTongueChange('face', v)} />
        <br/>
        <p className="App-intro">
          Tongue
        </p>
        <Tongue onChange={v => this.onFaceOrTongueChange('tongue', v)} />
        <br/>
        <p className="App-intro">
          Question
        </p>
        <Question onChange={v => this.onAnswerChange(v)} />
        <br/>
        <button type="submit" onClick={ this.postAnswer }>Submit</button>
      </div>
    );
  }
}

export default App;
