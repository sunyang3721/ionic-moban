angular.module('kuwuya', ['ionic'])
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.platform.ios.tabs.style('standard'); 
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-back');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-ios-arrow-back');  

  $ionicConfigProvider.platform.ios.views.transition('ios'); 
  $ionicConfigProvider.platform.android.views.transition('android');
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('eventmenu.css', {
      url: "/css",
      views: {
        'menuContent' :{
          templateUrl: "./css.html"
        }
      }
    })
    .state('eventmenu.ionicons', {
      url: "/ionicons",
      views: {
        'menuContent' :{
          templateUrl: "./ionicons.html"
          //controller: "CheckinCtrl"
        }
      }
    })
    .state('eventmenu.case', {
      url: "/case",
      views: {
        'menuContent' :{
          templateUrl: "./case.html"
        }
      }
    })
    .state('eventmenu.js',{
      url:"/js",
      views:{
        'menuContent' :{
          templateUrl: "./js.html"
        }
      }
    })
    .state('eventmenu.about',{
      url:"/about",
      views:{
        'menuContent' :{
          templateUrl: "./about.html"
        }
      }
    })
    .state('eventmenu.moeny',{
      url:"/moeny",
      views:{
        'menuContent' :{
          templateUrl: "./moeny.html"
        }
      }
    })
    .state('eventmenu.css_header',{   //css 文件夹
      url:"/css/header",
      views:{
        'menuContent' :{
          templateUrl: "./css/header.html"
        }
      }
    })
    .state('eventmenu.css_content',{   //css 文件夹
      url:"/css/content",
      views:{
        'menuContent' :{
          templateUrl: "./css/content.html"
        }
      }
    })
    .state('eventmenu.css_footer',{   //css 文件夹
      url:"/css/footer",
      views:{
        'menuContent' :{
          templateUrl: "./css/footer.html"
        }
      }
    })
    .state('eventmenu.css_buttons',{   //css 文件夹
      url:"/css/buttons",
      views:{
        'menuContent' :{
          templateUrl: "./css/buttons.html"
        }
      }
    })
    .state('eventmenu.css_list',{   //css 文件夹
      url:"/css/list",
      views:{
        'menuContent' :{
          templateUrl: "./css/list.html"
        }
      }
    })
    .state('eventmenu.css_cards',{   //css 文件夹
      url:"/css/cards",
      views:{
        'menuContent' :{
          templateUrl: "./css/cards.html"
        }
      }
    })
    .state('eventmenu.css_forms',{   //css 文件夹
      url:"/css/forms",
      views:{
        'menuContent' :{
          templateUrl: "./css/forms.html"
        }
      }
    })
    .state('eventmenu.css_tabs',{   //css 文件夹
      url:"/css/tabs",
      views:{
        'menuContent' :{
          templateUrl: "./css/tabs.html"
        }
      }
    })
    .state('eventmenu.css_grid',{   //css 文件夹
      url:"/css/grid",
      views:{
        'menuContent' :{
          templateUrl: "./css/grid.html"
        }
      }
    })
    .state('eventmenu.css_utility',{   //css 文件夹
      url:"/css/utility",
      views:{
        'menuContent' :{
          templateUrl: "./css/utility.html"
        }
      }
    })
    .state('eventmenu.js_ion-header-bar',{   //js 文件夹
      url:"/js/ion-header-bar",
      views:{
        'menuContent' :{
          templateUrl: "./js/ion-header-bar.html"
        }
      }
    })
  
 $urlRouterProvider.otherwise("/event/home");
})

.controller('MainCtrl', function ($scope) {
    $scope.warn_up = function () {
      $scope.bar_hide = true;
    };
    $scope.warn_down = function () {
      $scope.bar_hide = false;
    };
    $scope.nav_header = '请关注微信：kuwuya360';
  });
