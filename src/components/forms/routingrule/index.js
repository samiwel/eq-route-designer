import React from 'react';
import Select from '../../select';

import AddNodeButton from '../../../connected/addnodebutton';

class RoutingRuleForm extends React.Component {

    render() {
        return (
            <div>
                <h2>Routing Rule</h2>
                <div className="routing-rule">

                    <Select label="Type" options={['Go to', 'Repeat']} />

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

                        <Select label="Condition" options={[
                            'equal to',
                            'equals',
                            'not equals',
                            'contains',
                            'not contains',
                            'not set']} />

                        <div className="form-group">
                            <label>Value</label>
                            <input className="form-control" type="text"/>
                        </div>

                        <button className="btn btn-primary">Done</button>
                        <AddNodeButton />
                    </div>
                </div>
            </div>
        )
    }

}

export default RoutingRuleForm;