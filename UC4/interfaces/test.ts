interface arg {
    dakka(gazkull:string):void
}
abstract class thraka implements arg{
    abstract dakka(gazkull:string):void
}
class maguruk extends thraka{
    dakka(gazkull:string){
        console.log(gazkull)
    }
}