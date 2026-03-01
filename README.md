# 📘 Trabalho Prático – DGT2820  
## Planejamento e Desenvolvimento de Aplicações Web Interativas

![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Vue.js](https://img.shields.io/badge/Vue.js-2.x-42b883)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![Licença](https://img.shields.io/badge/licença-Acadêmica-blue)

---

## 📖 Sobre o Projeto

Este repositório contém o desenvolvimento do Trabalho Prático da disciplina  
**DGT2820 – Planejamento e Desenvolvimento de Aplicações Web Interativas**.

O projeto aplica conceitos fundamentais de:

- JavaScript no lado cliente
- Manipulação do DOM
- Estruturação de dados com JSON
- Consumo de API REST
- Construção dinâmica de interfaces com Vue.js

---

## 🎯 Objetivos da Prática

✔ Explorar a sintaxe JavaScript na implementação de algoritmos  
✔ Manipular elementos da página utilizando o DOM  
✔ Utilizar JSON para armazenamento e transmissão de dados  
✔ Criar páginas dinâmicas com Vue.js  
✔ Realizar chamadas HTTP assíncronas  

---

# 🧩 Estrutura do Projeto

O trabalho foi dividido em três etapas principais:

---

## 1️⃣ Ordenação com JavaScript e DOM

📂 Arquivos:
- `ordenando.js`
- `ordenando.html`

### 🔹 Funcionalidades

- Inserção dinâmica de números
- Escolha do algoritmo de ordenação
- Ordenação da lista
- Embaralhamento dos valores

### 🔹 Algoritmos Implementados

- Bubble Sort
- Selection Sort
- Quick Sort (recursivo)

### 🔹 Conceitos Aplicados

- Arrow Functions
- `getElementById`
- `createElement`
- `innerHTML`
- `map()` e `reduce()`
- Manipulação de arrays

---

## 2️⃣ Página de Receitas Dinâmica

📂 Arquivo:
- `receitas.html`

### 🔹 Tecnologias Utilizadas

- HTML5
- Bootstrap
- JavaScript
- JSON

### 🔹 Funcionalidades

- Catálogo dinâmico de receitas
- Estrutura de dados em vetor JSON contendo:
  - título
  - imagem
  - preparo
  - ingredientes (array)

### 🔹 Funções Desenvolvidas

- `getListaIngredientes()`
- `getCard()`
- `preencheCatalogo()`

### 🔹 Conceitos Aplicados

- Template literals (`` ` ``)
- `map()` e `reduce()`
- Geração dinâmica de HTML
- Layout responsivo com Bootstrap

---

## 3️⃣ Transmissão de Dados e Vue.js

📂 Arquivo:
- `usuarios.html`

### 🔹 Tecnologias Utilizadas

- HTML5
- Bootstrap
- Vue.js
- Fetch API
- API REST pública: https://reqres.in

### 🔹 Funcionalidades

- Consumo de API REST
- Exibição dinâmica de usuários
- Estrutura baseada em cards
- Renderização com `v-for`
- Binding dinâmico com `:src`
- Exibição de avatar, nome e email

### 🔹 Estrutura Vue.js Utilizada

```javascript
new Vue({
  el: '#usuarios',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      fetch('https://reqres.in/api/users?per_page=10')
        .then(res => res.json())
        .then(data => {
          this.users = data.data
        })
    }
  }
})
👨‍💻 Autor

Andre Luis Kunert
Desenvolvedor Full Stack em formação
