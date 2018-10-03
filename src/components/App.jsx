import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      allVideos: [],
      currentVideo: null
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
  
  handleInputChange() {
    if(this.initialRender) {
      this.initialRender = false;  
      return (query) => this.getYouTubeVideos(query);
    } else {
      return _.debounce((query) => this.getYouTubeVideos(query), 500);
    }
  }
  
  componentDidMount() {
    this.getYouTubeVideos('chuck testa');
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleInputChange={this.handleInputChange()}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
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