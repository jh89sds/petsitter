<template>
  <header>
    <nav class="fixed-top navbar">
      <div v-if="this.user.displayName === ''" class="login-button" @click="loginRequest">로그인</div>
      <div v-else>{{this.user.displayName}}님 환영합니다!</div>
    </nav>
  </header>
</template>

<script>
  import firebase from 'firebase'
  import { mapMutations, mapState } from 'vuex'
  export default {
    name: "NavigationBar",
    computed: {
      ...mapState(['user'])
    },
    methods: {
      ...mapMutations(['setUserInfo']),
      loginRequest() {
        let _this = this
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken
          // The signed-in user info.
          var user = result.user
          _this.setUserInfo(user)
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // The email of the user's account used.
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential
          // ...
        })
      }
    }
  }
</script>

<style scoped>
  header {
    display: block;
    height: 63px;
  }

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    display: flex;
    justify-content: flex-end;
  }

  .navbar {
    background-color: whitesmoke;
    height: 63px;
    box-shadow: 1px 1px gray;
  }
  .navbar > div {
    padding: 10px;
  }

  .login-button {
    cursor: pointer;
  }
</style>
