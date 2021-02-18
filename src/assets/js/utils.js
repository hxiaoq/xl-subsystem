import { eventTypes } from 'xl-utils'
import router from '@/router'

const sendTopMessage = (msg = {}) => {
  window.top && window.top.postMessage(msg, '*')
}

export const sendTokenExpireMessage = () => {
  const msg = {
    eventType: eventTypes['timeOut']
  }
  sendTopMessage(msg)
}

export const openTab = (path = '', config = {}) => {
  const routeSolve = router.resolve(path) || {}
  const resPath = `/${routeSolve.href}`
  const msg = {
    eventType: eventTypes['newTab'],
    resPath,
    ...config
  }
  sendTopMessage(msg)
}
