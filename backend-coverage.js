const BACKEND_FEATURES=[
  {
    "number": "1",
    "module": "后台基础",
    "section": "组织与账号",
    "name": "后台登录",
    "description": "后台账号实名 + 双因子登录，登录地异常二次验证，登录日志留存。",
    "role": "B01",
    "route": "accounts/login"
  },
  {
    "number": "2",
    "module": "后台基础",
    "section": "组织与账号",
    "name": "员工账号",
    "description": "新增、编辑、停用、重置平台员工账号，保留状态与操作记录。",
    "role": "B01",
    "route": "accounts/employees"
  },
  {
    "number": "3",
    "module": "后台基础",
    "section": "组织与账号",
    "name": "岗位与后台角色",
    "description": "配置平台业务岗位与后台角色，岗位与后台权限可分离；咨询老师可配后台角色但不默认全权。",
    "role": "B01",
    "route": "accounts/positions"
  },
  {
    "number": "4",
    "module": "后台基础",
    "section": "组织与账号",
    "name": "菜单与操作权限",
    "description": "按角色配置菜单可见、页面访问与按钮操作权限，支持按端区分。",
    "role": "B02",
    "route": "accounts/permissions"
  },
  {
    "number": "5",
    "module": "后台基础",
    "section": "组织与账号",
    "name": "数据权限配置",
    "description": "按角色配置数据范围（全平台/本租户/授权区域/分配企业/指派任务/本人），并配置受限数据清单。",
    "role": "B01",
    "route": "accounts/permissions"
  },
  {
    "number": "6",
    "module": "后台基础",
    "section": "组织与账号",
    "name": "职责隔离规则",
    "description": "配置不可兼任组合：提交/复核、编写/发布、核款/开票、商务/财务；冲突时阻断或强制声明。",
    "role": "B01",
    "route": "accounts/isolation"
  },
  {
    "number": "7",
    "module": "后台基础",
    "section": "组织与账号",
    "name": "高风险操作审批",
    "description": "对企业删除、权限扩大、规则发布、数据导出、退款设审批流，明确审批人与时限。",
    "role": "B01",
    "route": "approvals/approvalFlows"
  },
  {
    "number": "8",
    "module": "后台基础",
    "section": "组织与账号",
    "name": "安全策略",
    "description": "密码有效期、会话时长、失败锁定、IP/设备限制、双因子强制范围。",
    "role": "B01",
    "route": "accounts/security"
  },
  {
    "number": "9",
    "module": "企业管理",
    "section": "企业与入驻",
    "name": "企业目录",
    "description": "查看全量企业、主体信息、入驻状态、服务状态与关联平台人员。",
    "role": "B02",
    "route": "companies/companies"
  },
  {
    "number": "10",
    "module": "企业管理",
    "section": "企业与入驻",
    "name": "入驻字段与证明配置",
    "description": "配置入驻字段、证明类型、必填与校验规则；区分弱绑定与强认证材料。",
    "role": "B02",
    "route": "companies/entryFields"
  },
  {
    "number": "11",
    "module": "企业管理",
    "section": "企业与入驻",
    "name": "入驻审核流程",
    "description": "配置初审、主体核验、补正、通过、退回、重复主体处理节点与时限。",
    "role": "B02",
    "route": "companies/entryFlow"
  },
  {
    "number": "12",
    "module": "产品管理",
    "section": "产品与菜单",
    "name": "导航配置",
    "description": "维护企业端、运营端、服务商端、代理商端与后台的菜单、入口名称、排序与可见条件。",
    "role": "B02",
    "route": "navigation/navigation"
  },
  {
    "number": "13",
    "module": "产品管理",
    "section": "产品与菜单",
    "name": "字典配置",
    "description": "维护地区、行业、项目状态、订单状态、任务类型、资质类型等字典。",
    "role": "B02",
    "route": "navigation/dictionary"
  },
  {
    "number": "16",
    "module": "内容运营",
    "section": "政策中心",
    "name": "政策来源与采集",
    "description": "维护来源、地区、发布单位、采集方式、频率与可信等级。",
    "role": "B02",
    "route": "policies/sources"
  },
  {
    "number": "17",
    "module": "内容运营",
    "section": "政策中心",
    "name": "政策结构化加工、入库",
    "description": "录入或导入原文、附件、官方链接、发布时间与有效期，重复自动比对。",
    "role": "B02",
    "route": "policies/policies"
  },
  {
    "number": "18",
    "module": "内容运营",
    "section": "政策中心",
    "name": "结构化解析",
    "description": "抽取申报条件、支持方向、时间、金额、材料、加分项与否决项；解析结果需人工复核。",
    "role": "B03",
    "route": "policies/policies"
  },
  {
    "number": "19",
    "module": "内容运营",
    "section": "政策中心",
    "name": "匹配规则维护",
    "description": "维护注册地、行业、规模、资质、知识产权、研发与财务匹配条件，支持版本与灰度。",
    "role": "B03",
    "route": "policies/matches"
  },
  {
    "number": "20",
    "module": "内容运营",
    "section": "政策中心",
    "name": "窗口与金额",
    "description": "维护申报起止、批次、补助金额、金额口径与不限申报期标识。",
    "role": "B02",
    "route": "policies/policies"
  },
  {
    "number": "21",
    "module": "产品配置",
    "section": "科创体检",
    "name": "测评项目类型",
    "description": "新增、编辑、启停、排序高企、专精特新、知识产权示范等项目。",
    "role": "B02",
    "route": "assessment/assessments"
  },
  {
    "number": "22",
    "module": "产品配置",
    "section": "科创体检",
    "name": "AI/人工测评入口",
    "description": "配置 AI 资料核对、人工问卷、链接与扫码测评的开放条件与次数。",
    "role": "B02",
    "route": "assessment/assessmentEntry"
  },
  {
    "number": "23",
    "module": "产品配置",
    "section": "评价模型",
    "name": "维度与指标",
    "description": "维护知识产权、研发投入、研发团队、成果转化、产学研、财务、资质等维度与指标。",
    "role": "B03",
    "route": "model/indicators"
  },
  {
    "number": "24",
    "module": "产品配置",
    "section": "评价模型",
    "name": "评分与等级规则",
    "description": "维护分数区间、A+ 至 D 等级、硬性准入与不确定项规则。",
    "role": "B03",
    "route": "model/scoring"
  },
  {
    "number": "25",
    "module": "产品配置",
    "section": "评价模型",
    "name": "公开测评配置",
    "description": "生成测评链接/二维码，配置个人登录、企业绑定、有效期与次数。",
    "role": "B02",
    "route": "assessment/publicAssessment"
  },
  {
    "number": "26",
    "module": "产品配置",
    "section": "业务配置",
    "name": "任务模板",
    "description": "配置任务名称、完成要求、交付成果、角色、截止时间与企业确认节点。",
    "role": "B02",
    "route": "templates/tasks"
  },
  {
    "number": "27",
    "module": "产品配置",
    "section": "业务配置",
    "name": "材料清单与证据要求",
    "description": "维护各项目材料清单、固定版本要求、原件类型与缺失阻断规则。",
    "role": "B02",
    "route": "templates/materials"
  },
  {
    "number": "28",
    "module": "产品配置",
    "section": "业务配置",
    "name": "申报书模板",
    "description": "维护申报年度、官方 Word 模板、六章目录、字段与字数限制。",
    "role": "B02",
    "route": "templates/applications"
  },
  {
    "number": "29",
    "module": "商业运营",
    "section": "服务商城",
    "name": "商品分类",
    "description": "维护服务方向、类型、标签、适用企业与排序。",
    "role": "B02",
    "route": "mall/categories"
  },
  {
    "number": "30",
    "module": "商业运营",
    "section": "服务商城",
    "name": "商品管理",
    "description": "维护自营商品名称、详情、交付内容、周期、适用条件、风险提示与负责团队。",
    "role": "B02",
    "route": "mall/products"
  },
  {
    "number": "32",
    "module": "商业运营",
    "section": "服务商城",
    "name": "上下架",
    "description": "草稿、审核、上架、下架、定时上架与指定企业展示。",
    "role": "B02",
    "route": "mall/products"
  },
  {
    "number": "33",
    "module": "商业运营",
    "section": "交付团队",
    "name": "团队目录",
    "description": "维护咨询、专家、复核、交付团队及成员能力、服务品类、合作状态。",
    "role": "B02",
    "route": "teams/teams"
  },
  {
    "number": "34",
    "module": "商业运营",
    "section": "交付团队",
    "name": "承接范围",
    "description": "配置平台团队可承接的商品、地区、行业、项目类型与订单类型。",
    "role": "B02",
    "route": "teams/scope"
  },
  {
    "number": "35",
    "module": "商业运营",
    "section": "订单管理",
    "name": "发票配置",
    "description": "配置发票类型、开票字段、税率、电子/纸质、寄送方式与异常处理。",
    "role": "B02",
    "route": "orderConfig/invoiceConfig"
  },
  {
    "number": "36",
    "module": "商业运营",
    "section": "订单管理",
    "name": "合同模板",
    "description": "维护合同/服务协议模板、必填条款、签章方式与版本。",
    "role": "B02",
    "route": "orderConfig/contracts"
  },
  {
    "number": "37",
    "module": "数据管理",
    "section": "企业档案",
    "name": "十三维度配置",
    "description": "维护档案维度、字段、必填级别、展示顺序与数据归属。",
    "role": "B02",
    "route": "archive/dimensions"
  },
  {
    "number": "38",
    "module": "数据管理",
    "section": "企业档案",
    "name": "事实字段与口径",
    "description": "维护字段类型、年度、单位、口径、允许零值/未知值与来源要求。",
    "role": "B02",
    "route": "archive/facts"
  },
  {
    "number": "39",
    "module": "数据管理",
    "section": "企业档案",
    "name": "抽取作业管理",
    "description": "配置文档类型、抽取字段、失败重试、人工接续与抽取版本。",
    "role": "B03",
    "route": "archive/extraction"
  },
  {
    "number": "40",
    "module": "数据管理",
    "section": "企业档案",
    "name": "来源与证据规则",
    "description": "配置来源等级、原件关联、公开资料与人工补录的可信状态。",
    "role": "B02",
    "route": "archive/evidence"
  },
  {
    "number": "41",
    "module": "数据管理",
    "section": "企业档案",
    "name": "冲突仲裁策略",
    "description": "配置候选产生、默认优先级、人工采纳与保留旧值规则。",
    "role": "B02",
    "route": "archive/conflict"
  },
  {
    "number": "42",
    "module": "数据管理",
    "section": "数据源",
    "name": "数据源目录与连接",
    "description": "维护工商、政策、知识产权、政府结果等数据源及连接状态与凭证。",
    "role": "B01",
    "route": "connections/connections"
  },
  {
    "number": "43",
    "module": "数据管理",
    "section": "数据源",
    "name": "同步规则",
    "description": "配置公开资料同步频率、空值处理、冲突处理与人工确认。",
    "role": "B02",
    "route": "connections/sync"
  },
  {
    "number": "44",
    "module": "运营管理",
    "section": "通知中心",
    "name": "通知模板",
    "description": "维护待办、退回、到期、订阅、项目节点与企业确认通知模板。",
    "role": "B02",
    "route": "notifications/notifications"
  },
  {
    "number": "45",
    "module": "审计与安全",
    "section": "审计中心",
    "name": "操作日志",
    "description": "记录登录、查看、下载、修改、审批、导出、授权、发布等操作。",
    "role": "B05",
    "route": "audit/logs"
  },
  {
    "number": "46",
    "module": "审计与安全",
    "section": "审计中心",
    "name": "敏感数据访问日志",
    "description": "记录企业原件、财务、联系人与导出数据的访问者、原因、时间与结果。",
    "role": "B05",
    "route": "audit/sensitive"
  },
  {
    "number": "47",
    "module": "渠道归因",
    "section": "线下来源登记码",
    "name": "线下渠道入账",
    "description": "来源码体系统一管理，覆盖注册环节填写入口：①商务码（人码一对一，离职失效）；②企业码（管理员生成，可设有效期与次数）；③活动码（运营批量投放）；与带参分享链接、人工补录构成四条归因路径。",
    "role": "B02",
    "route": "channel/codes"
  },
  {
    "number": "48",
    "module": "会员与资金",
    "section": "会员等级",
    "name": "等级与门槛配置",
    "description": "配置四级门槛（贡献值/行为条件）、升级生效时点、降级缓冲期与人工调级权限；规则版本化，变更前可预览受影响企业数与让利金额。",
    "role": "B02",
    "route": "membership/levels"
  },
  {
    "number": "49",
    "module": "会员与资金",
    "section": "会员权益",
    "name": "权益矩阵配置",
    "description": "按等级配置折扣率、测评/报告/审核次数、智能体额度、响应时效与专属服务；支持按行业/区域下发差异权益包，权益项可启停。",
    "role": "B02",
    "route": "membership/benefits"
  },
  {
    "number": "50",
    "module": "会员与资金",
    "section": "贡献值",
    "name": "计分规则与校准",
    "description": "配置计分项、分值、年度上限与失效规则；提供流水校准工具（补发/冲回）与月度对账报表，确保贡献值与订单实付可逐笔核对。",
    "role": "B02",
    "route": "membership/points"
  },
  {
    "number": "51",
    "module": "渠道归因",
    "section": "销售身份与获客资格",
    "name": "谁算「销售」由系统界定",
    "description": "为账号绑定销售身份（商务经理/咨询老师/运营/客服）与工号；仅销售身份可生成带参分享链接与来源码，非销售身份生成需审批；离职或转岗后其链接自动失效（可设 7 天延迟）。解决「来源账号是人，但无法判定该账号是否为销售」的口径断层。",
    "role": "B01",
    "route": "channel/sales"
  },
  {
    "number": "53",
    "module": "渠道归因",
    "section": "归因快照与双口径",
    "name": "改派不洗历史",
    "description": "归属确定时固化归因快照（首触渠道、首触销售、归因方式、确认时点、确认人）；改派只改「当前归属」，不动快照；报表同时给出「成交归因」与「当前归属」两套口径并列出差异企业与差异金额。不加固化，任何一次改派都会把历史来源统计改掉。",
    "role": "B02",
    "route": "channel/attribution"
  },
  {
    "number": "54",
    "module": "企业与入驻",
    "section": "商务经理展示配置",
    "name": "客户端展示什么由后台定",
    "description": "配置企业端可见字段（姓名/工号/企业微信/服务时间/所属区域/服务起始日）、脱敏规则（个人手机号默认不展示，仅企业微信与平台虚拟号）、多联系人上限、变更生效时点与通知模板；配置变更留痕可回滚。",
    "role": "B02",
    "route": "companies/managerDisplay"
  },
  {
    "number": "55",
    "module": "商业运营",
    "section": "服务商城",
    "name": "订单分期与尾款规则配置",
    "description": "按商品配置分期、首付比例、尾款触发条件与账期；变更留版本记录。",
    "role": "B02",
    "route": "mall/installments"
  }
];
