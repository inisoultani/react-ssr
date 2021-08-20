"use strict";
(self["webpackChunkreact_ssr"] = self["webpackChunkreact_ssr"] || []).push([["src_client_bootstrap_js"],{

/***/ "./src/apis/clientApi.js":
/*!*******************************!*\
  !*** ./src/apis/clientApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: '/api'
}));

/***/ }),

/***/ "./src/apis/serverApi.js":
/*!*******************************!*\
  !*** ./src/apis/serverApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var serverApi = function serverApi(req) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: 'http://react-ssr-api.herokuapp.com/',
    headers: {
      // return empty string to makesure if cookie header not exist
      // it doest return undefined
      cookie: req.get('cookie') || ''
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverApi);

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/HomePage */ "./src/client/pages/HomePage.js");
/* harmony import */ var _pages_UsersListPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/UsersListPage */ "./src/client/pages/UsersListPage.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App */ "./src/client/components/App.js");
/* harmony import */ var _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/NotFoundPage */ "./src/client/pages/NotFoundPage.js");
/* harmony import */ var _pages_AdminPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/AdminPage */ "./src/client/pages/AdminPage.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // const Routes = () => {
//   return (
//     <div>
//       <Route exact path="/users">
//         {populateInitialStateData().then((data) => {
//           console.log(data);
//           <UsersListPage initialData={data} />;
//         })}
//       </Route>
//       <Route exact path="/" component={HomePage} />
//     </div>
//   );
// };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_objectSpread(_objectSpread({}, _components_App__WEBPACK_IMPORTED_MODULE_4__.default), {}, {
  routes: [_objectSpread({
    path: '/',
    exact: true
  }, _pages_HomePage__WEBPACK_IMPORTED_MODULE_2__.default), _objectSpread({
    path: '/users'
  }, _pages_UsersListPage__WEBPACK_IMPORTED_MODULE_3__.default), _objectSpread({
    path: '/admins'
  }, _pages_AdminPage__WEBPACK_IMPORTED_MODULE_6__.default), _objectSpread({}, _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_5__.default)]
})]);

/***/ }),

/***/ "./src/client/bootstrap.js":
/*!*********************************!*\
  !*** ./src/client/bootstrap.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Routes */ "./src/client/Routes.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App */ "./src/client/components/App.js");
// entry point for the client side







 // console.log(module);

react_dom__WEBPACK_IMPORTED_MODULE_1__.render(
/*#__PURE__*/
// no need to pass down the req object
// since cookie header only needed by server-side store
react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__.createStore)()
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_7__.renderRoutes)(_Routes__WEBPACK_IMPORTED_MODULE_2__.default)))), document.querySelector('#root'));
console.log('client entry point');

/***/ }),

/***/ "./src/client/components/App.js":
/*!**************************************!*\
  !*** ./src/client/components/App.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadData": () => (/* binding */ loadData),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/client/components/Header.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _redux_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/authSlice */ "./src/redux/authSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");


var _templateObject, _templateObject2;







var loadData = function loadData(store) {
  // console.log('App load data triggered');
  return store.dispatch((0,_redux_authSlice__WEBPACK_IMPORTED_MODULE_3__.fetchCurrentUserAsync)());
};

var App = function App(props) {
  var currentUserState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_redux_authSlice__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUser);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AppStyled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {
    currentUser: currentUserState
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ContentStyled, null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.renderRoutes)(props.route.routes)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: App,
  loadData: loadData
});
var AppStyled = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  background-color: #e7e0c9;\n  font-family: 'Lucida Sans', Verdana, sans-serif;\n  border-radius: 4px;\n"])));
var ContentStyled = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  padding: 10px 20px;\n  color: #726e62;\n"])));

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "./node_modules/@material-ui/icons/VerifiedUser.js");
/* harmony import */ var _material_ui_icons_VpnKeyRounded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/VpnKeyRounded */ "./node_modules/@material-ui/icons/VpnKeyRounded.js");
/* harmony import */ var _material_ui_icons_WebRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/WebRounded */ "./node_modules/@material-ui/icons/WebRounded.js");



var _templateObject, _templateObject2, _templateObject3;

var _excluded = ["navigate"];









var CustomLink = function CustomLink(props) {
  var navigate = props.navigate,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", rest);
};

