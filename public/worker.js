(()=>{const e=e=>e[e.length-1],t=(t,n)=>t.length>0&&n.length<4&&(e(t)===e(n)||0===n.length);function n(e){for(const t of e)if(t!==e[0])return!1;return!0}function r(e,r){if(t(e,r)&&((e,t)=>!(n(e)&&0===t.length))(e,r)){[e,r]=[[...e],[...r]];do{r.push(e.pop())}while(t(e,r));return{emptiedBottle:e,filledBottle:r}}}const o=e=>4===e.length&&n(e),s=(e,t)=>{if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0};var h=class{constructor(e,t){this.key=e,this.parent=t,this.children=[]}_hasUniqueKeyInBranch(e,t){return!t||!e(this.key,t.key)&&this._hasUniqueKeyInBranch(e,t.parent)}hasUniqueKeyInBranch(e){return this._hasUniqueKeyInBranch(e,this.parent)}getBranchKeys(){const e=[];let t=this;for(;t;)e.push(t.key),t=t.parent;return e.reverse()}};function i(e,t){if(e.length!=e.length)return!1;for(let n=0;n<e.length;n++)if(!s(e[n],t[n]))return!1;return!0}var u=class{constructor(e,t){this.onFindSolution=t,this.bestMoveCount=Number.MAX_SAFE_INTEGER,this.search(new h(e,void 0))}removeLastAddedNodeFromParent(e){e.parent?.children.pop()}search(e,t=0){if(t>=this.bestMoveCount||!e.hasUniqueKeyInBranch(i))return void this.removeLastAddedNodeFromParent(e);const n=e.key;if(function(e){for(const t of e)if(!o(t)&&0!==t.length)return!1;return!0}(n))return this.onFindSolution(e.getBranchKeys()),void(this.bestMoveCount=t);n.forEach(((o,s)=>{n.forEach(((i,u)=>{if(s===u)return;const c=r(o,i);if(!c)return;const{emptiedBottle:l,filledBottle:a}=c,f=[...n];f[s]=l,f[u]=a;const d=new h(f,e);e.children.push(d),this.search(d,t+1)}))})),0===e.children.length&&this.removeLastAddedNodeFromParent(e)}};onmessage=function(e){console.log("hello from worker");const t=JSON.parse(e.data);new u(t,(e=>postMessage(JSON.stringify(e))))}})();
//# sourceMappingURL=worker.js.map
