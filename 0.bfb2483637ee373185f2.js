webpackJsonp([0,5],{1519:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=a(l),p=n(11),f=n(77),d=r(f),m=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return u(t,e),s(t,[{key:"componentWillMount",value:function(){this.props.findArtist(this.props.params.id)}},{key:"componentWillReceiveProps",value:function(e){var t=e.artist;if(t){var n=t.name,r=t.age,a=t.yearsActive,i=t.genre;this.setState({name:n,age:r,yearsActive:a,genre:i})}}},{key:"componentWillUpdate",value:function(e){e.params.id!==this.props.params.id&&this.props.findArtist(e.params.id)}},{key:"componentWillUnmount",value:function(){this.props.clearError()}},{key:"onSubmit",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.editArtist(this.props.params.id,this.state)}},{key:"render",value:function(){var e=this;return c.default.createElement("form",{onSubmit:this.onSubmit.bind(this)},c.default.createElement("div",{className:"input-field"},c.default.createElement("input",{value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},placeholder:"Name"})),c.default.createElement("div",{className:"input-field"},c.default.createElement("input",{value:this.state.age,onChange:function(t){return e.setState({age:t.target.value})},placeholder:"Age"})),c.default.createElement("div",{className:"input-field"},c.default.createElement("input",{value:this.state.yearsActive,onChange:function(t){return e.setState({yearsActive:t.target.value})},placeholder:"Years Active"})),c.default.createElement("div",{className:"input-field"},c.default.createElement("input",{value:this.state.genre,onChange:function(t){return e.setState({genre:t.target.value})},placeholder:"Genre"})),c.default.createElement("div",{className:"has-error"},this.props.errorMessage),c.default.createElement("button",{className:"btn"},"Submit"))}}]),t}(l.Component),h=function(e){return{artist:e.artists.artist,errorMessage:e.errors}};t.default=(0,p.connect)(h,d)(m)}});