class displayContainer extends React.Component{
  render(){
    hpMovies = [
      {title: "Harry Potter and the Deathly Hallows: Part 2", year: "2011", poster: "http://ia.media-imdb.com/images/M/MV5BMTY2MTk3MDQ1N15BMl5BanBnXkFtZTcwMzI4NzA2NQ@@._V1_SX300.jpg"},
      {title: "Harry Potter and the Sorcerer's Stone", year: "2001", poster: "http://ia.media-imdb.com/images/M/MV5BMTYwNTM5NDkzNV5BMl5BanBnXkFtZTYwODQ4MzY5._V1_SX300.jpg"},
      {title: "Harry Potter and the Chamber of Secrets", year: "2002", poster: "http://ia.media-imdb.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"}
    ]

    return(
      <section id="movie-result">
        <ul>
          {
            hpMovies.map((movie, idx) => {
              return (<MovieDisplay key={idx} data={movie} />)
            })
          }
        </ul>
      </section>
    )
  }
}
