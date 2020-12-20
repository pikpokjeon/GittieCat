module.exports = {
  devServer: {
    overlay: false,
    // 프록시 설정
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      '/git/getToken': {
        // 프록시 요청을 보낼 서버의 주소
        target: 'http://52.79.191.158'
        // target: 'http://52.79.191.158:8080'
      }
    }
  }
};