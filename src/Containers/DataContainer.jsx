import React, { Component } from 'react'
import { connect } from "react-redux";
import { SOCKET_START, SOCKET_POST } from '../redux/actions/SocketAction';

class DataContainer extends Component {
    state = {
        liveData: {

        }
    }

    handleChange = event => {
        console.log("handleChange")
        this.setState({ liveData: event.target.value });
      };

    componentDidMount() {
        console.log("componentDidMount live prices");
        this.props.SOCKET_START();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(state);
        console.log("state 변경")
        console.log(nextProps)
        console.log(prevState)
        if (nextProps.liveData !== prevState.liveData) {
            return { liveData: nextProps.liveData }
        }
    }
    render() {
        console.log('render')
        // console.log(this.state.liveData)

        return (
            <div>{this.state.liveData}</div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps :')
    console.log(state)
    return {
        liveData: state.ListenData,
        // timeLabels: state.LivePrices.timeLabels
    };
}


export default connect(mapStateToProps, { SOCKET_START, SOCKET_POST })(
    DataContainer
);
