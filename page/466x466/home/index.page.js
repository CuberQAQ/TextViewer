import { gettext } from "i18n"
const logger = DeviceRuntimeCore.HmLogger.getLogger('home')
Page({
  build() {
   let rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 200,
    y: 200,
    w: 200,
    h: 60,
    radius: 30,
    color: 0x181818
   })
  },
  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
})