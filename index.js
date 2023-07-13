const receivesAFunction = callback => callback()


function returnsANamedFunction(){
    return function kaanFunction(){
        console.log("Hi Kaan")
    }
}


function returnsAnAnonymousFunction(){
    return function(){
        console.log("Hi")
    }
}
