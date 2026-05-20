import { defineGkdApp } from '@gkd-kit/define';
import { RuleTool } from '../utils/rule';
import { CategoryEnum } from '../constants/categoryConstant';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    {
      key: 0,
      name: RuleTool.ruleGroupName(CategoryEnum.FIRST_SCREEN_AD),
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: '[vid="xm_ad_host_count_down_text"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ee358fd1-0739-426e-a162-899acb8dc487',
          snapshotUrls: 'https://i.gkd.li/i/28059297',
        },
      ],
    },
  ],
});
