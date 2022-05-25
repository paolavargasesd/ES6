const tennis = [

    {id: 1, name: "Rafael Nadal", punctuationScore: 100, betterHit: 80, level: true, },
    {id: 2, name: 'Roger Federer', punctuationScore: 100, betterHit: 100, level: false,},
    {id: 3, name: 'Nova Jokovi', punctuationScore: 50, betterHit: 50, level: false,},
    {id: 1, name: "Serena Williams", punctuationScore: 30, betterHit: 80, level: true, },
    {id: 2, name: 'Juan delpotro', punctuationScore: 70, betterHit: 30, level: true,}
   ];

const bestPlayer = tennis
     .filter(function (lights){
         return lights.level;
    
        })

.map(function (score){
return score.punctuationScore + score.betterHit;
})
.reduce(function (sum,score) {
    return sum + score;
}, 0);

console.log(bestPlayer);