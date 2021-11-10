const commonUtil = require('./common')
/**
 * 颜色相关方法
 */
module.exports = {
    /**
     * rgb转hsv值
     * @param {Object} rgb rgb值，数组
     */
    rgb2hsv(rgb) {
        if (!Array.isArray(rgb) || rgb.length != 3) {
            throw new TypeError('Invalid argument')
        }
        let h = 0
        let s = 0
        let v = 0
        let r = rgb[0] >= 255 ? 255 : rgb[0]
        let g = rgb[1] >= 255 ? 255 : rgb[1]
        let b = rgb[2] >= 255 ? 255 : rgb[2]
        r = r <= 0 ? 0 : r
        g = g <= 0 ? 0 : g
        b = b <= 0 ? 0 : b
        let max = Math.max(r, g, b)
        let min = Math.min(r, g, b)
        v = max / 255
        if (max === 0) {
            s = 0
        } else {
            s = 1 - min / max
        }
        if (max === min) {
            h = 0 //事实上，max===min的时候，h无论为多少都无所谓
        } else if (max === r && g >= b) {
            h = 60 * ((g - b) / (max - min)) + 0
        } else if (max === r && g < b) {
            h = 60 * ((g - b) / (max - min)) + 360
        } else if (max === g) {
            h = 60 * ((b - r) / (max - min)) + 120
        } else if (max === b) {
            h = 60 * ((r - g) / (max - min)) + 240
        }
        h = parseInt(h)
        s = parseInt(s * 100)
        v = parseInt(v * 100)
        return [h, s, v]
    },

    /**
     * hsv格式值转rgb值
     * @param {Object} hsv hsv值，数组
     */
    hsv2rgb(hsv) {
        if (!Array.isArray(hsv) || hsv.length != 3) {
            throw new TypeError('Invalid argument')
        }
        let h = hsv[0] >= 360 || hsv[0] <= 0 ? 0 : hsv[0]
        let s = hsv[1] >= 100 ? 100 : hsv[1]
        s = s <= 0 ? 0 : s
        let v = hsv[2] >= 100 ? 100 : hsv[2]
        v = v <= 0 ? 0 : v
        s = s / 100
        v = v / 100
        let r = 0
        let g = 0
        let b = 0
        let i = parseInt((h / 60) % 6)
        let f = h / 60 - i
        let p = v * (1 - s)
        let q = v * (1 - f * s)
        let t = v * (1 - (1 - f) * s)
        switch (i) {
            case 0:
                r = v
                g = t
                b = p
                break
            case 1:
                r = q
                g = v
                b = p
                break
            case 2:
                r = p
                g = v
                b = t
                break
            case 3:
                r = p
                g = q
                b = v
                break
            case 4:
                r = t
                g = p
                b = v
                break
            case 5:
                r = v
                g = p
                b = q
                break
            default:
                break
        }
        r = parseInt(r * 255.0)
        g = parseInt(g * 255.0)
        b = parseInt(b * 255.0)
        return [r, g, b]
    },

    /**
     * rgb值转十六进制
     * @param {Array} rgb rgb值，数组
     */
    rgb2hex(rgb) {
        if (!Array.isArray(rgb) || rgb.length != 3) {
            throw new TypeError('Invalid argument')
        }
        let r = rgb[0]
        let g = rgb[1]
        let b = rgb[2]
        let hex =
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        return hex
    },

    /**
     * 十六进制颜色转rgb
     * @param {String} hex 十六进制颜色值
     */
    hex2rgb(hex) {
        if (!hex || typeof hex != 'string') {
            throw new TypeError('The argument must be a string')
        }
        let color = hex.toLowerCase()
        if (!commonUtil.matchingText(color, 'hex')) {
            throw new TypeError(
                'The argument must be a hexadecimal color value'
            )
        }
        //4位数的十六进制颜色值
        if (color.length === 4) {
            let colorNew = '#'
            for (let i = 1; i < 4; i += 1) {
                colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1))
            }
            color = colorNew
        }
        //处理六位的颜色值
        let colorChange = []
        for (let i = 1; i < 7; i += 2) {
            colorChange.push(parseInt('0x' + color.slice(i, i + 2)))
        }
        return colorChange
    }
}
