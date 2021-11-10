const logout = async ()=>{
    const url = `${window.location.origin}/user/logout`
    await fetch(url)
    .then( async(res)=> {
        console.log("hola")
        let data = await res.json()
        if(data.success){
            await (window.location.href = `${window.location.origin}/login`)
        }
        else{
            console.log("error")
        }
    })
    .catch( err => console.log(err))
}