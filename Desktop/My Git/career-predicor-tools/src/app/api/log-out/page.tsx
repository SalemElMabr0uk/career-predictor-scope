import axios from "axios";
import router from "next/dist/client/router";



const logout = async () => {
    try {
        await axios.get('/api/logout');
        router.push('/api/sign-in')
    } catch (error: any) {
        console.log(error.message)

    }

}