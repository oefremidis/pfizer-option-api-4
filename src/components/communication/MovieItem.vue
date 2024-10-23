<template>

<li>{{ movieItem.title }}</li>
{{ msg }}

</template>

<script>

export default {
  props: {
    movieItem: Object,
    msg: String
  }
}

</script>