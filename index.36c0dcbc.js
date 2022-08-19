console.log(function(e){const r={5:0,10:0};let c=!0;return e.forEach((e=>{switch(e){case 5:r[5]+=1;break;case 10:if(0===r[5])return c=!1;r[5]-=1,r[10]+=1;break;case 20:if(0!==r[10]&&0!==r[5]){r[10]-=1,r[5]-=1;break}if(r[5]<3)return c=!1;r[5]-=3}console.log(r)})),c}([5,5,5,5,20,20,5,5,20,5]));
//# sourceMappingURL=index.36c0dcbc.js.map
