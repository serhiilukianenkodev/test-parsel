console.log("result",function(e){if(e.length<=1)return e;for(var n=e.sort((function(e,n){return e[0]-n[0]})),r=0,t=[];r<n.length;){if(r===n.length-1){t.push(n[r]);break}if(n[r][1]<n[r+1][0])t.push(n[r]),r+=1;else{var l=n[r][1]<n[r+1][1]?n[r+1][1]:n[r][1];n[r][1]=l,n.splice(r+1,1),console.table(n)}}return t}([[1,3],[2,6],[8,10],[15,18]]));
//# sourceMappingURL=index.6bbb09e6.js.map
