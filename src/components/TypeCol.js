import React from 'react';

class TypeCol extends React.Component {
  render() {
    return (
      <div className="col-md-3 col-sm-12">
        <div className="col-12">
          <span>{this.props.colData.title}</span>
        </div>
        <div className="col-12">
          <p>{this.props.colData.text}</p>
        </div>
      </div>
    );
  }
}

export default TypeCol;