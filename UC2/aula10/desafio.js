const escolha=['pedra','papel','tesoura','lagarto','spock'],
ganhou='Você ganhou',perdeu='Você perdeu'
pc=escolha[require('readline-sync').keyInSelect(escolha,'escolha sua jogada: ')]
npc=escolha[Math.floor(Math.random()*5)]
if(pc=='pedra'){
    if(npc=='tesoura'||npc=='lagarto'){console.log(npc,ganhou)}else{console.log(npc,perdeu)}
}else if(pc=='papel'){
    if(npc=='pedra'||npc=='spock'){console.log(npc,ganhou)}else{console.log(npc,perdeu)}
}else if (pc=='tesoura'){
    if(npc=='papel'||npc=='lagarto'){console.log(npc,ganhou)}else{console.log(npc,perdeu)}
}else if (pc=='lagarto'){
    if(npc=='papel'||npc=='spock'){console.log(npc,ganhou)}else{console.log(npc,perdeu)}
}else if(pc=='spock'){
    if(npc=='pedra'||npc=='tesoura'){console.log(npc,ganhou)}else{console.log(npc,perdeu)}
}