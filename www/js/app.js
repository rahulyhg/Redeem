// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
        .state('login', {
            url: '/login',


            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller:'HomeCtrl'
                }
            }
        })
        .state('app.gridview', {
            url: '/gridview/:id',
            views: {
                'menuContent': {
                    templateUrl: 'templates/gridview.html',
                    controller: 'GridViewCtrl'
                }
            }
        })
        .state('app.redeem', {
            url: '/redeem',
            views: {
                'menuContent': {
                    templateUrl: 'templates/redeem.html',
                    controller: 'RedeemCtrl'
                }
            }
        })
        .state('app.passbook', {
            url: '/passbook',
            views: {
                'menuContent': {
                    templateUrl: 'templates/passbook.html',
                    controller: 'PassbookCtrl'
                }
            }
        })

    .state('app.browse', {
            url: '/browse',
            views: {
                'menuContent': {
                    templateUrl: 'templates/browse.html'
                }
            }
        })
        .state('app.spendhistory', {
            url: '/spendhistory',
            views: {
                'menuContent': {
                    templateUrl: 'templates/spendhistory.html',
                    controller: 'SpendHistoryCtrl'
                }
            }
        })
        .state('app.sendmoney', {
            url: '/sendmoney',
            views: {
                'menuContent': {
                    templateUrl: 'templates/sendmoney.html',
                    controller: 'SendMoneyCtrl'
                }
            }
        })
        .state('app.wallet', {
            url: '/wallet',
            views: {
                'menuContent': {
                    templateUrl: 'templates/wallet.html',
                    controller: 'WalletCtrl'
                }
            }
        })
        .state('app.referral', {
            url: '/referral',
            views: {
                'menuContent': {
                    templateUrl: 'templates/referral.html',
                    controller: 'ReferralCtrl'
                }
            }
        })
        .state('app.listview', {
            url: '/listview/:id',
            views: {
                'menuContent': {
                    templateUrl: 'templates/listview.html',
                    controller: 'ListViewCtrl'
                }
            }
        })
        .state('app.aboutus', {
            url: '/aboutus',
            views: {
                'menuContent': {
                    templateUrl: 'templates/faqNaboutus.html',
                    controller: 'AboutUsCtrl'
                }
            }
        })
        .state('app.playlists', {
            url: '/playlists',
            views: {
                'menuContent': {
                    templateUrl: 'templates/playlists.html',
                    controller: 'PlaylistsCtrl'
                }
            }
        })

    .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});