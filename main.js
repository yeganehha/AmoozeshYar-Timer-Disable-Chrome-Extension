var x = setInterval(function() {
    if (document.getElementById('timerMessage') != null && document.getElementById('timerMessage').innerHTML.includes("منتظر")) {
        clearInterval(x);
        var requestForm = document.getElementById("loginform");
        requestForm.operation.value = "endTimer";
        requestForm.submit();
    }
}, 500);