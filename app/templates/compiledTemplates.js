module.exports = function(Handlebars) {

var templates = {};

templates["home/index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"home-div\">\r\n	<h1>Hello Rendr!</h1>\r\n	<p>It's Great!</p>\r\n</div>";
  },"useData":true});

templates["user/index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});

return templates;

};