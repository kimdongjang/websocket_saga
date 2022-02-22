import React, { Component } from 'react'
import { connect } from "react-redux";
import { SOCKET_START, SOCKET_POST } from '../redux/actions/SocketAction';

class DataContainer extends Component {
    state = {
        LiveDatas: []
    }

    componentDidMount() {
        console.log("componentDidMount live prices");
        this.props.SOCKET_START();
    }

    static getDerivedStateFromProps(props, state) {
        // console.log(state);
        console.log("state 변경")
        console.log(props)
        const oldDataset = state.LiveDatas;
        const newDataset = { ...oldDataset, data: props.LiveDatas };

        return {
            // LiveDatas: newDataset.data
        }
    }
    render() {
        console.log('render')
        console.log(this.state.LiveDatas)

        return (            
            <div>{this.state.LiveDatas}</div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('mapStateToProps :' + state.SocketReducer)
    console.log(state.SocketReducer.LiveData)
    return {
        LiveDatas: state.SocketReducer.LiveData,
        // timeLabels: state.LivePrices.timeLabels
    };
}


export default connect(mapStateToProps, { SOCKET_START, SOCKET_POST })(
    DataContainer
);
