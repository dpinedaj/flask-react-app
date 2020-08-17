import React from 'react'

class DynamicTest extends React.Component {
    state = {
        input: ''
    }

    handleInput = (event) => {
        event.persist()
        this.setState({
            input: event.target.value
        })
    }
    handleNewTest = (event) => {
        event.preventDefault()
        this.props.method1(this.state.input)
    }
    removeTest = (event) => {
        event.preventDefault()
        this.props.method2(this.state.input)
    }

    render() {
        return (
            <form className="new-test-form">
                <h4>{this.props.tittle}</h4>
                <span>
                    {"Insert name: "}
                    <input onChange={this.handleInput} className="new-test-input" type="text" value={this.state.input} />
                </span>
                <br/>
                <span>
                    <input className="new-test-input" type= "submit" onClick={this.handleNewTest} value={this.props.name1} />
                    <input className="new-test-input" type= "submit" onClick={this.removeTest} value={this.props.name2} />
                </span>
            </form>
        )
    }
}

export default DynamicTest;