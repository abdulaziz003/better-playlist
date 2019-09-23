import React from 'react';
import './App.css';

const textColor = '#333';
const defaultStyle = {
  color: textColor,

}

class Aggregate extends React.Component{
  render(){
    return (
      <div className="aggregate" style={{...defaultStyle, width: '40%', display:'inline-block'}}>
        <h2 style={{color: '#333'}}>Number Text</h2>
      </div>
    )
  }
}

class Filter extends React.Component{
  render(){
    return(
      <div>
        <img/>
        <input type="text"/>
      </div>
    )
  }
}

class Playlist extends React.Component{
  render(){
    return(
      <div style={{...defaultStyle, display: "inline-block", width:"25%"}}>
        <img/>
        <h3>Playlist name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    )
  }
}


function App() {
  const name = 'Abdulaziz'
  return (
    <div className="App" style={defaultStyle}>
      <h1>Title</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
    </div>
  );
}

export default App;
