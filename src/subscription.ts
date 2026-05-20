import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1779244230340,
  name: 'DaiDai的GKD订阅',
  version: 0,
  author: 'DaiDai',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/DaidaiYoYo/gkd-kit-subscription.git',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
