import React from 'react';
import Label from '../label';
import {capitalize} from 'lodash';


class Select extends React.Component {

    render() {
        return (
            <div className="form-group">
                <Label>{this.props.label}</Label>
                <select className="form-control" value={this.props.value}>
                    {this.props.options.map(option => (
                        <option value={option}>{capitalize(option)}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Select;