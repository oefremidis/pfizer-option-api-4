<template>
<div>
  <h2>My Favourite Movies</h2>
  <ul>
    <MovieItem v-for="movie in movies" :key="movie.id" :movieItem="movie" :msg="message"></MovieItem>
  </ul>
</div>
</template>

<script>

import MovieItem from './MovieItem.vue'

export default {
  components: {
    MovieItem
  },

  data(){
    return {
      movies: [ 
        { id: 1, title: 'Inception' },
        { id: 2, title: 'The Matrix'},
        { id: 3, title: 'Interstellar'}
      ],
      selectedMovie: null,
      message: 'Detailed Movie Description'
    };
  }
}

</script>