import { defineGkdCategories } from '@gkd-kit/define';
import { CategoryEnum } from './constants/categoryConstant';

export default defineGkdCategories([
  // 开屏广告：进入应用的广告
  {
    key: 0,
    name: CategoryEnum.FIRST_SCREEN_AD,
    enable: true,
  },
  {
    // 全屏广告：遮挡操作界面的弹窗广告
    key: 1,
    name: CategoryEnum.FULL_SCREEN_AD,
    enable: false,
  },
  {
    // 局部广告：不遮挡操作界面的广告
    key: 2,
    name: CategoryEnum.PARTIAL_SCREEN_AD,
    enable: false,
  },
  {
    // 多步骤广告：多步骤操作的广告
    key: 3,
    name: CategoryEnum.MULTI_STEP_AD,
    enable: false,
  },
  {
    // 功能类：特殊功能实现
    key: 4,
    name: CategoryEnum.FUNCTIONAL,
    enable: false,
  },
]);
