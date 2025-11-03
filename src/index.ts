// @dada78641/bot-archie <https://github.com/msikma/bot-archie>
// © MIT license

import CronBot from '@dada78641/cronbot'
import {requiredBotIntents} from '@dada78641/cronbot/util'
import {taskInternetArchive} from '@dada78641/cronbot-task-internetarchive'

const archieBot = new CronBot({
  id: 'bot-archie',
  name: 'Archie',
  path: import.meta.dirname,
  tasks: [
    taskInternetArchive,
  ],
  clientOptions: {intents: requiredBotIntents}
})

export {
  archieBot
}
