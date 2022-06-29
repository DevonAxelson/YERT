//Declared requirements for server-side
//Node & Express & Soocket.io
var express = require('express');  
var app = express();  
var server = require('http').createServer(app); 
var io = require('socket.io')(server); 

//This is where the web framework grabs files to server.
//YERT is a single page application so it will use/get once. 
//You only need to serve the HTML file.
//Remeber that you need to embed your index with css & js.
//Clientside programming is stored in the public directory

app.use(express.static(__dirname + '/public')); 
app.get('/', function(req, res,next) {  
res.sendFile(__dirname + '/public/index.html');
});

//ACTUAL SERVERSIDE FUNCTIONAL PROGRAMMING
//This is where variables and functions are declared & defined
var ih1;
var ih2;
var ih3;
function step0H1() {
io.emit('h1 1/3');
}
function step1H1() {
ih1 = setInterval(step0H1, 1000);
}
function step2H1() {
clearInterval(ih1);
}
function step3H1() {
io.emit('h1 2/3');
}
function step4H1() {
ih1 = setInterval(step3H1, 1000);
}
function step6H1() {
io.emit('h1 3/3');
}
function step7H1() {
ih1 = setInterval(step6H1, 1000);
}
function step0H2() {
io.emit('h2 1/3');
}
function step1H2() {
ih2 = setInterval(step0H2, 1000);
}
function step2H2() {
clearInterval(ih2);
}
function step3H2() {
io.emit('h2 2/3');
}
function step4H2() {
ih2 = setInterval(step3H2, 1000);
}
function step6H2() {
io.emit('h2 3/3');
}
function step7H2() {
ih2 = setInterval(step6H2, 1000);
}
function step0H3() {
io.emit('h3 1/3');
}
function step1H3() {
ih3 = setInterval(step0H3, 1000);
}
function step2H3() {
clearInterval(ih3);
}
function step3H3() {
io.emit('h3 2/3');
}
function step4H3() {
ih3 = setInterval(step3H3, 1000);
}
function step6H3() {
io.emit('h3 3/3');
}
function step7H3() {
ih3 = setInterval(step6H3, 1000);
}


//Colby Block
var ic1;
var ic2;
var ic3;
function step0C1() {
io.emit('c1 1/3');
}
function step1C1() {
ic1 = setInterval(step0C1, 1000);
}
function step2C1() {
clearInterval(ic1);
}
function step3C1() {
io.emit('c1 2/3');
}
function step4C1() {
ic1 = setInterval(step3C1, 1000);
}
function step6C1() {
io.emit('c1 3/3');
}
function step7C1() {
ic1 = setInterval(step6C1, 1000);
}
function step0C2() {
io.emit('c2 1/3');
}
function step1C2() {
ic2 = setInterval(step0C2, 1000);
}
function step2C2() {
clearInterval(ic2);
}
function step3C2() {
io.emit('c2 2/3');
}
function step4C2() {
ic2 = setInterval(step3C2, 1000);
}
function step6C2() {
io.emit('c2 3/3');
}
function step7C2() {
ic2 = setInterval(step6C2, 1000);
}
function step0C3() {
io.emit('c3 1/3');
}
function step1C3() {
ic3 = setInterval(step0C3, 1000);
}
function step2C3() {
clearInterval(ic3);
}
function step3C3() {
io.emit('c3 2/3');
}
function step4C3() {
ic3 = setInterval(step3C3, 1000);
}
function step6C3() {
io.emit('c3 3/3');
}
function step7C3() {
ic3 = setInterval(step6C3, 1000);
}

//Goodland Block
var ig1;
var ig2;
var ig3;
function step0G1() {
io.emit('g1 1/3');
}
function step1G1() {
ig1 = setInterval(step0G1, 1000);
}
function step2G1() {
clearInterval(ig1);
}
function step3G1() {
io.emit('g1 2/3');
}
function step4G1() {
ig1 = setInterval(step3G1, 1000);
}
function step6G1() {
io.emit('g1 3/3');
}
function step7G1() {
ig1 = setInterval(step6G1, 1000);
}
function step0G2() {
io.emit('g2 1/3');
}
function step1G2() {
ig2 = setInterval(step0G2, 1000);
}
function step2G2() {
clearInterval(ig2);
}
function step3G2() {
io.emit('g2 2/3');
}
function step4G2() {
ig2 = setInterval(step3G2, 1000);
}
function step6G2() {
io.emit('g2 3/3');
}
function step7G2() {
ig2 = setInterval(step6G2, 1000);
}
function step0G3() {
io.emit('g3 1/3');
}
function step1G3() {
ig3 = setInterval(step0G3, 1000);
}
function step2G3() {
clearInterval(ig3);
}
function step3G3() {
io.emit('g3 2/3');
}
function step4G3() {
ig3 = setInterval(step3G3, 1000);
}
function step6G3() {
io.emit('g3 3/3');
}
function step7G3() {
ig3 = setInterval(step6G3, 1000);
}

