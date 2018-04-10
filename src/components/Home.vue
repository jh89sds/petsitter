<template>
  <div>
    <img src="/static/img/icons/profile_dog.jpg" class="profile-image">
    <div class="button-area">
      <b-button size='lg' variant='primary' class="register-button">펫시터 일정 등록</b-button>
      <b-button size='lg' variant='success' class="register-button">맡길 펫 일정 등록</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .profile-image {
    display: block;
  }
  .button-area {
    position: absolute;
    top: 350px;
    text-align: center;
    width: 100%;
  }
  .register-button {
    margin: 20px;
    box-shadow: 2px 2px darkgray;
  }
</style>
