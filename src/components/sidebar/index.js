import React from 'react';
import './sidebar.css';

export default (props) => (
    <div className="sidebar">
        <h2>Routing Rule</h2>
        <div className="routing-rule">

            <div className="form-group">
                <label>Type</label>
                <select className="form-control">
                    <option>Go to</option>
                    <option>Repeat</option>
                </select>
            </div>

            <div className="form-group">
                <label>Page</label>
                <input className="form-control" type="text"/>
            </div>

            <div className="when">
                <h3>When</h3>
                <div className="form-group">
                    <label>Answer</label>
                    <input className="form-control" type="text"/>
                </div>

                <div className="form-group">
                    <label>Condition</label>
                    <select className="form-control">
                        <option>equal to</option>
                        <option>equals</option>
                        <option>not equals</option>
                        <option>contains</option>
                        <option>not contains</option>
                        <option>not set</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Value</label>
                    <input className="form-control" type="text"/>
                </div>

                <button className="btn btn-primary">Done</button>
            </div>
        </div>
    </div>
)