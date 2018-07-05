import VueFoldable from '../../packages/vue-foldable/dist/vue-foldable.es'
import '../../packages/vue-foldable/dist/vue-foldable.css'

import VueFoldableCsdn from '../../packages/@vue-foldable/csdn/dist/csdn.es'
import '../../packages/@vue-foldable/csdn/dist/csdn.css'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('foldable', VueFoldable)
  Vue.component('csdn-foldable', VueFoldableCsdn)
  // ...apply enhancements to the app
}
