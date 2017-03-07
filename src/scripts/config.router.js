
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
	}).state("procurement",{
		url:"/procurement",
		templateUrl:"src/scripts/templates/procurementPage.html",
		controller:"procurementCtrl"
	}).state("addProcurement",{
		url:"/addProcurement",
		templateUrl:"src/scripts/templates/addProcurement.html",
		controller:"addProcurementCtrl"
	}).state("sale",{
		url:"/sale",
		templateUrl:"src/scripts/templates/salePage.html",
		controller:"saleCtrl"
	}).state("inventory",{
		url:"/inventory",
		templateUrl:"src/scripts/templates/inventoryPage.html",
		controller:"inventoryCtrl"
	}).state("price",{
		url:"/price",
		templateUrl:"src/scripts/templates/pricePage.html",
		controller:"priceCtrl"
	}).state("procurementDetail",{
		url:"/procurementDetail",
		templateUrl:"src/scripts/templates/procurementDetail.html",
		controller:"procurementDetailCtrl"
	}).state("saleDetail",{
		url:"/saleDetail",
		templateUrl:"src/scripts/templates/saleDetail.html",
		controller:"saleDetailCtrl"
	}).state("inventoryEdit",{
		url:"/inventoryEdit",
		templateUrl:"src/scripts/templates/inventoryEdit.html",
		controller:"inventoryEditCtrl"
	}).state("priceEdit",{
		url:"/priceEdit",
		templateUrl:"src/scripts/templates/priceEdit.html",
		controller:"priceEditCtrl"
	}).state("addSale",{
		url:"/addSale",
		templateUrl:"src/scripts/templates/addSale.html",
		controller:"addSaleCtrl"
	}).state("delProcurement",{
		url:"/delProcurement",
		templateUrl:"src/scripts/templates/delProcurement.html",
		controller:"delProcurementCtrl"
	}).state("delSale",{
		url:"/delSale",
		templateUrl:"src/scripts/templates/delSale.html",
		controller:"delSaleCtrl"
	});
 	$urlRouterProvider.otherwise("/home");
});
