import VideoListEntry from './VideoListEntry.js';
// class VideoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = props.state;
//     this.videos = props.videos;
//   }

//   render() {
//     console.log(this.videos);
//     return (
//       <div className="video-list">
//         { this.videos.map(videos => {
//           <VideoListEntry videos={videos} />;
//         }) }
//       </div>
//     );
//   }

//   stateChange() {

//   }
// }
var VideoList = (props) => {
  return (
    <div className="video-list">
      { 
        props.videos.map(video => (
          <VideoListEntry video={video} handleTitleClick={props.handleTitleClick} />)) 
      }
    </div>
  );
};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

// <div className="video-list">
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
// </div>);