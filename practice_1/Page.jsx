var Page = React.createClass({
  getInitialState: function(){
  	return {data: {}};
  },
  handleSearch: function(value){
  	value.preventDefault();
	var query = this.refs.query.getDOMNode().value.trim();
  	
	$.get("https://api.spotify.com/v1/search?q="+query+"&type=track,artist,album&market=US&limit=10&offset=0")
	.success(function(data){ 
		this.setState({data: data});
	}.bind(this));
	
  },
  render: function() {
    return (<div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Spotify</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="https://developer.spotify.com/web-api/">Spotify API <span className="sr-only">(current)</span></a></li>
              <li><a href="#">SoundCloud API</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <form className="navbar-form navbar-left" role="search" onSubmit={this.handleSearch}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Spotify Search" ref="query" />
                </div>
                <button type="submit" className="btn btn-default">Search</button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
	  <div>
	  	<SpotifyResultViewer data={this.state.data}/>
	  </div>
	  </div>
    );
  }
});