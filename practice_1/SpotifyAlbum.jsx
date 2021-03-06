var SpotifyAlbum = React.createClass({
	handleClick: function(element){
		if(this.props.onSelect)
			this.props.onSelect({id: this.props.id, type: "album"});
	},
	render: function() {
		return <div className="artistView row" onClick={this.handleClick}>
					<h5 className="col-md-1"><img src={this.props.icon} style={{width: 32, "border-radius":"5px"}}/></h5>
					<h5 className="col-md-10" style={{"margin-top": "18px"}}>{this.props.children}</h5>
					<div className="col-md-1" style={{"margin-top": "10px"}}>
						<a href={this.props.spotifyUri}>
							<img src="http://zotobi.com/wp-content/uploads/2014/08/Spotify-white.png" style={{"width":"32", "float":"right"}}/>
						</a>
					</div>
			   </div>
	}

});


// PREVIEW
var SpotifyAlbumPreview = React.createClass({
	getInitialState: function() {
		return {data: null};
	}
	,
	render: function() {
	
		$.get("https://api.spotify.com/v1/albums/"+this.props.albumId).success(function(data) {
			this.setState({data: data}); 
		}.bind(this));	
	
		var elem = <p></p>
		
		if(this.state.data)
		{
			elem=<div className="container-fluid" style={{"margin-top":"20px"}}>
					<div className="row-fluid">
						<div className="col-md-6">
							<div>
								<h5>Artist Name</h5>
								<p><h3 style={{"margin-top": "0px","color":"lightblue"}}>{this.state.data.artists[0].name}</h3></p>
								
								<h5>Album Name</h5>
								<p><h3 style={{"margin-top": "0px", "color":"lightblue"}}>{this.state.data.name}</h3></p>
								
								<h5>Popularity</h5>
								<div className="progress" style={{"margin-left":"0px", "wdith":"60%"}}><div style={{"width": this.state.data.popularity+"%", "background-color":"rgb(255,"+(255-parseInt(this.state.data.popularity)*2)+ ",0)", height: "100%"}}></div></div>

								
							<a href={this.state.data.uri}>
								<img src="http://zotobi.com/wp-content/uploads/2014/08/Spotify-white.png" style={{"width":"128"}}/>
						</a>
							</div>
						</div>
						<div className="col-md-6" style={{"align":"right", "text-align":"right"}}>
							<img className="bigPic" src={this.state.data.images[0].url} />
						</div>
					</div>
				</div>
		}
	
		return elem;
	}

})