class SearchBar extends React.Component{
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    var searchWord = this.refs.searchWord.value
    var midStepString = searchWord.split(" ");
    var formattedQueryString = midStepString.join("+");
    $.ajax({
      url: "http://www.omdbapi.com/?s="+formattedQueryString+"&r=json",
      method: 'get'
    })
    .done((response) => {
      // debugger;
      this.props.onSearch(response["Search"]);
      this.refs.searchWord.value = ""
    })
  }

  render(){
    return(
      <section id="search-bar">
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input placeholder="search for a movie or tv show..." ref="searchWord" id="search" type="text" name="query" />
        </form>
      </section>
    )
  }
}
