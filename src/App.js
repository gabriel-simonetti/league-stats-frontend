import React, { Component } from 'react';
import { connect } from 'react-redux';
import MatchContainer from './components/MatchContainer'
import SelectSummoner from './components/SelectSummonerContainer';
import './App.css';
import MatchListContainer from "./components/MatchListContainer";
import LoadingModal from "./components/LoadingModal";

const mapStateToProps = (state) => {
  return { system: state.systemReducer.toJS(), summoner: state.summonerReducer.toJS().summoner }
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <LoadingModal isLoading={this.props.system.isLoading}/>
        <SelectSummoner />
        {this.props.summoner === null ? '' : (<MatchListContainer />)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
