export default function urlencode(json) {
	var str = '?';
	for(var key in json) {
		str += key + '=' + encodeURIComponent(json[key]) + '&';
	}
	return str.substr(0, str.length - 1);
}