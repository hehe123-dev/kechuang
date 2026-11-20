const OPS_FEATURES=[
  {
    "number": "1",
    "module": "工作台",
    "section": "岗位工作台",
    "name": "待办与已办",
    "description": "按岗位聚合待审核、待分配、待接单、待复核、待开票、待回访任务，支持批量处理与筛选。",
    "role": "O01",
    "route": "workbench/todo"
  },
  {
    "number": "2",
    "module": "工作台",
    "section": "岗位工作台",
    "name": "驾驶舱概览",
    "description": "展示本人关联企业数、在办项目、临期/逾期事项、订单与服务状态，均可下钻。",
    "role": "O02",
    "route": "workbench/todo"
  },
  {
    "number": "3",
    "module": "工作台",
    "section": "岗位工作台",
    "name": "平台身份入口",
    "description": "平台人员直接在企业端页面登录，按岗位展示可用入口；进入企业数据前必须先选择企业。",
    "role": "O02",
    "route": "workbench/todo"
  },
  {
    "number": "4",
    "module": "工作台",
    "section": "岗位工作台",
    "name": "企业选择与切换",
    "description": "从授权企业列表选择目标企业，切换后重算材料、档案、项目、订单与 AI 上下文。",
    "role": "O02",
    "route": "workbench/todo"
  },
  {
    "number": "5",
    "module": "工作台",
    "section": "岗位工作台",
    "name": "操作留痕与代操作标识",
    "description": "凡平台人员代企业录入、代提交、代确认的动作，记录“代操作人 + 企业确认状态”，页面显式标识。",
    "role": "O01",
    "route": "workbench/proxy"
  },
  {
    "number": "6",
    "module": "客户与分配",
    "section": "入驻审核",
    "name": "待审核队列",
    "description": "按提交时间、区域、主体类型排队；支持领取、批量查看、退回补正。",
    "role": "O01",
    "route": "clients/registration"
  },
  {
    "number": "7",
    "module": "客户与分配",
    "section": "入驻审核",
    "name": "主体核验",
    "description": "核对营业执照/信用代码与工商信息一致性，识别重复主体、疑似套补贴主体。",
    "role": "O01",
    "route": "clients/registration"
  },
  {
    "number": "8",
    "module": "客户与分配",
    "section": "入驻审核",
    "name": "重复主体处理",
    "description": "同一主体多账号/多企业时按规则合并、挂靠或拒绝，并记录处理依据。",
    "role": "O01",
    "route": "clients/registration"
  },
  {
    "number": "9",
    "module": "客户与分配",
    "section": "商务分配",
    "name": "区域规则自动分配",
    "description": "按企业注册地/行业/规模匹配区域规则，自动分配商务经理并发送通知；规则可版本化。",
    "role": "O01",
    "route": "clients/allocation"
  },
  {
    "number": "10",
    "module": "客户与分配",
    "section": "商务分配",
    "name": "手动改派",
    "description": "客服可在规则外改派一次，须填写理由；超过一次由商务总监审批。",
    "role": "O01",
    "route": "clients/allocation"
  },
  {
    "number": "11",
    "module": "客户与分配",
    "section": "客户台账",
    "name": "企业台账",
    "description": "维护企业来源、归属、签约状态、服务记录、合同与回款台账，支持导出（需审批）。1101 增强：新增客户来源触点时间线——从首次触达（链接点击/线下活动/回访/来电）到签约的全触点记录，点开客户即见来源全景。1103 增强：来源字段细化为「来源渠道 + 来源销售 + 推荐人」，支持按销售筛选与导出，导出需审批并留痕",
    "role": "O01",
    "route": "clients/ledger"
  },
  {
    "number": "13",
    "module": "商务管理",
    "section": "我的企业",
    "name": "名下企业列表",
    "description": "按状态（新分配/跟进中/已报价/已下单/交付中/已成交/沉默）分类展示，含档案完整度与最近跟进。",
    "role": "O02",
    "route": "business/mine"
  },
  {
    "number": "14",
    "module": "商务管理",
    "section": "跟进",
    "name": "拜访与跟进记录",
    "description": "记录拜访方式、对象、诉求、下一步与提醒时间；支持语音转写与附件。",
    "role": "O02",
    "route": "business/follow"
  },
  {
    "number": "15",
    "module": "商务管理",
    "section": "跟进",
    "name": "建档协助（商务代录）",
    "description": "协助企业补齐档案字段，代录内容标注“商务代录”，经企业确认后生效。",
    "role": "O02",
    "route": "business/archive"
  },
  {
    "number": "18",
    "module": "商务管理",
    "section": "报价",
    "name": "意向单转订单",
    "description": "将企业意向单转为正式订单，确认服务范围、金额、周期与责任，提交企业确认。转单不校验强认证（订单环节对弱绑定放行）；深度服务开工前系统校验强认证状态，未认证的提醒商务协助补办。",
    "role": "O02",
    "route": "business/orders"
  },
  {
    "number": "19",
    "module": "商务管理",
    "section": "回款",
    "name": "催付与开票提醒",
    "description": "按订单状态提醒企业付款；支付后系统自动通知商务与财务开票。",
    "role": "O02",
    "route": "business/payment"
  },
  {
    "number": "20",
    "module": "商务管理",
    "section": "分享",
    "name": "个人带参分享链接",
    "description": "生成带个人参数的分享链接/二维码，支持落地页选择；记录点击、注册、绑定、下单转化。",
    "role": "O02",
    "route": "business/share"
  },
  {
    "number": "24",
    "module": "交付管理",
    "section": "案件池",
    "name": "待分案队列",
    "description": "展示已付款/已确认订单，按项目类型、地区、金额、交付时限排序，标注加急。",
    "role": "O05",
    "route": "delivery/pool"
  },
  {
    "number": "25",
    "module": "交付管理",
    "section": "案件池",
    "name": "负载视图",
    "description": "按咨询老师展示在办数、逾期数、能力标签与可用工时，辅助分案。",
    "role": "O05",
    "route": "delivery/load"
  },
  {
    "number": "26",
    "module": "交付管理",
    "section": "分案",
    "name": "分案给咨询老师",
    "description": "按能力标签、负载、区域分案；设置内部交付时间与交付结果要求；通知咨询老师。",
    "role": "O05",
    "route": "delivery/pool"
  },
  {
    "number": "27",
    "module": "交付管理",
    "section": "分案",
    "name": "兜底派单给服务商",
    "description": "自营产能不足时派单给服务商；客户侧不展示服务商信息；服务商仅见脱敏客户视图。",
    "role": "O05",
    "route": "delivery/pool"
  },
  {
    "number": "28",
    "module": "交付管理",
    "section": "分案",
    "name": "改派与拒单处理",
    "description": "咨询老师拒单须理由；交付负责人 24 小时内改派，逾期升级。",
    "role": "O05",
    "route": "delivery/pool"
  },
  {
    "number": "29",
    "module": "交付管理",
    "section": "过程",
    "name": "接单与开工确认",
    "description": "咨询老师接单后确认开工时间与首轮材料清单，企业侧可见进度。",
    "role": "O04",
    "route": "delivery/cases"
  },
  {
    "number": "30",
    "module": "交付管理",
    "section": "过程",
    "name": "诊断草稿与方案",
    "description": "基于档案与测评生成诊断草稿，人工修订后提交；草稿不对外，定稿需复核。",
    "role": "O04",
    "route": "delivery/cases"
  },
  {
    "number": "31",
    "module": "交付管理",
    "section": "过程",
    "name": "年度计划与任务清单初稿",
    "description": "编制年度申报计划与任务清单初稿（任务、交付成果、责任人、截止时间），提交企业确认。",
    "role": "O04",
    "route": "delivery/cases"
  },
  {
    "number": "32",
    "module": "交付管理",
    "section": "过程",
    "name": "材料清单核对",
    "description": "按项目类型核对材料清单，标记缺失/过期/不合规，生成补齐任务。",
    "role": "O04",
    "route": "delivery/cases"
  },
  {
    "number": "33",
    "module": "交付管理",
    "section": "过程",
    "name": "申报书撰写与 AI 辅助",
    "description": "章节化撰写，调用 AI 生成初稿、润色、一致性校验；人工定稿后进入封包。",
    "role": "O04",
    "route": "delivery/cases"
  },
  {
    "number": "34",
    "module": "交付管理",
    "section": "过程",
    "name": "专家审核送审",
    "description": "托管项目免费送审、自主项目付费；选择专家、提交材料、跟踪意见与回复。",
    "role": "O04",
    "route": "delivery/cases"
  },
  {
    "number": "35",
    "module": "交付管理",
    "section": "过程",
    "name": "封包与版本固定",
    "description": "材料齐备后封包，固定本次文件与检查结果，生成不可变版本；旧包保留。",
    "role": "O04",
    "route": "delivery/cases"
  },
  {
    "number": "36",
    "module": "交付管理",
    "section": "过程",
    "name": "退回整改",
    "description": "接收质检或企业验收退回，按整改项逐条处理并生成新包，保留整改记录。",
    "role": "O04",
    "route": "delivery/cases"
  },
  {
    "number": "37",
    "module": "质检复核",
    "section": "复核队列",
    "name": "待复核列表",
    "description": "按案件、提交时间、风险等级排序；展示提交人、封包版本与检查项预检结果。",
    "role": "O06",
    "route": "quality/pending"
  },
  {
    "number": "38",
    "module": "质检复核",
    "section": "复核",
    "name": "检查项执行",
    "description": "按模板检查完整性、一致性、合规性、敏感词、数值勾稽与材料有效性，逐项留痕。",
    "role": "O06",
    "route": "quality/pending"
  },
  {
    "number": "39",
    "module": "质检复核",
    "section": "复核",
    "name": "通过/退回",
    "description": "通过进入企业验收；退回须列明整改项、责任人与时限，禁止只填结论。",
    "role": "O06",
    "route": "quality/pending"
  },
  {
    "number": "40",
    "module": "质检复核",
    "section": "复核",
    "name": "整改跟踪",
    "description": "跟踪整改项完成情况，超时升级至交付负责人。",
    "role": "O06",
    "route": "quality/rectify"
  },
  {
    "number": "41",
    "module": "质检复核",
    "section": "抽检",
    "name": "已通过案件抽检",
    "description": "按比例抽检已通过案件，发现漏检计入质检质量分。",
    "role": "O06",
    "route": "quality/sample"
  },
  {
    "number": "42",
    "module": "验收",
    "section": "验收",
    "name": "企业确认验收",
    "description": "企业验收后状态同步变更，验收资料归档",
    "role": "O02",
    "route": "acceptance/acceptance"
  },
  {
    "number": "43",
    "module": "财务与结算",
    "section": "收款",
    "name": "收款认领",
    "description": "线下转账按金额/时间/付款方匹配订单，支持拆分与合并认领。",
    "role": "O07",
    "route": "finance/receipts"
  },
  {
    "number": "44",
    "module": "财务与结算",
    "section": "收款",
    "name": "核款确认",
    "description": "核对回单与订单金额，确认收款；差异挂账并通知商务。",
    "role": "O07",
    "route": "finance/receipts"
  },
  {
    "number": "45",
    "module": "财务与结算",
    "section": "发票",
    "name": "开票处理",
    "description": "接收客服/商务开票申请，开具发票并回填发票号与文件。",
    "role": "O07",
    "route": "finance/invoices"
  },
  {
    "number": "46",
    "module": "财务与结算",
    "section": "发票",
    "name": "寄送登记",
    "description": "登记纸质发票寄送方式、单号与签收；电子发票自动推送。",
    "role": "O07",
    "route": "finance/invoices"
  },
  {
    "number": "47",
    "module": "财务与结算",
    "section": "退款",
    "name": "退款审批与执行",
    "description": "按退款规则核算可退金额，商务确认、财务审批、原路退回；部分退款列明扣减项。原路退回账户须与企业认证主体一致，弱绑定企业人工核实对公收款账户。",
    "role": "O07",
    "route": "finance/refunds"
  },
  {
    "number": "48",
    "module": "财务与结算",
    "section": "台账",
    "name": "收款与开票台账",
    "description": "按企业、订单、时间维护收款与开票台账，支持导出与对账。",
    "role": "O07",
    "route": "finance/financeLedger"
  },
  {
    "number": "50",
    "module": "服务支持",
    "section": "知识库",
    "name": "百问百答维护",
    "description": "维护常规问题与标准答案（每人 50 条），供智能客服检索；定期评审过期答案。",
    "role": "O01",
    "route": "support/knowledge"
  },
  {
    "number": "51",
    "module": "服务支持",
    "section": "合同",
    "name": "合同模板与寄送",
    "description": "选择合同模板生成合同，登记寄送与回签；合同金额取自订单，不可手改。",
    "role": "O01",
    "route": "support/contracts"
  },
  {
    "number": "53",
    "module": "服务商协同",
    "section": "派单",
    "name": "派单与接单跟踪",
    "description": "派单后跟踪接单、开工、交付节点；拒单即时改派。",
    "role": "O05",
    "route": "providers/dispatch"
  },
  {
    "number": "58",
    "module": "客户与分配",
    "section": "来源核定与补录",
    "name": "分配环节把来源定死",
    "description": "分配商务经理时校验来源完整性，缺失则强制补录（渠道/来源销售/推荐人/证据），标注「人工核定」并记录核定人与时点；支持 Excel 批量补录历史客户来源；核定即触发归因快照，后续改派不改历史。",
    "role": "O01",
    "route": "clients/source"
  },
  {
    "number": "59",
    "module": "工作台",
    "section": "岗位工作台",
    "name": "平台经营驾驶舱",
    "description": "经营/获客/转化/交付/服务/复购六组指标一屏可下钻，按商务总监/交付负责人/财务角色区分视图。",
    "role": "O08",
    "route": "workbench/cockpit"
  },
  {
    "number": "60",
    "module": "案件交付",
    "section": "案件",
    "name": "案件详情（脱敏）",
    "description": "查看项目类型、交付要求、材料清单与时限；企业名称与联系人脱敏。",
    "role": "S02",
    "route": "masked/masked"
  },
  {
    "number": "61",
    "module": "交付管理",
    "section": "过程",
    "name": "代交回执登记",
    "description": "托管项目向官方系统提交后登记回执号、提交时间并上传附件；回执未登记不得进入验收后状态。",
    "role": "O04",
    "route": "delivery/receipt"
  },
  {
    "number": "62",
    "module": "交付管理",
    "section": "过程",
    "name": "申报结果登记与结项",
    "description": "登记公示与通过结果；通过结项自动生成尾款应收并推送催付，未通过触发减免复核；结果写入企业档案。",
    "role": "O04",
    "route": "delivery/results"
  },
  {
    "number": "63",
    "module": "客户与分配",
    "section": "客户台账",
    "name": "年度服务规划台账",
    "description": "以企业为维度登记年度服务规划与临期提醒；免费计划层不产生订单；转单由 CSM 手工建单。",
    "role": "O09",
    "route": "clients/annual"
  }
];
