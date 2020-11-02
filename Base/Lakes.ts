/** Có N hồ nước, hồ thứ i có lượng nước ban đầu là a[i] và mỗi ngày lượng nước bốc hơi là b[i]
 *  Hãy xác định tổng lượng nước của các hồ ở từng ngày trong t ngày
 * (ngày 0, ngày 1, ngày 2,......., ngày t).
 */
class Lake {
    id: number;
    initial: number;
    steam: number;
    constructor(id: number,initial: number,steam: number) {
       this.id = id;
       this.initial = initial;
       this.steam = steam;
    }
}

const lakes = [
    {
       id: 1,
       initial: 12,
       steam: 1
    },
    {
       id: 2,
       initial: 10,
       steam: 3
    },
    {
       id: 3,
       initial: 3,
       steam: 5,
    },
    
]

/**func tính lượng nước trong 1 hồ còn lại sau t ngày
 * @param lake: hồ nước @param day: t ngày
 * nếu nước hết thì return 0, ngược lại return giá trị còn lại
 */
function remain(lake : Lake, day : number): number {
    let current : number = lake.initial-lake.steam * day
    return current > 0 ? current : 0
}

function totalRemain (arrLakes : Array<Lake>, day : number) : number{
   return arrLakes.reduce((total,unit)=> total + remain(unit,day),0)
}

console.log(totalRemain(lakes,1))
console.log(totalRemain(lakes,2))
console.log(totalRemain(lakes,3))
console.log(totalRemain(lakes,4))

// function total (arrLakes: Array<Lake>, day : number): number {
//     return arrLakes.reduce((total,unit)=> total + (unit.initial-unit.steam * day > 0 ? unit.initial-unit.steam * day : 0),0 )
//   }
// console.log(total(lakes,1))
// console.log(total(lakes,2))
// console.log(total(lakes,3))
// console.log(total(lakes,4))