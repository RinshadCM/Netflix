import axios from "axios";

// Instance creation

// create()  - Method in axios

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance