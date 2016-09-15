class SearchBar extends React.Component{
  constructor(){
    super();

  }

  handleSubmit(event){
    event.preventDefault();
    var searchWord = this.refs.searchWord.value
    var midStepString = searchWord.split(" ");
    var formattedQueryString = midStepString.join("+");
    $.ajax({
      url: `http://www.omdbapi.com/?s=${formattedQueryString}&type=movie&r=json`,
      method: 'get'
    })
  }

  render(){
    return(
      <section id="search-bar">
        <form id="search-form">
          <input placeholder="search for a movie or tv show..." ref="searchWord" id="search" type="text" name="query" />
        </form>
      </section>
    )
  }
}
