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