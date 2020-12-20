module.exports = {
	devServer: {
		overlay: false,
		// 프록시 설정
		proxy: {
			// 프록시 요청을 보낼 api의 시작 부분
			// '/messages/': {
			// 	target: 'http://localhost:8080/'
			// }
		},
	},
};
