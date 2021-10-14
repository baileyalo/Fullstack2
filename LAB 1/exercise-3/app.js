var promise1 = 101;
var promise2 = "follow the white"
var promise3 = new Promise(function(resolve, reject) {
    resolve("rabbit..neo");
})


const resolveAll = () => {
    const prom = new Promise(function (resolve, reject) {
        return Promise.all([promise1, promise2, promise3])
            .then((values) => console.log(values));
    })
    return prom;
} 

resolveAll()
