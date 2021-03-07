/*
Copyright 2015 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

angular.module('lastfmVisApp')

.directive('usernamePicker', function($location) {
    'use strict';

    return {
        templateUrl: 'static/app/username/picker.html',
        scope: {
            username: '=',
            onChange: '&'
        },
        controller: function($scope) {
            $scope.usernameInternal = $scope.username;

            $scope.pickUsername = function() {
                if ($scope.usernameInternal) {
                    $location.path('/d/' + $scope.usernameInternal);
                    $scope.usernameInternal = '';
                }
            };
        }
    };
});

