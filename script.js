let itemCarrinho = 0

const removerProdutoEvento = document.querySelectorAll(".btn-del");
for (let i = 0; i < removerProdutoEvento.length; i++) {
  removerProdutoEvento[i].addEventListener("click", removerProduto);
}

const qtdInputs = document.querySelectorAll(".qtd-produto")
for (let i = 0; i < qtdInputs.length; i++) {
    qtdInputs[i].addEventListener("change", updateTotal)
    
}

const addCarrinho = document.querySelectorAll(".btn-add-carrinho")
for (let i = 0; i < addCarrinho.length; i++) {
    addCarrinho[i].addEventListener("click", addProduct)
}

const comprarBtn = document.querySelector(".btn-comprar")
comprarBtn.addEventListener("click", comprar)

function comprar(){
    if (itemCarrinho > 0){
        alert("Obrigado por sua compra!")
    }
}

function temItemCarrinho() {
    let cartVazio = document.querySelector(".cart-vazio") 

    if (cartVazio != null && itemCarrinho > 0){
        document.querySelector(".cart-vazio").remove()
        comprarBtn.classList.remove("disabled")
    }
    else if (cartVazio == null && itemCarrinho == 0){
        let addCartVazio = document.querySelector("#carrinho-body")
        addCartVazio.innerHTML = `
        <div class="text-center opacity-25 cart-vazio">
            <p class="h1">Carrinho Vazio</p>
            <i class="fa-solid fa-cart-shopping fs-1"></i>
        </div>
        `
        comprarBtn.classList.add("disabled")
    }
}

function addProduct(event) {
    const button = event.target
    const infosProduto = button.parentElement.parentElement
    const imgProduto = infosProduto.querySelector(".card-img-top").src
    const tituloProduto = infosProduto.querySelector(".card-title").innerHTML
    const precoProduto = infosProduto.querySelector(".card-text").innerHTML

    const nomeProdutoCarrinho = document.querySelectorAll(".tituloProduto")
    
    for (let i = 0; i < nomeProdutoCarrinho.length; i++){
        if (nomeProdutoCarrinho[i].innerHTML == tituloProduto){
            nomeProdutoCarrinho[i].parentElement.querySelector(".d-flex")
            .querySelector(".qtd-produto").value++;
            updateTotal()
            return
        }
    }
    
    let novoProduto = document.createElement("div")
    novoProduto.classList.add("col-6", "my-3", "produto-carrinho")

    novoProduto.innerHTML = `
    <section class="card card-cart rounded-4">
        <img src="${imgProduto}" class="card-img-top rounded-4" alt="${tituloProduto}">
        <div class="card-body">
            <h5 class="card-title tituloProduto">${tituloProduto}</h5>
            <p class="card-text preco-produto">${precoProduto}</p>
            <div class="d-flex gap-2">
                <input type="number" class="form-control qtd-produto rounded-4" value="1" min="1">
                <a href="#" class="btn btn-danger rounded-4 btn-del">Excluir</a>
            </div>
        </div>
    </section>
    `

    const carrinhoBody = document.querySelector("#carrinho-body")
    carrinhoBody.append(novoProduto)

    updateTotal()
    novoProduto.querySelector(".btn-del").addEventListener("click", removerProduto)
    novoProduto.querySelector(".qtd-produto").addEventListener("change", updateTotal)

    itemCarrinho++
    temItemCarrinho()
    
}

function removerProduto(event){
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
    updateTotal()

    itemCarrinho--
    temItemCarrinho()
    
}

function updateTotal() {
    const produtosCarrinho = document.querySelectorAll(".produto-carrinho");
    let valorTotal = 0;
    for (let i = 0; i < produtosCarrinho.length; i++) {
      const precoProduto = produtosCarrinho[i]
        .querySelector(".preco-produto")
        .innerHTML.replace("R$", "")
        .replace(",", ".");
        const qtdProduto = produtosCarrinho[i].querySelector(".qtd-produto").value;
        
        valorTotal += precoProduto * qtdProduto;
    }
    valorTotal = valorTotal.toFixed(2);
    valorTotal = valorTotal.replace(".", ",");
    document.querySelector("#valor-total").innerHTML = `Total R$${valorTotal}`;
}