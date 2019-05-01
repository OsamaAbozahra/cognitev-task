## Access Control List (ACL)

> This is an implementation of an Access Control List module that can be used in an api application to limit access of users with different roles to the API endpoints.

## Usage

### First you need to run:

### `npm install acl-cognitev`

### Then Creating roles:

A user role can be defined by calling a createRole method on the module, like so:

```
import acl from 'acl-cognitev';
// create different roles
acl.createRole('admin');
acl.createRole('user');
acl.createRole('guest');
```
## Setting permissions:

Permissions should be defined using functions a and an, like so:

```
import { a, an } from 'acl-cognitev';
// admin can list all users
an('admin').can('get').from('/users');
// admin can create users
an('admin').can('post').to('/users');
// user can post an article only when it's his data
a('user').can('post').to('/users/:userId/articles').when((params, user) =>
user.id === params.userId);
// guest can get data from articles
a('guest').can('get').from('/articles');
```

## Checking permissions:
Check if a given role can perform a given action on a given endpoint like so:
```
import { check } from 'acl-cognitev';
check.if('guest').can('post').to('/users').value(); // false
check.if('admin').can('post').to('/users').value(); // true
// check if a user can post to articles
check.if('user').can('post').to('/users/10/articles').when({ id: 10 }).value(); // true
```

