class DisplayContainer extends React.Component{
  render(){
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
