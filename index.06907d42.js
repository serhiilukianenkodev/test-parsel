console.log(function(e){const o={5:0,10:0};let c=!0;return e.forEach((e=>{switch(e){case 5:o[5]+=1;break;case 10:if(0===o[5])return c=!1;o[5]-=1,o[10]+=1;break;case 20:if(0!==o[10]&&0!==o[5]){o[10]-=1,o[5]-=1;break}if(o[5]<3)return c=!1;o[5]-=3}console.log(o)})),c}([5,5,5,5,20,20,5,5,20,5])),console.log("hola");
//# sourceMappingURL=index.06907d42.js.map
