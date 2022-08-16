console.log("result",function(e){if(e.length<=1)return e;const t=e.sort(((e,t)=>e[0]-t[0]));let n=0;const l=[];for(;n<t.length;){if(n===t.length-1){l.push(t[n]);break}if(t[n][1]<t[n+1][0]){l.push(t[n]),n+=1;continue}let e=t[n][1]<t[n+1][1]?t[n+1][1]:t[n][1];t[n][1]=e,t.splice(n+1,1),console.table(t)}return l}([[1,3],[2,6],[8,10],[15,18]]));
//# sourceMappingURL=index.d667df15.js.map
