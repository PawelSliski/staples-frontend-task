<template>
  <div class="home">
    <div><Item msg="Products list:"/></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from '@/components/Item.vue'


export default {
  name: 'home',
  components: {
    Item
  }
}
</script>
