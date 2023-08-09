import Cookies from "js-cookie";

// Middleware check is login or not
export default function (context) {
    const {store, redirect} = context;
    if(process.client) {
        const token = Cookies.get('idToken');
        if (!Boolean(token)) {
            console.log('no idToken', token)
            redirect('/login');
        }
    }

}