var Header = function Header(_ref) {
  var currentUser = _ref.currentUser;
  var ssrState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.ssr;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(HeaderStyled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(HeaderLogoStyled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: '/',
    exact: "exact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_icons_WebRounded__WEBPACK_IMPORTED_MODULE_5__.default, {
    fontSize: "large"
  }), "SSR Stuff"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(HeaderMenuStyled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: '/users'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6__.default, {
    fontSize: "large"
  }), "Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: '/admins'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_7__.default, {
    fontSize: "large"
  }), "Admins"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    to: currentUser ? '/api/logout' : '/api/auth/google',
    component: CustomLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_icons_VpnKeyRounded__WEBPACK_IMPORTED_MODULE_8__.default, {
    fontSize: "large"
  }), currentUser ? 'Logout' : 'Login')));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
var HeaderStyled = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: #c1cfc0;\n  align-items: center;\n  border-radius: 4px 4px 0 0;\n\n  &:first-child {\n    padding-left: 28px;\n    color: white;\n  }\n\n  & > div {\n    padding-right: 20px;\n  }\n\n  a {\n    text-decoration: none;\n    color: white;\n  }\n\n  & > div > button,\n  & > div > a {\n    border: none;\n    padding: 10px 20px;\n    /* background-color: rgb(17, 50, 77); */\n    color: rgb(94 136 113);\n    border-radius: 4px;\n    margin: 7px 0;\n  }\n\n  & > div > a {\n    border: none;\n    color: rgb(94 136 113);\n    border-radius: 4px;\n  }\n\n  & > div > button:hover,\n  & > div > a:hover {\n    background-color: rgb(94 136 113) !important;\n    cursor: pointer;\n    color: white;\n  }\n\n  & > div > a.active {\n    background-color: #576382;\n  }\n"])));
var HeaderMenuStyled = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  /* flex-grow: 0.05; */\n  display: flex;\n  column-gap: 10px;\n  justify-content: space-between;\n\n  & > a {\n    display: flex;\n    align-items: center;\n    column-gap: 5px;\n  }\n"])));
var HeaderLogoStyled = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  & > h2 > a {\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n  }\n"])));

/***/ }),

/***/ "./src/client/components/requireAuth.js":
/*!**********************************************!*\
  !*** ./src/client/components/requireAuth.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/authSlice */ "./src/redux/authSlice.js");
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/HomePage */ "./src/client/pages/HomePage.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");






var auth = function auth(ChildComponent) {
  var ComposedComponent = function ComposedComponent(props) {
    // console.log(props);
    var renderComponent = function renderComponent() {
      if (props.location.pathname === '/admins' && props.auth.currentUser) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChildComponent, props);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__.Redirect, {
        to: "/"
      });
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderComponent());
  };

  var mapStateToProps = function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  };

  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
    fetchCurrentUserAsync: _redux_authSlice__WEBPACK_IMPORTED_MODULE_2__.fetchCurrentUserAsync
  })(ComposedComponent);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);

/***/ }),

/***/ "./src/client/pages/AdminPage.js":
/*!***************************************!*\
  !*** ./src/client/pages/AdminPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadData": () => (/* binding */ loadData),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/requireAuth */ "./src/client/components/requireAuth.js");
/* harmony import */ var _redux_adminSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/adminSlice */ "./src/redux/adminSlice.js");
/* harmony import */ var _hooks_useGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useGet */ "./src/hooks/useGet.js");





var loadData = function loadData(store) {
  return store.dispatch((0,_redux_adminSlice__WEBPACK_IMPORTED_MODULE_3__.fetchAdminAsync)());
};

var AdminPage = function AdminPage() {
  var _useGet = (0,_hooks_useGet__WEBPACK_IMPORTED_MODULE_4__.default)(_redux_adminSlice__WEBPACK_IMPORTED_MODULE_3__.selectAdmins, _redux_adminSlice__WEBPACK_IMPORTED_MODULE_3__.fetchAdminAsync),
      _useGet2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useGet, 1),
      adminsState = _useGet2[0];

  var renderAdminsList = function renderAdminsList() {
    return adminsState.map(function (admin) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
        key: admin.id
      }, admin.name);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, "List of Admin users : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", null, renderAdminsList()));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadData: loadData,
  component: (0,_components_requireAuth__WEBPACK_IMPORTED_MODULE_2__.default)(AdminPage)
});

