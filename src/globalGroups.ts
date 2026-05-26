import { defineGkdGlobalGroups } from '@gkd-kit/define';
import { RuleTool } from './utils/rule';
import { CategoryEnum } from './constants/categoryConstant';
import { GeneralMatchEnum } from './constants/matchConstant';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: RuleTool.ruleGroupName(CategoryEnum.FIRST_SCREEN_AD, '全局'),
    fastQuery: true,
    matchTime: 10000,
    actionMaximumKey: 0,
    actionMaximum: 1,
    resetMatch: 'app',
    priorityTime: 10000,
    disableIfAppGroupMatch: CategoryEnum.FIRST_SCREEN_AD,
    rules: [
      {
        key: 0,
        matches: GeneralMatchEnum.SKIP_TEXT,
      },
    ],
  },
]);
