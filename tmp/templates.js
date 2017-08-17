angular.module('templates-dist', ['app/home/home.tpl.html']);

angular.module("app/home/home.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("app/home/home.tpl.html",
    "<div class=\"jumbotron text-center\">\n" +
    "    <h1>The Home Page</h1>\n" +
    "    <p>This page demonstrates <span class=\"text-danger\">nested</span> views.</p>\n" +
    "\n" +
    "    <a ui-sref=\".list\" class=\"btn btn-primary\">List</a>\n" +
    "    <a ui-sref=\".paragraph\" class=\"btn btn-danger\">Paragraph</a>\n" +
    "</div>\n" +
    "\n" +
    "<div ui-view></div>");
}]);
