const pList = document.getElementById('list-cart')

const getCart = async ()=>{

    const url = `http://localhost:8080/cart/list`
    const list = await fetch(url)
    const res = await list.json()

    console.log(res)
    let data_list = ''
    res[0].products.forEach(element => {
        const product = 
        `<li>
            <h3>${element.name}</h3>
            <p>$${element.price}</p>
            <p>${element.description}</p>
            <p>${element.category}</p>
        </li>`
        data_list = data_list+product
    });

    pList.innerHTML = data_list
}

getCart()