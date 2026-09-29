const cfg=window.AUTOMATIQ_FIREBASE_CONFIG||null;
let firebaseLive=false, auth=null, db=null;
const services=[
 {name:'Facebook Auto Post',price:5000,icon:'facebook',desc:'Schedule and publish branded Facebook content automatically.'},
 {name:'Facebook Comment Automation',price:2000,icon:'message-circle',desc:'Detect comments, answer inquiries and route high-intent leads.'},
 {name:'Messenger Automation',price:5000,icon:'messages-square',desc:'Automate conversations, qualification and handoff.'},
 {name:'Automation Combo',price:9000,icon:'layers-3',desc:'Facebook + Instagram + Messenger automation in one setup.'},
 {name:'Instagram Automation',price:6000,icon:'instagram',desc:'Automate publishing, comment replies and DM workflows.'},
 {name:'WhatsApp Automation',price:4000,icon:'phone',desc:'Build structured WhatsApp response and lead workflows.'},
 {name:'YouTube Auto Upload',price:3000,icon:'youtube',desc:'Automate video upload and publishing workflows.'},
 {name:'AI Chatbot Development',price:null,icon:'bot',desc:'Custom AI support, qualification and lead capture experiences.'},
 {name:'Business Workflow Automation',price:null,icon:'workflow',desc:'Connect repetitive business processes into reliable workflows.'},
 {name:'CRM / Lead Automation',price:null,icon:'database',desc:'Capture, route and follow up with leads across systems.'},
 {name:'Vibe Coding',price:null,icon:'code-2',desc:'Rapid custom product, website and SaaS interface development.'},
 {name:'Custom Website / Web App',price:null,icon:'globe',desc:'Premium responsive websites and custom web applications.'}
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function toast(msg){let t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),3200)}
function setupFirebase(){
 try{
  if(!cfg||!window.firebase||!cfg.apiKey||cfg.apiKey.includes('YOUR_')) return;
  if(!firebase.apps.length) firebase.initializeApp(cfg);
  auth=firebase.auth(); db=firebase.firestore(); firebaseLive=true;
 }catch(e){console.warn('Firebase initialization failed',e);}
 const el=$('[data-firebase-status]'); if(el){el.innerHTML=`<span class="dot"></span>${firebaseLive?'Firebase Connected':'System Ready'}`;el.title=firebaseLive?'Live Firebase authentication/database detected':'Firebase configuration requires setup';}
}
function nav(){
 const toggle=$('#mobileToggle'),menu=$('#mobileMenu'); if(toggle&&menu) toggle.onclick=()=>menu.classList.toggle('open');
 const path=location.pathname.split('/').pop()||'index.html'; $$('[data-nav]').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===path));
 $$('[data-login]').forEach(a=>a.onclick=()=>{location.href='login.html'});
}
function boot(){const b=$('#boot');if(!b)return;let p=0;const text=$('#bootText'),bar=$('#bootBar');const states=['Initializing Automation Engine','Mapping Service Nodes','Preparing Experience','System Ready'];let i=0;const finish=()=>{b.classList.add('hide');b.setAttribute('aria-hidden','true');if(window.__automatiqBootFallback)clearTimeout(window.__automatiqBootFallback)};const timer=setInterval(()=>{p+=10;if(bar)bar.style.width=Math.min(p,100)+'%';if(p%20===0&&text)text.textContent=states[Math.min(i++,3)];if(p>=100){clearInterval(timer);setTimeout(finish,250)}},70);setTimeout(finish,3500)}
function scrollFx(){const bar=$('#scrollBar');const update=()=>{let h=document.documentElement.scrollHeight-innerHeight; if(bar)bar.style.transform=`scaleX(${h>0?scrollY/h:0})`};addEventListener('scroll',update,{passive:true});update();
 if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&window.IntersectionObserver){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});$$('.reveal').forEach(x=>io.observe(x))}}
