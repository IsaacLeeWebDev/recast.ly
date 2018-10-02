import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.videoCounter = 0;
    this.state = props.state;
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <VideoList videos={exampleVideoData}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> { exampleVideoData.map(video => {
              this.videoCounter++;
              return (<VideoPlayer video={video} />);
            })
            } 
            </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> view goes here</h5></div>
          </div>
        </div>
      </div>
    );
  }
  setState() {
    
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
