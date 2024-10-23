<!-- 01. Add Children under App Component -->

<!-- <template>
  <h1>My App</h1>
  <Home></Home>
  <About></About>
  <FileNotFound></FileNotFound>
</template>

<script>
import Home from './components/Pages/Home.vue';
import About from './components/Pages/About.vue';
import FileNotFound from './components/Pages/FileNotFound.vue';

export default {
  components: {
    Home,
    About,
    FileNotFound
  }
}
</script> -->

<!-- 02. Routing -->
<!-- npm install vue-router -->

<!-- <template>
  <nav>
    <RouterLink to="/home">Go to Home Page</RouterLink> &nbsp;
    <RouterLink to="/about">Go to About Page</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template> -->

<!-- 03. Components Communication - Interaction -->

<template>

  <MovieList></MovieList>

</template>

<script>
import MovieList from './components/communication/MovieList.vue';

export default {
  components: {
    MovieList
  }
}
</script>