/***/ }),

/***/ "./src/client/pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/pages/HomePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_userSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/userSlice */ "./src/redux/userSlice.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _MarketingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarketingPage */ "./src/client/pages/MarketingPage.js");



var _templateObject;







var Home = function Home() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('this is home components rendered as HTML string on server side'),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var currentState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.comments;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setText('This is home components rendered by React useEffect on page loaded');
    console.log('current state : ', currentState);
  }, []);

  var onClick = function onClick(event) {
    console.log('onClick - test re-deploy');
    dispatch((0,_redux_userSlice__WEBPACK_IMPORTED_MODULE_4__.fetchUserAsync)());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Button below is an example to simulate button onClick event hydrate by React.Hydrate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MarketingPage__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ButtonStyled, {
    onClick: onClick
  }, "Click me"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: Home
});
var ButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.button(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  border: none;\n  padding: 10px 20px;\n  background-color: rgb(17, 50, 77);\n  color: white;\n  border-radius: 4px;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: #6b7aa1 !important;\n    cursor: pointer;\n  }\n"])));

/***/ }),

/***/ "./src/client/pages/MarketingPage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/MarketingPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marketing_MarketingApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marketing/MarketingApp */ "webpack/container/remote/marketing/MarketingApp");
/* harmony import */ var marketing_MarketingApp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marketing_MarketingApp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

 // import history from '../history';

var MarketingPage = function MarketingPage() {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  console.log(marketing_MarketingApp__WEBPACK_IMPORTED_MODULE_0__.mount);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var _mount = (0,marketing_MarketingApp__WEBPACK_IMPORTED_MODULE_0__.mount)(ref.current, {
      onRemoteNavigate: function onRemoteNavigate(location) {
        console.log(location.pathname);
        console.log(history.location.pathname);

        if (history.location.pathname !== location.pathname) {// history.push(location.pathname);
        } // history.push(location.pathname);

      }
    }),
        onContainerNavigate = _mount.onContainerNavigate; // history.listen(onContainerNavigate);


    console.log('process : ', window);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    ref: ref
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketingPage);

/***/ }),

/***/ "./src/client/pages/NotFoundPage.js":
/*!******************************************!*\
  !*** ./src/client/pages/NotFoundPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");


var _templateObject;





var NotFoundPage = function NotFoundPage(props) {
  if (props.staticContext) props.staticContext.notFound = true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NotFoundStyled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_2__.default, {
    style: {
      fontSize: 50,
      color: 'orange'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", null, "404"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: NotFoundPage
});
var NotFoundStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));

/***/ }),

/***/ "./src/client/pages/UsersListPage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/UsersListPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadData": () => (/* binding */ loadData),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _redux_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/userSlice */ "./src/redux/userSlice.js");
/* harmony import */ var _hooks_useGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useGet */ "./src/hooks/useGet.js");




var loadData = function loadData(store) {
  return store.dispatch((0,_redux_userSlice__WEBPACK_IMPORTED_MODULE_2__.fetchUserAsync)()); // below code will causing promise on the handleRender.js hanging,  the promise extracted here
  // we need to manually to resolve the loadData function with new promises
  // without unwrap way, all promise will resolved with details error in the then((values) ==>)
  // store
  // .dispatch(fetchUserAsync())
  // .unwrap()
  // .then((originalPromiseResult) => {})
  // .catch((error) => {
  //   console.log('LoadData UsersListPage : ', error);
  //   return new Promise((resolve, reject) => {
  //     resolve('LoadData UsersListPage failed');
  //   });
  // });
};

var UsersList = function UsersList() {
  var _useGet = (0,_hooks_useGet__WEBPACK_IMPORTED_MODULE_3__.default)(_redux_userSlice__WEBPACK_IMPORTED_MODULE_2__.selectUsers, _redux_userSlice__WEBPACK_IMPORTED_MODULE_2__.fetchUserAsync),
      _useGet2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useGet, 1),
      usersState = _useGet2[0]; // useEffect(() => {
  //   console.log('UserList loaded');
  //   dispatch(fetchUserAsync());
  //   loaded.current = true;
  // });


  var renderUsersList = function renderUsersList() {
    return usersState.map(function (user) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
        key: user.id
      }, user.name);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, "Here's a big list of users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", null, renderUsersList()));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: UsersList,
  loadData: loadData
});

