class MovieDisplay extends React.Component{
  render(){
    return(
      <li className="movie-info">
        <p id="title">{this.props.data.title} ({this.props.data.year})</p>
      </li>
    )
  }
}
