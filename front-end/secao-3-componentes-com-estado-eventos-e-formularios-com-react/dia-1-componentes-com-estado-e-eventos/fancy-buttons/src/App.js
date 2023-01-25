import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);  
    this.state = {
      botao1 : 0,
      botao2 : 0,
      botao3 : 0,
    }  
  }

  handleClick1 () {
    this.setState((estadoAnteriorDoBotao1, _props) => ({
      botao1: estadoAnteriorDoBotao1.botao1 + 1
    }))
  }
  
  handleClick2 () {
    this.setState((estadoAnteriorDoBotao2, _props) => ({
      botao2: estadoAnteriorDoBotao2.botao2 + 1
    }))
  }
  
 handleClick3 () {
    this.setState((estadoAnteriorDoBotao3, _props) => ({
      botao3: estadoAnteriorDoBotao3.botao3 + 1
    }))
  }

  render() {
    return(
     <div>
      <button onClick={this.handleClick1}>{this.state.botao1}</button>
      <button onClick={this.handleClick2}>{this.state.botao2}</button>
      <button onClick={this.handleClick3}>{this.state.botao3}</button>
     </div>
    )
  }
}

export default App;