function heroReactor(){const reactor=$('#reactor');if(!reactor)return;let t=0;const tick=()=>{t+=.012;reactor.style.setProperty('--mx',`${Math.cos(t)*7}px`);reactor.style.setProperty('--my',`${Math.sin(t*1.3)*7}px`);requestAnimationFrame(tick)};if(!matchMedia('(prefers-reduced-motion: reduce)').matches)tick()}
function workflow(){const steps=$$('.flowstep');if(!steps.length)return;let i=0;setInterval(()=>{steps.forEach(x=>x.classList.remove('active'));steps[i%steps.length].classList.add('active');i++},1300)}
function renderServices(){const host=$('#servicesGrid');if(!host)return;host.innerHTML=services.map((s,i)=>`<article class="card reveal"><div class="iconbox"><i data-lucide="${s.icon}"></i></div><h3>${s.name}</h3><p>${s.desc}</p><div class="mini-flow"><span>Trigger</span><b>→</b><span>AI</span><b>→</b><span>Action</span></div><a class="btn secondary" style="margin-top:20px" href="pricing.html?service=${encodeURIComponent(s.name)}">Explore Service →</a></article>`).join('');icons()}
function renderPricing(){const host=$('#pricingGrid');if(!host)return;host.innerHTML=services.filter(s=>s.price!==null).map((s,i)=>`<article class="card price ${i===3?'featured':''} reveal"><div><div class="iconbox"><i data-lucide="${s.icon}"></i></div><h3>${s.name}</h3><div class="amount">৳${s.price.toLocaleString()}</div><p>${s.desc}</p><ul><li>Setup & testing</li><li>Responsive client workflow</li><li>Support handoff</li></ul></div><button class="btn ${i===3?'primary':'secondary'}" data-order="${s.name}">Request Service →</button></article>`).join('');icons();$$('[data-order]').forEach(b=>b.onclick=()=>toast(`${b.dataset.order}: request flow ready. Sign in to submit.`))}
function icons(){if(window.lucide)lucide.createIcons()}
const supportRules=[
 [/price|pricing|package|৳|cost/i,'Our public pricing is on the Pricing page. Current listed packages include Facebook Auto Post ৳5,000, Facebook Comment Automation ৳2,000, Messenger Automation ৳5,000, Automation Combo ৳9,000, Instagram Automation ৳6,000, WhatsApp Automation ৳4,000 and YouTube Auto Upload ৳3,000. Custom AI, workflow, CRM, Vibe Coding and web-app projects are quoted separately.'],
 [/facebook.*comment|comment.*facebook/i,'Facebook Comment Automation detects relevant comments, can generate replies, and can route high-intent inquiries into a lead workflow.'],
 [/messenger/i,'Messenger Automation can handle incoming conversations, qualification, reply flows and human handoff.'],
 [/instagram|dm/i,'Instagram Automation can cover publishing, comment responses and DM-oriented workflows, depending on the connected platform permissions.'],
 [/whatsapp/i,'WhatsApp Automation can handle structured inbound replies and lead-routing workflows when the required WhatsApp Business/API access is configured.'],
 [/website|web app|vibe|coding/i,'Automatiq builds custom responsive websites, dashboards and web applications with automation and Firebase-ready workflows.'],
 [/crm|lead/i,'CRM / Lead Automation captures customer information, routes leads and can connect workflows to supported CRM or spreadsheet systems.'],
 [/support|help|problem|issue|bug/i,'For technical support, describe the problem, page name and what you expected to happen. You can also open a support ticket from the client dashboard.']
];
function supportReply(q){for(const [r,a] of supportRules)if(r.test(q))return a;return 'I can help with Automatiq services, automation workflows, pricing, websites, CRM/lead flows and support. Tell me what you are trying to automate and I will guide you to the right section.'}
function chat(){const box=$('#messages'),form=$('#chatForm'),input=$('#chatInput');if(!box||!form)return;const add=(txt,who='ai')=>{let d=document.createElement('div');d.className=`bubble ${who}`;d.textContent=txt;box.appendChild(d);box.scrollTop=box.scrollHeight};$$('[data-prompt]').forEach(b=>b.onclick=()=>{input.value=b.dataset.prompt;form.requestSubmit()});form.onsubmit=e=>{e.preventDefault();let q=input.value.trim();if(!q)return;add(q,'user');input.value='';setTimeout(()=>add(supportReply(q),'ai'),550)}}
async function login(){const form=$('#loginForm');if(!form)return;form.onsubmit=async e=>{e.preventDefault();const email=$('#email').value.trim(),pass=$('#password').value;if(firebaseLive&&auth){try{await auth.signInWithEmailAndPassword(email,pass);location.href='dashboard.html'}catch(err){toast(err.message)}}else{localStorage.setItem('automatiq_user',JSON.stringify({email,name:email.split('@')[0]}));location.href='dashboard.html'}};const signup=$('#signupForm');if(signup)signup.onsubmit=async e=>{e.preventDefault();const name=$('#signupName').value.trim(),email=$('#signupEmail').value.trim(),pass=$('#signupPassword').value;if(firebaseLive&&auth){try{const c=await auth.createUserWithEmailAndPassword(email,pass);await c.user.updateProfile({displayName:name});if(db)await db.collection('users').doc(c.user.uid).set({uid:c.user.uid,name,email,createdAt:new Date().toISOString()});location.href='dashboard.html'}catch(err){toast(err.message)}}else{localStorage.setItem('automatiq_user',JSON.stringify({email,name}));location.href='dashboard.html'}}}
function dashboard(){const name=$('#dashName');if(!name)return;let u=localStorage.getItem('automatiq_user');if(firebaseLive&&auth)auth.onAuthStateChanged(x=>{if(x)name.textContent=x.displayName||x.email;else name.textContent='Workspace'});else if(u)name.textContent=JSON.parse(u).name||'Workspace';$$('[data-logout]').forEach(b=>b.onclick=async()=>{if(firebaseLive&&auth)await auth.signOut();localStorage.removeItem('automatiq_user');location.href='index.html'})}
function iconsAndForms(){icons();login();dashboard()}
function initAutomatiq(){setupFirebase();nav();boot();scrollFx();heroReactor();workflow();renderServices();renderPricing();chat();iconsAndForms()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initAutomatiq,{once:true});else initAutomatiq();
