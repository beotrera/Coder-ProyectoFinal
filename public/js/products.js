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


const getProductsByFilter = async ()=>{
    const filter = document.getElementById("filter").value
    const filterData = document.getElementById("filterData").value
    getProducts(filter,filterData);
}


getProducts('','')