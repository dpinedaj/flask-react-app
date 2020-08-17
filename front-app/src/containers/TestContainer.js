import React from 'react'
import DynamicTest from '../components/test/DynamicTest'
import PullTest from '../components/test/PullTest'
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
    newPullTest = () => {
        const url = "http://localhost:5000/test/basic";
        axios({
            method: 'get',
            url: url
        }).then(response => {
            this.setState({
                result: JSON.stringify(response.data),
                status: JSON.stringify(response.status)
            })
        })

    }
    deleteTest = (input) => {
        const url = "http://localhost:5000/test/basic";
        axios({
            method: 'delete',
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
                <DynamicTest method1={this.createNewTest} name1={'Create'}
                    method2={this.deleteTest} name2={'Remove'} tittle={"Test"} />
                <PullTest method={this.newPullTest} />
                <br />
                <p>{this.state.result}</p>
                <p>{this.state.status}</p>
            </div>
        )
    }
}