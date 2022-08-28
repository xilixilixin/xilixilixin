export const siteData = JSON.parse("{\"base\":\"/xilixilixin/\",\"lang\":\"en-US\",\"title\":\"XiLiXiLi\",\"description\":\"XiLi小站，专注编程知识分享\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
