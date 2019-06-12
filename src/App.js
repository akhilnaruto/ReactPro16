import React, { Component } from 'react';
import { TodoBanner } from './TodoBanner';
import { TodoCreater } from './TodoCreater';
import { TodoRow } from './TodoRow';

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
            //newItemText: ""
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

    createNewToDo = (task) =>{
        if(!this.state.todoItems.find(todo => todo.action === this.state.newItemText)){
            this.setState({
                todoItems: [...this.state.todoItems, {action: task, done:false}]
            });
        }
    }

    toggleTodo = (todoItem) => {
        this.setState({
         todoItems:  this.state.todoItems.map(item => item.action === todoItem.action ? {...item, done: !item.done} : item)
        })
    }

    todoTableRows = ()=> 
        this.state.todoItems.map(todoItem => 
            <TodoRow key={todoItem.action} item={todoItem} callback={this.toggleTodo}/>     
        )
    

    render = () => 
            <div>
               <TodoBanner name= {this.state.userName} tasks={this.state.todoItems}/>
               <div className="container-fluid">
                   <TodoCreater callback={this.createNewToDo}/>
                   <table className="table table-striped table-boardered">
                        <thead>
                            <tr><th>Description</th><th>Done</th></tr>
                        </thead>
                        <tbody>{this.todoTableRows()}</tbody>
                  </table>
               </div>     
            </div>
    
}