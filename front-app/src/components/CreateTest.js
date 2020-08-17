import React from 'react'

class CreateTest extends React.Component {
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
        this.props.createNewTest(this.state.input)
    }
    render() {
        return (
            <form onSubmit={this.handleNewTest} className="new-test-form">
                <h4>Create Test</h4>
                <p>
                    {"Insert name: "}
                <input onChange={this.handleInput} className="new-test-input" type="text" value={this.state.input} />

                </p>
                <input className="new-test-input" type="submit" value="Create" />
            </form>
        )
    }
}

export default CreateTest;