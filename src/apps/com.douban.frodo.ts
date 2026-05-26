import { defineGkdApp } from '@gkd-kit/define';
import { RuleTool } from '../utils/rule';
import { CategoryEnum } from '../constants/categoryConstant';

export default defineGkdApp({
  id: 'com.douban.frodo',
  name: '豆瓣',
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
          matches: '[vid="sdk_view"] >3 View[visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4343d7aa-c4bb-4e44-9308-f74122568be2',
        },
      ],
    },
  ],
});
