import React, {Component} from 'react';

class LoadingModal extends Component {

  render() {
    return (
      <div className={"modal fade bd-example-modal-lg" + (this.props.isLoading ? ' show' : '')} data-backdrop="static" data-keyboard="false" tabIndex="-1">
        <div className="modal-dialog modal-sm">
          <div className="modal-content" style={{width: '48px'}}>
            <span className="fa fa-spinner fa-spin fa-3x"> </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingModal;