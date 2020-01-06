(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("p",[t._v("First, add the NuGet package to your project:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dotnet add package RestSharp\n")])])]),e("h2",{attrs:{id:"basic-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[t._v("#")]),t._v(" Basic Usage")]),t._v(" "),e("p",[t._v("If you only have a small number of one-off requests to make to an API, you can use RestSharp like so:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" RestSharp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" RestSharp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authenticators"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" client "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestClient")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.twitter.com/1.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nclient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authenticator "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpBasicAuthenticator")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestRequest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statuses/home_timeline.json"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DataFormat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" response "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("code",[t._v("IRestResponse")]),t._v(" contains all of the information returned from the remote server.\nYou have access to the headers, content, HTTP status and more.")]),t._v(" "),e("p",[t._v("It is recommended that you use the generic overloads like "),e("code",[t._v("Get<T>")]),t._v(" to automatically deserialize the response into .NET classes.")]),t._v(" "),e("h2",{attrs:{id:"note-about-error-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#note-about-error-handling"}},[t._v("#")]),t._v(" Note about error handling")]),t._v(" "),e("p",[t._v("Normally, RestSharp doesn't throw an exception if the request fails.")]),t._v(" "),e("p",[t._v("However, it is possible to configure RestSharp to throw in different situations, when it normally doesn't throw\nin favour of giving you the error as a property.")]),t._v(" "),e("p",[t._v("[TODO] - add exception handling")]),t._v(" "),e("p",[t._v("If there is a network transport error (network is down, failed DNS lookup, etc), "),e("code",[t._v("RestResponse.ResponseStatus")]),t._v(" will be set to "),e("code",[t._v("ResponseStatus.Error")]),t._v(", otherwise it will be "),e("code",[t._v("ResponseStatus.Completed")]),t._v(".")]),t._v(" "),e("p",[t._v("If an API returns a 404, "),e("code",[t._v("ResponseStatus")]),t._v(" will still be "),e("code",[t._v("Completed")]),t._v(". If you need access to the HTTP status code returned you will find it at "),e("code",[t._v("RestResponse.StatusCode")]),t._v(".\nThe "),e("code",[t._v("Status")]),t._v(" property is an indicator of completion independent of the API error handling.")])])}),[],!1,null,null,null);s.default=n.exports}}]);