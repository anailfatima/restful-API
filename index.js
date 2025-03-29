const http = require('http');

//This will import the app.js file 
const app = require('./app');

//We are setting the port value = to that of env file . If env file does'nt contain port then the default value is set to 3000
app.set('port', process.env.PORT ?? 3000)

//pass our app module to server 
const server = http.createServer(app);

//we can now listen to our particular server . There is a call back function logging the 'listening on port' and "process.env.PORT ?? 3000" logs the port number and if port not evaluated in .env file then logs 3000 as port number
server.on('listening', () => {
    console.log('listening on port' + (process.env.PORT ?? 3000));
}); 

//listen to our server
server.listen(process.env.PORT ?? 3000)