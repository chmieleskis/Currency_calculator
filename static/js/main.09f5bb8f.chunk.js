(this["webpackJsonpcurrency-calculator"]=this["webpackJsonpcurrency-calculator"]||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(18),o=a.n(l),r=a(1),c=a(2),i=a(4),m=a(3),u=a(12),p=a(9),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("header",{className:"main"},s.a.createElement("div",{className:"logo"},s.a.createElement("i",{className:"fas fa-coins"}),s.a.createElement("h1",null,"Kalkulator")),s.a.createElement("div",{className:"links"},s.a.createElement(u.b,{exact:!0,to:"/"},s.a.createElement("div",{className:"navButton navCalc"},s.a.createElement("i",{className:"fas fa-calculator"}))),s.a.createElement(u.b,{exact:!0,to:"/ExpensesList"},s.a.createElement("div",{className:"navButton navList"},s.a.createElement("i",{className:"fas fa-list-alt"})))))}}]),a}(n.Component),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{onClick:this.props.onClick,className:"dropdown-button"},s.a.createElement("h3",null,this.props.name)))}}]),a}(n.Component),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"dropdown-content"},this.props.rates.map((function(t){return s.a.createElement("option",{onClick:e.props.onClick,key:t.code,value:t.code},t.currency)})))}}]),a}(n.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("input",{onChange:this.props.onChange,name:this.props.value,value:this.props.value,className:"amountInput",placeholder:"Wprowad\u017a kwot\u0119",type:"number"})}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"exchanged"},s.a.createElement("h1",{className:"exchangedText"},(this.props.mid*this.props.amount).toFixed(2)),s.a.createElement("h1",{className:"exchangedText"},"z\u0142"))}}]),a}(n.Component),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("input",{onChange:this.props.onChange,name:this.props.value,value:this.props.value,className:"nameInput",placeholder:"Wprowad\u017a nazw\u0119",type:"text"})}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("button",{onClick:this.props.onClick,className:"addBtn"},"Dodaj")}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={dropdownIsOpen:!1,dropdownIsClosed:!1,selectedRate:"",data:"",buttonName:"Wybierz walut\u0119",mid:void 0,amount:void 0,expenseName:"",currentDate:void 0,sum:0},e.handleOpenDropdown=function(){e.setState({dropdownIsOpen:!e.state.dropdownIsOpen})},e.handleCloseDropdown=function(t){var a,n;e.state.data.filter((function(e){e.code===t.target.value&&(a=e.mid,n=e.currency)})),e.setState({dropdownIsOpen:!1,buttonName:n,mid:a})},e.handleAmount=function(t){e.setState({amount:t.target.value})},e.handleName=function(t){var a=new Date,n=a.getDate()+"."+(a.getMonth()+1)+"."+a.getFullYear();console.log(n),e.setState({expenseName:t.target.value,currentDate:n})},e.handleSave=function(){if(void 0!==localStorage.getItem("data")){var t=JSON.parse(localStorage.getItem("data"));t.push({mid:e.state.mid,amount:e.state.amount,expenseName:e.state.expenseName,currentDate:e.state.currentDate}),localStorage.setItem("data",JSON.stringify(t))}else localStorage.setItem("data",JSON.stringify([{mid:e.state.mid,amount:e.state.amount,expenseName:e.state.expenseName,currentDate:e.state.currentDate}]));e.props.history.push({pathname:"/expenseslist"})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://api.nbp.pl/api/exchangerates/tables/A/",{headers:{Accept:"application/json"}}).then((function(e){if(!0===e.ok)return e.json();throw new Error("Brak sieci")})).then((function(t){console.log(t[0].rates),e.setState({data:t[0].rates})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return!1!==this.state.dropdownIsOpen||void 0!==this.state.mid&&void 0!==this.state.amount?!0!==this.state.dropdownIsOpen||void 0!==this.state.mid&&void 0!==this.state.amount?!1===this.state.dropdownIsOpen&&void 0!==this.state.mid&&void 0!==this.state.amount||!1===this.state.dropdownIsOpen&&void 0!==this.state.mid&&void 0!==this.state.amount?s.a.createElement("div",{className:"main calculator"},s.a.createElement(d,{onClick:this.handleOpenDropdown,name:this.state.buttonName}),s.a.createElement(E,{value:this.state.amount,name:this.state.amount,onChange:this.handleAmount}),s.a.createElement(f,{mid:this.state.mid,amount:this.state.amount}),s.a.createElement(b,{value:this.state.expenseName,name:this.state.expenseName,onChange:this.handleName}),s.a.createElement(O,{onClick:this.handleSave})):!0===this.state.dropdownIsOpen&&void 0!==this.state.mid&&void 0!==this.state.amount?s.a.createElement("div",{className:"main calculator"},s.a.createElement(d,{onClick:this.handleOpenDropdown,name:this.state.buttonName}),s.a.createElement(v,{onClick:this.handleCloseDropdown,rates:this.state.data}),s.a.createElement(E,{value:this.state.amount,name:this.state.amount,onChange:this.handleAmount}),s.a.createElement(f,{mid:this.state.mid,amount:this.state.amount}),s.a.createElement(b,{value:this.state.expenseName,name:this.state.expenseName,onChange:this.handleName}),s.a.createElement(O,{onClick:this.handleSave})):void 0:s.a.createElement("div",{className:"main calculator"},s.a.createElement(d,{onClick:this.handleOpenDropdown,name:this.state.buttonName}),s.a.createElement(v,{onClick:this.handleCloseDropdown,rates:this.state.data}),s.a.createElement(E,{value:this.state.amount,name:this.state.amount,onChange:this.handleAmount})):s.a.createElement("div",{className:"main calculator"},s.a.createElement(d,{onClick:this.handleOpenDropdown,name:this.state.buttonName}),s.a.createElement(E,{value:this.state.amount,name:this.state.amount,onChange:this.handleAmount}))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleCleanStorage=function(){localStorage.clear(),n.setState({dataFromLocalStorage:[]})},n.handleDeleteItem=function(){},n.state={dataFromLocalStorage:null,sum:0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;null!==localStorage.getItem("data")&&this.setState({dataFromLocalStorage:JSON.parse(localStorage.getItem("data")),finishedLoading:!0},(function(){console.log(e.state.dataFromLocalStorage)}))}},{key:"render",value:function(){var e=this;return this.state.finishedLoading?s.a.createElement("ul",{className:"main expensesList"},s.a.createElement("li",{className:"expense main-row"},s.a.createElement("p",null,"Data"),s.a.createElement("p",null,"Nazwa"),s.a.createElement("p",null,"Kwota"),s.a.createElement("span",null)),this.state.dataFromLocalStorage.map((function(t,a){return s.a.createElement("li",{key:a,className:"expense table-row"},s.a.createElement("p",null,t.currentDate),s.a.createElement("p",null,t.expenseName),s.a.createElement("p",null,(t.mid*t.amount).toFixed(2)),s.a.createElement("span",null,s.a.createElement("button",{onClick:e.handleDeleteItem,className:"removePositionBtn"},"Usu\u0144")))})),s.a.createElement("li",{className:"expense last-row"},s.a.createElement("p",null),s.a.createElement("p",null,"Suma"),s.a.createElement("p",null,this.state.sum," z\u0142"),s.a.createElement("span",null,s.a.createElement("button",{className:"removeAllBtn",onClick:this.handleCleanStorage},"Wyczy\u015b\u0107")))):s.a.createElement("ul",{className:"main expensesList"},s.a.createElement("li",{className:"expense main-row"},s.a.createElement("p",null,"Data"),s.a.createElement("p",null,"Nazwa"),s.a.createElement("p",null,"Kwota"),s.a.createElement("span",null)),s.a.createElement("li",{className:"empty-list"},s.a.createElement("p",null,"Lista jest pusta")))}}]),a}(n.Component),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement("div",{className:"container"},s.a.createElement(h,null),s.a.createElement(p.a,{exact:!0,path:"/",component:N}),s.a.createElement(p.a,{exact:!0,path:"/expenseslist",component:g}))))}}]),a}(n.Component);a(31);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(j,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.09f5bb8f.chunk.js.map