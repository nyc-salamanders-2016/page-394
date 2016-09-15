class App extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: [];
    }
  }


  render(){
    return(
      <div class="container">
        <SearchBar />

        <DisplayContainer />
      </div>
    )
  }
}
