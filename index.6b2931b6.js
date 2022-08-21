console.log(function(o){const e={5:0,10:0};let c=!0;return o.forEach((o=>{switch(o){case 5:e[5]+=1;break;case 10:if(0===e[5])return c=!1;e[5]-=1,e[10]+=1;break;case 20:if(0!==e[10]&&0!==e[5]){e[10]-=1,e[5]-=1;break}if(e[5]<3)return c=!1;e[5]-=3}console.log(e)})),c}([5,5,5,5,20,20,5,5,20,5])),console.log("hola amigo");
//# sourceMappingURL=index.6b2931b6.js.map
