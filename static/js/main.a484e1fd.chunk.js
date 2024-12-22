(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),i=c(3),s=c(1),a=c(0),l=Object(s.createContext)(),r=function(e){var t=e.children,c=Object(s.useState)("light"),n=Object(i.a)(c,2),r=n[0],o=n[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://ashishtiwari89.github.io/work",j="AT",b={name:"Ashish Tiwari",role:"Full Stack Developer",description:"I am a Full-Stack Software Engineer with 7+ years of experience delivering scalable, high-performance applications. Proficient in Java, React, Spring Boot, and Node.js, I specialize in building robust APIs and microservices, intuitive user interfaces, and resilient backend systems. Skilled in MySQL, PostgreSQL, MongoDB, Cassandra, Docker, and Kubernetes, I excel in CI/CD workflows, creating solutions that drive business success.",resume:"https://example.com",social:{linkedin:"https://linkedin.com",github:"https://github.com"}},h=[{name:"E-Commerce Website",description:"E-commerce platform using React, Node.js, MongoDB for flexible data handling, WebSockets for real-time order tracking, and Apache Kafka for event-driven messaging.",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"E-Learning Website",description:"Java, SpringBoot and React-based e-learning platform with course management, quizzes, and progress tracking, leveraging MySQL for database and RabbitMQ for notifications.",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Collaborative Workspace",description:"Collaborative workspace with task management, real-time chat, and scheduling, using Spring Boot, React, PostgreSQL for data storage, and Apache Kafka for event streaming.",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"}],d=["HTML","CSS","JavaScript","TypeScript","React","Redux","SASS","Material UI","Git","CI/CD","Jest","Enzyme"],u="ashishtiwari.b@gmail.com",m=c(17),O=c.n(m),p=c(16),f=c.n(p),x=c(19),g=c.n(x),k=c(18),v=c.n(k),N=(c(28),c(11)),_=c.n(N),S=c(15),w=c.n(S),C=(c(29),function(){var e=b.name,t=b.role,c=b.description,n=b.resume,i=b.social;return Object(a.jsxs)("section",{id:"about",className:"section about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[n&&Object(a.jsx)("a",{href:n,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(_.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(w.a,{})})]})]})]})}),y=function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(s.useState)(!1),o=Object(i.a)(r,2),j=o[0],m=o[1],p=function(){return m(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[b.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#about",onClick:p,className:"link link--nav",children:"About"})}):null,h.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:p,className:"link link--nav",children:"Projects"})}):null,d.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:p,className:"link link--nav",children:"Skills"})}):null,u?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:p,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(a.jsx)(f.a,{}):Object(a.jsx)(O.a,{})}),Object(a.jsx)("button",{type:"button",onClick:p,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(v.a,{}):Object(a.jsx)(g.a,{})})]})},A=(c(33),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link logotitle",children:t}):t}),Object(a.jsx)(y,{})]})}),E=c(7),P=c.n(E),R=c(20),I=c.n(R),T=(c(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},P()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(_.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(I.a,{})})]})}),L=(c(36),function(){return h.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:h.map((function(e){return Object(a.jsx)(T,{project:e},P()())}))})]}):null}),M=(c(37),function(){return d.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:d.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},P()())}))})]}):null}),B=c(21),D=c.n(B),J=(c(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top","aria-label":"top",children:Object(a.jsx)(D.a,{fontSize:"large"})})}):null}),z=(c(39),function(){return u?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(u),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Q=(c(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rjshkhr/cleanfolio",className:"link footer__link",children:"Created By Ashish Tiwari"})})}),W=(c(41),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(A,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(C,{}),Object(a.jsx)(L,{}),Object(a.jsx)(M,{}),Object(a.jsx)(z,{})]}),Object(a.jsx)(J,{}),Object(a.jsx)(Q,{})]})});c(42);Object(n.render)(Object(a.jsx)(r,{children:Object(a.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a484e1fd.chunk.js.map