(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/cardBackground.ec5f65b3.jpg"},function(e,t,a){e.exports=a(17)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c);a(13),a(14);var s=e=>{let{name:t,id:a,email:n,backgroundImage:c}=e;return r.a.createElement("div",{className:"Card",style:{backgroundImage:"url(".concat(c,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robot iamge"})),r.a.createElement("h2",null,t),r.a.createElement("p",null,n))},l=(a(15),a(3)),i=a.n(l);var m=e=>{let{robots:t}=e;const a=t.map((e,a)=>r.a.createElement(s,{id:t[a].id,email:t[a].email,name:t[a].name,backgroundImage:i.a}));return r.a.createElement("div",null,a)};a(16);var h=e=>{let{searchfield:t,searchChange:a}=e;return r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"search",placeholder:"search Robots",onChange:a}))};var u=e=>r.a.createElement("div",{style:{overflowY:"scroll",height:"500px"}},e.children);class d extends n.Component{constructor(){super(),this.OnSearchEvent=e=>{this.setState({searchfield:e.target.value})},this.state={robots:[],searchfield:""}}componentDidMount(){fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json()).then(e=>this.setState({robots:e})),this.setState()}render(){const e=this.state.robots.filter(e=>e.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase()));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(h,{searchChange:this.OnSearchEvent}),r.a.createElement(u,null,r.a.createElement(m,{robots:e})))}}var p=d;var g=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:c,getTTFB:o}=t;a(e),n(e),r(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null))),g()}],[[4,1,2]]]);
//# sourceMappingURL=main.000349ba.chunk.js.map