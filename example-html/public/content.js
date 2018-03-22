

function getAuthkey(){
    $.ajax({
        url: "/webapi/userAuthkey",
        method:"GET"
    }).done(function(msg) {
        if(msg.success){
            document.getElementById("getUAuthkey").text = msg.data;
        }
    });
}