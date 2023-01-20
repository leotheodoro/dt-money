## Por que um componente renderiza?
 - Hooks changed (mudou estado, contexto, reducer)
 - Props changed (mudou propriedade)
 - Parent rerendered (componente pais renderizou)

## Qual o fluxo de renderização?
 1. O React recria o HTML da interface daquele componente
 2. Compara a versão do HTML recriada com a versão anterior
 3. SE mudou algo, ele reescreve o HTML na tela.

 - Memo:
  0. Hooks changed, Props changed (deep comparison)
  0.1 Comparar com a versão anterior dos hooks e props
  0.2 SE mudou algo, ele vai permitir a nova renderização