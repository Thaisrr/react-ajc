const requêteApi = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve('Youpi ça fonctionne !')
        } else {
            reject("Oups, quelque chose s'est mal passé")
        }
    }, 1000)
});

requêteApi()
    .then(res => console.log(res))
    .catch(err => console.log(err));

const fetchData = async () => {
    try {
        const res = await requêteApi();
        console.log(res);
    } catch (error) {
        console.error(error);
    }

}

const fetchRealDatas = async () => {
    const response = await fetch('https://reqres.in/api/users', {
        method: 'GET',
        headers: {"x-api-key": "reqres-free-v1"},
    });
    const json = await response.json();
    console.log(json);
    return json;
}

fetchRealDatas();