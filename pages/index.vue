<template>
  <div>
    <div class="banner" :style="{ 'background-image': `url(${banner.image})` }">
      <div class="content">
        <h1 class="title">{{ $nuxt.$options.head.title }}</h1>
        <p class="subtitle">{{ banner.subtitle }}</p>
      </div>
    </div>
    <section class="container">
      <div class="card-container" v-for="(post, index) in post" :key="index">
        <div class="content">
          <span class="date">{{ new Date(post.date).toLocaleDateString() }}</span>
          <h1 class="title">{{ post.title }}</h1>
          <p class="author" v-if="post.meta"><font-awesome-icon :icon="['fas', 'user']" /><span>{{ post.meta.author }}</span></p>
          <p>{{ `${post.content.substring(0, 500)}...` }}</p>
          <router-link :to="`/post/${post._id}`" class="button"><span>Read More</span><font-awesome-icon :icon="['fas', 'angle-right']" /></router-link>
        </div>
        <div class="image" v-if="post.meta" :style="{ 'background-image': `url(${post.meta.image})` }"></div>        
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      banner: {
        image: 'https://images.unsplash.com/photo-1517583106829-61e14fcbddf5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8a51e7f1bf1b8bc291eacdb9b912af2&fit=crop&w=1000&h=1000&q=80',
        subtitle: 'A lightweight blog integration system based on Node.js'
      }
    }
  },
  computed: {
    ...mapGetters({ post: 'allPost' })
  }
}
</script>
