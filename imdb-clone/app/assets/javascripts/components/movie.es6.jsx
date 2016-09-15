class MovieDisplay extends React.Component{
  constructor(){
    super();
    this.state = {
      details: null,
      detailsDisplayed: false
    };
    this.toggleDetails = this.toggleDetails.bind(this);
    this.displayDetails = this.displayDetails.bind(this);
    this.parseDetails = this.parseDetails.bind(this);
  }

  toggleDetails(event){
    event.preventDefault();
    let shouldToggleDetails = !this.state.detailsDisplayed

    if(shouldToggleDetails){
      this.parseDetails();
    } else {
      this.setState({
        detailsDisplayed: shouldToggleDetails
      })
    }

  }

  parseDetails(){
    var ID = this.props.data.imdbID;
    $.ajax({
      method: 'get',
      url: 'http://www.omdbapi.com/?i='+ID+"&plot=full"
    })
    .done((response) => {
      this.setState({
        details: response,
        detailsDisplayed: true
      })
    })
  }

  displayDetails(){
    if(this.state.detailsDisplayed){
      return (<MovieDetails details={this.state.details}/>)
    }
    return null
  }

  render(){
    return(
      <li onClick={this.toggleDetails} className="movie-overview">
        { this.props.data.Poster !== "N/A" ? <img id="poster" src={this.props.data.Poster} /> : <img id="poster" src="https://www.picturengine.com/assets/img/imageNotFound.jpg" /> }
        <p id="title">{this.props.data.Title} ({this.props.data.Year})</p>
        {this.displayDetails()}
      </li>
    )
  }
}
