<template>
  <div id="show-blogs">
      <h1>All Blogs Articles</h1>
      <input type="text" v-model="search" placeholder="search box">
      <div v-for="blog in filteredBlogs" :key="blog.title" class="single-blog">
          <h2>{{blog.title |to-uppercase}}</h2>
          <article>{{blog.content |snippet}}</article>
      </div>
  </div>
</template>

<script>

import blogger from '@/blog'
export default {
  data(){
    return{
        blogs:[],
        search:''
    }
  },
  created(){
    blogger.collection('blog posts').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if(change.type === 'added'){
          this.blogs.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },
      computed:{
        filteredBlogs: function(){
          return this.blogs.filter((blog) => {
            return blog.title.match(this.search)
          });
        }
     }
  }
  
</script>

<style>
#show.blogs{
    max-width:800px;
    margin:0 auto;
}
.single-blog{
    padding: 20px;
    margin:20px 0;
    box-sizing: border-box;
    background:#eee ;
}
</style>