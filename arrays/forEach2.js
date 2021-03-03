
 Array.prototype.forEach2 = function(callback){
    for (i = 0; i < this.length; i++){
       callback(this[i], i, this)
    }
   }


const approved = ['Sirius', 'James', 'Lupin', 'Lily']

approved.forEach2(function (name, index) {
    console.log(`${index + 1}) ${name}`)
})