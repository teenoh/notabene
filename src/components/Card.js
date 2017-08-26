import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ['blue-grey', 'green', 'brown']
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.deleteItem(this.props.text)
  }

  render() {
    let color = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
    let className = `card darken-1 ${color}`;
    return (
      <div className="col s12 m6">
        <div className={className}>
          <div className="card-content white-text">
            <p>{this.props.text}</p>
          </div>
          <div className="card-action">
            <button onClick={this.handleClick} className="waves-effect waves-light btn red">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
