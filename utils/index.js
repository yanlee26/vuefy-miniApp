// 时间解析
export function parseTime(time, cFormat) {
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') {
            return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}
/* 将多个对象合成为一个类 使用的时候，只要继承这个类即可。
* 注意：这里仅仅是简单的mixin，并非多重继承
*/
export function mixinClass(base, ...mixins) {
    class mergedClass extends base {
        constructor(...props) {
            super(...props)
        }
    }
    mixins.forEach(source => {
        mixinProps(mergedClass.prototype, source.prototype)
    })
    return mergedClass
}

function mixinProps(target, source) {
    Object.getOwnPropertyNames(source).forEach(prop => {
        if (!/^constructor$/.test(prop)) {
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        }
    })
}
