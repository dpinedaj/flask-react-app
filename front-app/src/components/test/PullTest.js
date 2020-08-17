import React from 'react'

class PullTest extends React.Component {

    handlePullTest = (event) => {
        event.preventDefault()
        this.props.method()
    }
    render() {
        return (
            <form onSubmit={this.handlePullTest} className="pull-test-form">
                <input className="new-test" type="submit" value="Pull" />
            </form>
        )
    }
}

export default PullTest;