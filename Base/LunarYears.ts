const can = ['Canh','Tân','Nhâm','Quý','Giáp','Ất','Bính','Đinh','Mậu','Kỷ']
const chi =[ 'Thân', 'Dậu', 'Tuất', 'Hợi','Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi' ]


/** func tính năm âm lịch
 * @param year : năm cần tính
 * can = year % 10, chi = year % 12
 */
function lunarYear(year: number): string{
    return `${year} có tên âm lịch là ${can[year%10]} ${chi[year % 12]}`
}
console.log(lunarYear(2017))
console.log(lunarYear(2020))
