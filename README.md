# Campanha Alimente Esperança

Projeto desenvolvido para uma atividade escolar sobre desenvolvimento de sistemas e arquitetura em camadas.

## Sobre o projeto

A **Campanha Alimente Esperança** é um site simples para ajudar no cadastro e controle de doações de alimentos.

Com o sistema, é possível:

* Cadastrar doadores;
* Cadastrar alimentos;
* Registrar doações;
* Relacionar uma doação com um doador;
* Visualizar as doações cadastradas.

## Tecnologias

O projeto foi desenvolvido utilizando:

* HTML
* CSS
* JavaScript
* localStorage

Não foi utilizado banco de dados ou servidor. Os dados ficam salvos no navegador através do `localStorage`.

## Organização do projeto

```text
projeto-doacao/
├── index.html
├── style.css
├── js/
│   ├── models.js
│   ├── repository.js
│   ├── service.js
│   └── controller.js
├── README.md
└── diagrama-uml.md
```

### Como o código está dividido

**Models**
Contém os objetos utilizados no sistema, como Doador, Alimento e Doação.

**Repository**
É responsável por salvar e buscar os dados no `localStorage`.

**Service**
Contém as regras do sistema, como validações e criação das doações.

**Controller**
Faz a ligação entre a página e o restante do sistema. É responsável pelos formulários, botões e atualização das informações na tela.

O funcionamento segue a ideia:

**Controller → Service → Repository**

## Como testar

1. Abra o arquivo `index.html` no navegador.
2. Cadastre um doador.
3. Cadastre um alimento.
4. Registre uma doação.
5. Confira a lista de doações cadastradas.

Os dados ficam salvos no navegador, então podem continuar disponíveis mesmo depois de atualizar ou fechar a página.

## Relacionamentos

O projeto possui os seguintes relacionamentos:

* Um doador possui um endereço.
* Um doador pode realizar várias doações.
* Uma doação pode possuir vários alimentos.

O diagrama desses relacionamentos está disponível no arquivo `diagrama-uml.md`.

## Projeto escolar

Este projeto foi desenvolvido como atividade prática para aplicar os conceitos de **Model, Repository, Service e Controller** estudados em aula.
