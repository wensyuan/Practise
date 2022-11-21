// const goodScore=[
//     {
//         name:"小名",
//         score:33
//     },
//     {
//         name:"小名2",
//         score:70
//     },
//     {
//         name:"小名3",
//         score:80
//     }
// ]

// const filterScore=goodScore.find(function(item)
// {
//     return item.score>=60;
// })
// console.log(filterScore);

const orders=
[
    {
        name:"小名",
        orderId:"123456"
    },
    {
        name:"小名3",
        orderId:"123457"
    },
    {
        name:"小名5",
        orderId:"123458"
    },
]

const huaOrder=orders.findIndex(function(item)
{
    return item.orderId=="123456";
})
console.log(`這筆訂單是${orders[huaOrder].name}的`);