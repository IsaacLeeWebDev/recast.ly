import VideoList from './VideoList.js';
import Search from './Search.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  
  handleTitleClick(index) {
    this.setState({currentVideo: index});
  }
  
  getYouTubeVideos(query) {
    let options = {
      key: this.props.API_KEY,
      query: query
    };
    this.props.searchYouTube(options, (videos) => {
      this.setState({allVideos: videos, currentVideo: videos[0]});
    });
  }
  
  componentDidMount() {
    this.getYouTubeVideos('react tutorial');
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleInputChange={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em>
              <VideoPlayer video={this.state.currentVideo} />
            </h5></div>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} handleTitleClick={this.handleTitleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
    
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;