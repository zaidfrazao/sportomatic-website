function _(id){ return document.getElementById(id); } //Reduce "doc.getelementbyid" to "_"

function submitForm(){
	_("mybtn").disabled = true; //Disables input after user has pressed the button, prevents double clicking
	_("status").innerHTML = 'please wait ...'; //"please wiat..." for <span id= "status"> by <input> on contact form
	var formdata = new FormData(); //var formdata allows appending of new key value pairs for transmitting to mailer.php
	formdata.append( "n", _("n").value ); //name .... value
	formdata.append( "e", _("e").value ); //email ... value
	formdata.append( "s", _("s").value ); //subject ... value
	formdata.append( "m", _("m").value ); //message ...value
	var ajax = new XMLHttpRequest(); // new XMLHTTP request object
	ajax.open( "POST", "../php/mailer.php" ); //run open method on XMLHTTP request parameters: post(to post to php), mailer.php script
	//function to check if the php script executed correctly and displays corresponding messages to hmtl
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h5>Thanks '+_("n").value+'. Your message has been sent.</h5>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("mybtn").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}
