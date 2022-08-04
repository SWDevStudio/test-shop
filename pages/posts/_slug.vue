<template>
  <div>
    Инфа о категории
    <pre>
      {{ category }}
    </pre>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from 'nuxt-property-decorator'
import API from "~/api";

@Component({
})
export default class slug extends Vue {
  async asyncData(ctx: { route: { params: { slug: any; }; }; }) {
    const slug = ctx.route.params.slug
    if (!slug && process.client) {
      alert('Ошибка слага нет, можно сделать че угодно')
    }

    const categories = await API.Blog.getCategories()
    const category = categories.find(i => i.slug === slug)

    // проверяет выполняем ли мы это уже на клиенте т.к на сервере нет метода alert
    if (!category && process.client) {
        alert('Нет категории, можем что то сделать еще до загрузки страницы пользователя.')
    }

    return {
      category
    }
  }

  category!: any
}
</script>
