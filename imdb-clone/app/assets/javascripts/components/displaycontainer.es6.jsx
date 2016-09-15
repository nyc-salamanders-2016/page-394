class DisplayContainer extends React.Component{
  render(){
    // debugger;
    return(
      <section id="movie-result">
        <ul>
          {
            this.props.movies.map((movie, idx) => {
              return (<MovieDisplay key={idx} data={movie} />)
            })
          }
        </ul>
      </section>
    )
  }
}
