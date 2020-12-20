<template>
  <article>Login code : {{ query }}</article>
</template>

<script>
import axios from 'axios';
import Regist from './Regist';
export default {
  components: {
    Regist,
  },
  data() {
    return {
      query: this.$route.query,
    };
  },
  mounted() {
    const data = {
      code: this.query.code,
      client_id: '0e9ce3e69ff338443e2c',
      client_secret: 'bb84225728c32f251daa05631d4f32f143a7d790',
    };
    axios
      .post('/git/getToken', data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  },
  // created(){

  // 		window.open(
  // 			'https://github.com/login/oauth/authorize?client_id=0e9ce3e69ff338443e2c&redirect_uri=http://localhost:8081/login',
  // 			"login"
  // 		)

  // }
};
</script>

<style lang="scss" scoped>
article {
  border: solid 1px red;
  padding: 50px;
}
</style>
