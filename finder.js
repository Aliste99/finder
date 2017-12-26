for (var key in inputs) {
    if (inputs.hasOwnProperty(key)) {
        if(inputs[key]) {
          resolve(JSON.parse(inputs[key]))
        }
    }
}
return reject('All founders SQL queries are null!');