/***/ }),

/***/ "./src/hooks/useGet.js":
/*!*****************************!*\
  !*** ./src/hooks/useGet.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var useGet = function useGet(selector, actionCreator) {
  var state = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(selector);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(); // const loaded = useRef(false);

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (state.length === 0) {
      dispatch(actionCreator());
      console.log('state updated');
    }
  }, [state]);
  return [state];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGet);

/***/ }),

/***/ "./src/redux/Comment.js":
/*!******************************!*\
  !*** ./src/redux/Comment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");



var Comment = function Comment(commentText) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Comment);

  this.text = commentText;
  this.id = (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)();
  this.createdAt = new Date().toISOString();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

/***/ }),

/***/ "./src/redux/adminSlice.js":
/*!*********************************!*\
  !*** ./src/redux/adminSlice.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAdminAsync": () => (/* binding */ fetchAdminAsync),
/* harmony export */   "selectAdmins": () => (/* binding */ selectAdmins),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_3__);



 // import baseApi from '../apis/baseApi';


var initialState = [];
var fetchAdminAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createAsyncThunk)('admin/fetchAdmin', /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(arg, thunkApi) {
    var api, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log(thunkApi);
            api = thunkApi.extra;
            _context.next = 3;
            return api.get('admins');

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var adminSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createSlice)({
  name: 'admin',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchAdminAsync.fulfilled, function (state, action) {
      // console.log(action);
      action.payload.forEach(function (user) {
        if (!state.some(function (userInState) {
          return object_hash__WEBPACK_IMPORTED_MODULE_3___default()(userInState) === object_hash__WEBPACK_IMPORTED_MODULE_3___default()(user);
        })) state.push(user);
      });
    }).addCase(fetchAdminAsync.rejected, function (state, action) {
      console.log(action);
    }).addDefaultCase(function (state, action) {});
  }
});
var selectAdmins = function selectAdmins(state) {
  return state.admins;
};

(0,_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__.default)(adminSlice.actions);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adminSlice.reducer);

/***/ }),

/***/ "./src/redux/authSlice.js":
/*!********************************!*\
  !*** ./src/redux/authSlice.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCurrentUserAsync": () => (/* binding */ fetchCurrentUserAsync),
/* harmony export */   "selectCurrentUser": () => (/* binding */ selectCurrentUser),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_3__);



 // import baseApi from '../apis/baseApi';


var initialState = {
  currentUser: null
};
var fetchCurrentUserAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createAsyncThunk)('auth/fetchCurrentUser', /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(arg, thunkApi) {
    var api, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log(thunkApi);
            api = thunkApi.extra;
            _context.next = 3;
            return api.get('current_user');

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchCurrentUserAsync.fulfilled, function (state, action) {
      // console.log(action);
      state.currentUser = action.payload || false;
    }).addCase(fetchCurrentUserAsync.rejected, function (state, action) {
      console.log(action);
    }).addDefaultCase(function (state, action) {});
  }
});
var selectCurrentUser = function selectCurrentUser(state) {
  return state.auth.currentUser;
};

(0,_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__.default)(authSlice.actions);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);

/***/ }),

/***/ "./src/redux/commentSlice.js":
/*!***********************************!*\
  !*** ./src/redux/commentSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment */ "./src/redux/Comment.js");


var initialState = [new _Comment__WEBPACK_IMPORTED_MODULE_0__.default('comment-initial-state')]; // export const addComment = createAction('comment/add');

var isActionStartWithComment = function isActionStartWithComment(action) {
  return action.type.startsWith('comment');
};

var actionReducerBuilder = function actionReducerBuilder(builder) {
  builder // .addCase(addComment, (state, action) => {
  //   state.push(new Comment(action.payload));
  // })
  .addMatcher(isActionStartWithComment, function (state, action) {
    console.log('matcher isActionStartWithComment', state);
  }).addDefaultCase(function (state, action) {});
}; // const commentReducer = createReducer(initialState, actionReducerBuilder);


var commentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'comment',
  initialState: initialState,
  reducers: {
    addComment: function addComment(state) {
      state.push(new _Comment__WEBPACK_IMPORTED_MODULE_0__.default(action.payload));
    }
  },
  extraReducers: actionReducerBuilder
});
var addComment = commentSlice.actions.addComment;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentSlice.reducer);

