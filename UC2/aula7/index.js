a1=true
a2=true

r=a1&&a2
console.log(r)

a=true
b=false
c=true

r1=a&&b
r2=b&&c
r3=a&&c
r4=a&&b&&c
console.log(`${r1},${r2},${r3},${r4}`)

r5=a||b
r6=b||c
r7=a||c
r8=a||b||c
console.log(`${r5},${r6},${r7},${r8}`)