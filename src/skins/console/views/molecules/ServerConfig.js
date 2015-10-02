/*
Copyright 2015 OpenMarket Ltd

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

'use strict';

var React = require('react');
var Modal = require('matrix-react-sdk/lib/Modal');
var sdk = require('matrix-react-sdk');

var config = require('../../../../../config.json');

var ServerConfig = require("matrix-react-skin/lib/skins/base/views/molecules/ServerConfig");
ServerConfig.defaultProps = {
    onHsUrlChanged: function() {},
    onIsUrlChanged: function() {},
    defaultHsUrl: config.default_hs_url,
    defaultIsUrl: config.default_is_url
};

module.exports = ServerConfig;

