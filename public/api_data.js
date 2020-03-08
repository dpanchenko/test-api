define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/main.js",
    "group": "/Users/kocmoc/Work/digitory/api/public/main.js",
    "groupTitle": "/Users/kocmoc/Work/digitory/api/public/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/posts/import",
    "title": "Import posts",
    "description": "<p>Import posts from provider to local database.</p>",
    "name": "ImportPosts",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>count of imported posts.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/modules/posts/router.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts/:id",
    "title": "Get post",
    "description": "<p>Get post data from local database by id.</p>",
    "name": "PostInfo",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "post",
            "description": "<p>Post data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.items.id",
            "description": "<p>Post id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.items.userId",
            "description": "<p>Post id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.items.title",
            "description": "<p>Post author id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.items.body",
            "description": "<p>Post body id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "result.items.createdAt",
            "description": "<p>Post creation date.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/modules/posts/router.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/posts",
    "title": "Get list",
    "description": "<p>Get list of posts from local database. Support pagination.</p>",
    "name": "PostsList",
    "group": "Posts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "x-offset",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "x-limit",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-offset\": \"10\",\n  \"x-limit\": \"5\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Posts list result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.count",
            "description": "<p>Count of all posts in DB.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result.items",
            "description": "<p>List of posts.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.items.id",
            "description": "<p>Post id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.items.title",
            "description": "<p>Post author id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "result.items.createdAt",
            "description": "<p>Post creation date.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/modules/posts/router.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get user",
    "description": "<p>Get user data from remote provider.</p>",
    "name": "userInfo",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"name\": \"Leanne Graham\",\n    \"username\": \"Bret\",\n    \"email\": \"Sincere@april.biz\",\n    \"address\": {\n        \"street\": \"Kulas Light\",\n        \"suite\": \"Apt. 556\",\n        \"city\": \"Gwenborough\",\n        \"zipcode\": \"92998-3874\",\n        \"geo\": {\n            \"lat\": \"-37.3159\",\n            \"lng\": \"81.1496\"\n        }\n    },\n    \"phone\": \"1-770-736-8031 x56442\",\n    \"website\": \"hildegard.org\",\n    \"company\": {\n        \"name\": \"Romaguera-Crona\",\n        \"catchPhrase\": \"Multi-layered client-server neural-net\",\n        \"bs\": \"harness real-time e-markets\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/modules/users/router.js",
    "groupTitle": "Users"
  }
] });
