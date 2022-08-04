import axios from 'axios'


async function getPosts(): Promise<any[]> {
  const {data} = await axios.get('https://shopping.dev.cdek.market/api/v1/blog/posts')
  return data?.data || []
}

async function getCategories(): Promise<any[]> {
  const {data} = await axios.get('https://shopping.dev.cdek.market/api/v1/blog/categories')
  return data?.data || []
}

export {
  getPosts,
  getCategories
}
