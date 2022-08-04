<template>
  <div class="posts-page">
    <div
      v-for="post in posts"
      :key="post.name"
      class="post-card"
    >
      <div class="post-card__name">
        {{ post.name }}
      </div>

      <div class="post-card__description">
        Описание: <br>
        {{ post.description }}
      </div>

      <div class="post-card__categories">
        Категории: <br>
        <span
          v-for="category in post.categories"
          :key="category.name"
        >
          <nuxt-link :to="`posts/${category.slug}`">
            {{ category.name }}
          </nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'nuxt-property-decorator'
import API from "~/api";

@Component({
  name: 'index',
})
export default class index extends Vue {
  async asyncData() {
    const posts = await API.Blog.getPosts()
    return {
      posts
    }
  }

  posts!: any[]
}
</script>

<style lang="scss">
.posts-page {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
}

.post-card {
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;

  &__name {
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__categories {
    margin-top: 10px;

    span {
      cursor: pointer;

      &:hover {
        color: green;
      }

      &:not(:last-child):after {
        content: ',';
      }
    }
  }
}
</style>
