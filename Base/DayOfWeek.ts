
const arrayDay = ['chủ nhật', 'thứ hai', 'thứ ba','thứ tư', 'thứ năm', 'thứ sáu', 'thứ bảy' ]
const numberOfDayInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

function validateDate(day : number, month : number, year : number): string {
    if (day <=0 || month <=0 || year <=0 ) {
        return 'Dữ liệu ngày tháng cần lớn hơn 0 '
    } 
    if (month >12){
        return 'Một năm có 12 tháng'
    }
    if (month === 2 && day > 29 && checkLeap(year)){
        return `Năm ${year} nhuận nên tháng 2 chỉ có 29 ngày`
    }
    if ((month === 2 && day > 29 && !checkLeap(year))){
        return `Năm ${year} không nhuận nên tháng 2 chỉ có 28 ngày`
    }
    if (month!==2 && day>numberOfDayInMonth[month-1]){
        return `Tháng ${month} chỉ có ${numberOfDayInMonth[month-1]} ngày`
    }
    return ''
}

/** func kiểm tra xem năm đó có nhuận không
 * năm nhuận là năm (chia hết cho 4 và không chia hết 100) hoặc (chia hết cho 400)
 * @param year: năm
 */
function checkLeap(year:number):number {
    if ((year % 4 === 0 && year % 100 > 0)|| (year % 400 === 0)){
        return 1
    }
    return 0
}

/** func đếm số năm nhuận tính đến năm đã nhập  */
function countLeap(year: number): number {
    let count : number = 0
    for (let i = 1; i < year; i++) {
        if (checkLeap(i)) {
            count +=1
        }
    }
    return count
}

/** func tính ra số ngày của năm đã nhập
 *  @param day @param month @param year
 *  3 trường hợp, tháng = 1,2 >2
 */
function countDayCurrentYear(day : number,month : number,year: number): number {
    let count: number = 0
    if (month === 2){
        count = day + 31
    } else if (month <2){
        count = day
    } else  {
        for (let i = 0; i < month-1; i++) {
            count += numberOfDayInMonth[i]
        }
        count = count + day + checkLeap(year)
    }
    return count
}

/** func đếm tổng số ngày đến ngày nhập
 * @param day @param month @param year
 * return tổng số ngày của các năm trước cộng với số ngày của năm đã nhập
 */
function countTotalDay(day : number, month : number,year: number) : number {
        return 365 * (year-1) + countLeap(year-1) + countDayCurrentYear(day, month, year)
}
// console.log(countTotalDay(30,10,2020)%7)

/** func cho 1 ngày và tính ra thứ, biết hôm nay thứ 6, ngày 30/10/2020 
 * chưa validate dữ liệu đầu vào
 * @param day @param month @param year
 * đếm tổng số ngày đến ngày đã nhập và chia lấy dư cho 7
 */
function dayOfWeek(day:number, month: number, year: number) : string {
    if (!validateDate(day, month, year)){
        return arrayDay[countTotalDay(day,month,year)%7]
    } 
    return validateDate(day, month, year)
}

console.log(dayOfWeek(30,10,2020))
console.log(dayOfWeek(30,2,2020))

