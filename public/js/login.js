const login = async () =>{
    const passHTML = document.getElementById("password").value
    const emailHTML = document.getElementById("email").value

    
    const url = `${window.location.origin}/user/login`
    const input ={
        method:'POST',
        body:JSON.stringify({
            email:emailHTML,
            password:passHTML
        }),
        headers: {"Content-type": "application/json","Accept": "application/json"}
    }

    if(passHTML == "" || emailHTML == ""){
        alert("Missing fields to complete")
    }else{
        await fetch(url,input)
        .then( async(res)=> {
           let data = await res.json()
            if(data.success){
                await (window.location.href = `${window.location.origin}/home`)
            }
            else{
                alert("Error in user or password")
            }
        })
        .catch( err => console.log(err))
    }
}