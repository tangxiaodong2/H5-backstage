
app.config(function ($stateProvider,$urlRouterProvider) {
// 使用 $stateProvider.state() 配置路由。
// 第一个参数为路由状态的名字。
// 第二个参数为与此状态相关的配置，为一个 object 类型。在此示例中用 templateUrl 指定了要使用的模板。
	$stateProvider.state("home", {
		url:"/home",
		templateUrl: "src/scripts/templates/home.html",
		controller:"homeCtrl"
	}).state("login",{
		url:"/login",
		templateUrl: "src/scripts/templates/login.html",
		controller:"loginCtrl"
	}).state("changePwd",{
		url:"/changePwd",
		templateUrl:"src/scripts/templates/changePwd.html",
		controller:"changePwdCtrl"
	});
 	$urlRouterProvider.otherwise("/home")
});
