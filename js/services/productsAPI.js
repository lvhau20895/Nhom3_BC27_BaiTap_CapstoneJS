let baseUrl = "https://629d56d03dda090f3c00c132.mockapi.io/api/Phones";

function getProductsAPI() {
	return axios({
		url: baseUrl,
		method: "GET"
	});
}
