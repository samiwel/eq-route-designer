import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Network from '../components/network';

const mapStateToProps = function(state){
    return {
        nodes: state.nodes
    }
};

const mapDispatchToProps = function() {
    return {
        actions: bindActionCreators(actionCreators)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Network);