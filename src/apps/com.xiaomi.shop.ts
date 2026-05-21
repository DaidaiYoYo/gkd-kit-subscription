import { defineGkdApp } from '@gkd-kit/define';
import { RuleTool } from '../utils/rule';
import { CategoryEnum } from '../constants/categoryConstant';

export default defineGkdApp({
  id: 'com.xiaomi.shop',
  name: '小米商城',
  groups: [
    {
      key: 0,
      name: RuleTool.ruleGroupName(CategoryEnum.FIRST_SCREEN_AD),
      fastQuery: true,
      matchTime: 10000,
      actionMaximumKey: 0,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[vid="skip"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6d0c94c1-3b4d-4b34-aa57-81827a64ae28',
        },
      ],
    },
  ],
});
