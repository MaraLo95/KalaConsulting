
function EMAILPORUKA()
{
var username = document.getElementById('name');
var email = document.getElementById('email');
var company = document.getElementById('company');
var subject = document.getElementById('subject');
var message = document.getElementById('message');


if(username.value == "" )
{
username.style.border = "1px solid #FF6262"

}
if(company.value == "")
{
company.style.border = "1px solid #FF6262"

}
if(subject.value == "")
{
subject.style.border = "1px solid #FF6262"

}
if(message.value == "")
{
message.style.border = "1px solid #FF6262"
}
if(email.value == "")
{
email.style.border = "1px solid #FF6262"

}

}
