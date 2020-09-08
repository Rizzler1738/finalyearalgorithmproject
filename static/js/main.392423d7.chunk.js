(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{100:function(t,e,n){},101:function(t,e,n){},108:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(42),r=n.n(s),o=(n(49),n(50),n(9)),c=n(10),l=n(7),u=n(13),h=n(12),d=n(28),g=(n(51),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props,e=t.row,n=t.col,i=t.isFinish,s=t.isStart,r=t.onMouseDown,o=t.onMouseEnter,c=t.onMouseUp,l=t.isWall,u=i?"node-finish":s?"node-start":l?"node-wall":"";return a.a.createElement("div",{id:"node-".concat(e,"-").concat(n),className:"node ".concat(u),onMouseDown:function(){return r(e,n)},onMouseEnter:function(){return o(e,n)},onMouseUp:function(){return c()}})}}]),n}(i.Component)),m=n(27);function f(t,e,n){var i=[];e.distance=0;for(var a=function(t){var e,n=[],i=Object(m.a)(t);try{for(i.s();!(e=i.n()).done;){var a,s=e.value,r=Object(m.a)(s);try{for(r.s();!(a=r.n()).done;){var o=a.value;n.push(o)}}catch(c){r.e(c)}finally{r.f()}}}catch(c){i.e(c)}finally{i.f()}return n}(t);a.length;){a.sort((function(t,e){return t.distance-e.distance}));var s=a.shift();if(!s.isWall){if(s.distance===1/0)return i;if(s.isVisited=!0,i.push(s),s===n)return i;p(s,t)}}return i}function p(t,e){var n=[],i=t.row,a=t.col;i>0&&n.push(e[i-1][a]),i<e.length-1&&n.push(e[i+1][a]),a>0&&n.push(e[i][a-1]),a<e[0].length-1&&n.push(e[i][a+1]);for(var s=0,r=n;s<r.length;s++){var o=r[s];o.isVisited||(o.distance=t.distance+1,o.previousNode=t)}}n(52);var v=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={grid:[],FR:5,FC:25,mouseIsPressed:!1,changingStart:!1,changingFinish:!1,visualized:!1,rendering:!1,numRow:15,numCol:30,SR:5,SC:5},i.visualizeDijkstra=i.visualizeDijkstra.bind(Object(l.a)(i)),i.clearVisualizer=i.clearVisualizer.bind(Object(l.a)(i)),i.props.getFunctions(i.visualizeDijkstra,i.clearVisualizer),i}return Object(c.a)(n,[{key:"isRendering",value:function(){return this.state.rendering}},{key:"componentDidMount",value:function(){var t=this.initializeGrid(!1);console.log(t),this.setState({grid:t}),this.state.grid=t,console.log(this)}},{key:"initializeGrid",value:function(t){for(var e=[],n=0;n<this.state.numRow;n++){for(var i=[],a=0;a<this.state.numCol;a++){var s=!1,r=document.getElementById("node-".concat(n,"-").concat(a));!r||"node node-path"!==r.className&&"node node-visited"!==r.className||(r.className="node"),!t&&r&&"node node-wall"===r.className&&(s=!0),i.push(this.createNode(n,a,s))}e.push(i)}return e}},{key:"createNode",value:function(t,e,n){return{col:e,row:t,isStart:t===this.state.SR&&e===this.state.SC,isFinish:t===this.state.FR&&e===this.state.FC,distance:1/0,isVisited:!1,isWall:n,previousNode:null}}},{key:"handleMouseDown",value:function(t,e){this.state.visualized||t!==this.state.SR||e!==this.state.SC?this.state.visualized||t!==this.state.FR||e!==this.state.FC?this.state.rendering||(this.updateGridWithWall(this.state.grid,t,e),this.setState({mouseIsPressed:!0})):this.setState({changingFinish:!0}):this.setState({changingStart:!0})}},{key:"handleMouseEnter",value:function(t,e){if(!this.state.changingStart||t===this.state.FR&&e===this.state.FC)if(!this.state.changingFinish||t===this.state.SR&&e===this.state.SC)this.state.mouseIsPressed&&(this.updateGridWithWall(this.state.grid,t,e),this.setState({mouseIsPressed:!0}));else{var n=document.getElementById("node-".concat(this.state.FR,"-").concat(this.state.FC));n&&(n.className="node",n.isFinish=!1,this.state.grid[this.state.FR][this.state.FC].isFinish=!1);var i=document.getElementById("node-".concat(t,"-").concat(e));i&&(i.isFinish=!0,i.className="node node-finish",this.state.grid[t][e].isFinish=!0),this.setState({FR:t,FC:e})}else{var a=document.getElementById("node-".concat(this.state.SR,"-").concat(this.state.SC));a&&(a.className="node",a.isStart=!1,this.state.grid[this.state.SR][this.state.SC].isStart=!1);var s=document.getElementById("node-".concat(t,"-").concat(e));s&&(s.isStart=!0,s.className="node node-start",this.state.grid[t][e].isStart=!0),a&&s&&this.setState({SR:t,SC:e})}}},{key:"handleMouseUp",value:function(){this.setState({changingStart:!1,changingFinish:!1,mouseIsPressed:!1})}},{key:"updateGridWithWall",value:function(t,e,n){var i=t[e][n],a=Object(d.a)(Object(d.a)({},i),{},{isWall:!i.isWall});t[e][n]=a}},{key:"visualizeDijkstra",value:function(){var t=this;if(!this.state.rendering){this.setState({visualized:!0,rendering:!0}),this.props.setVisualizerRendering(!0),this.componentDidMount(),console.log(this);for(var e=this.state.grid,n=e[this.state.SR][this.state.SC],i=e[this.state.FR][this.state.FC],a=f(e,n,i),s=function(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e}(i),r=function(t){setTimeout((function(){var e=a[t];e.isStart||e.isFinish||(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited")}),7*t)},o=0;o<a.length;o++)r(o);for(var c=function(t){setTimeout((function(){var e=s[t];e.isStart||e.isFinish||(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-path")}),7*a.length+50*t)},l=0;l<s.length;l++)c(l);setTimeout((function(){t.setState({rendering:!1}),t.props.setVisualizerRendering(!1)}),7*a.length+50*s.length)}}},{key:"clearVisualizer",value:function(){this.state.rendering||this.setState({grid:this.initializeGrid(!0),visualized:!1})}},{key:"render",value:function(){var t=this,e=this.state.grid;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"grid"},e.map((function(e,n){return a.a.createElement("div",{key:n},e.map((function(e,n){var i=e.row,s=e.col,r=e.isFinish,o=e.isStart,c=e.isWall;return a.a.createElement(g,{key:n,row:i,col:s,isStart:o,isFinish:r,isWall:c,mouseIsPressed:t.state.mouseIsPressed,onMouseDown:function(e,n){return t.handleMouseDown(e,n)},onMouseEnter:function(e,n){return t.handleMouseEnter(e,n)},onMouseUp:function(){return t.handleMouseUp()}})})))}))))}}]),n}(i.Component),b=(n(53),n(54),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props,e=t.val,n="";return t.isChanging&&(n="-changing"),t.finished&&(n="-finished"),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"pile"+n,style:{height:"".concat(5*e,"px")}},e))}}]),n}(i.Component));var y=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={piles:[],numPiles:30,sortingAlgorithm:"selection",finished:!1,maxPile:100,idA:-1,idB:-1},i.randomizePiles=i.randomizePiles.bind(Object(l.a)(i)),i.visualizeSorting=i.visualizeSorting.bind(Object(l.a)(i)),i.props.getFunctions(i.visualizeSorting,i.randomizePiles),i}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this.initializePiles();this.setState({piles:t})}},{key:"initializePiles",value:function(){for(var t,e,n=[],i=0;i<this.state.numPiles;i++)n.push((t=5,e=this.state.maxPile-5,Math.floor(Math.random()*Math.floor(e))+t));return n}},{key:"visualizeSorting",value:function(){var t=this;if(!this.state.rendering){this.setState({rendering:!0}),this.props.setVisualizerRendering(!0);var e=this.state.piles.slice();if("selection"===this.state.sortingAlgorithm){for(var n=function(t){for(var e=[],n=0;n<t.length-1;n++){for(var i=n,a=n+1;a<t.length;a++)t[a]<t[i]&&(i=a);var s=t[i];t[i]=t[n],t[n]=s;var r={piles:t.slice(),minId:i,i:n};e.push(r)}return e}(e),i=function(e){var i=n[e],a=i.piles,s=i.minId,r=i.i;setTimeout((function(){t.setState({piles:a,idA:s,idB:r})}),150*e)},a=0;a<n.length;a++)i(a);setTimeout((function(){t.setState({rendering:!1,finished:!0}),t.props.setVisualizerRendering(!1)}),150*n.length)}}}},{key:"randomizePiles",value:function(){if(!this.state.rendering){this.setState({finished:!1,idA:-1,idB:-1});var t=this.initializePiles();this.setState({piles:t})}}},{key:"render",value:function(){var t=this,e=this.state.piles;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"piles",class:"container"},e.map((function(e,n){return a.a.createElement(b,{finished:t.state.finished,className:"pile",key:n,val:e,isChanging:n===t.state.idA||n===t.state.idB})}))))}}]),n}(i.Component);var k=n(8),S=(n(100),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={training:new Array(1e3),rendering:!1,min:-1,max:1,width:500,height:500,count:0,ptron:null,xOff:50,yOff:100,M:.4,B:.3},i.resetVisualizer=i.resetVisualizer.bind(Object(l.a)(i)),i.startVisualizer=i.startVisualizer.bind(Object(l.a)(i)),i.props.getFunctions(i.startVisualizer,i.resetVisualizer),i}return Object(c.a)(n,[{key:"f",value:function(t){return this.state.M*t+this.state.B}},{key:"map",value:function(t,e,n,i,a){return(t-e)/(n-e)*(a-i)+i}},{key:"initialize",value:function(){this.state.ptron=new F(3,.005);for(var t=0;t<this.state.training.length;t++){var e=E(this.state.min,this.state.max),n=E(this.state.min,this.state.max),i=1;n<this.f(e)&&(i=-1),this.state.training[t]={input:[e,n,1],output:i}}}},{key:"resetVisualizer",value:function(){this.state.rendering||(this.setState({count:0}),this.state.count=0)}},{key:"startVisualizer",value:function(){var t=this;this.setState({rendering:!0}),this.props.setVisualizerRendering(!0);for(var e=function(e){setTimeout((function(){t.setState({count:e}),t.state.count=e}),25*e)},n=0;n<this.state.training.length-1;n++)e(n);setTimeout((function(){t.setState({rendering:!1}),t.props.setVisualizerRendering(!1)}),25*this.state.training.length)}},{key:"render",value:function(){0===this.state.count&&this.initialize();var t=this.state.min,e=this.state.max,n=this.state.ptron,i=this.map(t,t,e,0,this.state.width),s=this.map(this.f(t),t,e,this.state.height,0),r=this.map(e,t,e,0,this.state.width),o=this.map(this.f(e),t,e,this.state.height,0),c=n.getWeights(),l=t,u=(-c[2]-c[0]*l)/c[1],h=e,d=(-c[2]-c[0]*h)/c[1];l=this.map(l,t,e,0,this.state.width),u=this.map(u,t,e,this.state.height,0),h=this.map(h,t,e,0,this.state.width),d=this.map(d,t,e,this.state.height,0),n.train(this.state.training[this.state.count].input,this.state.training[this.state.count].output);for(var g=[],m=0;m<this.state.count;m++){var f=n.feedforward(this.state.training[m].input),p=this.map(this.state.training[m].input[0],t,e,0,this.state.width),v=this.map(this.state.training[m].input[1],t,e,this.state.height,0);g.push({x:p,y:v,fill:f<0})}this.state.xOff,this.state.yOff;var b=-c[0]/c[1],y=-c[2]/c[1],S=b-this.state.M,E=y-this.state.B;return a.a.createElement(a.a.Fragment,null,a.a.createElement(k.Stage,{width:2*this.state.width,height:this.state.height,className:"stage",id:"stage"},a.a.createElement(k.Layer,null,a.a.createElement(k.Line,{points:[0,0,500,0],stroke:"black"}),a.a.createElement(k.Line,{points:[0,0,0,500],stroke:"black"}),a.a.createElement(k.Line,{points:[0,500,500,500],stroke:"black"}),a.a.createElement(k.Line,{points:[500,0,500,500],stroke:"black",strokeWidth:1}),a.a.createElement(k.Line,{points:[i+0,0+s,r+0,0+o],stroke:"red",strokeWidth:1}),a.a.createElement(k.Line,{points:[l+0,0+u,h+0,0+d],stroke:"blue",strokeWidth:this.state.count>0?1:0}),g.map((function(t,e){return a.a.createElement(k.Circle,{x:t.x+0,y:t.y+0,stroke:"black",radius:3,opacity:.7,fill:t.fill?"black":"white"})})),a.a.createElement(k.Text,{x:550,y:50,text:"Function Form: Y = M * X + B",fontFamily:"Calibri",fill:"black",fontSize:25}),a.a.createElement(k.Text,{x:550,y:80,text:"Original Function: M = ".concat(this.state.M," B = ").concat(this.state.B),fontFamily:"Calibri",fill:"black",fontSize:25}),a.a.createElement(k.Text,{x:550,y:135,text:"Approximation:\nM = ".concat(b,"\nB = ").concat(y),fontFamily:"Calibri",fill:"black",fontSize:25}),a.a.createElement(k.Text,{x:550,y:240,text:"Error:\nM: ".concat(S,"\nB:").concat(E),fontFamily:"Calibri",fill:"red",fontSize:25}))))}}]),n}(i.Component));function E(t,e){return Math.random()*(e-t)+t}var F=function(){function t(e,n){Object(o.a)(this,t),this.weights=new Array(e);for(var i=0;i<this.weights.length;i++)this.weights[i]=E(-1,1);this.c=n}return Object(c.a)(t,[{key:"train",value:function(t,e){for(var n=e-this.feedforward(t),i=0;i<this.weights.length;i++)this.weights[i]+=this.c*n*t[i]}},{key:"feedforward",value:function(t){for(var e=0,n=0;n<this.weights.length;n++)e+=t[n]*this.weights[n];return this.activate(e)}},{key:"activate",value:function(t){return t>0?1:-1}},{key:"getWeights",value:function(){return this.weights}}]),t}(),w=(n(101),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={mode:"main",rendering:!1,goFunction:function(){},resetFunction:function(){}},i.getFunctions=i.getFunctions.bind(Object(l.a)(i)),i.changeRenderingState=i.changeRenderingState.bind(Object(l.a)(i)),i}return Object(c.a)(n,[{key:"changeRenderingState",value:function(t){this.setState({rendering:t})}},{key:"getFunctions",value:function(t,e){this.state.goFunction=t,this.state.resetFunction=e}},{key:"render",value:function(){var t=this,e=null;e="pathfinding"===this.state.mode?a.a.createElement(v,{setVisualizerRendering:this.changeRenderingState,getFunctions:this.getFunctions}):"sorting"===this.state.mode?a.a.createElement(y,{setVisualizerRendering:this.changeRenderingState,getFunctions:this.getFunctions}):"perceptron"===this.state.mode?a.a.createElement(S,{setVisualizerRendering:this.changeRenderingState,getFunctions:this.getFunctions}):a.a.createElement("div",{class:"jumbotron jumbotron-fluid"},a.a.createElement("div",{class:"container"},a.a.createElement("h1",{class:"display-4 welcome"},"Hello, algorithms.",a.a.createElement("p",{class:"lead"},"This website might help you understand algorithms better by visualizing them."))));var n="";return"main"===this.state.mode&&(n=" invisible"),a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light  bg-dark"},a.a.createElement("button",{onClick:function(){t.state.rendering||t.setState({mode:"main"})},type:"button",class:"btn btn-dark navbtn",disabled:this.state.rendering},"Main"),a.a.createElement("button",{onClick:function(){t.state.rendering||t.setState({mode:"pathfinding"})},type:"button",class:"btn btn-dark navbtn",disabled:this.state.rendering},"Pathfinding"),a.a.createElement("button",{onClick:function(){t.state.rendering||t.setState({mode:"sorting"})},type:"button",class:"btn btn-dark navbtn",disabled:this.state.rendering},"Sorting"),a.a.createElement("button",{onClick:function(){t.state.rendering||t.setState({mode:"perceptron"})},type:"button",class:"btn btn-dark navbtn",disabled:this.state.rendering},"Per"),a.a.createElement("div",{class:"dropdown"+n},a.a.createElement("button",{class:"btn btn-dark dropdown-toggle navbtn",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",disabled:this.state.rendering},"Actions"),a.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},a.a.createElement("li",null,a.a.createElement("button",{type:"button",class:"btn btn-light navbtn",onClick:function(){return t.state.goFunction()}},"Go!"),a.a.createElement("button",{type:"button",class:"btn btn-light navbtn",onClick:function(){return t.state.resetFunction()}},"Reset"))))),a.a.createElement("div",null,a.a.createElement("div",null,e)))}}]),n}(i.Component)),j=(n(39),n(103),n(40),n(44));var z=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("meta",{charset:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),a.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",integrity:"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z",crossorigin:"anonymous"}),a.a.createElement("div",{className:"App"},a.a.createElement(j.a,{basename:"JasonFengGit.github.io/"},a.a.createElement(w,null))),a.a.createElement("script",{src:"https://code.jquery.com/jquery-3.5.1.slim.min.js",integrity:"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",crossorigin:"anonymous"}),a.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",integrity:"sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN",crossorigin:"anonymous"}),a.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",integrity:"sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV",crossorigin:"anonymous"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},45:function(t,e,n){t.exports=n(108)},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.392423d7.chunk.js.map