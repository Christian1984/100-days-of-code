import React from 'react';

export default class StateTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: this.props.stateText};
  }

  onInputChanged(e) {
    //console.log(e.target.value)
    this.setState({text: e.target.value});
  }
  
  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()} >
        <input type='text' ref='text' onChange={this.onInputChanged.bind(this)} value={this.state.text} />
        <button onClick={(e) => this.refs.text.value = 'abcdef'}>change text</button>
        <button onClick={(e) => this.refs.text.value = this.state.text}>text to state</button>
        <button onClick={(e) => console.log(this.state.text)}>log state</button>
      </form>
    );
  }
}