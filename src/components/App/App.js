import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx'

class App extends Component {

  state = {
    gallery : []
  }

  componentDidMount() {
    this.getGallery();
  }

  //get /gallery
  getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      console.log(response.data);
      this.setState({
        gallery: response.data
      })
    }).catch(error => {
      alert('ERROR IN GET CHECK LOGS');
      console.log(error)
    })
  }

  addLike = (id) => {
    console.log(id);
    axios.put(`/gallery/like/${id}`)
    .then(response => {
      this.getGallery();
    }).catch(error => {
      alert('ERROR IN PUT CHECK LOGS');
      console.log(error)
    })
  }

  render() {
    console.log('rendered', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList gallery={this.state.gallery} addLike={this.addLike} />
     </div>
    );
  }
}

export default App;
