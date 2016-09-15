class SearchBar extends React.Component{
  render(){
    return(
      <section id="search-bar">
        <form id="search-form">
          <input placeholder="search for a movie or tv show..." id="search" type="text" name="query" />
        </form>
      </section>
    )
  }
}
