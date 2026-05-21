import { defineGkdApp } from '@gkd-kit/define';
import { RuleTool } from '../utils/rule';
import { CategoryEnum } from '../constants/categoryConstant';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
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
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          action: 'clickCenter',
          exampleUrls: [
            'https://e.gkd.li/5555b104-9d38-43c4-854d-1fb1e3d1f102',
            'https://e.gkd.li/768ffea9-eaef-405f-84b9-b472c5101ca8',
          ],
        },
      ],
    },
  ],
});
