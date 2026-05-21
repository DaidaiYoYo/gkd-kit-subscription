import { defineGkdGlobalGroups } from '@gkd-kit/define';
import { RuleTool } from './utils/rule';
import { CategoryEnum } from './constants/categoryConstant';

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
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
    ],
  },
]);
