(function(t){const o={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}};return fetch("http://localhost:3000/posts/",o).then((t=>t.json()))})({title:"test 22",author:"Serhii dev"}).then(console.log).catch(console.log);
//# sourceMappingURL=index.6f9d4577.js.map
