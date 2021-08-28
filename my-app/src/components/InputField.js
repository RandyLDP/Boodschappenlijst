import React from "react"

class InputField extends React.Component {
    constructor() {
        super()
        this.state = {input: ""}
    }
    render() {
        const onInput = event => {
            this.setState({
                input: event.target.value
            })
        }
        const onSubmit = e => {
            e.preventDefault()
            if (this.state.input.length > 0) {
                this.props.onSubmit(this.state.input)
                this.setState({
                    input: ""
                })
            }            
        }
        return (
            <form className="input" onSubmit={onSubmit}>
                <input
                    placeholder="Add item"
                    type="text"
                    onChange={onInput}
                    value={this.state.input}
                ></input>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default InputField