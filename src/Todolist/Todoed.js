import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoed extends Component {
    render() {
        return (
            <div>
                <h1>已经完成：{this.props.todoed.length}</h1>
                <ul className="list">
                    {
                        this.props.todoed.map((item,idx)=><li key={idx}>{item}----
                        <input type='checkbox' onClick={(e)=>this.props.doing(idx,e)}/>
                        <button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
Todoed.propTypes = {
    todoed: PropTypes.array
}
Todoed.defaultProps = {
    todoed: []
}