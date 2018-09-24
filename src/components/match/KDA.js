import React, {Component} from 'react';

class KDA extends Component {
  calculatedKDA() {
    let KDA = this.props.formattedData.KDA;
    if(KDA.deaths <= 1){
      return KDA.kills + ':1'
    } else {
      return parseFloat(Math.round(((KDA.kills + KDA.assists) / KDA.deaths) * 100) / 100).toFixed(2) + ': 1';
    }
  }
  render() {
    return (
      <span>
        {this.props.formattedData.KDA.kills} / <span className="text-danger">{this.props.formattedData.KDA.deaths}</span> / {this.props.formattedData.KDA.assists}&nbsp;<small>({this.calculatedKDA()})</small>
      </span>
    );
  }
}

export default KDA;