
setInterval(function(){
    if (localStorage.getItem("aboutBlankDisabled") == 'true'){
       
    
        if (localStorage.getItem("endTime") >= Date.now()){
            localStorage.setItem("aboutBlankDisabled", "")
            console.log(
                "Timer finished, removing"
            )
        }
        
        
       
    }
}, 1000)
