import { useContext } from "react";
import { CarrinhoContext } from "../context/carrinhoContext";

export const useCarrinhoContext = () => {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  function adicionarProduto(novoProduto) {
    const temOProduto = carrinho.some((itemDoCarrinho) => 
      itemDoCarrinho.id === novoProduto.id
    );

    if (!temOProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho((carrinhoAnterior) => [
        ...carrinhoAnterior,
        novoProduto,
      ]);
    }

    setCarrinho((carrinhoAnterior) =>
      carrinhoAnterior.map((itemDoCarrinho) => {
        if (itemDoCarrinho.id === novoProduto.id)
          itemDoCarrinho.quantidade += 1;
        return itemDoCarrinho;
      })
    );
  }

  function removerProduto(id) {
    const produto = carrinho.find((item) => item.id === id);
    if (produto.quantidade === 1)
      return setCarrinho(carrinho.filter((item) => item.id !== produto.id));

    setCarrinho((prevState) => {
      const newState = {
        ...produto,
        quantidade: produto.quantidade - 1,
      };

      return [...prevState, newState];
    });
  }

  function deletarProduto(id) {
    setCarrinho((carrinhoAnterior) => carrinhoAnterior.filter((item) => item.id !== id));
  }

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    deletarProduto,
  };
};
