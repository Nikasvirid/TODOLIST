import { Component } from "react";
import done from './done.jpg';

export class MyTodoList extends Component {
    state = {
        userInput: '',
        todoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }
    addItem(input){
        if (input ==='') {
            alert ('Please, enter an item')
        } else {
        let listTodo = this.state.todoList;
        listTodo.push(input);
        this.setState({todoList: listTodo, userInput:''});
        }
}
    
    deleteItem() {
    let listDelete = this.state.todoList;
    listDelete = [];
    this.setState({todoList: listDelete})
}

    crossed(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }
        onFormSubmit(e){
            e.preventDefault();

        }

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" 
                placeholder="What to you want ?"
                onChange={(e)=> {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
            <button onClick={()=> this.addItem(this.state.userInput)} className="Add"> Add </button>
            </div>
            <ul>
                {this.state.todoList.map((item, index) => (
                    <li onClick={this.crossed} key={index}>
                        <img src={done}width="35px" alt="don" />
                        {item}
                    </li>
                ))}
                
            </ul>
            <div className="container">
            <button onClick={()=> this.deleteItem()} className="Delete"> Delete </button>
            </div>
            </form>
            </div>
        )
    }
}