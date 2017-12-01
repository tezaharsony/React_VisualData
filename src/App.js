import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css'
import {XYPlot, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, Hint } from 'react-vis'
import Center from 'react-center'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this._rememberValue = this._rememberValue.bind(this);
    this._forgetValue = this._forgetValue.bind(this);
  }

  _rememberValue(value) {
    this.setState({value});
  }

  _forgetValue() {
    this.setState({
      value: null
    });
  }

  render() {
    const data = [
      {x:1, y: 7.500},
      {x:2, y: 7.500},
      {x:3, y: 6.434},
      {x:4, y: 5.974},
      {x:5, y: 5.434},
      {x:6, y: 4.898},
      {x:7, y: 4.300},
      {x:8, y: 3.989}
    ]

    const {value} = this.state;
    return (
    <Center>
      <div className="App">
        <XYPlot height={550} width={550} style={{ marginTop: 25, marginLeft: 70}}>
          <VerticalBarSeries
          onValueMouseOver={this._rememberValue}
          onValueMouseOut={this._forgetValue}
          data={data} />
          <HorizontalGridLines />
          <XAxis></XAxis>
          <YAxis />
          {value ?
          <Hint value={value} >
          <div style={{background: 'rgba(0, 0, 0, 0.5)'}}>
            <p style={{color: 'white'}} >Semester : {value.x}</p>
            <p style={{color: 'white'}} >Jumlah : {value.y}</p>
          </div>
          </Hint> :
          null
          }
        </XYPlot>
      </div>
      <div style={{
       color: 'black',
       fontSize: 18,
       lineHeight: '13px',
       textAlign: 'right',
       transform: 'rotate(-90deg) translate(60px, -600px)'
     }}>Jumlah Mahasiswa (Ribu)</div>
      <div style={{
        color: 'black',
        fontSize: 18,
        lineHeight: '13px',
        textAlign: 'right',
        transform: 'translate(-450px, 300px)'
      }}>Semester</div>
    </Center>
    );
  }
}

export default App;
