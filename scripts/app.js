//创建app应用模块'
//依赖控制器模块,在依赖中写上控制器模块的名称Controller
var yike = angular.module("yike",["Controller","ngRoute"]);
//run方法在模块创建好之后直接执行
yike.run(["$rootScope",function($rootScope){
	// alert(123);
	// 给头部的a标签绑定单击事件,点击可以实现侧边导航的显示或隐藏
	// //给collapse类定义值,通过这个值决定collapse这个值是否有效
	$rootScope.collapsed=false;
	$rootScope.toggle = function(){
		// alert("toggle");
		$rootScope.collapsed=!$rootScope.collapsed;
		//显示或隐藏导航栏标题内容
		//获取导航栏中所有的dd
		var dds = document.querySelectorAll("dd");
		//console.log(dds);
		//遍历每一个dd,给每一个dd修改样式,显示隐藏/显示的效果
		//显示时,translate值为0,此时collapsed值为true;
		if($rootScope.collapsed){
				for(var i=0; i<dds.length; i++) {
					dds[i].style.transitionDuration = (i + 1) * 0.15 + 's';
					dds[i].style.transitionProperty = 'all';
					dds[i].style.transitionDelay = '0.2s';
					dds[i].style.transitionTimingFunction = 'ease-out';
					dds[i].style.transform = 'translate(0)';
				}
	        }else{
	        	for(var i=0; i<dds.length; i++) {
				dds[i].style.transitionDuration = (dds.length - i + 1) * 0.05 + 's';
				dds[i].style.transitionProperty = 'all';
				dds[i].style.transitionDelay = '';
				dds[i].style.transitionTimingFunction = 'ease-out';
				dds[i].style.transform = 'translate(-100%)';
			    }
	        }
			
		}	
}]); 
//修改路由锚点错误bug
yike.config(["$locationProvider",function($locationProvider){
	 $locationProvider.hashPrefix("");
}])

//配置路由
yike.config(["$routeProvider",function($routeProvider){
   $routeProvider.when("/",{
         redirectTo:"/index" //跳转到/index处理
   }).when("/index",{
         templateUrl:"./views/list.html",
         controller:"indexCtrl"
   }).when("/older",{
         templateUrl:"./views/older.html",
         controller:"olderCtrl"
   }).when("/author",{
         templateUrl:"./views/author.html",
         controller:"authorCtrl"
   })
}])