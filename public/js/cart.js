const pList = document.getElementById('list-cart')
const bSend = document.getElementById('send-button')

const getCart = async ()=>{

    var cart = localStorage.getItem('cartId')
    if(cart){
        const url = `${window.location.origin}/carts/list/${cart}`
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
        bSend.innerHTML = `<button class="btn btn-primary btn-login fw-bold" onclick="sendEmail()">Send Order</button>`
    }
}

const deleteProduct = async (id)=>{
    var cart = localStorage.getItem('cartId')
    if(cart){
        const res = await fetch(`${window.location.origin}/carts/deleteProduct/${cart}?product=${id}`,{method:"DELETE"})
        getCart()
        alert("Product was delete")
    }
}

const sendEmail = async()=>{
    var cart = localStorage.getItem('cartId')
    const list = await fetch(url)
    const res = await list.json()
    let htmlList =res.products.map(element => {
        return `<li>
            <h3>${element.name}</h3>
            <p>$${element.price}</p>
            <p>${element.description}</p>
            <p>${element.category}</p>
            <button class="btn btn-primary" style="margin-top: 10px;" onclick="deleteProduct('${element._id}')">Remove</button>
        </li>`
    }).join('');

    let html =`<ul id="list-cart" style="display: flex;
    margin: 0;
    margin-top: 20px;
    justify-content: space-evenly;
    padding: 0;
    list-style: none;
    align-items: center;">
    ${htmlList}
    </ul>`
    
    const url = `${window.location.origin}/carts/list/${cart}`
    const input ={
        method:'POST',
        body:JSON.stringify({
            html:html
        }),
        headers: {"Content-type": "application/json","Accept": "application/json"}
    }

    const url = `${window.location.origin}/carts/send`
        const list = await fetch(url,input)
        const res = await list.json()
        if(res.success){
            alert("order send")
        }
}

getCart()