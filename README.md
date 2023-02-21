<h1 align="center">

  <img src="./preview/logo.svg" width="300" alt="Ignite Shop">

</h1>

## Descrição do projeto

Este projeto foi criado durante o curso Ignite da Rocketseat e consiste em uma loja virtual desenvolvida com NextJS e TypeScript, que integra com a API do Stripe para processamento de pagamentos. 

## Oque implementei a mais do projeto inicial:
- [x] Sacola de compras
- [x] Checkout de mais de um produto
- [x] Tela de compra efetuada fiel ao layout do desafio.
- [x] Teste unitarios


#### Vejo o projeto online: https://ignite-shop-eta.vercel.app/


## Tecnologias utilizadas


<a href="https://nextjs.org/" style="margin-right: 210px">
  <img src="https://img.shields.io/badge/Next.js-13.1.6-black?style=flat-square&logo=next.js" alt="Badge do Next.js" width="180" height="30">
</a>

<a href="https://www.typescriptlang.org/">
  <img src="https://img.shields.io/badge/TypeScript-v4.9.5-blue?logo=typescript&style=flat-square" alt="TypeScript v4.9.5" width="180" height="30">
</a>

<a href="https://jestjs.io/">
  <img src="https://img.shields.io/badge/Jest-tested-15C213.svg?logo=jest&labelColor=99424f&style=flat-square" alt="jest tested" width="180" height="30">
</a>

<a href="https://stripe.com/">
  <img src="https://img.shields.io/badge/Stripe-Payments-blue?logo=stripe&style=flat-square" alt="jest tested" width="180" height="30">
</a>



## Como rodar o projeto

Antes de iniciar, é necessário instalar as dependências do projeto. No terminal, execute o seguinte comando:

```bash
npm install
# ou
yarn

```

Em seguida, crie um arquivo .env.local na raiz do projeto com as seguintes informações da API do Stripe:

```env
NEXT_URL = 'http://localhost:3000/'
STRIPE_PUBLIC_KEY=<sua chave publica da API do Stripe>
STRIPE_SECRET_KEY=<sua chave secreta da API do Stripe>
```
Caso não possua um nenhuma chave da API do Stripe, siga os segintes passos para cria-lás:

1. Passo 1: Crie uma conta em <a href="https://stripe.com">stripe.com</a>;
2. Passo 2: Vá na aba produtos e adicione produtos, escolha a opção "Uma única vez";
3. Passo 3: Vá em na aba Desenvolvedores > Chaves da API;
4. Passo 4: Copie as chaves para o local indicado no seu arquivo .env.local;

Por fim, execute o comando:

```bash
npm run dev
# ou
yarn dev
```

Como contribuir

- Faça um fork deste repositório
- Crie uma nova branch (git checkout -b minha-nova-feature)
- Faça suas alterações e adicione os arquivos modificados (git add .)
- Faça o commit das suas alterações (git commit -m "Adiciona minha nova feature")
- Faça o push para a branch (git push origin minha-nova-feature)
- Abra um Pull Request

Licença

Este projeto está sob a licença MIT.

