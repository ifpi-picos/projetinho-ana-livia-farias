let listaDeCompras = []; 

function adicionarItem() {
  const nome = prompt("Digite o nome do item:");
  const quantidade = prompt("Digite a quantidade:");
  const categoria = prompt("Digite a categoria:");

  const novoItem = {
    nome: nome,
    quantidade: quantidade,
    categoria: categoria
  };

  listaDeCompras.push(novoItem);
  console.log(listaDeCompras);
}

function listarItens(ordenarPor, filtrarPorCategoria, filtrarPorStatus) {
  let itensFiltrados = [...listaDeCompras];
  
  if (filtrarPorCategoria) {
    itensFiltrados = itensFiltrados.filter(item => item.categoria === filtrarPorCategoria);
  }

  if (filtrarPorStatus) {
    itensFiltrados = itensFiltrados.filter(item => item.comprado === filtrarPorStatus);
  }

  itensFiltrados.sort((a, b) => {
    if (ordenarPor === 'nome') {
      return a.nome.localeCompare(b.nome);
    } else if (ordenarPor === 'categoria') {
      return a.categoria.localeCompare(b.categoria);
    } else if (ordenarPor === 'quantidade') {
      return a.quantidade - b.quantidade;
    }
  });

  console.log('Lista de compras:');
  itensFiltrados.forEach(item => {
    console.log(`${item.nome} (${item.quantidade}) - ${item.categoria} - ${item.comprado ? 'Comprado' : 'Não comprado'}`);
  });
}

function editarItemDaLista() {
 
  let itemParaEditar = prompt("Digite o nome do item que deseja editar:")

  let indiceDoItem = listaDeCompras.findIndex(item => item.nome === itemParaEditar);

  if (indiceDoItem !== -1) {
      let item = listaDeCompras[indiceDoItem];

      let novoNome = prompt(`Novo nome para ${item.nome}: (deixe em branco para manter)`);
      let novaQuantidade = prompt(`Nova quantidade para ${item.nome}: (deixe em branco para manter)`);
      let novaCategoria = prompt(`Nova categoria para ${item.nome}: (deixe em branco para manter)`);

      if (novoNome) item.nome = novoNome;
      if (novaQuantidade) item.quantidade = parseInt(novaQuantidade);
      if (novaCategoria) item.categoria = novaCategoria;

      console.log("Item editado!");
  } else {
      alert("Item não encontrado na lista.");
  }
}

function removerItemDaLista() {

  let itemParaRemover = prompt("Digite o nome do item que deseja remover:");

  let indiceDoItem = listaDeCompras.indexOf(itemParaRemover);

  if (indiceDoItem !== -1) {
    
    let confirmacao = confirm(`Tem certeza que deseja remover o item ${itemParaRemover}?`);

    if (confirmacao) {
     
      listaDeCompras.splice(indiceDoItem, 1);
      alert("Item removido!");
    } else {
      alert("Remoção cancelada.");
    }
  } else {
    alert("Item não encontrado na lista.");
  }
}

function marcarItemComoComprado() {
  let itemParaMarcar = prompt("Digite o nome do item que deseja marcar como comprado:")

  let indiceDoItem = listaDeCompras.findIndex(item => item.nome === itemParaMarcar);

  if (indiceDoItem !== -1) {
    let item = listaDeCompras[indiceDoItem]
    item.comprado = !item.comprado; 
        console.log(`O item ${item.nome} foi marcado como ${item.comprado ? 'comprado' : 'não comprado'}.`);
    } else {
        alert("Item não encontrado na lista.");
  }
}

function exibirListaDeCompras() {
  console.log("Lista de Compras:");
  listaDeCompras.forEach(item => {
      console.log(`${item.nome} (${item.quantidade}) - ${item.comprado ? '✅' : '❌'}`);
  });
}

function resumoLista() {
    
    let totalItens = listaDeCompras.length;
    let categorias = {};
    let comprados = 0;
    let naoComprados = 0;

    listaDeCompras.forEach(item => {
      categorias[item.categoria] = (categorias[item.categoria] || 0) + 1;
      item.comprado ? comprados++ : naoComprados++;
  });

  console.log(`Resumo da Lista de Compras:
  - Total de itens: ${totalItens}
  - Itens comprados: ${comprados}
  - Itens não comprados: ${naoComprados}`);

  console.log('Itens por categoria:');
  for (let [categoria, quantidade] of Object.entries(categorias)) {
      console.log(`- ${categoria}: ${quantidade}`);
  }
}

function mostrarMenu() {
    console.log("----- Gerenciador de Lista de Compras -----");
    console.log("1. Adicionar item");
    console.log("2. Listar itens");
    console.log("3. Editar item");
    console.log("4. Remover item");
    console.log("5. Marcar item como comprado");
    console.log("6. Exibir lista completa");
    console.log("7. Resumo da lista");
    console.log("0. Sair");
    console.log("----------------------------------------");

    return parseInt(prompt("Digite o número da opção desejada: "));
}

function main() {
    let opcao;

    do {
        opcao = mostrarMenu();

        switch (opcao) {
            case 1:
              adicionarItem();
                break;
            case 2:
              listarItens();
                break;
            case 3:
              editarItemDaLista()
                break;
            case 4:
              removerItemDaLista()
                break;
            case 5:
              marcarItemComoComprado()
                break;
            case 6:
              exibirListaDeCompras()
                break;
            case 7:
              resumoLista()
                break;
            case 0:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
        }
    } while (opcao !== 0);
}

main();


