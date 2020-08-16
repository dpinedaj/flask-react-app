import React from 'react'
import CreateTest from '../components/CreateTest'
import axios from 'axios'

export default class TestContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            result: '',
            status: ''
        }
    }
    createNewTest = (input) => {
        const url = "http://localhost:5000/test/basic";
        axios({
            method: 'post',
            url: url,
            data: {
                name: input
            }
        }).then(response => {
            this.setState({
                result: JSON.stringify(response.data),
                status: JSON.stringify(response.status)
            })
        })
    }

    render() {
        return (
            <div className="test-container">
                <CreateTest createNewTest={this.createNewTest} />
                <br />
                <p>{this.state.result}</p>
                <p>{this.state.status}</p>
            </div>
        )
    }
}