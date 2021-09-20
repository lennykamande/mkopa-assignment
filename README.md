# SMS Microservice
An SMS microservice designed to facilitate functionality for basic SMS service. Designs are based on a fictional scenario. 

Tech stack used – MongoDB, Express, and Node.js.


Developed as a part of an assignment for the Mkopa Assignment Software Architecture.

###### Note 
Following versions were used in the development of this demo:
- Node.js 14.16.1.
- Node Package Manager (npm) 7.12.1.
- Editor used was Visual Studio Code 1.56.1.

## License
This project is licensed under the MIT License, a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

<p align="center"> Copyright (c) 2021 Sai Vittal B. All rights reserved.</p>

## Instructions to setup locally
### Installing modules
- Run the following commands in the terminal/console window in the project directory:
```bash
$ cd mkopa-assignment

$ sudo docker-compose up build
```
```
MONGODB_URI="<YOUR-CONNECTION-STRING-HERE>"
```
- In case if you want to run the application dynamically whenever file changes in the directory are detected, replace ```node``` with ```nodemon```. For example,
```bash
$ nodemon server.js
```

### Testing the APIs
- You can run the basic unit tests written for all the controller functions by entering the following command:
```bash
$ npm run test
```
- You can test the microservice with Postman (both using Heroku URL or locally) by importing the provided collection into your Postman client. They were exported via Postman Collection v2.1 in JSON format. There are separate folders named ```Local``` and ```Heroku``` giving you the freedom to test on both platforms.


## APIs and their behavior
### SMS Microservice
#### Post an inbound SMS
This API will be exposed to the client.

- Method – POST
- Route – ```http://localhost:3000/incoming/sms```

This will create an inbound SMS.

- Example request body:
```bash
{
    "from": "1234567890",
    "to": "123456",
    "text": "hello, STOP\n"
}
```

- Example successful response:
```bash
{
    "message": "inbound sms is ok",
    "error": ""
}
```
