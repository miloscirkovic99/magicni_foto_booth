let email = mail();
// var myMail = mail('smtp.gmail.com',`gdesapsom@gmail.com`,'kvps lcib phvh ayax', 'TLS', '587'); // enter valid username and password
var fromParam = param("from");
var subject = param("subject"); 
var messageParam = param("messageParam");
var eventType=param('eventType');
var phone=param('phone');
var fullname=param("fullname");


let message = `
<!DOCTYPE html>
<html>
  <body>
    <h1>${subject}</h1>
    <h4>Ime i Prezime: ${fullname}</h4>
    <p>Event tip: ${eventType}</p>
    <p>Telefon: ${phone}</p>
    <p>Poruka: ${messageParam}</p>
  </body>
</html>`;
email.message(message);
email.from(fromParam);
email.subject(subject);
var to = 'nismagicnoogledalo@gmail.com'; 
email.to(to);

email.send();
write("email", fromParam);
write('message', 'Email sent');

