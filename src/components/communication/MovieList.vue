<template>
  <div>
    <h2>My Favourite Movies</h2>
    <ul>
      <MovieItem v-for="movie in movies" :key="movie.id" :movieItem="movie" @select-movie="onMovieSelect"></MovieItem>
    </ul>
    <p v-if="selectedMovie">Selected Movie: {{ selectedMovie.title }}</p>

  </div>
</template>

<script>

import MovieItem from './MovieItem.vue'

export default {
  components: {
    MovieItem
  },

  data() {
    return {
      movies: [
        { id: 1, title: 'Inception' },
        { id: 2, title: 'The Matrix' },
        { id: 3, title: 'Interstellar' }
      ],
      selectedMovie: null,
    };
  },

  methods: {
    onMovieSelect(movie) {
      this.selectedMovie = movie
    }
  }
}

</script>