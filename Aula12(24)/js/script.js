let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*
Solução 01:
let varTroca = varA;
varA = varB
varB = varC
varC = varTroca
*/

// Solução 02:

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)