var searchYouTube = ({key, query, max}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        console.log('get!');
        callback(items);
      }
    })
    .fail( ({responseJSON}) => responseJSON.error.errors.forEach((err) => console.error(err)) );
};

export default searchYouTube;
