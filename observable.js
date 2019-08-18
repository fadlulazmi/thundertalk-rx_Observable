const Rx = require('rx')
const axios = require('axios')

function learnObservable() {
    console.log('start async')
    const dataSWAPI = axios({
        url: 'https://swapi.co/api/people/1'
    })
    const resultSWAPI = Rx.Observable.fromPromise(dataSWAPI)
    resultSWAPI.subscribe(
        function({data}){
            console.log(data);
        },
        function(err) {
            console.log('err: ', err);
        },
        function() {
            console.log('on complete')
        }
    )
    console.log('finish async');
}

learnObservable()