/***/ }),

/***/ "./src/redux/ssrSlice.js":
/*!*******************************!*\
  !*** ./src/redux/ssrSlice.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


var initialState = {
  onServerRender: true
};

var actionReducerBuilder = function actionReducerBuilder(builder) {
  builder.addDefaultCase(function (state, action) {});
}; // const commentReducer = createReducer(initialState, actionReducerBuilder);


var ssrSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'ssr',
  initialState: initialState,
  reducers: {},
  extraReducers: actionReducerBuilder
});

(0,_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__.default)(ssrSlice.actions);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ssrSlice.reducer);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _commentSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentSlice */ "./src/redux/commentSlice.js");
/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userSlice */ "./src/redux/userSlice.js");
/* harmony import */ var _apis_clientApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/clientApi */ "./src/apis/clientApi.js");
/* harmony import */ var _apis_serverApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/serverApi */ "./src/apis/serverApi.js");
/* harmony import */ var _ssrSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ssrSlice */ "./src/redux/ssrSlice.js");
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authSlice */ "./src/redux/authSlice.js");
/* harmony import */ var _adminSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminSlice */ "./src/redux/adminSlice.js");








var createStore = function createStore(req) {
  // below checking is used when this store loaded on SSR
  var preloadedState = null;
  var extraArg = null;

  if (typeof window !== 'undefined') {
    // grab the state from a global variable injected into server generated HTML
    preloadedState = window.__PRELOADED_STATE__; // mark the passed state to  be garbage-collected

    delete window.__PRELOADED_STATE__; // modify state to show the ability to change preloaded state when rendered by server
    // preloadedState.comments[0].text = 'comment-modified-when-hydrate';
    // preloadedState.ssr.onServerRender = false;
    // specifically for client store, we need the extraArgument tobe clientApi
    // in order to simulate api proxy call

    extraArg = _apis_clientApi__WEBPACK_IMPORTED_MODULE_2__.default;
  } else {
    preloadedState = {};
    extraArg = (0,_apis_serverApi__WEBPACK_IMPORTED_MODULE_3__.default)(req);
  }

  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.configureStore)({
    reducer: {
      comments: _commentSlice__WEBPACK_IMPORTED_MODULE_0__.default,
      users: _userSlice__WEBPACK_IMPORTED_MODULE_1__.default,
      admins: _adminSlice__WEBPACK_IMPORTED_MODULE_6__.default,
      ssr: _ssrSlice__WEBPACK_IMPORTED_MODULE_4__.default,
      auth: _authSlice__WEBPACK_IMPORTED_MODULE_5__.default
    },
    preloadedState: preloadedState,
    middleware: function middleware(getDefaultMiddleware) {
      // ref : https://redux-toolkit.js.org/api/getDefaultMiddleware
      // on how to customize the default middleware
      return getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg
        },
        serializableCheck: false
      });
    }
  });
};

/***/ }),

/***/ "./src/redux/userSlice.js":
/*!********************************!*\
  !*** ./src/redux/userSlice.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUserAsync": () => (/* binding */ fetchUserAsync),
/* harmony export */   "selectUsers": () => (/* binding */ selectUsers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_3__);



 // import baseApi from '../apis/baseApi';


var initialState = [];
var fetchUserAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createAsyncThunk)('user/fetchUser', /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(arg, thunkApi) {
    var api, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log(thunkApi);
            api = thunkApi.extra;
            _context.next = 3;
            return api.get('users');

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createSlice)({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchUserAsync.fulfilled, function (state, action) {
      // console.log(action);
      action.payload.forEach(function (user) {
        if (!state.some(function (userInState) {
          return object_hash__WEBPACK_IMPORTED_MODULE_3___default()(userInState) === object_hash__WEBPACK_IMPORTED_MODULE_3___default()(user);
        })) state.push(user);
      });
    }).addCase(fetchUserAsync.rejected, function (state, action) {
      console.log(action);
    }).addDefaultCase(function (state, action) {});
  }
});
var selectUsers = function selectUsers(state) {
  return state.users;
};

(0,_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__.default)(userSlice.actions);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);

/***/ })

}]);
//# sourceMappingURL=src_client_bootstrap_js.bundle.js.map