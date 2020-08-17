import React, { Component } from 'react';

class GalleryItem extends Component {

  state = {
    isShowingText: true
  };

  togglePicture = () => {
    this.setState({
      isShowingText : !this.state.isShowingText
    })
  };

  render() {
    let item = this.props.item;
    return (
      <div key={item.id} className="box">
        <div onClick={this.togglePicture}>
          {this.state.isShowingText ? <p>{item.description}</p> : <img className='picture' src={item.path} alt={item.description} />}
        </div>

        <p>likes : {item.likes}</p>
        <button onClick={() => this.props.addLike(item.id)}>Like It!</button>
      </div>
    )
  }
};

export default GalleryItem;