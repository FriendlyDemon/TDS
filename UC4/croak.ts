class Animal {
    urro(a:string,b:string):void
    urro(a:number,b:number):number
    urro(a:string|number,b:string|number){
        if(typeof a=='string' && typeof b=='string'){
            console.log(a,b)
        } else if (typeof a=='number' && typeof b=='number'){
            return a+b
        }
    }
}
let sapo = new Animal
sapo.urro(2,1)