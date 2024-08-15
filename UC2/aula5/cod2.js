const rl=require('readline-sync')
rl.setDefaultOptions({print: function(res){q.push(res)}})
q=[]
q1=rl.question('voce bebeu agua hoje? ')
q2=rl.question('voce esta com sede? ')
q3=rl.question('voce viu a agua mineral? ')
console.log(q)