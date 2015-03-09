var Preview = React.createClass({

	render: function() {
	
		var elem = <h4>Preview</h4>
		
		if(this.props.data)
			elem = this.props.data;
	
		console.log(this.props.data);
		return elem;
	
	}

});

var SpotifyResultViewer = React.createClass({
	getInitialState: function(){
		return {previewData: null};
	},
	handleSelection: function(selectedElement) {
		
		if(selectedElement.type=='track')
			this.setState({previewData: <SpotifyTrackPreview trackId={selectedElement.id}/>});
			
		if(selectedElement.type=='artist')
			this.setState({previewData: <SpotifyArtistPreview artistId={selectedElement.id}/>});
			
		if(selectedElement.type=='album')
			this.setState({previewData: <SpotifyAlbumPreview albumId={selectedElement.id}/>});
	},
	render: function() {
	
		return <div className="container-fluid">
				 <div className="row-fluid">
				 	<div className="col-md-6 left">
						<SpotifySearchResultListView data={this.props.data} onSelect={this.handleSelection}/>
					</div> 
					<div className="col-md-6 right" id="preview">
						<Preview data={this.state.previewData}></Preview>
					</div>
				 </div>
			   </div>
	}

});

var SpotifySearchResultListView = React.createClass({
	
	render: function() {
	
		if(this.props.data.albums && this.props.data.albums.items && this.props.data.albums.items.length) {
			var albums = this.props.data.albums.items.map(function(item) {
				return <SpotifyAlbum icon={item.images[item.images.length-1]?item.images[item.images.length-1].url:"http://icons.iconarchive.com/icons/xenatt/the-circle/512/App-Spotify-icon.png"} spotifyUri={item.uri} id={item.id} onSelect={this.props.onSelect}>
							{item.name}
					   </SpotifyAlbum>
			
			}.bind(this));
			
			albums = <div><h3>ALBUMS</h3>{albums}</div>;
		}
		
		if(this.props.data.artists && this.props.data.artists.items && this.props.data.artists.items.length) {
			var artists = this.props.data.artists.items.map(function(item) {
				return <SpotifyArtist icon={item.images[item.images.length-1]?item.images[item.images.length-1].url:"http://simpleicon.com/wp-content/uploads/user1.png"} spotifyUri={item.uri} id={item.id} popularity={item.popularity} onSelect={this.props.onSelect}>
							{item.name}
					   </SpotifyArtist>
			
			}.bind(this));
			
			artists = <div><h3>ARTISTS</h3>{artists}</div>;
		}
		
		if(this.props.data.tracks && this.props.data.tracks.items && this.props.data.tracks.items.length) {
			var tracks = this.props.data.tracks.items.map(function(item) {
				return <SpotifyTrack icon={item.album.images[item.album.images.length-1]?item.album.images[item.album.images.length-1].url:"http://simpleicon.com/wp-content/uploads/user1.png"} spotifyUri={item.uri} id={item.id} popularity={item.popularity} onSelect={this.props.onSelect}>
							{item.name}
					   </SpotifyTrack>
			
			}.bind(this));
			
			tracks = <div><h3>TRACKS</h3>{tracks}</div>;
		}
	
		return <div>
				{albums?albums:""}
				{artists?artists:""}
				{tracks?tracks:""}
			   </div>
	
	}

});

React.render(<Page />, document.body);