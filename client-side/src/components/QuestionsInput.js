import React, { Component } from 'react';
import { getQuestions, addQuestion, deleteQuestion } from '../functions/QuestionFunctions';
import 'bootstrap/dist/css/bootstrap.min.css';


class QuestionsInput extends Component {

    constructor(props){
        super(props);

        this.state = {
            questions:[],
            id: '',
            title: '',
            category: ''
        }
    }

    componentDidMount(){
        this.getAll()
    }

    getAll = () => {
        getQuestions().then(data => {
            this.setState({
                title: '',
                category:'',
                questions: [...data]
            })
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        addQuestion(this.state.title, this.state.category).then(() => {
            this.getAll()
        })
    }

    handleDelete = (id, e) => {
       e.preventDefault();

       deleteQuestion(id).then(() => {
           this.getAll()
       })
    }


    render() {
        return (
           <div className="container">
               <div className="row">
                   <div className="col-10 mx-auto col-md-8 mt-4">
                        <div className="card card-body my-4">
                            <h2 className="text-center mb-4">Add Exam Questions</h2>
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <div className="input-group">
                                    <input type="text" name="title" className="form-control mt-2" placeholder="Insert The New Question Here..." value={this.state.title} onChange={this.handleChange.bind(this)}></input>
                                        <select required className="form-control col-md-3 mt-2" name="category" value={this.state.category} onChange={this.handleChange.bind(this)}>
                                            <option value="" hidden disabled selected>Select Subject</option>
                                            <option value="mathematics">Mathematics</option>
                                            <option value="biology">Biology</option>
                                            <option value="chemistry">Chemistry</option>
                                            <option value="physics">Physics</option>
                                            <option value="history">History</option>
                                            <option value="literature">Literature</option> 
                                            <option value="programming">Programming</option> 
                                        </select>
                                 
                                </div>
                                <button type="submit" className="btn btn-block btn-success mt-3 mx-2">Submit Question</button>
                            </form>
                        </div>
                        <div className="card card-body my-4">
                        <h2 className=" text-center">Exam Questions List</h2>
                            {this.state.questions.map(question => {
                               return <ul className="list-group my-2">
                                        <li className="list-group-item d-flex justify-content-between">
                                            <h6 className="mt-3">{question.title}</h6>
                                            <div className="delete">
                                                <button className="btn btn-block btn-danger" onClick={this.handleDelete.bind(this, question.ID)}>Delete</button>
                                            </div>
                                        </li>
                                      </ul>
                            })}
                        </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default QuestionsInput;