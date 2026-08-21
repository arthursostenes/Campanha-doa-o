# Campanha Alimente Esperança

## 1. Objetivo

Criar uma página simples para cadastrar doadores, alimentos e registrar doações de uma campanha escolar de arrecadação de alimentos.

## 2. Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro
- localStorage do navegador

Não é necessário banco de dados, servidor ou biblioteca externa.

## 3. Estrutura das pastas

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

## 4. Camadas da aplicação

- **Model:** define os objetos Doador, Alimento e Doacao.
- **Repository:** guarda e recupera os dados no localStorage.
- **Service:** aplica as regras, valida campos e cria os relacionamentos.
- **Controller:** cuida dos formulários, eventos e atualização da tela.

O fluxo é: Controller chama o Service, e o Service chama o Repository.

## 5. Como executar

Abra o arquivo `index.html` diretamente no navegador. Cadastre um doador e um alimento, depois registre a doação. Os dados continuarão disponíveis no mesmo navegador após fechar e abrir a página novamente.
