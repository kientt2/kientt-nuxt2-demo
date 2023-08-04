export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                Accept: 'text/plain, */*'
            }
        }
    })

    // Set baseURL to something different
    api.setBaseURL('https://fir-login-d212d-default-rtdb.asia-southeast1.firebasedatabase.app')

    // Inject to context as $api
    inject('api', api)
}
