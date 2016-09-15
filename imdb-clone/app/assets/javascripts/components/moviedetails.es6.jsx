class MovieDetails extends React.Component {
  render(){

    return(
      <div>
        <ul className="extra-info-stats">
          <li id="rating">
            {this.props.details.Rated}
          </li>
          <li id="runtime">
            {this.props.details.Runtime}
          </li>
          <li id="genres">
            {this.props.details.Genre}
          </li>
        </ul>
        <p id="actors">Main Actors: {this.props.details.Actors}</p>
        <p id="plot">{this.props.details.Plot}</p>
      </div>
    )
  }
}
