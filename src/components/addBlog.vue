<template>
  <div id="add-blog">
    <h2>Add a new Blog post</h2>
    <form v-if="!submitted" ref="form">
        <label>Blog Title</label>
        <input type="text" v-model.lazy="blog.title" required>
        <label>Blog Content</label>
        <textarea v-model.lazy="blog.content"></textarea>
   
    <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories" />
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories" />
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories" />
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories" />
    </div>
    <label>Author:</label>
    <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
    </select>
    <button v-on:click.prevent="submit" @blogAdded="submitted = true">Add Blog</button>
    </form>

    <div v-if="submitted">
        <h3>Thanks for adding your post</h3>
    </div>

    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{ blog.title }}</p>
        <p>Blog Content: </p>
        <p class="blog-content">{{ blog.content }}</p>
        <p>Blog categories</p>
        <ul>
            <li v-for="category in blog.categories" :key="category"> {{ category }}</li>
        </ul>
        <p>Author: {{ blog.author}}</p>
    </div>
    
  </div>
</template>
 
<script>
import blogger from '@/blog'
export default {

  data(){
    return{
        blog:{
            title:"",
            content:"",
            categories:[],
            author:""
        },
        authors:['the net ninja','the angular avenger','the vue vindicator'],
        submitted: false,
    }
  },
  methods:{
      submit(){
          const project = {
              title: this.blog.title,
              content: this.blog.content
          };
          blogger.collection("blog posts").add(project).then(()=> {
            this.$emit('blogAdded')
          })
      }
    }
  
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width:500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>