function fatorial(n) {
    let resultado = 1
        ;
    for (let i = n; i > 0; i--)(
        resultado *= i
    )
    return resultado
}
console.log(fatorial(5)) // esperando 120
/*
iteração // i // resultado
1           5   5
2           4   20
3           3   60
4           2   120
5           1   120
*/