import React from 'react';
import './App.css';

const textColor = '#333';
const defaultStyle = {
  color: textColor,

}
 const fakeServerData = {
   user: {
     name: 'Abdulaziz',
     playlists: [
       {
         name: 'My favorites 1',
         songs: [
            {name:'song1.1', duration: 1342},
            {name:'song2.1', duration: 3212},
            {name: 'song3.1', duration:2123}
        ]
       },
       {
         name: 'My favorites 2',
         songs: [
           { name: 'song1', duration: 1342 },
           { name: 'song2', duration: 3212 },
           { name: 'song3', duration: 2123 }
        ]
       },
       {
         name: 'My favorites 3',
         songs: [
           { name: 'song1', duration: 1342 },
           { name: 'song2', duration: 3212 },
           { name: 'song3', duration: 2123 }
        ]
       },
       {
         name: 'My favorites 4',
         songs: [
           { name: 'song1', duration: 1342 },
           { name: 'song2', duration: 3212 },
           { name: 'song3', duration: 2123 }
        ]
       }
     ]
   }
 }

class PlaylistCounter extends React.Component{
  render(){
    return (
      <div className="playlist-counter" style={{...defaultStyle, width: '40%', display:'inline-block'}}>
        <h2 style={{ color: '#333' }}>{this.props.playlists.length} playlists</h2>
      </div>
    )
  }
}

class HoursCounter extends React.Component{
  render(){
    const allSongs = this.props.playlists.reduce((songs, eachPlaylist)=>{
      return songs.concat(eachPlaylist.songs) 
    },[])
    const totalDuration = allSongs.reduce((sum, eachSong)=>{
      return sum + eachSong.duration
    },0)
    return (
      <div className="hours-counter" style={{...defaultStyle, width: '40%', display:'inline-block'}}>
        <h2 style={{ color: '#333' }}>{Math.floor(totalDuration/120)} Hours</h2>
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
    const {name, songs} = this.props.playlist
    return(
      <div style={{...defaultStyle, display: "inline-block", width:"25%"}}>
        <img/>
        <h3>Playlist {name}</h3>
        <ul>
          {songs.map(song =>
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({serverData : fakeServerData});
    }, 1000)
  }
  render(){
    return (
      
      <div className="App" style={defaultStyle}>
        {this.state.serverData.user ?
          <div>
            <h1>
              {this.state.serverData.user.name}'s Playlist
            </h1>
          
            
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>
            

            <Filter/>
            {
              this.state.serverData.user.playlists.map(playlist => 
                <Playlist playlist = {playlist} />
              )
            }
          </div> : <h2 style={defaultStyle}>Loading...</h2>
        }
      </div>
    );
  }
}

export default App;
