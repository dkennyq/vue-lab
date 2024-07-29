import { config } from '@vue/test-utils'

// Configura cualquier plugin global o configuración de Vue aquí
config.global.mocks = {
  $t: {}
}
