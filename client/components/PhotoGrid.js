import React from "react";
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
        <div className="photo-grid">
          {this.props.posts.map((post, i) =><Photo {...this.props} key={i} i={i} post={post}/>)}
        </div>
    );
  }
});

// class PhotoGrid1 extends React.Component {
//   render() {
//     return (
//       <h1>PhotoGrid</h1>
//     );
//   }
// }

export default PhotoGrid;