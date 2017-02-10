import nattyStorage from "natty-storage"
import nattyFetch from "natty-fetch"

let context = nattyFetch.context({
	urlPrefix: process.env.NODE_ENV === 'dev' ? 'http://fancontest.beta.yinyuetai.com/' : 'http://fancontest.yinyuetai.com/',
	// urlPrefix: 'http://beta.yinyuetai.com:58011/',
	jsonp: true,
	urlStamp: false,
	fit: function (response) {
		if(response.error === true) {
			return {
				"success": false,
				"error": response
			}
		} else {
			return {
				"success": true,
				"content": response
			}
		}
	}
});

context.create({
	'get.model': {
		url: 'red-velvet?id=1',
		jsonp: [true, 'callback', 'modelJsonp']
	},
	'get.videoList': {
		url: 'red-velvet-videos',
		jsonp: [true, 'callback', 'videosJsonp'],
		data: {
			pageSize: 10
		}
	}
});

export default context.api;