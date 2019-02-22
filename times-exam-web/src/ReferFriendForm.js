import  React  from 'react';
import  Component  from 'react';
import './ReferFriendForm.css';

class ReferForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
            options: [],
            optionTemp: ''

        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(event){
        this.setState({
            options: this.state.options.concat([this.state.optionTemp]),
            bookTemp: ''

        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onReferFriend(this.state);
    }
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="AddQuestionForm_input">
                <label htmlFor="question">Name</label>
                <input type="text" name="question" value={this.state.question} onChange={this.onFieldChange}/>
            </div>
            <div className="AddQuestionForm_input">
                <label htmlFor="answer">User ID</label>
                <input type="text" name="answer" value={this.state.answer} onChange={this.onFieldChange}/>
            </div>
            <div className="AddQuestionForm_input">
                {this.state.options.map((option) => <p key = {option}>{option}</p>)}
                <label htmlFor="optionTemp">Email ID</label>
                <input type="text" name="optionTemp" value={this.state.optionTemp} onChange={this.onFieldChange}/>
                <input type="button" value="+" onClick={this.handleAddOption} />

            </div>
            <input type="submit" name = "add" />
        </form>;
    }
}

 
function ReferFriendForm({onReferFriend}) {
    return <div className="AddQuestionForm">
        <h1>Refer Friend</h1>
        <ReferForm Form onReferFriend={onReferFriend} />
    </div>;
}


export default ReferFriendForm;