var in1;
var in2;
var in3;
function step0N1() {
io.emit('n1 1/3');
}
function step1N1() {
in1 = setInterval(step0N1, 1000);
}
function step2N1() {
clearInterval(in1);
}
function step3N1() {
io.emit('n1 2/3');
}
function step4N1() {
in1 = setInterval(step3N1, 1000);
}
function step6N1() {
io.emit('n1 3/3');
}
function step7N1() {
in1 = setInterval(step6N1, 1000);
}
function step0N2() {
io.emit('n2 1/3');
}
function step1N2() {
in2 = setInterval(step0N2, 1000);
}
function step2N2() {
clearInterval(in2);
}
function step3N2() {
io.emit('n2 2/3');
}
function step4N2() {
in2 = setInterval(step3N2, 1000);
}
function step6N2() {
io.emit('n2 3/3');
}
function step7N2() {
in2 = setInterval(step6N2, 1000);
}
function step0N3() {
io.emit('n3 1/3');
}
function step1N3() {
in3 = setInterval(step0N3, 1000);
}
function step2N3() {
clearInterval(in3);
}
function step3N3() {
io.emit('n3 2/3');
}
function step4N3() {
in3 = setInterval(step3N3, 1000);
}
function step6N3() {
io.emit('n3 3/3');
}
function step7N3() {
in3 = setInterval(step6N3, 1000);
}
var io1;
var io2;
var io3;
function step0O1() {
io.emit('o1 1/3');
}
function step1O1() {
io1 = setInterval(step0O1, 1000);
}
function step2O1() {
clearInterval(io1);
}
function step3O1() {
io.emit('o1 2/3');
}
function step4O1() {
io1 = setInterval(step3O1, 1000);
}
function step6O1() {
io.emit('o1 3/3');
}
function step7O1() {
io1 = setInterval(step6O1, 1000);
}
function step0O2() {
io.emit('o2 1/3');
}
function step1O2() {
io2 = setInterval(step0O2, 1000);
}
function step2O2() {
clearInterval(io2);
}
function step3O2() {
io.emit('o2 2/3');
}
function step4O2() {
io2 = setInterval(step3O2, 1000);
}
function step6O2() {
io.emit('o2 3/3');
}
function step7O2() {
io2 = setInterval(step6O2, 1000);
}
function step0O3() {
io.emit('o3 1/3');
}
function step1O3() {
io3 = setInterval(step0O3, 1000);
}
function step2O3() {
clearInterval(io3);
}
function step3O3() {
io.emit('o3 2/3');
}
function step4O3() {
io3 = setInterval(step3O3, 1000);
}
function step6O3() {
io.emit('o3 3/3');
}
function step7O3() {
io3 = setInterval(step6O3, 1000);
}
var ip1;
var ip2;
var ip3;
function step0P1() {
io.emit('p1 1/3');
}
function step1P1() {
ip1 = setInterval(step0P1, 1000);
}
function step2P1() {
clearInterval(ip1);
}
function step3P1() {
io.emit('p1 2/3');
}
function step4P1() {
ip1 = setInterval(step3P1, 1000);
}
function step6P1() {
io.emit('p1 3/3');
}
function step7P1() {
ip1 = setInterval(step6P1, 1000);
}
function step0P2() {
io.emit('p2 1/3');
}
function step1P2() {
ip2 = setInterval(step0P2, 1000);
}
function step2P2() {
clearInterval(ip2);
}
function step3P2() {
io.emit('p2 2/3');
}
function step4P2() {
ip2 = setInterval(step3P2, 1000);
}
function step6P2() {
io.emit('p2 3/3');
}
function step7P2() {
ip2 = setInterval(step6P2, 1000);
}
function step0P3() {
io.emit('p3 1/3');
}
function step1P3() {
ip3 = setInterval(step0P3, 1000);
}
function step2P3() {
clearInterval(ip3);
}
function step3P3() {
io.emit('p3 2/3');
}
function step4P3() {
ip3 = setInterval(step3P3, 1000);
}
function step6P3() {
io.emit('p3 3/3');
}
function step7P3() {
ip3 = setInterval(step6P3, 1000);
}


