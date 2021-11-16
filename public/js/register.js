const setRegister = async () =>{
    const nameHTML = document.getElementById("name").value
    const passHTML = document.getElementById("password").value
    const emailHTML = document.getElementById("email").value
    const addressHTML = document.getElementById("address").value
    const yearHTML = document.getElementById("year").value
    const codeHTML = document.getElementById("code").value
    const phoneHTML = document.getElementById("phone").value
    
    const url = `${window.location.origin}/user/register`
    const input ={
        method:'POST',
        body:JSON.stringify({
            name: nameHTML,
            year:parseInt(yearHTML),
            addres:addressHTML,
            email:emailHTML,
            password:passHTML,
            phone:phoneHTML
        }),
        headers: {"Content-type": "application/json","Accept": "application/json"}
    }

    if(nameHTML == "" || passHTML == "" || emailHTML == "" || addressHTML=="" || isNaN(parseInt(yearHTML))){
        alert("Missing fields to complete")
    }else{
        await fetch(url,input)
        .then( async(res)=> {
           let data = await res.json()
            if(data.succes){
                alert("User Created")
            }
            else{
                alert("Error to created user")
            }
        })
        .catch( err => console.log(err))
    }
}