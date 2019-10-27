import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';
import Todoed from './Todoed';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: [],
            todoed:[]
        }
    }

    componentWillMount(){
        var todo1 = JSON.parse(localStorage.getItem('todo'));
        var todoed1 = JSON.parse(localStorage.getItem('todoed'));
        if(todo1){
            this.setState({
                todo: [...todo1]
            });
        }
        if(todoed1){
            this.setState({
                todoed: [...todoed1]
            });
        }
    }

    componentDidUpdate(){
        localStorage.setItem("todo",JSON.stringify(this.state.todo));
        localStorage.setItem("todoed",JSON.stringify(this.state.todoed));
    }

    addItem = (msg)=>{
        this.setState({
            todo:[...this.state.todo,msg]
        })
        console.log(msg);
    }
    delitem = (a) =>{
        var todo =[...this.state.todo];
        todo.splice(a,1);
        this.setState({
            todo:todo
        })
    }
    delitemed = (a) =>{
        var todoed =[...this.state.todoed];
        todoed.splice(a,1);
        this.setState({
            todoed:todoed
        })
    }
    comdix = (a,e)=>{
        var todoed=[...this.state.todoed,this.state.todo[a]];
        var todo =[...this.state.todo];
        todo.splice(a,1);
        this.setState({
            todo:todo,
            todoed:todoed
        })
        e.target.checked = false;
    }
    doingdix = (a,e) =>{
        var todo=[...this.state.todo,this.state.todoed[a]];
        var todoed =[...this.state.todoed];
        todoed.splice(a,1);
        this.setState({
            todoed:todoed,
            todo:todo
        })
        e.target.checked = false;
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing complete={this.comdix} delTodo={this.delitem} todo={this.state.todo}/>
                <Todoed doing={this.doingdix} delTodo={this.delitemed} todoed={this.state.todoed}/>
            </div>
        )
    }
}