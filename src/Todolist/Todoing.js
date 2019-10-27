import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行：{this.props.todo.length}</h1>
                <ul className="list">
                    {
                        this.props.todo.map((item,idx)=><li key={idx}>{item}----
                        <input type='checkbox' defaultChecked={false} onClick={(e)=>{this.props.complete(idx,e)}}/>
                        <button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
Todoing.propTypes = {
    todo: PropTypes.array
}
Todoing.defaultProps = {
    todo: []
}