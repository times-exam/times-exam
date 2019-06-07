import React, { Component } from 'react';
import AQuestion from './components/AQuestion';
import logo from './logo.svg';
import AquizQuestions from './components/api/AquizQuestions';
import AQuiz2 from './components/AQuiz2';
import update from 'react-addons-update';
import AResult from './components/AResult';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     answersCount: {
       nintendo: 0,
       microsoft: 0,
       sony: 0
     },
     result: ''
     
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
  

  componentWillMount() {
    const shuffledAnswerOptions = AquizQuestions.map((question) => this.shuffleArray(question.answers));  
    this.setState({
      question: AquizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: AquizQuestions[counter].question,
      answerOptions: AquizQuestions[counter].answers,
      answer: ''
    });
  }
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < AquizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        // do nothing for now
        setTimeout(() => this.setResults(this.getResults()), 300);
      }
  }
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }
  renderQuiz() {
    return (
      <AQuiz2
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={AquizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
  renderResult() {
    return (
      <AResult quizResult={this.state.result} />
      // <h2>Result Page</h2>
    );
  }
  render() {
    return (

        <div className="App">
        <div className="App-header">
          <img src={logo} width="60" height="60" />
          <h2>React Quiz</h2>
        </div>
        {/* <AQuestion content="What is your favourite food?" /> */}
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>







      );
  }
}

export default App;