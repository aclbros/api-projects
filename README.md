# Time Stamp Service API Project(Node.js)

## Overview
  This is an simple node.js API project that takes one format of time input then
  return and display a JSON object in two formats:
 
  - UNIX
  - Human Readable format
  
you  can test this app at https://aclbros-timestamp-api.herokuapp.com/

## Usage
#### Sample Input
```
https://aclbros-timestamp-api.herokuapp.com/March 16, 2016
```
or 
```
https://aclbros-timestamp-api.herokuapp.com/1458086400
```

#### Sample Output
```
 {
  "natural": "March 16, 2016",
  "unix": "1458086400"
  }
```
## Run this app

You need to have **node.js** installed.

Clone the file to your local device and launch it with node using  ```npm run start``` or ```node server.js```