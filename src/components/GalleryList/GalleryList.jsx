import React, { Component } from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

class GalleryList extends Component {
  render() {
    console.log(this.props.gallery);
    return (
      <>
        <h3>WOO GALLERY IS HERE!</h3>
        {this.props.gallery.map(item => {
          return (
         
            <GalleryItem key={item.id} item={item} addLike={this.props.addLike}/>
          )
        })}
      </>
    )
  }
};

export default GalleryList;