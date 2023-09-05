!function(e){"use strict";if(e.zWorkerInitialized)throw new Error("z-worker.js should be run only once");e.zWorkerInitialized=!0,addEventListener("message",(function(e){var n=e.data,a=n.type,i=n.sn,r=t[a];if(r)try{r(n)}catch(e){!function(e,t,n){var a={type:e,sn:t,error:o(n)};postMessage(a)}(a,i,e)}}));var t={importScripts:function(e){e.scripts&&e.scripts.length>0&&importScripts.apply(void 0,e.scripts);postMessage({type:"importScripts"})},newTask:a,append:r,flush:r},n={};function a(t){var a=e[t.codecClass],i=t.sn;if(n[i])throw Error("duplicated sn");n[i]={codec:new a(t.options),crcInput:"input"===t.crcType,crcOutput:"output"===t.crcType,crc:new u},postMessage({type:"newTask",sn:i})}var i=e.performance?e.performance.now.bind(e.performance):Date.now;function r(e){var t=e.sn,r=e.type,o=e.data,u=n[t];!u&&e.codecClass&&(a(e),u=n[t]);var _,s="append"===r,c=i();if(s)try{_=u.codec.append(o,(function(e){postMessage({type:"progress",sn:t,loaded:e})}))}catch(e){throw delete n[t],e}else delete n[t],_=u.codec.flush();var d=i()-c;c=i(),o&&u.crcInput&&u.crc.append(o),_&&u.crcOutput&&u.crc.append(_);var f=i()-c,l={type:r,sn:t,codecTime:d,crcTime:f},p=[];_&&(l.data=_,p.push(_.buffer)),s||!u.crcInput&&!u.crcOutput||(l.crc=u.crc.get());try{postMessage(l,p)}catch(e){postMessage(l)}}function o(e){return{message:e.message,stack:e.stack}}function u(){this.crc=-1}function _(){}u.prototype.append=function(e){for(var t=0|this.crc,n=this.table,a=0,i=0|e.length;a<i;a++)t=t>>>8^n[255&(t^e[a])];this.crc=t},u.prototype.get=function(){return~this.crc},u.prototype.table=function(){var e,t,n,a=[];for(e=0;e<256;e++){for(n=e,t=0;t<8;t++)1&n?n=n>>>1^3988292384:n>>>=1;a[e]=n}return a}(),e.NOOP=_,_.prototype.append=function(e,t){return e},_.prototype.flush=function(){}}(this),function(e){"use strict";var t=256,n=256,a=-2,i=-5,r=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];function o(){var e=this;function t(e,t){var n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.build_tree=function(n){var a,i,r,o=e.dyn_tree,u=e.stat_desc.static_tree,_=e.stat_desc.elems,s=-1;for(n.heap_len=0,n.heap_max=573,a=0;a<_;a++)0!==o[2*a]?(n.heap[++n.heap_len]=s=a,n.depth[a]=0):o[2*a+1]=0;for(;n.heap_len<2;)o[2*(r=n.heap[++n.heap_len]=s<2?++s:0)]=1,n.depth[r]=0,n.opt_len--,u&&(n.static_len-=u[2*r+1]);for(e.max_code=s,a=Math.floor(n.heap_len/2);a>=1;a--)n.pqdownheap(o,a);r=_;do{a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],n.pqdownheap(o,1),i=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=i,o[2*r]=o[2*a]+o[2*i],n.depth[r]=Math.max(n.depth[a],n.depth[i])+1,o[2*a+1]=o[2*i+1]=r,n.heap[1]=r++,n.pqdownheap(o,1)}while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],function(t){var n,a,i,r,o,u,_=e.dyn_tree,s=e.stat_desc.static_tree,c=e.stat_desc.extra_bits,d=e.stat_desc.extra_base,f=e.stat_desc.max_length,l=0;for(r=0;r<=15;r++)t.bl_count[r]=0;for(_[2*t.heap[t.heap_max]+1]=0,n=t.heap_max+1;n<573;n++)(r=_[2*_[2*(a=t.heap[n])+1]+1]+1)>f&&(r=f,l++),_[2*a+1]=r,a>e.max_code||(t.bl_count[r]++,o=0,a>=d&&(o=c[a-d]),u=_[2*a],t.opt_len+=u*(r+o),s&&(t.static_len+=u*(s[2*a+1]+o)));if(0!==l){do{for(r=f-1;0===t.bl_count[r];)r--;t.bl_count[r]--,t.bl_count[r+1]+=2,t.bl_count[f]--,l-=2}while(l>0);for(r=f;0!==r;r--)for(a=t.bl_count[r];0!==a;)(i=t.heap[--n])>e.max_code||(_[2*i+1]!=r&&(t.opt_len+=(r-_[2*i+1])*_[2*i],_[2*i+1]=r),a--)}}(n),function(e,n,a){var i,r,o,u=[],_=0;for(i=1;i<=15;i++)u[i]=_=_+a[i-1]<<1;for(r=0;r<=n;r++)0!==(o=e[2*r+1])&&(e[2*r]=t(u[o]++,o))}(o,e.max_code,n.bl_count)}}function u(e,t,n,a,i){var r=this;r.static_tree=e,r.extra_bits=t,r.extra_base=n,r.elems=a,r.max_length=i}o._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],o.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],o.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],o.d_code=function(e){return e<256?r[e]:r[256+(e>>>7)]},o.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],o.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],o.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],o.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],u.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],u.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],u.static_l_desc=new u(u.static_ltree,o.extra_lbits,257,286,15),u.static_d_desc=new u(u.static_dtree,o.extra_dbits,0,30,15),u.static_bl_desc=new u(null,o.extra_blbits,0,19,7);function _(e,t,n,a,i){var r=this;r.good_length=e,r.max_lazy=t,r.nice_length=n,r.max_chain=a,r.func=i}var s=[new _(0,0,0,0,0),new _(4,4,8,4,1),new _(4,5,16,8,1),new _(4,6,32,32,1),new _(4,4,16,16,2),new _(8,16,32,32,2),new _(8,16,128,128,2),new _(8,32,128,256,2),new _(32,128,258,1024,2),new _(32,258,258,4096,2)],c=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],d=113,f=666,l=258,p=262;function h(e,t,n,a){var i=e[2*t],r=e[2*n];return i<r||i==r&&a[t]<=a[n]}function v(){var e,r,_,v,x,g,b,w,m,y,k,M,E,z,I,A,U,D,S,T,O,q,P,j,C,W,L,N,B,F,G,H,J,K,Q,R,V,X,Y,Z,$,ee=this,te=new o,ne=new o,ae=new o;function ie(){var e;for(e=0;e<286;e++)G[2*e]=0;for(e=0;e<30;e++)H[2*e]=0;for(e=0;e<19;e++)J[2*e]=0;G[512]=1,ee.opt_len=ee.static_len=0,R=X=0}function re(e,t){var n,a,i=-1,r=e[1],o=0,u=7,_=4;for(0===r&&(u=138,_=3),e[2*(t+1)+1]=65535,n=0;n<=t;n++)a=r,r=e[2*(n+1)+1],++o<u&&a==r||(o<_?J[2*a]+=o:0!==a?(a!=i&&J[2*a]++,J[32]++):o<=10?J[34]++:J[36]++,o=0,i=a,0===r?(u=138,_=3):a==r?(u=6,_=3):(u=7,_=4))}function oe(e){ee.pending_buf[ee.pending++]=e}function ue(e){oe(255&e),oe(e>>>8&255)}function _e(e,t){var n,a=t;$>16-a?(ue(Z|=(n=e)<<$&65535),Z=n>>>16-$,$+=a-16):(Z|=e<<$&65535,$+=a)}function se(e,t){var n=2*e;_e(65535&t[n],65535&t[n+1])}function ce(e,t){var n,a,i=-1,r=e[1],o=0,u=7,_=4;for(0===r&&(u=138,_=3),n=0;n<=t;n++)if(a=r,r=e[2*(n+1)+1],!(++o<u&&a==r)){if(o<_)do{se(a,J)}while(0!=--o);else 0!==a?(a!=i&&(se(a,J),o--),se(16,J),_e(o-3,2)):o<=10?(se(17,J),_e(o-3,3)):(se(18,J),_e(o-11,7));o=0,i=a,0===r?(u=138,_=3):a==r?(u=6,_=3):(u=7,_=4)}}function de(){16==$?(ue(Z),Z=0,$=0):$>=8&&(oe(255&Z),Z>>>=8,$-=8)}function fe(e,n){var a,i,r;if(ee.pending_buf[V+2*R]=e>>>8&255,ee.pending_buf[V+2*R+1]=255&e,ee.pending_buf[K+R]=255&n,R++,0===e?G[2*n]++:(X++,e--,G[2*(o._length_code[n]+t+1)]++,H[2*o.d_code(e)]++),0==(8191&R)&&L>2){for(a=8*R,i=O-U,r=0;r<30;r++)a+=H[2*r]*(5+o.extra_dbits[r]);if(a>>>=3,X<Math.floor(R/2)&&a<Math.floor(i/2))return!0}return R==Q-1}function le(e,a){var i,r,u,_,s=0;if(0!==R)do{i=ee.pending_buf[V+2*s]<<8&65280|255&ee.pending_buf[V+2*s+1],r=255&ee.pending_buf[K+s],s++,0===i?se(r,e):(se((u=o._length_code[r])+t+1,e),0!==(_=o.extra_lbits[u])&&_e(r-=o.base_length[u],_),i--,se(u=o.d_code(i),a),0!==(_=o.extra_dbits[u])&&_e(i-=o.base_dist[u],_))}while(s<R);se(n,e),Y=e[513]}function pe(){$>8?ue(Z):$>0&&oe(255&Z),Z=0,$=0}function he(e,t,n){_e(0+(n?1:0),3),function(e,t,n){pe(),Y=8,n&&(ue(t),ue(~t)),ee.pending_buf.set(w.subarray(e,e+t),ee.pending),ee.pending+=t}(e,t,!0)}function ve(e,t,n){var a,i,r=0;L>0?(te.build_tree(ee),ne.build_tree(ee),r=function(){var e;for(re(G,te.max_code),re(H,ne.max_code),ae.build_tree(ee),e=18;e>=3&&0===J[2*o.bl_order[e]+1];e--);return ee.opt_len+=3*(e+1)+5+5+4,e}(),a=ee.opt_len+3+7>>>3,(i=ee.static_len+3+7>>>3)<=a&&(a=i)):a=i=t+5,t+4<=a&&-1!=e?he(e,t,n):i==a?(_e(2+(n?1:0),3),le(u.static_ltree,u.static_dtree)):(_e(4+(n?1:0),3),function(e,t,n){var a;for(_e(e-257,5),_e(t-1,5),_e(n-4,4),a=0;a<n;a++)_e(J[2*o.bl_order[a]+1],3);ce(G,e-1),ce(H,t-1)}(te.max_code+1,ne.max_code+1,r+1),le(G,H)),ie(),n&&pe()}function xe(t){ve(U>=0?U:-1,O-U,t),U=O,e.flush_pending()}function ge(){var t,n,a,i;do{if(0===(i=m-P-O)&&0===O&&0===P)i=x;else if(-1==i)i--;else if(O>=x+x-p){w.set(w.subarray(x,x+x),0),q-=x,O-=x,U-=x,a=t=E;do{n=65535&k[--a],k[a]=n>=x?n-x:0}while(0!=--t);a=t=x;do{n=65535&y[--a],y[a]=n>=x?n-x:0}while(0!=--t);i+=x}if(0===e.avail_in)return;t=e.read_buf(w,O+P,i),(P+=t)>=3&&(M=((M=255&w[O])<<A^255&w[O+1])&I)}while(P<p&&0!==e.avail_in)}function be(e){var t,n,a=C,i=O,r=j,o=O>x-p?O-(x-p):0,u=F,_=b,s=O+l,c=w[i+r-1],d=w[i+r];j>=B&&(a>>=2),u>P&&(u=P);do{if(w[(t=e)+r]==d&&w[t+r-1]==c&&w[t]==w[i]&&w[++t]==w[i+1]){i+=2,t++;do{}while(w[++i]==w[++t]&&w[++i]==w[++t]&&w[++i]==w[++t]&&w[++i]==w[++t]&&w[++i]==w[++t]&&w[++i]==w[++t]&&w[++i]==w[++t]&&w[++i]==w[++t]&&i<s);if(n=l-(s-i),i=s-l,n>r){if(q=e,r=n,n>=u)break;c=w[i+r-1],d=w[i+r]}}}while((e=65535&y[e&_])>o&&0!=--a);return r<=P?r:P}function we(e){return e.total_in=e.total_out=0,e.msg=null,ee.pending=0,ee.pending_out=0,r=d,v=0,te.dyn_tree=G,te.stat_desc=u.static_l_desc,ne.dyn_tree=H,ne.stat_desc=u.static_d_desc,ae.dyn_tree=J,ae.stat_desc=u.static_bl_desc,Z=0,$=0,Y=8,ie(),function(){var e;for(m=2*x,k[E-1]=0,e=0;e<E-1;e++)k[e]=0;W=s[L].max_lazy,B=s[L].good_length,F=s[L].nice_length,C=s[L].max_chain,O=0,U=0,P=0,D=j=2,T=0,M=0}(),0}ee.depth=[],ee.bl_count=[],ee.heap=[],G=[],H=[],J=[],ee.pqdownheap=function(e,t){for(var n=ee.heap,a=n[t],i=t<<1;i<=ee.heap_len&&(i<ee.heap_len&&h(e,n[i+1],n[i],ee.depth)&&i++,!h(e,a,n[i],ee.depth));)n[t]=n[i],t=i,i<<=1;n[t]=a},ee.deflateInit=function(e,t,n,i,r,o){return i||(i=8),r||(r=8),o||(o=0),e.msg=null,-1==t&&(t=6),r<1||r>9||8!=i||n<9||n>15||t<0||t>9||o<0||o>2?a:(e.dstate=ee,b=(x=1<<(g=n))-1,I=(E=1<<(z=r+7))-1,A=Math.floor((z+3-1)/3),w=new Uint8Array(2*x),y=[],k=[],Q=1<<r+6,ee.pending_buf=new Uint8Array(4*Q),_=4*Q,V=Math.floor(Q/2),K=3*Q,L=t,N=o,255&i,we(e))},ee.deflateEnd=function(){return 42!=r&&r!=d&&r!=f?a:(ee.pending_buf=null,k=null,y=null,w=null,ee.dstate=null,r==d?-3:0)},ee.deflateParams=function(e,t,n){var i=0;return-1==t&&(t=6),t<0||t>9||n<0||n>2?a:(s[L].func!=s[t].func&&0!==e.total_in&&(i=e.deflate(1)),L!=t&&(W=s[L=t].max_lazy,B=s[L].good_length,F=s[L].nice_length,C=s[L].max_chain),N=n,i)},ee.deflateSetDictionary=function(e,t,n){var i,o=n,u=0;if(!t||42!=r)return a;if(o<3)return 0;for(o>x-p&&(u=n-(o=x-p)),w.set(t.subarray(u,u+o),0),O=o,U=o,M=((M=255&w[0])<<A^255&w[1])&I,i=0;i<=o-3;i++)M=(M<<A^255&w[i+2])&I,y[i&b]=k[M],k[M]=i;return 0},ee.deflate=function(t,o){var l,h,m,z,C,B;if(o>4||o<0)return a;if(!t.next_out||!t.next_in&&0!==t.avail_in||r==f&&4!=o)return t.msg=c[4],a;if(0===t.avail_out)return t.msg=c[7],i;if(e=t,z=v,v=o,42==r&&(h=8+(g-8<<4)<<8,(m=(L-1&255)>>1)>3&&(m=3),h|=m<<6,0!==O&&(h|=32),r=d,oe((B=h+=31-h%31)>>8&255),oe(255&B)),0!==ee.pending){if(e.flush_pending(),0===e.avail_out)return v=-1,0}else if(0===e.avail_in&&o<=z&&4!=o)return e.msg=c[7],i;if(r==f&&0!==e.avail_in)return t.msg=c[7],i;if(0!==e.avail_in||0!==P||0!=o&&r!=f){switch(C=-1,s[L].func){case 0:C=function(t){var n,a=65535;for(a>_-5&&(a=_-5);;){if(P<=1){if(ge(),0===P&&0==t)return 0;if(0===P)break}if(O+=P,P=0,n=U+a,(0===O||O>=n)&&(P=O-n,O=n,xe(!1),0===e.avail_out))return 0;if(O-U>=x-p&&(xe(!1),0===e.avail_out))return 0}return xe(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(o);break;case 1:C=function(t){for(var n,a=0;;){if(P<p){if(ge(),P<p&&0==t)return 0;if(0===P)break}if(P>=3&&(M=(M<<A^255&w[O+2])&I,a=65535&k[M],y[O&b]=k[M],k[M]=O),0!==a&&(O-a&65535)<=x-p&&2!=N&&(D=be(a)),D>=3)if(n=fe(O-q,D-3),P-=D,D<=W&&P>=3){D--;do{O++,M=(M<<A^255&w[O+2])&I,a=65535&k[M],y[O&b]=k[M],k[M]=O}while(0!=--D);O++}else O+=D,D=0,M=((M=255&w[O])<<A^255&w[O+1])&I;else n=fe(0,255&w[O]),P--,O++;if(n&&(xe(!1),0===e.avail_out))return 0}return xe(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(o);break;case 2:C=function(t){for(var n,a,i=0;;){if(P<p){if(ge(),P<p&&0==t)return 0;if(0===P)break}if(P>=3&&(M=(M<<A^255&w[O+2])&I,i=65535&k[M],y[O&b]=k[M],k[M]=O),j=D,S=q,D=2,0!==i&&j<W&&(O-i&65535)<=x-p&&(2!=N&&(D=be(i)),D<=5&&(1==N||3==D&&O-q>4096)&&(D=2)),j>=3&&D<=j){a=O+P-3,n=fe(O-1-S,j-3),P-=j-1,j-=2;do{++O<=a&&(M=(M<<A^255&w[O+2])&I,i=65535&k[M],y[O&b]=k[M],k[M]=O)}while(0!=--j);if(T=0,D=2,O++,n&&(xe(!1),0===e.avail_out))return 0}else if(0!==T){if((n=fe(0,255&w[O-1]))&&xe(!1),O++,P--,0===e.avail_out)return 0}else T=1,O++,P--}return 0!==T&&(n=fe(0,255&w[O-1]),T=0),xe(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(o)}if(2!=C&&3!=C||(r=f),0==C||2==C)return 0===e.avail_out&&(v=-1),0;if(1==C){if(1==o)_e(2,3),se(n,u.static_ltree),de(),1+Y+10-$<9&&(_e(2,3),se(n,u.static_ltree),de()),Y=7;else if(he(0,0,!1),3==o)for(l=0;l<E;l++)k[l]=0;if(e.flush_pending(),0===e.avail_out)return v=-1,0}}return 4!=o?0:1}}function x(){var e=this;e.next_in_index=0,e.next_out_index=0,e.avail_in=0,e.total_in=0,e.avail_out=0,e.total_out=0}x.prototype={deflateInit:function(e,t){var n=this;return n.dstate=new v,t||(t=15),n.dstate.deflateInit(n,e,t)},deflate:function(e){var t=this;return t.dstate?t.dstate.deflate(t,e):a},deflateEnd:function(){var e=this;if(!e.dstate)return a;var t=e.dstate.deflateEnd();return e.dstate=null,t},deflateParams:function(e,t){var n=this;return n.dstate?n.dstate.deflateParams(n,e,t):a},deflateSetDictionary:function(e,t){var n=this;return n.dstate?n.dstate.deflateSetDictionary(n,e,t):a},read_buf:function(e,t,n){var a=this,i=a.avail_in;return i>n&&(i=n),0===i?0:(a.avail_in-=i,e.set(a.next_in.subarray(a.next_in_index,a.next_in_index+i),t),a.next_in_index+=i,a.total_in+=i,i)},flush_pending:function(){var e=this,t=e.dstate.pending;t>e.avail_out&&(t=e.avail_out),0!==t&&(e.next_out.set(e.dstate.pending_buf.subarray(e.dstate.pending_out,e.dstate.pending_out+t),e.next_out_index),e.next_out_index+=t,e.dstate.pending_out+=t,e.total_out+=t,e.avail_out-=t,e.dstate.pending-=t,0===e.dstate.pending&&(e.dstate.pending_out=0))}};var g=e.zip||e;g.Deflater=g._jzlib_Deflater=function(e){var t=new x,n=512,a=new Uint8Array(n),i=e?e.level:-1;void 0===i&&(i=-1),t.deflateInit(i),t.next_out=a,this.append=function(e,i){var r,o=[],u=0,_=0,s=0;if(e.length){t.next_in_index=0,t.next_in=e,t.avail_in=e.length;do{if(t.next_out_index=0,t.avail_out=n,0!=t.deflate(0))throw new Error("deflating: "+t.msg);t.next_out_index&&(t.next_out_index==n?o.push(new Uint8Array(a)):o.push(new Uint8Array(a.subarray(0,t.next_out_index)))),s+=t.next_out_index,i&&t.next_in_index>0&&t.next_in_index!=u&&(i(t.next_in_index),u=t.next_in_index)}while(t.avail_in>0||0===t.avail_out);return r=new Uint8Array(s),o.forEach((function(e){r.set(e,_),_+=e.length})),r}},this.flush=function(){var e,i,r=[],o=0,u=0;do{if(t.next_out_index=0,t.avail_out=n,1!=(e=t.deflate(4))&&0!=e)throw new Error("deflating: "+t.msg);n-t.avail_out>0&&r.push(new Uint8Array(a.subarray(0,t.next_out_index))),u+=t.next_out_index}while(t.avail_in>0||0===t.avail_out);return t.deflateEnd(),i=new Uint8Array(u),r.forEach((function(e){i.set(e,o),o+=e.length})),i}}}(this);