import { CategoryEnum } from '../constants/categoryConstant';

/**
 * 规则工具
 */
export class RuleTool {
  /**
   * 生成规则组名称
   * @param category 类别
   * @param args 细化名称
   */
  public static ruleGroupName(
    category: CategoryEnum,
    ...args: string[]
  ): string {
    const groupName = args.join('-');
    return groupName ? `${category}-${groupName}` : `${category}`;
  }
}
