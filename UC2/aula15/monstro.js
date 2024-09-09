class monstro {
    constructor(pelo, lua, brilha, peleGelada, bebeSangue) {
        this.temPelo = pelo,
        this.transformaComLuaCheia = lua,
        this.brilhaAoSol = brilha,
        this.temPeleGelada = peleGelada,
        this.bebeSangue = bebeSangue;
    }
};

const belmont= new monstro(false,false,false,true,true);
function determinaMonstro(brr) {
    if (brr.temPelo) {
        if (brr.transformaComLuaCheia) { 
            return 'lobisomen'
        }
    } else {
        if (brr.temPeleGelada) {
            if (brr.bebeSangue) {
                return 'vampiro'
            }
        }
    }
};

console.log(determinaMonstro(belmont))