// Libraries
import fancybox from './lib/fancybox'
import yandexMap from './lib/yandex-map'

// Scripts
import scrollHeader from './ts/scroll-header'
import mobileMenu from './ts/mobile-menu'
import progressLine from './ts/progress-line'
import scrollTo from './ts/scroll-to'
import social from './ts/social'
import draggable from './ts/draggable'
import animation from './ts/animation'
import waved from './ts/waved'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  fancybox.init()
  yandexMap.init()
  scrollHeader.init()
  mobileMenu.init()
  progressLine.init()
  scrollTo.init()
  social.init()
  draggable.init()
  animation.init()
  waved.init()

})