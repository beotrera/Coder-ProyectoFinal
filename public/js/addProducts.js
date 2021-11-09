const setProduct = async () =>{
    const nameHTML = document.getElementById("name").value
    const descriptionHTML = document.getElementById("description").value
    const codeHTML = document.getElementById("code").value
    const priceHTML = document.getElementById("price").value
    const stockHTML = document.getElementById("stock").value
    const categoryHTML = document.getElementById("category").value
    
    const url = `${window.location.origin}/products/save`
    const data ={
        method:'POST',
        body:JSON.stringify({
            name:nameHTML,
            description:descriptionHTML,
            code:codeHTML,
            category:categoryHTML,
            price:priceHTML,
            stock:stockHTML
        }),
        headers: {"Content-type": "application/json"}
    }

    if(nameHTML == "" || descriptionHTML == "" || codeHTML == "" || isNaN(parseInt(stockHTML)) || isNaN(parseInt(priceHTML)) ){
        alert("Missing fields to complete")
    }else{
        const res = await fetch(url,data)
        if(res.status == 200) alert("The products was created")
    }
}