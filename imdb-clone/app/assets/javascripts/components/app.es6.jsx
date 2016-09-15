class App extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }
    this.displaySearchedTitles = this.displaySearchedTitles.bind(this)
  }

  displaySearchedTitles(searchedTitles) {
    this.setState({
      movies: searchedTitles
    })
  }

  render(){
    return(
      <div className="container">
        <header>
          <SearchBar onSearch={this.displaySearchedTitles} />
        </header>

        <div>
          <DisplayContainer movies={this.state.movies} />
        </div>
      </div>
    )
  }
}
