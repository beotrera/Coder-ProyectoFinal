const pList = document.getElementById('list-products')

const getProducts = async (filter,value)=>{
    let url
    if(filter != ''){
        url = `http://localhost:8080/products/list?filter=${filter}&value=${value}`
    }
    else{
        url = `http://localhost:8080/products/list`
    }
    const list = await fetch(url)
    const res = await list.json()

    let data_list = ''
    res.forEach(element => {
        const product = 
        `<li style="text-align: center;">
            <h3>${element.name}</h3>
            <p>$${element.price}</p>
            <p>${element.description}</p>
            <p>${element.category}</p>
            <div>
                <button class="btn btn-primary" style="margin-top: 10px;" onclick="addToCart('${element._id}')">Add</button>
                <button class="btn btn-primary" style="margin-top: 10px;" onclick="removeProduct('${element._id}')">Remove</button>
            </div>         
        </li>`
        data_list = data_list+product
    });

    pList.innerHTML = data_list
}

const removeProduct = async (id)=>{
    const res = await fetch(`http://localhost:8080/products/delete/${id}`,{method:"DELETE"})
    getProducts('','')
    alert("Product was delete")
}

const  addToCart = async (id)=>{
    var cart = localStorage.getItem('cartId')

    if(!cart){
        const res = await fetch(`http://localhost:8080/cart/save/${id}`,{method:"PUT"})
        const data = await res.json()
        localStorage.setItem('cartId',data._id)
        alert("Product add to cart")
    }
    else{
        const res = await fetch(`http://localhost:8080/cart/update/${cart}?product=${id}`,{method:"PUT"})
        const data = await res.json()
        alert("Product add to cart")
    }
}

const getProductsByFilter = async ()=>{
    const filter = document.getElementById("filter").value
    const filterData = document.getElementById("filterData").value
    getProducts(filter,filterData);
}


getProducts('','')