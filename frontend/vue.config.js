module.exports = {
    devServer: {
      overlay: false,
    },
    
    devServer: {
      // 프록시 설정
      proxy: {
          // 프록시 요청을 보낼 api의 시작 부분
          '/oauth/access_token': {
              // 프록시 요청을 보낼 서버의 주소
              target: 'https://github.com'
          }
      }
  }
  };
  