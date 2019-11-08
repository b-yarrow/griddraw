import React, { Component } from 'react';
import { Layer, Rect, Stage, Line, Group, Text } from 'react-konva';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas'
import Konva from 'konva';

var blue = Konva.Util.getRGB('blue');

const texBoxContainer = {
  display: 'flex',
  flexDirection: 'row',
  height: '505px'
}
const textBoxStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  // justifyContent: 'space-between',
  // width: '520px',
  padding: '0 27.5px'
}

const textBoxVertStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column-reverse',
  // justifyContent: 'space-between',
  // width: '520px',
  alignItems: 'center',
  padding: '2.5px 0'
}

const textStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  height: '25px',
  width: '25px',
  padding: '0 2.5px'
}

const textVertStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '25px',
  height: '25px',
  padding: '2.5px 0'
}

class BoxBorder extends Component {
  state = {
    visible: false
  }

  handleClick = () => {
    this.setState({
      visible: !(this.state.visible)
    })
  }

  render() {
    return (
      <>
        <Rect
          x={this.props.width > this.props.height ? this.props.xPos : this.props.xPos - 5}
          y={this.props.height > this.props.width ? this.props.yPos : this.props.yPos - 5}
          width={this.props.width > this.props.height ? this.props.width : 5}
          height={this.props.height > this.props.width ? this.props.height : 5}
          fill='white'
          onClick={this.handleClick}
        />
        <Rect
          x={this.props.xPos} y={this.props.yPos} width={this.props.width} height={this.props.height}
          fill={this.state.visible ? 'black' : 'white'}
          onClick={this.handleClick}
        />
        <Rect
          x={this.props.width > this.props.height ? this.props.xPos : this.props.xPos + 5}
          y={this.props.height > this.props.width ? this.props.yPos : this.props.yPos + 5}
          width={this.props.width > this.props.height ? this.props.width : 5}
          height={this.props.height > this.props.width ? this.props.height : 5}
          fill='white'
          onClick={this.handleClick}
        />
      </>
    )
  }
}

class GridDot extends Component {
  state = {
    color: '#bebebe'
  }

  render() {
    return (
      <Rect
        x={this.props.xPos} y={this.props.yPos} width={5} height={5}
        fill={this.state.color}
        stroke={this.state.color}
        strokeWidth={0}
        opacity={0.25}
      />
    )
  }
}

function App() {
  const sqDim = 25;
  const gridDim = sqDim * 20;
  const grid = () => {
    var dotList = [];
    for (let j = 0; j <= gridDim + 0; j += sqDim) {
      for (let i = 0; i <= gridDim + 0; i += sqDim) {
        dotList.push(<Rect
          x={i} y={j} width={5} height={5}
          fill='#BEBEBE'
          opacity={1}
        />) // fill='#BEBEBE' opacity={0.25}
      }
    }
    console.log(dotList)
    return dotList;
  }

  const lines = () => {
    var lineList = []
    for (let i = 5; i <= gridDim + 0; i += sqDim) {
      for (let j = 0; j <= gridDim + 0; j += sqDim) {
        lineList.push(<BoxBorder xPos={i} yPos={j} width={20} height={5} />)
      }
    }
    for (let i = 0; i <= gridDim + 0; i += sqDim) {
      for (let j = 5; j <= gridDim + 0; j += sqDim) {
        lineList.push(<BoxBorder xPos={i} yPos={j} width={5} height={20} />)
      }
    }
    return lineList;
  }

  const coOrds = (style) => {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    const coOrdList = nums.map(value => {
      return (
        //   <Text x={20 + 25 * value}
        //   y={520}
        //   text={String(value)}
        //   fontSize={24}
        //   fill='black'
        //   align='center'
        // />
        <span style={style}>{value}</span>
      )
    })
    return coOrdList;


  }
  return (
    <>
      <div style={textBoxStyle}>
        {coOrds(textStyle)}
      </div>
      <div style={texBoxContainer}>
        <div style={textBoxVertStyle}>
          {coOrds(textVertStyle)}
        </div>
        <Stage width={gridDim + 5} height={gridDim + 5}>
          <Layer>
            {grid()}
            {lines()}

          </Layer>
        </Stage>
        <div style={textBoxVertStyle}>
          {coOrds(textVertStyle)}
        </div>
      </div>
      <div style={textBoxStyle}>
        {coOrds(textStyle)}
      </div>
    </>
  );
}

export default App;
