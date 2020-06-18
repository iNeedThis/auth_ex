import { define } from 'remount'
import FlashMessage from './components/FlashMessage'

define({
  'x-flashmessages': { component: FlashMessage, attributes: ['message', 'type'] }
})
