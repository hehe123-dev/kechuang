/* 运营工作台：复用现有业务数据，原型数据与留痕仅保留在当前会话。 */
(function(){
  const state=window.opsState={company:'',role:'平台运营',tab:'todo',type:'all',audit:'all',delegate:false,reason:'',logs:[]};
  const operator='王莉';
  const roles=[['平台运营','全部业务','all'],['商务经理','订单跟进','order'],['交付专员','成果交付','delivery'],['财务专员','发票处理','invoice']];
  function inScope(record){return !state.company||record.company===state.company;}
  function companies(){return regData.map(function(r){return {name:r.company,code:r.code,region:r.region,status:r.status};});}
  function time(){return new Date().toLocaleString('zh-CN',{hour12:false});}
  function log(action,company,detail,mode){state.logs.unshift({id:Date.now()+'-'+state.logs.length,time:time(),operator:operator,role:state.role,company:company||'全平台',action:action,detail:detail||'',mode:mode||(state.delegate?'企业代操作':'平台操作'),reason:state.delegate?state.reason:''});renderAudit();}
  window.opsRecord=function(action,company,before,after){log(action,company,String(before||'')+(after?' → '+after:''));renderWorkbench();};
  function tasks(){const list=[];
    regData.filter(inScope).forEach(function(r){const done=['已开通','已退回'].includes(r.status);list.push({key:'registration:'+r.id,id:r.id,company:r.company,type:'registration',label:'企业入驻',title:done?'入驻申请已处理':r.status==='待初审'?'企业入驻初审':r.status==='待主体核验'?'企业主体核验':'入驻资料补正跟进',status:r.status,date:r.date,done:done});});
    orderData.filter(inScope).filter(function(o){return ['待确认','服务中','已完成','已取消'].includes(o.status);}).forEach(function(o){list.push({key:'order:'+o.id,id:o.id,company:o.company,type:'order',label:'订单跟进',title:o.product,status:o.status,date:o.date,done:['已完成','已取消'].includes(o.status)});});
    dlvData.filter(inScope).forEach(function(d){list.push({key:'delivery:'+d.id,id:d.id,company:d.company,type:'delivery',label:'订单交付',title:d.product,status:d.status,date:'交付期限 '+d.due,done:d.status==='已交付'});});
    invData.filter(inScope).forEach(function(i){list.push({key:'invoice:'+i.id,id:i.id,company:i.company,type:'invoice',label:'发票处理',title:i.type+' · ¥'+i.amount.toLocaleString(),status:i.status,date:i.date,done:i.status==='已上传'});});
    return list;
  }
  function renderContext(){const el=document.getElementById('ops-context');const active=state.company||state.delegate;el.hidden=!active;el.classList.toggle('is-delegate',state.delegate);
    el.innerHTML='<span class="ops-pill '+(state.delegate?'amber':'')+'">'+(state.delegate?'企业代操作':'企业服务范围')+'</span><strong>'+esc(state.company)+'</strong><span>操作人：'+operator+' · '+esc(state.role)+'</span>'+(state.delegate?'<span>事由：'+esc(state.reason)+'</span>':'')+'<div class="ops-context-right"><span>'+(state.delegate?'操作将标记为代操作并留痕':'入驻、订单、交付与发票按当前企业筛选')+'</span><button class="btn btn-ghost btn-xs" type="button" data-ops-action="'+(state.delegate?'end-delegate':'all-companies')+'">'+(state.delegate?'退出代操作':'返回全平台')+'</button></div>';
    document.getElementById('ops-company-header').textContent=state.company||'全部企业';
    document.getElementById('ops-company-header').title=state.company||'选择与切换企业';
    document.getElementById('ops-role-current').textContent=state.role;
    document.getElementById('ops-sidebar-role').textContent=state.role;
  }
  function renderWorkbench(){const all=tasks(),todo=all.filter(t=>!t.done),done=all.filter(t=>t.done);
    const regs=regData.filter(inScope),orders=orderData.filter(inScope),deliveries=dlvData.filter(inScope),invoices=invData.filter(inScope);
    document.getElementById('ops-stats').innerHTML=[['待办事项',todo.length,'待处理业务汇总','list-todo','todo'],['服务中订单',orders.filter(o=>o.status==='服务中').length,'当前企业范围','clipboard-list','orders'],['交付处理中',deliveries.filter(d=>d.status!=='已交付').length,'含待交付、交付中及逾期','package','deliveries'],['待处理发票',invoices.filter(i=>i.status!=='已上传').length,'待开票或待上传','receipt','invoices']].map(function(a){return '<button type="button" class="ops-stat" data-ops-stat="'+a[4]+'"><div><span class="ops-stat-label">'+a[0]+'</span><b>'+a[1]+'</b><small>'+a[2]+'</small></div><span class="ops-stat-icon"><i data-lucide="'+a[3]+'"></i></span></button>';}).join('');
    document.getElementById('ops-todo-count').textContent=todo.length;document.getElementById('ops-done-count').textContent=done.length;
    document.querySelectorAll('[data-ops-tab]').forEach(b=>{const active=b.dataset.opsTab===state.tab;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));});
    document.getElementById('ops-task-type').value=state.type;
    const shown=(state.tab==='todo'?todo:done).filter(t=>state.type==='all'||t.type===state.type);
    document.getElementById('ops-task-total').textContent='共 '+shown.length+' 项 · '+(state.company?'当前企业':'全平台');
    document.getElementById('ops-task-list').innerHTML=shown.length?shown.map(function(t){return '<article class="ops-task"><span class="ops-task-mark">'+t.label.slice(0,2)+'</span><div class="ops-task-main"><b>'+esc(t.title)+'</b><p>'+esc(t.company)+'</p><div class="ops-task-meta">'+esc(t.id)+' · '+esc(t.date)+'</div></div><span class="ops-pill '+(t.done?'green':t.status==='已逾期'?'amber':'')+'">'+esc(t.status)+'</span><button type="button" class="btn '+(t.done?'btn-ghost':'btn-soft')+' btn-xs" data-ops-task="'+esc(t.key)+'">'+(t.done?'查看详情':'去处理')+'</button></article>';}).join(''):'<div class="ops-empty">当前范围暂无'+(state.tab==='todo'?'待办':'已办')+'事项</div>';
    const bars=[['入驻已开通',regs.filter(r=>r.status==='已开通').length,regs.length],['订单已完成',orders.filter(o=>o.status==='已完成').length,orders.length],['成果已交付',deliveries.filter(d=>d.status==='已交付').length,deliveries.length],['发票已上传',invoices.filter(i=>i.status==='已上传').length,invoices.length]];
    document.getElementById('ops-overview-bars').innerHTML=bars.map(function(a){return '<div class="ops-bar-item"><p>'+a[0]+'</p><strong>'+a[1]+' <small style="font-size:11px;color:#a0adbd">/ '+a[2]+'</small></strong><div class="ops-bar"><i style="width:'+(a[2]?Math.round(a[1]/a[2]*100):0)+'%"></i></div></div>';}).join('');
    document.getElementById('ops-scope-label').textContent=state.company||'全平台业务概览';
    document.getElementById('ops-role-list').innerHTML=roles.map(function(r){return '<button type="button" class="ops-role '+(state.role===r[0]?'active':'')+'" data-ops-role="'+r[0]+'" aria-pressed="'+(state.role===r[0])+'"><b>'+r[0]+'</b><small>'+r[1]+'</small></button>';}).join('');
    const selected=companies().find(c=>c.name===state.company);
    document.getElementById('ops-company-card').innerHTML='<b>'+esc(state.company||'当前为全平台视角')+'</b><p>'+(selected?esc(selected.code)+'<br>'+esc(selected.region)+' · '+esc(selected.status):'选择企业后，聚焦该企业的业务与操作记录。')+'</p><div class="ops-company-buttons"><button type="button" class="btn btn-soft btn-sm" data-ops-action="company">'+(selected?'切换企业':'选择企业')+'</button>'+(selected?'<button type="button" class="btn btn-ghost btn-sm" data-ops-action="all-companies">全部企业</button>':'')+'</div>';
    document.getElementById('ops-delegate-state').innerHTML='<span class="ops-pill '+(state.delegate?'amber':'gray')+'">'+(state.delegate?'代操作进行中':'平台操作')+'</span><p class="ops-help">'+(state.delegate?'当前正在代 '+esc(state.company)+' 处理业务。':'需要代企业办理时，请先选择企业并填写代操作事由。')+'</p><button type="button" class="btn '+(state.delegate?'btn-ghost':'btn-primary')+' btn-sm" style="margin-top:12px" data-ops-action="'+(state.delegate?'end-delegate':'delegate')+'">'+(state.delegate?'退出代操作':'进入企业代操作')+'</button>';
    renderContext();renderAudit();lucide.createIcons();
  }
  window.renderOpsWorkbench=renderWorkbench;
  function renderAudit(){const host=document.getElementById('ops-audit-body');if(!host)return;const list=state.logs.filter(l=>(!state.company||l.company===state.company||l.company==='全平台')&&(state.audit==='all'||l.mode===state.audit));
    host.innerHTML=list.length?list.map(function(l){return '<tr><td>'+esc(l.time)+'</td><td><strong>'+esc(l.operator)+'</strong><small>'+esc(l.role)+'</small></td><td>'+esc(l.company)+'</td><td><span class="ops-pill '+(l.mode==='企业代操作'?'amber':'gray')+'">'+esc(l.mode)+'</span></td><td><strong>'+esc(l.action)+'</strong><small>'+esc(l.detail)+(l.reason?'<br>代操作事由：'+esc(l.reason):'')+'</small></td></tr>';}).join(''):'<tr><td colspan="5"><div class="ops-empty">暂无符合条件的操作记录</div></td></tr>';
    document.getElementById('ops-audit-count').textContent=list.length+' 条';
  }
  function refreshBusiness(){renderRegTabs();renderReg();renderOrderTabs();renderOrders();renderDlvTabs();renderDlv();renderInvTabs();renderInv();}
  function setCompany(name){if(name&&!companies().some(c=>c.name===name))return;
    if(name===state.company){document.getElementById('ops-company-dialog').close();return;}
    if(state.delegate)endDelegate();const previous=state.company;state.company=name;
    regStatus=orderStatus=dlvStatus=invStatus='全部';regQuery=orderQuery=dlvQuery=invQuery='';
    ['reg-search','order-search','dlv-search','inv-search'].forEach(id=>document.getElementById(id).value='');
    log('切换企业范围',name, (previous||'全部企业')+' → '+(name||'全部企业'),'平台操作');
    refreshBusiness();renderWorkbench();document.getElementById('ops-company-dialog').close();
  }
  function renderCompanyOptions(query){const q=(query||'').trim().toLowerCase();const list=companies().filter(c=>(c.name+c.code+c.region).toLowerCase().includes(q));
    document.getElementById('ops-company-options').innerHTML=(!q?'<button type="button" class="ops-company-option '+(!state.company?'active':'')+'" data-ops-company=""><b>全部企业</b><small>查看平台全部企业业务</small></button>':'')+list.map(c=>'<button type="button" class="ops-company-option '+(state.company===c.name?'active':'')+'" data-ops-company="'+esc(c.name)+'"><b>'+esc(c.name)+'</b><small>'+esc(c.code)+' · '+esc(c.region)+'</small></button>').join('')+(list.length?'':'<div class="ops-empty">没有找到匹配企业</div>');
  }
  function openCompany(){document.getElementById('ops-company-search').value='';renderCompanyOptions('');document.getElementById('ops-company-dialog').showModal();}
  function openDelegate(){if(!state.company){openCompany();showToast('请先选择需要代办的企业');return;}
    document.getElementById('ops-delegate-facts').innerHTML='<dt>操作人</dt><dd>'+operator+' · '+esc(state.role)+'</dd><dt>代办企业</dt><dd>'+esc(state.company)+'</dd>';
    document.getElementById('ops-delegate-reason').value='';document.getElementById('ops-delegate-confirm').checked=false;document.getElementById('ops-delegate-error').textContent='';document.getElementById('ops-delegate-dialog').showModal();
  }
  function endDelegate(){if(!state.delegate)return;log('退出企业代操作',state.company,'代操作已结束');state.delegate=false;state.reason='';renderWorkbench();}
  window.opsEndDelegate=endDelegate;
  // 平台配置操作单独留痕，避免被误记为代企业处理。
  function trackConfiguration(names,source,label){names.forEach(function(name){const original=window[name];if(typeof original!=='function')return;window[name]=function(){const before=JSON.stringify(source());const result=original.apply(this,arguments);const after=JSON.stringify(source());if(before!==after){const old=JSON.parse(before),current=source();const changed=current.filter(r=>JSON.stringify(r)!==JSON.stringify(old.find(x=>x.id===r.id))).concat(old.filter(r=>!current.some(x=>x.id===r.id)));log(label,'全平台',changed.map(r=>r.name).filter(Boolean).join('、')||'配置内容已更新','平台操作');}return result;};});}
  trackConfiguration(['saveProduct','toggleProduct','deleteProduct'],()=>prodData,'更新服务商品配置');
  trackConfiguration(['saveDim','toggleDim','saveField','deleteField'],()=>dimData,'更新企业档案字段配置');
  trackConfiguration(['saveTemplate','toggleTemplate','deleteTemplate','saveChapter','deleteChapter','addChapter'],()=>tplData,'更新申报书模板配置');
  function openTask(key){const t=tasks().find(t=>t.key===key);if(!t)return;
    const targets={registration:'page-registration',order:'page-orders',delivery:'page-deliverables',invoice:'page-invoices'};navTo(targets[t.type]);
    if(t.type==='registration')openRegDetail(t.id);if(t.type==='order')openOrderDetail(t.id);if(t.type==='delivery')openDeliverModal(t.id);if(t.type==='invoice'){if(t.done)openInvoiceDetail(t.id);else openInvoiceUpload(t.id);}
    log(t.done?'查看已办事项':'进入待办处理',t.company,t.label+' · '+t.id);
  }
  document.addEventListener('click',function(event){
    const close=event.target.closest('[data-ops-close]');if(close){document.getElementById(close.dataset.opsClose).close();return;}
    const pick=event.target.closest('[data-ops-company]');if(pick){setCompany(pick.dataset.opsCompany);return;}
    const role=event.target.closest('[data-ops-role]');if(role){const next=roles.find(r=>r[0]===role.dataset.opsRole);if(!next||next[0]===state.role)return;if(state.delegate)endDelegate();const before=state.role;state.role=next[0];state.type=next[2];state.tab='todo';log('切换工作身份',state.company,before+' → '+state.role,'平台操作');renderWorkbench();return;}
    const tab=event.target.closest('[data-ops-tab]');if(tab){state.tab=tab.dataset.opsTab;renderWorkbench();return;}
    const task=event.target.closest('[data-ops-task]');if(task){openTask(task.dataset.opsTask);return;}
    const stat=event.target.closest('[data-ops-stat]');if(stat){state.tab='todo';state.type={todo:'all',orders:'order',deliveries:'delivery',invoices:'invoice'}[stat.dataset.opsStat];renderWorkbench();document.getElementById('ops-task-panel').scrollIntoView({behavior:'smooth',block:'nearest'});return;}
    const action=event.target.closest('[data-ops-action]');if(action){const a=action.dataset.opsAction;if(a==='company')openCompany();if(a==='all-companies')setCompany('');if(a==='delegate')openDelegate();if(a==='end-delegate')endDelegate();if(a==='refresh')renderWorkbench();}
  });
  document.getElementById('ops-company-search').addEventListener('input',e=>renderCompanyOptions(e.target.value));
  document.getElementById('ops-task-type').addEventListener('change',e=>{state.type=e.target.value;renderWorkbench();});
  document.getElementById('ops-audit-filter').addEventListener('change',e=>{state.audit=e.target.value;renderAudit();});
  document.getElementById('ops-delegate-form').addEventListener('submit',function(event){event.preventDefault();const reason=document.getElementById('ops-delegate-reason').value.trim();if(!reason){document.getElementById('ops-delegate-error').textContent='请填写本次代操作事由';return;}if(!document.getElementById('ops-delegate-confirm').checked){document.getElementById('ops-delegate-error').textContent='请确认本次操作将以代操作身份留痕';return;}state.delegate=true;state.reason=reason;log('进入企业代操作',state.company,'代操作会话开始');document.getElementById('ops-delegate-dialog').close();renderWorkbench();});
  log('进入运营工作台','全平台','工作台已打开','平台操作');renderWorkbench();navTo('page-workbench');
})();
