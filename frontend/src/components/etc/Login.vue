<template>
  <article>Login code : {{ query }}</article>
</template>

<script>
import axios from "axios";
import Regist from "./Regist";
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
    if (this.query) {
      const data = {
        code: this.query.code,
        client_id: "0e9ce3e69ff338443e2c",
        client_secret: "bb84225728c32f251daa05631d4f32f143a7d790",
      };
      axios
        .post("http://52.79.191.158:8080/git/getToken", this.query)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      // window.open(
      //   "https://github.com/login/oauth/authorize?client_id=0e9ce3e69ff338443e2c&redirect_uri=http://localhost:8081/login",
      //   // 'https://github.com/login/oauth/authorize?client_id=0e9ce3e69ff338443e2c&redirect_uri=http://localhost:8081/login',
      //   "login"
      // );
    }

    // window.open(
  },
};
</script>

<style lang="scss" scoped>
article {
  border: solid 1px red;
  padding: 50px;
}
</style>
