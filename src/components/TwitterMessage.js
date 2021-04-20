import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      textInput:''
    };
  }
  handleTextInputChange=(event)=>{
    this.setState({
      textInput:event.target.value
    })
  }

  render() {
    let counter = this.props.maxChars - this.state.textInput.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        value={this.state.textInput} 
        onChange={this.handleTextInputChange}
        />
        {counter}
      </div>
    );
  }
}

export default TwitterMessage;
