function WriteDebug(time,msg,enter=1) {
	var out="",d=new Date();
	if(time) {
		hour=(d.getHours()<10)?"0"+d.getHours():d.getHours()
		min=(d.getMinutes()<10)?"0"+d.getMinutes():d.getMinutes()
		sec=(d.getSeconds()<10)?"0"+d.getSeconds():d.getSeconds()
		out="["+hour+":"+min+":"+sec+"] ";
	}
	out=out+msg;
	if(enter)
		out=out+"\r\n"
	g_LOG=g_LOG+out;
}
function log(msg) {
	console.log(msg);
}
function ShowLog() {
	console.log(g_LOG);
	return 1
}
function ClearLog() {
	g_LOG="";
	return 1
}






function send(type,url,data,callback) {
	$.ajax({
		type: type, //GET or POST
		url: url,   // method.php
		dataType: "html", // 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		data: data,
	})
	.done(function(out) {
		callback("success",out);
	})
	.fail(function(out) {
		callback("error",out);
	});
}




function sleep(ms) {
	ms += new Date().getTime();
	while (new Date() < ms){}
}