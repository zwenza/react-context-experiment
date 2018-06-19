import React, { Component } from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {
    render() {
        const { id, text, done } = this.props.item;
        return (
            <div className="TodoItem__container">
                <input type="checkbox" defaultChecked={done} onChange={() => this.props.toggle(id)} />
                <p>{text}</p>
            </div>
        );
    }
}