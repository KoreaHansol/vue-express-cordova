<template>
  <div class="movies">
    <h1>영화 목록</h1>
    <div style="display: flex; justify-content: center">
        <div v-for="(movie, index) in movies" class="movie" v-bind:key="index">
        <img v-bind:src="movie.poster" class="poster">
        <div>
            <strong>{{ movie.name }}</strong>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('/api/movies')
    .then((response) => {
        console.log(response)
        this.movies = response.data
    })
  },
  data () {
    return {
      movies: []
    }
  }
}
</script>