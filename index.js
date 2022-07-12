

let products = [ {nome:"Banana",                valor:"R$ 3.99"},
                 {nome:"Maça",                  valor:"R$ 4.99"},
                 {nome:"Uva",                   valor:"R$ 7.99"},
                 {nome:"Pera",                  valor:"R$ 3.99"},
                 {nome:"Pão",                   valor:"R$ 5.99"},
                 {nome:"Água",                  valor:"R$ 1.99"},
                 {nome:"Suco De Laranja",       valor:"R$ 6.99"},
                 ]




                 
let body = document.querySelector("body")

let div1 = document.createElement("div")
div1.className="H1"
body.appendChild(div1)
div1.innerText="Valor Preço "






let ProductList    = document.createElement("ul")
let ProductDetails = document.createElement("ul")
ProductDetails.className="ulvalor"
let main = document.createElement("main")
main.className="container"




let ButtonEnd = document.createElement("button")
body.appendChild(main)
main.appendChild(ProductList )
main.appendChild(ProductDetails )


function renderizar(products){
    for(let i = 0 ; i < products.length ; i++){
    
    
    let ProductItem    = document.createElement("li") //vai criar um LI para cada item do meu array
    ProductItem.className = "lista"
    let ProductSome    = document.createElement("li") ////vai criar um LI para cada item do meu array
    ProductSome.className="valor"
    ProductItem.innerText = (products[i].nome)
    ProductSome.innerText = (products[i].valor)
    ProductList.appendChild(ProductItem)
    ProductDetails.appendChild(ProductSome)

    }
}

renderizar(products)


let button = document.createElement("button")
button.className="botao"
body.appendChild(button)
button.innerText="finalizar compra"

