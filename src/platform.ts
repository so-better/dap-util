export type OSResultType = {
  Windows: boolean
  WindowsCPU?: 'x64' | 'x32'
  WindowsVersion?: 'win7' | 'win8' | 'win10'
  Mac: boolean
  MacVersion: string
  ios: boolean
  iosVersion: string
  Android: boolean
  AndroidVersion: string
  Linux: boolean
  HarmonyOS: boolean
  Ubuntu: boolean
}

//设备信息相关方法
export const platform = {
  //设备语言类型
  language() {
    return window.navigator.language
  },

  /**
   * 获取设备类型
   */
  device() {
    const userAgent = window.navigator.userAgent
    return {
      PC: !userAgent.match(/AppleWebKit.*Mobile.*/),
      //是否移动终端
      Mobile: !!userAgent.match(/AppleWebKit.*Mobile.*/),
      //是否iPhone
      iPhone: userAgent.includes('iPhone'),
      //是否手机
      Phone: (userAgent.includes('Android') && /(?:Mobile)/.test(userAgent)) || userAgent.includes('iPhone') || /(?:Windows Phone)/.test(userAgent),
      //是否iPad
      iPad: userAgent.includes('iPad'),
      //是否平板电脑
      Tablet: userAgent.includes('iPad') || (userAgent.includes('Android') && !/(?:Mobile)/.test(userAgent)) || (userAgent.includes('Firefox') && /(?:Tablet)/.test(userAgent)),
      //windows手机
      WindowsPhone: /(?:Windows Phone)/.test(userAgent)
    }
  },

  /**
   * 获取浏览器类型
   */
  browser() {
    const userAgent = window.navigator.userAgent
    return {
      //是否edge浏览器
      Edge: !!userAgent.match(/Edg\/([\d.]+)/),
      //是否微信内置浏览器
      Weixin: userAgent.includes('MicroMessenger'),
      //是否QQ内置浏览器
      QQ: userAgent.includes('QQ'),
      //是否QQ浏览器
      QQBrowser: userAgent.includes('MQQBrowser'),
      //是否UC浏览器
      UC: userAgent.includes('UCBrowser'),
      //是否谷歌浏览器
      Chrome: userAgent.includes('Chrome'),
      //是否火狐浏览器
      Firefox: userAgent.includes('Firefox'),
      //是否搜狗浏览器
      Sougou: userAgent.toLocaleLowerCase().includes('se 2.x') || userAgent.toLocaleLowerCase().includes('metasr') || userAgent.toLocaleLowerCase().includes('sogou'),
      //是否safari浏览器
      Safari: userAgent.includes('Safari') && !userAgent.includes('Chrome')
    }
  },

  /**
   * 获取浏览器内核
   */
  browserKernel() {
    const userAgent = window.navigator.userAgent
    if (userAgent.includes('Presto')) {
      return 'opera'
    }
    if (userAgent.includes('AppleWebKit')) {
      return 'webkit'
    }
    if (userAgent.includes('Gecko') && !userAgent.includes('KHTML')) {
      return 'gecko'
    }
  },

  /**
   * 获取操作系统数据
   */
  os(): OSResultType {
    const userAgent = window.navigator.userAgent
    return {
      //是否Windows系统
      Windows: userAgent.includes('Windows'),
      //x64/x32
      WindowsCPU: (function () {
        if (userAgent.toLocaleLowerCase().includes('win64') || userAgent.toLocaleLowerCase().includes('wow64')) {
          return 'x64'
        } else if (userAgent.toLocaleLowerCase().includes('win32') || userAgent.toLocaleLowerCase().includes('wow32')) {
          return 'x32'
        }
      })(),
      //Windows版本
      WindowsVersion: (function () {
        if (userAgent.includes('Windows NT 6.1') || userAgent.includes('Windows 7')) {
          return 'win7'
        }
        if (userAgent.includes('Windows NT 6.3') || userAgent.includes('Windows NT 6.2') || userAgent.includes('Windows NT 8')) {
          return 'win8'
        }
        if (userAgent.includes('Windows NT 10') || userAgent.includes('Windows NT 6.4')) {
          return 'win10'
        }
      })(),
      //是否Mac
      Mac: userAgent.includes('Macintosh'),
      //Mac版本
      MacVersion: (function () {
        if (userAgent.includes('Macintosh')) {
          const matches = userAgent.match(/Mac OS X ([^\s]+)\)/)
          if (matches && matches[1]) {
            return matches[1].split(/_|\./).join('.')
          }
        }
        return ''
      })(),
      //是否ios系统
      ios: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      //ios系统版本
      iosVersion: (function () {
        if (!!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          const matches = userAgent.match(/CPU.+OS ([^\s]+) like Mac OS X/)
          if (matches && matches[1]) {
            return matches[1].split(/_|\./).join('.')
          }
        }
        return ''
      })(),
      //是否Android系统
      Android: userAgent.includes('Android'),
      //Android系统版本
      AndroidVersion: (function () {
        const matches = userAgent.match(/Android ([^\s]+);/)
        if (matches && matches[1]) {
          return matches[1].split(/_|\./).join('.')
        }
        return ''
      })(),
      //是否Linux系统
      Linux: userAgent.includes('Linux'),
      //是否鸿蒙系统
      HarmonyOS: userAgent.includes('HarmonyOS'),
      //是否Ubuntu系统
      Ubuntu: userAgent.includes('Ubuntu')
    }
  }
}
