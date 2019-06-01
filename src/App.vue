<template>
  <div id="app">
    <h1>Login</h1>

    <form action="">
      <label for="email">Email: </label>
      <input type="text" id="emailAccount" v-model="email">

      <label for="password">Password: </label>
      <input type="password" id="password" v-model="password">
    <!-- https://vuejs.org/v2/guide/events.html: REF: Prevent default events -->
      <button v-on:click.prevent="login">Login</button>
      <button v-on:click.prevent="create">Create Account</button>

      <button v-on:click.prevent="logout">Logout</button>
    </form>


    <h1>Submit email</h1>
    <form action="">
      <label for="email">Email: </label>
      <input type="text" id="email" v-model="email">
    <!-- https://vuejs.org/v2/guide/events.html: REF: Prevent default events -->
      <button v-on:click.prevent="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
import db from './firebaseInit.js'

console.log(firebase.auth());



firebase.auth().onAuthStateChanged((user)=>{
  // console.log(user.email);
  // console.log(user.uid);
});

let user = firebase.auth().currentUser;

console.log(user.uid);

export default {
  name: 'app',
  components: {

  },
  data(){
    return{
      email: "",
      password: "",
    }
  },
  methods: {
    submit(){
      console.log("Submitting");
      let data = {
        email: this.email,
        userId: user.uid
      }

      console.log(data);

      axios.post('https://test-991e4.firebaseio.com/vuefire.json', data)
        .then( (response) =>{
          console.log(response);
        })
        .catch( (error) =>{
          console.log(error);
        });
    
    },
    login(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch((error) =>{
          console.log("Error in creating account");
        })
    },
    create(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch((error) =>{
          console.log("Error in creating account");
        })
    },
    logout(){
      firebase.auth().signOut()
        .then((result)=>{
          console.log(result);
        })
        .catch((error) =>{
          console.log(error);
        });
    }
  },
  created(){

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
