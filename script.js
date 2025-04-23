const removerProdutoEvento = document.getElementsByClassName("btn-del");
for (let i = 0; i < removerProdutoEvento.length; i++) {
  removerProdutoEvento[i].addEventListener("click", removerProduto);
}

const qtdInputs = document.getElementsByClassName("select-produto")
for (let i = 0; i < qtdInputs.length; i++) {
    qtdInputs[i].addEventListener("change", updateTotal)
    
}

const addCarrinho = document.getElementsByClassName("btn-add-carrinho")
for (let i = 0; i < addCarrinho.length; i++) {
    addCarrinho[i].addEventListener("click", addProduct)
}

function addProduct(event) {
    const button = event.target
    const infosProduto = button.parentElement.parentElement
    const imgProduto = infosProduto.getElementsByClassName("card-img-top")[0].src
    const tituloProduto = infosProduto.getElementsByClassName("card-title")[0].innerHTML
    const precoProduto = infosProduto.getElementsByClassName("card-text")[0].innerHTML
    
    let novoProduto = document.createElement("div")
    novoProduto.classList.add("col-6", "my-3", "produto-carrinho")

    novoProduto.innerHTML = `
    <section class="card rounded-4">
        <img src="${imgProduto}" class="card-img-top rounded-4" alt="${tituloProduto}">
        <div class="card-body">
            <h5 class="card-title">${tituloProduto}</h5>
            <p class="card-text preco-produto">${precoProduto}</p>
            <div class="d-flex gap-2">
                <select class="form-select form-select-sm w-50 rounded-4 select-produto" aria-label="Small select example">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <a href="#" class="btn btn-danger rounded-4 btn-del">Excluir</a>
            </div>
        </div>
    </section>
    `

    const carrinhoBody = document.querySelector("#carrinho-body")
    carrinhoBody.append(novoProduto)

    updateTotal()
    novoProduto.getElementsByClassName("btn-del")[0].addEventListener("click", removerProduto)
    novoProduto.getElementsByClassName("select-produto")[0].addEventListener("change", updateTotal)
}

function removerProduto(event){
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
    updateTotal()
}

function updateTotal() {
    const produtosCarrinho = document.getElementsByClassName("produto-carrinho");
    let ValorTotal = 0;
    for (let i = 0; i < produtosCarrinho.length; i++) {
      const precoProduto = produtosCarrinho[i]
        .getElementsByClassName("preco-produto")[0]
        .innerHTML.replace("R$", "")
        .replace(",", ".");
        const qtdProduto = produtosCarrinho[i].getElementsByClassName("select-produto")[0].value;
        
        ValorTotal += precoProduto * qtdProduto;
    }
    ValorTotal = ValorTotal.toFixed(2);
    ValorTotal = ValorTotal.replace(".", ",");
    document.querySelector("#valor-total").innerHTML = `Total R$${ValorTotal}`;
}