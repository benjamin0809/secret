type formatObject = Date | string | number 
class DateUtil {
    constructor(dateStr: string, pattern: string = 'yyyy-MM-DD') {

    }

    formatDate(dateStr: formatObject, pattern: string = 'yyyy-MM-DD') {
        if(!dateStr) {
            return dateStr
        }
        let date = new Date()
        if(typeof dateStr === 'number') {
            date = new Date(dateStr)
        }else if(typeof dateStr === 'string') {
            date = new Date(dateStr)
        }else if(Date.prototype.isPrototypeOf(dateStr)) {
            date = dateStr
        }

        const _year = date?.getFullYear() + ''
        const _month = date.getMonth() + 1 + ''
        const _date = date?.getDate() + ''

        return pattern.replace(/yyyy/i, _year).replace(/MM/i, _month.padStart(2, '0')).replace(/DD/i, _date.padStart(2, '0'))
    }
}

