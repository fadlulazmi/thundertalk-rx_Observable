const axios = require('axios')

function learnPromise(){
    console.log('start async')
    axios({
        url: 'https://swapi.co/api/people/1'
    })
        .then(({data}) => {
            console.log(data);
        })
        .catch(err => {
            console.log('err: ', err);  
        })
        .finally(() => {
            console.log('on complete')
        })
    console.log('finish async');
}

learnPromise()
