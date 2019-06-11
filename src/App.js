import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "Adam",
            todoItems:[
                {action: "Buy Flowers", done: false},
                {action:"Get Shoes", done: false},
                {action:"Collect Tickets", done: false},
                {action:"Call Joe", done: false}
            ],
            newItemText: ""
        }
    }

    updateNewTextValue = event => {
        this.setState({newItemText: event.target.value});
    }

    changeStateData = () => {
        this.setState({
            userName: this.state.userName === "Adam" ? "Bob" : "Adam"
        })
    }

    createNewToDo = () =>{
        if(!this.state.todoItems.find(todo => todo.action === this.state.newItemText)){
            this.setState({
                todoItems: [...this.state.todoItems, {action: this.state.newItemText, done:false}],
                newItemText: ""
            });
        }
    }

    toggleToDo = (todoItem) => {
        this.setState({
         todoItems:  this.state.todoItems.map(item => item.action === todoItem.action ? {...item, done: !item.done} : item)
        })
    }

    todoTableRows = ()=> 
        this.state.todoItems.map(todoItem => 
            <tr key={todoItem.action}>
                <td>
                    {todoItem.action}
                </td>
                <td>
                   <input type="checkbox" checked={todoItem.done}
                          onChange={() => this.toggleTodo(todoItem)} ></input>
                </td>
            </tr> 
            
        )
    

    render = () => 
            <div>
                <h4 className="bg-primary text-white text-center p-2">
                    {this.state.userName}'s To Do List
                    ({this.state.todoItems.filter(t => !t.done).length} Items to do)
                </h4>
               <div className="container-fluid">
                   <div className= "my-1" >
                       <input className="form-control" 
                              value={this.state.newItemText}
                              onChange= {this.updateNewTextValue}/>
                       
                       <button className="btn btn-primary mt-1" 
                               onClick={this.createNewToDo}>Add</button>
                   </div>
               </div>
               <table className="table table-striped table-boardered">
                   <thead>
                       <tr><th>Description</th><th>Done</th></tr>
                   </thead>
                   <tbody>{this.todoTableRows()}</tbody>
               </table>
            </div>
    
}