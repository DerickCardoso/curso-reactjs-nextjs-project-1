import './styles.css'

import { Component } from "react";

export class Button extends Component {
    render() {
        const { text, event, disabled } = this.props;
        return (
            <button className="button" onClick={event} disabled={disabled}>
                {text}
            </button>
        );
    }
}