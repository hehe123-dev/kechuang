/* 每个集合定义真实业务字段；页面按功能表二级模块组织。 */
const PAGES=[
['overview','工作概览','工作台','◫','all',[]],
['accounts','组织与账号','后台基础','♙','B01',['employees','positions','permissions','isolation','security','login']],
['approvals','审批中心','后台基础','✓','B01',['approvalQueue','approvalFlows']],
['companies','企业与入驻','企业管理','▣','B02',['companies','entryFields','entryFlow','managerDisplay']],
['navigation','产品与菜单','产品管理','☷','B02',['navigation','dictionary']],
['policies','政策中心','内容运营','▤','B02',['policies','sources','matches']],
['assessment','科创体检','产品配置','◇','B02',['assessments','assessmentEntry','publicAssessment']],
['model','评价模型','产品配置','▥','B03',['indicators','scoring']],
['templates','业务模板','产品配置','▧','B02',['tasks','materials','applications']],
['mall','服务商城','商业运营','▱','B02',['products','categories','installments']],
['teams','交付团队','商业运营','♧','B02',['teams','scope']],
['orderConfig','合同与发票','商业运营','▦','B02',['contracts','invoiceConfig']],
['archive','企业档案字段配置','数据管理','▤','B02',['dimensions','facts']],
['connections','数据源','数据管理','⌘','B01',['connections','sync']],
['notifications','通知中心','运营管理','♧','B02',['notifications']],
['channel','渠道归因','会员与渠道','↗','B02',['codes','sales','attribution']],
['membership','会员与贡献值','会员与渠道','♔','B02',['levels','benefits','points','ledger']],
['audit','审计中心','审计与安全','⊙','B01',['logs','sensitive']]
];
const DB={};
function define(id,label,fields,rows,options={}){DB[id]={id,label,fields:fields.map(s=>{const [name,type='text',opts='']=s.split('|');return {name,type,opts:opts.split('/').filter(Boolean)}}),rows:rows.map((r,i)=>({id:id+'-'+(i+1),values:r,status:options.statuses?.[i]||'启用',version:1,history:[{time:'2026-11-16 09:30',actor:'系统初始化',action:'创建示例数据'}]})),...options};}
define('employees','员工账号',['姓名','登录账号','工号','业务岗位|select|平台客服/平台商务经理/平台商务总监/平台咨询老师/平台交付负责人/平台质检员/平台财务/平台运营负责人/平台运营经理','后台角色|select|B01 超级管理员/B02 后台管理员/B03 规则与知识管理员/无后台权限','授权数据范围|select|全平台/本租户/授权区域/分配企业/指派任务/本人','手机号','所属区域'],[['林子涵','linzh','WH001','平台运营负责人','B01 超级管理员','全平台','13800000001','武汉市'],['陈一鸣','chenym','WH012','平台咨询老师','B03 规则与知识管理员','指派任务','13800000012','东湖高新区'],['周晴','zhouq','WH023','平台商务经理','无后台权限','分配企业','13800000023','武昌区']],{columns:[0,2,3,4,5],newLabel:'新增员工',actions:['edit','toggle','reset']});
define('positions','岗位与后台角色',['角色名称','角色编号','所属端|select|后台/运营端','数据范围|select|全平台/本租户/授权区域/分配企业/指派任务/本人','受限数据|textarea','职责说明|textarea'],[['超级管理员','B01','后台','全平台','敏感凭证不可明文导出','组织、安全与高风险审批'],['后台管理员','B02','后台','全平台','财务原件须审批','业务配置及内容管理'],['规则与知识管理员','B03','后台','指派任务','企业联系人默认脱敏','政策解析、匹配规则和评价模型']],{columns:[0,1,2,3],actions:['edit']});
define('isolation','职责隔离',['规则名称','职责 A|select|提交/编写/核款/商务','职责 B|select|复核/发布/开票/财务','冲突处理|select|阻断/强制声明','适用端|select|全平台/后台/运营端','规则说明|textarea'],[['提交与复核分离','提交','复核','阻断','全平台','同一账号不得复核本人提交的变更'],['编写与发布分离','编写','发布','阻断','后台','规则编写人不能直接发布'],['核款与开票分离','核款','开票','阻断','运营端','财务操作分岗'],['商务与财务分离','商务','财务','强制声明','全平台','跨岗须说明并获批']],{actions:['edit','toggle']});
define('approvalFlows','审批流程',['操作类型|select|企业删除/权限扩大/规则发布/数据导出/退款','一级审批人|select|B01 超级管理员/B02 后台管理员','二级审批人','审批时限（小时）|number','超时动作|select|提醒/升级负责人/自动阻断','说明|textarea'],[['权限扩大','B01 超级管理员','安全负责人',24,'升级负责人','禁止申请人自审'],['规则发布','B01 超级管理员','',48,'提醒','核对版本与影响范围'],['数据导出','B01 超级管理员','',24,'自动阻断','需记录用途'],['企业删除','B01 超级管理员','业务负责人',24,'自动阻断','核验关联订单'],['退款','B01 超级管理员','财务负责人',24,'升级负责人','原路退回且主体一致']],{actions:['edit']});
define('companies','企业目录',['企业名称','统一社会信用代码','地区','行业','绑定等级|select|弱绑定/强认证','入驻状态|select|待审核/待补正/已通过/已退回','商务经理','交付负责人','服务状态|select|未签约/在服/已结项','来源渠道'],[['武汉光谷智造科技有限公司','91420100MA4K12345X','东湖高新区','智能制造','强认证','已通过','周晴','刘阳','在服','活动码'],['湖北星河新材料有限公司','91420106MA4K67890Y','武昌区','新材料','弱绑定','待补正','周晴','待分配','未签约','商务分享'],['武汉云启信息技术有限公司','91420100MA4K54321Z','洪山区','软件信息','强认证','已通过','李明','刘阳','已结项','企业推荐']],{columns:[0,2,4,5,6,8],readonly:true});
define('entryFields','入驻字段与证明',['字段名称','字段编码','字段类型|select|文本/信用代码/文件/日期','认证阶段|select|弱绑定/强认证','必填|select|是/否','证明类型|select|营业执照/授权书/法人身份证/无','校验规则|textarea'],[['企业名称','company_name','文本','弱绑定','是','无','与工商主体名称匹配'],['统一社会信用代码','credit_code','信用代码','强认证','是','营业执照','18位且校验通过'],['企业授权书','authorization','文件','强认证','是','授权书','上传盖章有效期内原件']],{columns:[0,1,2,3,4],actions:['edit','toggle']});
define('navigation','多端导航',['入口名称','所属端|select|企业端/运营端/服务商端/代理商端/后台','上级菜单','路径','排序|number','可见条件|textarea'],[['科创体检','企业端','科创服务','/assessment',10,'已绑定企业'],['企业档案','企业端','企业工作台','/archive',20,'强认证，企业成员'],['政策中心','后台','内容运营','#policies',30,'B02/B03'],['订单管理','运营端','商务管理','/orders',40,'平台商务经理']],{actions:['edit','toggle']});
define('dictionary','业务字典',['字典类型|select|地区/行业/项目状态/订单状态/任务类型/资质类型','显示名称','编码','排序|number','备注|textarea'],[['地区','东湖高新区','420118',1,'武汉市'],['行业','智能制造','manufacturing',1,''],['订单状态','待付款','unpaid',10,'付款前'],['任务类型','材料补齐','material',10,'用于交付任务'],['资质类型','高新技术企业','hnte',10,'']],{actions:['edit','toggle']});
define('policies','政策库',['政策标题','发布单位','地区','官方链接|url','发布时间|date','申报开始|date','申报截止|date','不限申报期|select|否/是','补助金额（万元）|number','金额口径','原文与附件说明|textarea','申报条件|textarea','支持方向|textarea','必备材料|textarea','加分项|textarea','否决项|textarea'],[['2026年度高新技术企业认定申报通知','武汉市科技创新局','武汉市','https://kjj.wuhan.gov.cn','2026-10-01','2026-11-01','2026-12-31','否',20,'最高奖励，按认定批次核定','示例原文：注册满一年，拥有核心自主知识产权，研发费用满足认定要求。','注册满一年；核心知识产权有效','高新技术领域','营业执照、审计报告、知识产权证书','研发投入持续增长','重大违法违规'],['湖北省专精特新中小企业申报通知','湖北省经济和信息化厅','湖北省','https://jxt.hubei.gov.cn','2026-10-12','2026-11-15','2027-02-28','否',50,'上限金额，以官方文件为准','示例原文待结构化。','','','','','']],{columns:[0,1,2,6,8],statuses:['草稿','待复核'],workflow:true,actions:['edit','parse','review','submit','disable'],newLabel:'录入政策',role:'B02',flow:'policy'});
define('sources','政策来源与采集',['来源名称','地区','发布单位','官方地址|url','采集方式|select|人工导入/定时采集','频率|select|每日/每周/实时','可信等级|select|官方/权威转载/待核验'],[['市科技创新局','武汉市','武汉市科技创新局','https://kjj.wuhan.gov.cn','定时采集','每日','官方'],['省经信厅','湖北省','湖北省经信厅','https://jxt.hubei.gov.cn','人工导入','每周','官方']],{actions:['edit','toggle']});
define('matches','匹配规则',['规则名称','关联政策','注册地','行业','最低年收入（万元）|number','最低研发比例（%）|number','知识产权数量|number','必备资质','灰度比例（%）|number','否决条件|textarea'],[['高企申报匹配规则','2026年度高新技术企业认定申报通知','武汉市','高新技术领域',0,5,1,'注册满一年',20,'重大违法违规'],['专精特新基本条件','湖北省专精特新中小企业申报通知','湖北省','制造业',1000,3,1,'创新型中小企业',100,'经营异常']],{columns:[0,1,2,5,8],workflow:true,statuses:['启用','草稿'],role:'B03',actions:['edit','submit','disable']});
define('assessments','测评项目',['项目名称','项目编码','适用企业','排序|number','项目介绍|textarea'],[['高新技术企业','HNTE','科技型企业',10,'高企认定符合度及短板分析'],['专精特新中小企业','SRDI','创新型中小企业',20,'专业化、精细化、特色化及创新能力'],['知识产权示范企业','IP','具有知识产权积累的企业',30,'知识产权管理能力']],{actions:['edit','toggle']});
define('assessmentEntry','测评入口',['入口名称','测评方式|select|AI资料核对/人工问卷/链接测评/扫码测评','绑定要求|select|个人登录/弱绑定/强认证','使用次数|number','开放等级|select|全部/注册会员/高级会员','入口链接'],[['AI资料核对','AI资料核对','强认证',3,'全部','/assessment/ai'],['人工问卷','人工问卷','弱绑定',10,'全部','/questionnaire.html']],{actions:['edit','toggle']});
define('publicAssessment','公开测评',['活动名称','测评项目','登录要求|select|个人登录/企业绑定','有效期|date','最大次数|number','使用次数|number','链接'],[['光谷企业体检测评','高新技术企业','个人登录','2026-12-31',1000,186,'/questionnaire.html?campaign=guanggu']],{columns:[0,1,2,3,4,5],actions:['edit','link','toggle']});
define('indicators','维度与指标',['维度|select|知识产权/研发投入/研发团队/成果转化/产学研/财务/资质','指标名称','权重（分）|number','数据字段','评分依据|textarea','硬性准入|select|是/否'],[['知识产权','核心知识产权有效性',30,'ip.valid_count','拥有一类知识产权可获得对应分值','是'],['研发投入','研发费用占营收比例',20,'finance.rd_ratio','按近三年研发费用与营收比例计算','是'],['成果转化','科技成果转化能力',30,'achievement.count','年均成果转化数量','否'],['研发团队','研发人员比例',20,'team.rd_ratio','研发人员比例不低于10%','是']],{columns:[0,1,2,3,5],actions:['edit','toggle'],role:'B03'});
define('tasks','任务模板',['任务名称','适用项目','责任角色|select|企业管理员/平台商务经理/平台咨询老师/平台质检员','截止天数|number','企业确认|select|是/否','完成要求|textarea','交付成果|textarea'],[['财务材料补齐','高企认定','企业管理员',7,'是','补齐三年财务审计报告','审计报告原件'],['申报书撰写','高企认定','平台咨询老师',15,'是','完成六章撰写并校验','申报书定稿']],{columns:[0,1,2,3,4],actions:['edit','toggle']});
define('materials','材料清单',['材料名称','适用项目','原件类型|select|PDF原件/盖章扫描件/Word原稿','固定版本|select|是/否','缺失阻断|select|是/否','有效期要求','校验要求|textarea'],[['营业执照','高企认定','盖章扫描件','是','是','有效期内','企业名称与信用代码一致'],['专项审计报告','高企认定','PDF原件','是','是','2025年度','核对研发费用及收入口径']],{actions:['edit','toggle']});
define('applications','申报书模板',['模板名称','申报年度|number','适用项目','官方模板文件|file','章节目录|textarea','字段与字数限制|textarea'],[['高新技术企业认定申报书',2026,'高企认定','高企申报模板2026.docx','一、企业基本信息\n二、知识产权\n三、研发活动\n四、成果转化\n五、研发组织管理\n六、成长性','企业介绍≤2000字；研发活动≤3000字']],{columns:[0,1,2,3],workflow:true,actions:['edit','submit','disable']});
define('products','自营商品',['商品名称','商品分类|select|资质申报/知识产权/财税服务/咨询诊断','售价（元）|number','交付周期（天）|number','负责团队','适用企业','交付内容|textarea','风险提示|textarea','商品详情|textarea','展示企业|textarea','定时上架|datetime-local'],[['高新技术企业认定辅导','资质申报',29800,45,'高企咨询一组','注册满一年科技型企业','诊断报告、申报书、材料清单、专家审核','认定结果以主管部门审定为准','全周期认定辅导服务','全部',''],['专精特新培育服务','资质申报',19800,60,'专精特新项目组','创新型中小企业','诊断报告、年度培育计划','政策条件及窗口可能调整','分阶段培育与申报指导','湖北省企业',''],['知识产权布局咨询','知识产权',5800,10,'知识产权团队','科技型企业','知识产权布局建议书','不保证授权结果','企业知识产权现状诊断','全部','']],{columns:[0,1,2,3,4],statuses:['已上架','草稿','待审核'],workflow:true,actions:['edit','submit','disable'],newLabel:'新增商品',flow:'product'});
define('categories','商品分类',['分类名称','服务方向','标签','适用企业','排序|number'],[['资质申报','科创资质','高企、专精特新','科技型企业',10],['知识产权','创新保护','专利、商标','全行业',20]],{actions:['edit','toggle']});
define('installments','分期与尾款',['商品名称','首付比例（%）|number','尾款触发|select|通过结项/企业验收/提交回执','尾款账期（天）|number','分期说明|textarea'],[['高新技术企业认定辅导',60,'通过结项',30,'认定通过后生成40%尾款应收'],['专精特新培育服务',50,'企业验收',15,'分两个阶段结算']],{actions:['edit','submit'],workflow:true});
define('teams','团队目录',['团队名称','团队类型|select|咨询/专家/复核/交付','负责人','成员','能力标签','服务品类','合作状态|select|合作中/暂停合作/已终止'],[['高企咨询一组','咨询','刘阳','陈一鸣、张琳','高企、财务分析','资质申报','合作中'],['政策专家组','专家','赵教授','赵教授、吴教授','专家评审、合规','专家审核','合作中'],['质量复核组','复核','王文','王文、李昕','材料核查、数值勾稽','质量审核','合作中']],{actions:['edit','toggle']});
define('scope','承接范围',['团队名称','可承接商品','地区','行业','项目类型','订单类型|select|托管/自主/全部'],[['高企咨询一组','高新技术企业认定辅导','湖北省','制造业、软件','高企认定','托管'],['政策专家组','专家审核','全国','全行业','高企、专精特新','全部']],{actions:['edit']});
define('contracts','合同模板',['模板名称','版本','签章方式|select|电子签章/纸质盖章','官方文件|file','必填条款|textarea','金额取值规则'],[['科技服务委托合同','2026.1','电子签章','科技服务合同.docx','服务范围、交付物、周期、退款责任','从订单读取，不允许手动修改']],{workflow:true,actions:['edit','submit','disable']});
define('dimensions','十三维度配置',['维度名称','维度编码','排序|number','必填级别|select|基础必填/项目必填/选填','数据归属|select|企业/项目/年度'],['基本信息','经营情况','财务数据','研发投入','研发团队','知识产权','研发项目','科技成果','成果转化','产学研合作','资质荣誉','管理体系','发展规划'].map((n,i)=>[n,'dim_'+(i+1),i+1,i<3?'基础必填':'项目必填','企业']),{actions:['edit','toggle']});
define('facts','事实字段与口径',['字段名称','字段编码','维度','类型|select|数值/文本/日期/枚举','年度|number','单位','允许零值|select|是/否','允许未知|select|是/否','来源要求|textarea'],[['研发费用','rd_expense','研发投入','数值',2025,'万元','是','是','专项审计报告'],['营业收入','revenue','财务数据','数值',2025,'万元','是','否','财务审计报告']],{columns:[0,1,2,3,4,5],actions:['edit','toggle']});
define('extraction','抽取作业',['作业名称','文档类型|select|审计报告/营业执照/知识产权证书','抽取字段','重试次数|number','失败接续人','抽取版本'],[['财务审计报告抽取','审计报告','revenue,rd_expense',3,'陈一鸣','extract-v2'],['营业执照识别','营业执照','company_name,credit_code',2,'平台客服','ocr-v3']],{role:'B03',actions:['edit','retry']});
define('evidence','来源与证据',['来源类型|select|官方原件/公开资料/人工补录','可信等级|select|高/中/待确认','必须关联原件|select|是/否','确认方式|select|系统校验/人工复核/企业确认','规则说明|textarea'],[['官方原件','高','是','系统校验','验证原件真实性与有效性'],['公开资料','中','否','人工复核','保留公开链接及查询时点'],['人工补录','待确认','否','企业确认','确认前不得覆盖已采纳事实']],{actions:['edit']});
define('conflict','冲突仲裁',['字段范围','优先来源','旧值保留|select|是/否','处理方式|select|人工采纳/自动推荐待确认','候选产生条件|textarea'],[['财务数值','最新审计原件','是','人工采纳','与当前值不一致时产生候选'],['主体信息','工商官方信息','是','自动推荐待确认','同步值变更时保留原记录']],{actions:['edit']});
define('connections','数据源连接',['数据源名称','数据类型|select|工商/政策/知识产权/政府结果','接口地址|url','凭证标识','负责人','连接状态|select|待接入/已连接/凭证到期'],[['工商主体查询','工商','https://example.com/api/enterprise','credential-enterprise','林子涵','待接入'],['政策公开数据','政策','https://example.com/api/policy','credential-policy','张静','待接入']],{actions:['edit'],role:'B01'});
define('sync','同步规则',['规则名称','数据源','频率|select|每日/每周/每月','空值处理|select|忽略/保留为空','冲突处理|select|产生候选/覆盖待确认','人工确认|select|是/否'],[['工商主体每日同步','工商主体查询','每日','忽略','产生候选','是'],['知识产权周同步','知识产权目录','每周','忽略','产生候选','是']],{actions:['edit','toggle'],role:'B02'});
define('notifications','通知模板',['模板名称','触发事件|select|待办/退回/到期/订阅/项目节点/企业确认','渠道|select|站内信/短信/企业微信','接收角色','标题','正文|textarea'],[['材料补正通知','退回','站内信','企业管理员','您的材料需要补正','尊敬的{{企业名称}}，{{项目名称}}材料需要补充：{{退回原因}}。请于{{截止时间}}前处理。'],['交付节点提醒','项目节点','企业微信','平台商务经理','项目进度更新','{{企业名称}}的{{项目名称}}已进入{{节点名称}}。']],{columns:[0,1,2,3],actions:['edit','preview','toggle']});
define('codes','来源登记码',['名称','类型|select|商务码/企业码/活动码','绑定人员或企业','有效期|date','使用上限|number','已使用|number','来源码'],[['周晴个人商务码','商务码','周晴','2027-12-31',1000,86,'WH-ZQ-023'],['光谷科创开放日','活动码','光谷科创活动','2026-12-31',500,126,'GG-KC-2026'],['光谷智造企业推荐','企业码','武汉光谷智造科技有限公司','2026-12-31',20,5,'QY-GG-001']],{columns:[0,1,2,3,4,5],actions:['edit','link','toggle']});
define('sales','销售身份',['姓名','工号','业务岗位|select|平台商务经理/平台咨询老师/平台运营经理/平台客服','销售资格|select|已授权/未授权','任职状态|select|在职/离职/转岗','链接失效延迟（天）|number'],[['周晴','WH023','平台商务经理','已授权','在职',0],['陈一鸣','WH012','平台咨询老师','已授权','在职',7]],{role:'B01',actions:['edit']});
define('attribution','归因快照',['企业名称','首触渠道','首触销售','归因方式','确认时点','确认人','当前归属','成交金额（元）|number'],[['武汉光谷智造科技有限公司','光谷科创开放日','周晴','活动码','2026-10-18 10:22','王琳','李明',29800],['湖北星河新材料有限公司','商务分享','周晴','带参链接','2026-11-01 09:10','王琳','周晴',19800]],{readonly:true,columns:[0,1,2,6,7]});
define('levels','等级与门槛',['会员等级','贡献值门槛|number','行为条件','升级生效|select|实时/次日/月初','降级缓冲（天）|number','人工调级权限|select|B01 超级管理员/B02 后台管理员'],[['基础会员',0,'完成企业绑定','实时',30,'B01 超级管理员'],['成长会员',1000,'完成一次付费服务','次日',30,'B01 超级管理员'],['优享会员',5000,'年度累计服务2次','次日',60,'B01 超级管理员'],['战略会员',20000,'年度服务协议','月初',90,'B01 超级管理员']],{workflow:true,actions:['edit','impact','submit']});
define('points','计分规则',['计分项','触发条件','分值|number','年度上限|number','失效周期（月）|number','关联实付订单|select|是/否'],[['服务消费','订单实付每100元',1,5000,12,'是'],['完成企业档案','完整度达90%',100,100,12,'否'],['企业推荐','被推荐企业首单支付',200,2000,12,'是']],{workflow:true,actions:['edit','submit']});
define('ledger','贡献值流水',['企业名称','关联订单号','实付金额（元）|number','变动分值|number','业务类型|select|消费计分/补发/冲回','原因|textarea'],[['武汉光谷智造科技有限公司','ORD202611001',29800,298,'消费计分','订单实付入账'],['湖北星河新材料有限公司','ORD202611002',19800,198,'消费计分','订单实付入账']],{actions:['detail'],newLabel:'新增校准流水'});
const SETTINGS={security:{title:'账号安全策略',fields:['密码有效期（天）|number','会话时长（分钟）|number','失败锁定次数|number','锁定时长（分钟）|number','双因子范围|select|全部后台账号/超级管理员','异常登录二次验证|select|开启/关闭','允许IP段','设备限制|select|不限/已登记设备'],values:[90,30,5,30,'全部后台账号','开启','内网与授权办公IP','已登记设备']},invoiceConfig:{title:'发票与寄送配置',fields:['发票类型|select|增值税专用发票/增值税普通发票','税率（%）|number','发票形式|select|电子及纸质/仅电子','必填字段','纸质寄送方式|select|快递/自取/快递或自取','电子推送渠道|select|邮箱与站内信/站内信','异常处理|textarea'],values:['增值税普通发票',6,'电子及纸质','企业抬头、税号、邮箱','快递或自取','邮箱与站内信','抬头与认证主体不一致时转人工核验']},managerDisplay:{title:'商务经理客户端展示',fields:['展示字段','手机号规则|select|隐藏个人手机号/展示脱敏手机号','联系渠道|select|企业微信与平台虚拟号/企业微信','联系人上限|number','变更生效|select|立即/次日','通知模板'],values:['姓名、工号、企业微信、服务时间、区域、服务起始日','隐藏个人手机号','企业微信与平台虚拟号',2,'次日','商务经理变更通知']}};
Object.entries(SETTINGS).forEach(([id,s])=>define(id,s.title,s.fields,[s.values],{settings:true}));
const dimData=[
{id:1,name:'基本信息',sort:1,status:'启用',desc:'工商主体与注册信息',fields:[
{id:1,name:'企业名称',type:'文本',required:'必填',source:'企业维护',unit:'',caliber:'以营业执照为准',zero:false,unknown:false,enabled:true},
{id:2,name:'统一社会信用代码',type:'文本',required:'必填',source:'企业维护',unit:'',caliber:'',zero:false,unknown:false,enabled:true},
{id:3,name:'注册地',type:'单选',required:'必填',source:'企业维护',unit:'',caliber:'',zero:false,unknown:false,enabled:true},
{id:4,name:'成立日期',type:'日期',required:'必填',source:'企业维护',unit:'',caliber:'',zero:false,unknown:false,enabled:true},
{id:5,name:'注册资本',type:'金额',required:'建议',source:'企业维护',unit:'万元',caliber:'',zero:false,unknown:false,enabled:true}]},
{id:2,name:'经营与财务',sort:2,status:'启用',desc:'营收、利润、研发费用等财务指标',fields:[
{id:1,name:'近三年营业收入',type:'金额',required:'必填',source:'企业维护',unit:'万元',caliber:'以审计报告合并口径为准',zero:true,unknown:false,enabled:true},
{id:2,name:'研发费用占比',type:'数值',required:'必填',source:'企业维护',unit:'%',caliber:'研发费用/营业收入',zero:true,unknown:false,enabled:true},
{id:3,name:'净利润',type:'金额',required:'建议',source:'企业维护',unit:'万元',caliber:'',zero:true,unknown:false,enabled:true},
{id:4,name:'总资产',type:'金额',required:'可选',source:'自动提取',unit:'万元',caliber:'',zero:false,unknown:true,enabled:true}]},
{id:3,name:'知识产权',sort:3,status:'启用',desc:'专利、软著、商标等',fields:[
{id:1,name:'发明专利数量',type:'数值',required:'必填',source:'自动提取',unit:'件',caliber:'已授权有效',zero:true,unknown:false,enabled:true},
{id:2,name:'实用新型数量',type:'数值',required:'建议',source:'自动提取',unit:'件',caliber:'',zero:true,unknown:false,enabled:true},
{id:3,name:'软件著作权数量',type:'数值',required:'建议',source:'自动提取',unit:'件',caliber:'',zero:true,unknown:false,enabled:true}]},
{id:4,name:'研发投入',sort:4,status:'启用',desc:'研发立项、投入与机构',fields:[
{id:1,name:'研发项目数量',type:'数值',required:'建议',source:'企业维护',unit:'个',caliber:'',zero:true,unknown:false,enabled:true},
{id:2,name:'是否设立研发机构',type:'布尔',required:'建议',source:'企业维护',unit:'',caliber:'',zero:false,unknown:false,enabled:true}]},
{id:5,name:'研发团队',sort:5,status:'启用',desc:'研发人员结构与占比',fields:[
{id:1,name:'研发人员数量',type:'数值',required:'必填',source:'企业维护',unit:'人',caliber:'',zero:true,unknown:false,enabled:true},
{id:2,name:'研发人员占比',type:'数值',required:'建议',source:'企业维护',unit:'%',caliber:'',zero:true,unknown:false,enabled:true}]},
{id:6,name:'成果转化',sort:6,status:'启用',desc:'科技成果转化情况',fields:[
{id:1,name:'近三年成果转化数量',type:'数值',required:'建议',source:'企业维护',unit:'项',caliber:'',zero:true,unknown:false,enabled:true}]},
{id:7,name:'产学研合作',sort:7,status:'启用',desc:'高校院所合作',fields:[
{id:1,name:'产学研合作单位',type:'文本',required:'可选',source:'企业维护',unit:'',caliber:'',zero:false,unknown:true,enabled:true}]},
{id:8,name:'资质荣誉',sort:8,status:'启用',desc:'已获资质与荣誉',fields:[
{id:1,name:'已获资质名称',type:'多选',required:'建议',source:'企业维护',unit:'',caliber:'',zero:false,unknown:false,enabled:true}]},
{id:9,name:'组织人才',sort:9,status:'启用',desc:'人才构成',fields:[
{id:1,name:'博士人数',type:'数值',required:'可选',source:'企业维护',unit:'人',caliber:'',zero:true,unknown:false,enabled:true},
{id:2,name:'硕士人数',type:'数值',required:'可选',source:'企业维护',unit:'人',caliber:'',zero:true,unknown:false,enabled:true}]},
{id:10,name:'产品与技术',sort:10,status:'启用',desc:'核心产品与关键技术',fields:[
{id:1,name:'核心产品名称',type:'文本',required:'建议',source:'企业维护',unit:'',caliber:'',zero:false,unknown:false,enabled:true}]},
{id:11,name:'标准与认证',sort:11,status:'启用',desc:'标准制修订与体系认证',fields:[
{id:1,name:'参与标准数量',type:'数值',required:'可选',source:'企业维护',unit:'项',caliber:'',zero:true,unknown:false,enabled:true}]},
{id:12,name:'投融资',sort:12,status:'停用',desc:'融资与资本情况',fields:[
{id:1,name:'累计融资额',type:'金额',required:'可选',source:'企业维护',unit:'万元',caliber:'',zero:false,unknown:true,enabled:false}]},
{id:13,name:'历史申报',sort:13,status:'启用',desc:'历史项目申报记录',fields:[
{id:1,name:'历史申报项目',type:'多选',required:'可选',source:'公开同步',unit:'',caliber:'',zero:false,unknown:true,enabled:true}]}
];