//LINE BREAK FOR MY SANITY
io.on('connection', function(client) { 
console.log('User has connected'); 
//LINE BREAK FOR MY SANITY


//HOW THE SERVER RESPONDS TO CLIENT INPUT 
//When the server receives the message emitted from the button,
//It will execute functions we've programmed and send events back.
//The frontend will execute functions based on the event.
//This is model is known as Server/Client communication.
//This application is a bit more indepth as it executes in real time.

//Hays Communication Block
client.on('prh1', function() {
console.log('Paitent is waiting to be seen in Hays Room 206.');
clearInterval(ih1);
step1H1();
});
client.on('starth1', function() {
console.log('Session has begun in Hays Room 206.');
clearInterval(ih1);
step4H1();
});
client.on('stoph1', function() {
console.log('Session has ended in Hays Room 206.');
clearInterval(ih1);
step7H1();
});
client.on('prh2', function() {
console.log('Paitent is waiting to be seen in Hays Room 219.');
clearInterval(ih2);
step1H2();
});
client.on('starth2', function() {
console.log('Session has begun in Hays Room 219.');
clearInterval(ih2);
step4H2();
});
client.on('stoph2', function() {
console.log('Session has ended in Hays Room 219.');
clearInterval(ih2);
step7H2();
});
client.on('prh3', function() {
console.log('Paitent is waiting to be seen in Hays Room 220.');
clearInterval(ih3);
step1H3();
});
client.on('starth3', function() {
console.log('Session has begun in Hays Room 220.');
clearInterval(ih3);
step4H3();
});
client.on('stoph3', function() {
console.log('Session has ended in Hays Room 220.');
clearInterval(ih3);
step7H3();
});

//Colby Communication Block
client.on('prc1', function() {
console.log('Paitent is waiting to be seen in Colby.');
clearInterval(ic1);
step1C1();
});
client.on('startc1', function() {
console.log('Session has begun in Colby.');
clearInterval(ic1);
step4C1();
});
client.on('stopc1', function() {
console.log('Session has ended in Colby.');
clearInterval(ic1);
step7C1();
});
client.on('prc2', function() {
console.log('Paitent is waiting to be seen in Colby.');
clearInterval(ic2);
step1C2();
});
client.on('startc2', function() {
console.log('Session has begun in Colby.');
clearInterval(ic2);
step4C2();
});
client.on('stopc2', function() {
console.log('Session has ended in Colby.');
clearInterval(ic2);
step7C2();
});
client.on('prc3', function() {
console.log('Paitent is waiting to be seen in Colby.');
clearInterval(ic3);
step1C3();
});
client.on('startc3', function() {
console.log('Session has begun in Colby.');
clearInterval(ic3);
step4C3();
});
client.on('stopc3', function() {
console.log('Session has ended in Colby.');
clearInterval(ic3);
step7C3();
});

//Goodland Communication Block
client.on('prg1', function() {
console.log('Paitent is waiting to be seen in Goodland Room 1.');
clearInterval(ig1);
step1G1();
});
client.on('startg1', function() {
console.log('Session gas begun in Goodland Room 1.');
clearInterval(ig1);
step4G1();
});
client.on('stopg1', function() {
console.log('Session gas ended in Goodland Room 1.');
clearInterval(ig1);
step7G1();
});
client.on('prg2', function() {
console.log('Paitent is waiting to be seen in Goodland Room 2.');
clearInterval(ig2);
step1G2();
});
client.on('startg2', function() {
console.log('Session gas begun in Goodland Room 2.');
clearInterval(ig2);
step4G2();
});
client.on('stopg2', function() {
console.log('Session gas ended in Goodland Room 2.');
clearInterval(ig2);
step7G2();
});
client.on('prg3', function() {
console.log('Paitent is waiting to be seen in Goodland Room 3.');
clearInterval(ig3);
step1G3();
});
client.on('startg3', function() {
console.log('Session gas begun in Goodland Room 3.');
clearInterval(ig3);
step4G3();
});
client.on('stopg3', function() {
console.log('Session gas ended in Goodland Room 3.');
clearInterval(ig3);
step7G3();
});

//Norton Communication Block
client.on('prn1', function() {
console.log('Paitent is waiting to be seen in Norton Room 1.');
clearInterval(in1);
step1N1();
});
client.on('startn1', function() {
console.log('Session nas begun in Norton Room 1.');
clearInterval(in1);
step4N1();
});
client.on('stopn1', function() {
console.log('Session nas ended in Norton Room 1.');
clearInterval(in1);
step7N1();
});
client.on('prn2', function() {
console.log('Paitent is waiting to be seen in Norton Room 2.');
clearInterval(in2);
step1N2();
});
client.on('startn2', function() {
console.log('Session nas begun in Norton Room 2.');
clearInterval(in2);
step4N2();
});
client.on('stopn2', function() {
console.log('Session nas ended in Norton Room 2.');
clearInterval(in2);
step7N2();
});
client.on('prn3', function() {
console.log('Paitent is waiting to be seen in Norton Room 3.');
clearInterval(in3);
step1N3();
});
client.on('startn3', function() {
console.log('Session nas begun in Norton Room 3.');
clearInterval(in3);
step4N3();
});
client.on('stopn3', function() {
console.log('Session nas ended in Norton Room 3.');
clearInterval(in3);
step7N3();
});

//Osborne Communication Block
client.on('pro1', function() {
console.log('Paitent is waiting to be seen in Osborne Room 1.');
clearInterval(io1);
step1O1();
});
client.on('starto1', function() {
console.log('Session oas begun in Osborne Room 1.');
clearInterval(io1);
step4O1();
});
client.on('stopo1', function() {
console.log('Session oas ended in Osborne Room 1.');
clearInterval(io1);
step7O1();
});
client.on('pro2', function() {
console.log('Paitent is waiting to be seen in Osborne Room 2.');
clearInterval(io2);
step1O2();
});
client.on('starto2', function() {
console.log('Session oas begun in Osborne Room 2.');
clearInterval(io2);
step4O2();
});
client.on('stopo2', function() {
console.log('Session oas ended in Osborne Room 2.');
clearInterval(io2);
step7O2();
});
client.on('pro3', function() {
console.log('Paitent is waiting to be seen in Osborne Room 3.');
clearInterval(io3);
step1O3();
});
client.on('starto3', function() {
console.log('Session oas begun in Osborne Room 3.');
clearInterval(io3);
step4O3();
});
client.on('stopo3', function() {
console.log('Session oas ended in Osborne Room 3.');
clearInterval(io3);
step7O3();
});

//Phillipsburg Communication Block
client.on('prp1', function() {
console.log('Paitent is waiting to be seen in Phillipsburg Room 206.');
clearInterval(ip1);
step1P1();
});
client.on('startp1', function() {
console.log('Session has begun in Phillipsburg Room 206.');
clearInterval(ip1);
step4P1();
});
client.on('stopp1', function() {
console.log('Session has ended in Phillipsburg Room 206.');
clearInterval(ip1);
step7P1();
});
client.on('prp2', function() {
console.log('Paitent is waiting to be seen in Phillipsburg Room 219.');
clearInterval(ip2);
step1P2();
});
client.on('startp2', function() {
console.log('Session has begun in Phillipsburg Room 219.');
clearInterval(ip2);
step4P2();
});
client.on('stopp2', function() {
console.log('Session has ended in Phillipsburg Room 219.');
clearInterval(ip2);
step7P2();
});
client.on('prp3', function() {
console.log('Paitent is waiting to be seen in Phillipsburg Room 220.');
clearInterval(ip3);
step1P3();
});
client.on('startp3', function() {
console.log('Session has begun in Phillipsburg Room 220.');
clearInterval(ip3);
step4P3();
});
client.on('stopp3', function() {
console.log('Session has ended in Phillipsburg Room 220.');
clearInterval(ip3);
step7P3();
});

});


//SERVER INITIALIZATION 
//This is the function to start the actual webserver instance
//If it completes, it will write a message to your console log
//You can access the resource @ localhost on port 3000
server.listen(3000, function(){
console.log('Server startup was successful. This application is now listening on port 3000.');
});