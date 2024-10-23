<template>

<li @click="selectMovies">{{ movieItem.title }}</li> <hr>

</template>

<script>

export default {
  props: {
    movieItem: Object,
  },

  methods: {
    selectMovies(){
      this.$emit('select-movie', this.movieItem)
    }
  }

}

</script>