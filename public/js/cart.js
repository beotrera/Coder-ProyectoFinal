const pList = document.getElementById('list-cart')

const getCart = async ()=>{

    var cart = localStorage.getItem('cartId')
    if(cart){
        const url = `http://localhost:8080/cart/list/${cart}`
        const list = await fetch(url)
        const res = await list.json()

        let data_list = ''
        res.products.forEach(element => {
            const product = 
            `<li>
                <h3>${element.name}</h3>
                <p>$${element.price}</p>
                <p>${element.description}</p>
                <p>${element.category}</p>
                <button class="btn btn-primary" style="margin-top: 10px;" onclick="deleteProduct('${element._id}')">Remove</button>
            </li>`
            data_list = data_list+product
        });

        pList.innerHTML = data_list
    }
}

const deleteProduct = async (id)=>{
    var cart = localStorage.getItem('cartId')
    if(cart){
        const res = await fetch(`http://localhost:8080/cart/deleteProduct/${cart}?product=${id}`,{method:"DELETE"})
        getCart()
        alert("Product was delete")
    }
}

getCart()