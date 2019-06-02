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
      <button v-on:click.prevent="deleteCollection">Delete</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
import './firebaseInit.js'


const db = firebase.firestore();

deleteCollection(db, "sample", 10);

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

      let data = {
        email: this.email,
      }

      let setDoc = db.collection('cities').doc('LA').set(data);

      db.collection("cities").add({
          first: "Ada",
          last: "Lovelace",
          born: 1815
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
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
