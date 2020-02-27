# goedgemerkt-backoffice

GoedgemerktBackoffice - JavaScript client for goedgemerkt-backoffice
API for creating packing slips
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.1
- Package version: 0.1
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install goedgemerkt-backoffice --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GoedgemerktBackoffice = require('goedgemerkt-backoffice');

var api = new GoedgemerktBackoffice.DefaultApi()
api.appControllerGetHello().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GoedgemerktBackoffice.DefaultApi* | [**appControllerGetHello**](docs/DefaultApi.md#appControllerGetHello) | **GET** / | 
*GoedgemerktBackoffice.OrdersApi* | [**ordersControllerGetOrders**](docs/OrdersApi.md#ordersControllerGetOrders) | **GET** /orders | 
*GoedgemerktBackoffice.RolesApi* | [**rolesControllerAddScope**](docs/RolesApi.md#rolesControllerAddScope) | **PATCH** /roles/scopes/add | 
*GoedgemerktBackoffice.RolesApi* | [**rolesControllerCreate**](docs/RolesApi.md#rolesControllerCreate) | **POST** /roles | 
*GoedgemerktBackoffice.RolesApi* | [**rolesControllerList**](docs/RolesApi.md#rolesControllerList) | **GET** /roles | 
*GoedgemerktBackoffice.RolesApi* | [**rolesControllerRemoveScope**](docs/RolesApi.md#rolesControllerRemoveScope) | **PATCH** /roles/scopes/remove | 
*GoedgemerktBackoffice.UsersApi* | [**usersControllerAddRole**](docs/UsersApi.md#usersControllerAddRole) | **PATCH** /users/{id}/roles/{role} | 
*GoedgemerktBackoffice.UsersApi* | [**usersControllerLogin**](docs/UsersApi.md#usersControllerLogin) | **POST** /users/login | 
*GoedgemerktBackoffice.UsersApi* | [**usersControllerRegister**](docs/UsersApi.md#usersControllerRegister) | **POST** /users/register | 
*GoedgemerktBackoffice.UsersApi* | [**usersControllerRemoveRole**](docs/UsersApi.md#usersControllerRemoveRole) | **DELETE** /users/{id}/roles/{role} | 
*GoedgemerktBackoffice.UsersApi* | [**usersControllerWhoami**](docs/UsersApi.md#usersControllerWhoami) | **GET** /users/whoami | 

## Documentation for Models

 - [GoedgemerktBackoffice.RoleDTO](docs/RoleDTO.md)
 - [GoedgemerktBackoffice.UserDTO](docs/UserDTO.md)

## Documentation for Authorization


### bearer


