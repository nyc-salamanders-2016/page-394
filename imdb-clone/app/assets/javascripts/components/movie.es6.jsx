class MovieDisplay extends React.Component{
  render(){
    return(
      <li className="movie-info">
        <p id="title">{this.props.data.Title} ({this.props.data.Year})</p>
      </li>
    )
  }
}
