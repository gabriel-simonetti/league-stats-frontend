import React, {Component} from 'react';

class SelectSummonerPresentation extends Component {

  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event){
    return this.props.selectSummonerName(event.target.value);
  }

  selectServer(server){
    return this.props.selectServer(server);
  }

  loadSummoner(){

    return this.props.loadSummoner({summonerName: this.props.summoner, serverName: this.props.server});
  }

  render() {
    let self = this;
    let i = 0;
    return (
      <div className="jumbotron">
        <h1 className="display-4">League of Legends Stats </h1>
        <p className="lead">Enter your summoner name and region.</p>
        <hr className="my-4" />
        <div className="input-group">
          <input type="text" onChange={this.handleTextChange} className="form-control" aria-label="Text input with dropdown button" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false"> {this.props.server}
              </button>
              <div className="dropdown-menu">
                {this.props.allowedServers.map(function(server){
                  return (<a key={i++} className="dropdown-item" href="#" onClick={() => self.selectServer(server)}>{server}</a>)
                })}
              </div>
            </div>
            <button className="btn btn-block btn-info btn-submit" type="button" onClick={() => this.loadSummoner()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default SelectSummonerPresentation;