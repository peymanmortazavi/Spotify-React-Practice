var SpotifyTrack = React.createClass({
	handleClick: function(element){
		if(this.props.onSelect)
			this.props.onSelect({id: this.props.id, type: "track"});
	},
	render: function() {
		return <div className="artistView row" onClick={this.handleClick}>
					<h5 className="col-md-1"><img src={this.props.icon} style={{width: 32, height: 32, "border-radius":"5px"}}/></h5>
					<h5 className="col-md-8" style={{"margin-top": "18px"}}>{this.props.children}</h5>
					<div className="col-md-3" style={{"margin-top": "10px"}}>
						<a href={this.props.spotifyUri}>
							<img src="http://zotobi.com/wp-content/uploads/2014/08/Spotify-white.png" style={{"width":"32", "float":"right"}}/>
						</a>
						<div className="progress"><div style={{"width": this.props.popularity+"%", "background-color":"rgb(255,"+(255-parseInt(this.props.popularity)*2)+ ",0)", height: "100%"}}></div></div>
					</div>
			   </div>
	}
});


// PREVIEW
var SpotifyTrackPreview = React.createClass({
	getInitialState: function() {
		return {data: null};
	}
	,
	render: function() {
	
		$.get("https://api.spotify.com/v1/tracks/"+this.props.trackId).success(function(data) {
			this.setState({data: data}); 
		}.bind(this));	
	
		var elem = <p></p>
		
		if(this.state.data)
		{
			elem=<div className="container-fluid" style={{"margin-top":"20px"}}>
					<div className="row-fluid">
						<div className="col-md-6">
							<div>
								<h5>Artist</h5>
								<p><h3 style={{"margin-top": "0px","color":"lightblue"}}>{this.state.data.artists[0].name}</h3></p>
								
								<h5>Name</h5>
								<p><h3 style={{"margin-top": "0px", "color":"lightblue"}}>{this.state.data.name}</h3></p>
								
							<a href={this.state.data.uri}>
								<img src="http://zotobi.com/wp-content/uploads/2014/08/Spotify-white.png" style={{"width":"128"}}/>
						</a>
							</div>
						</div>
						<div className="col-md-6" style={{"align":"right", "text-align":"right"}}>
							<a href={this.state.data.album.uri}><img className="bigPic" src={this.state.data.album.images[0].url} /></a>
							<h5>{this.state.data.album.name}</h5>
						</div>
					</div>
				</div>
		}
	
		return elem;
	}

})