var SpotifyArtist = React.createClass({
	handleClick: function(element){
		if(this.props.onSelect)
			this.props.onSelect({id: this.props.id, type: "artist"});
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