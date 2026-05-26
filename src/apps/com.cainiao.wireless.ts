import { defineGkdApp } from '@gkd-kit/define';
import { RuleTool } from '../utils/rule';
import { CategoryEnum } from '../constants/categoryConstant';
import { GeneralMatchEnum } from '../constants/matchConstant';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
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
          matches: GeneralMatchEnum.SKIP_TEXT,
        },
        {
          key: 1,
          matches: '[vid="ms_skipView"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b66b1821-252c-40e3-9b9b-6ae1944ea489',
        },
      ],
    },
  ],
});
