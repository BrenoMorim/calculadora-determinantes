# Calculadora de Determinantes

> Status do projeto: Concluído

Projeto simples com html, css e js puros para calcular o determinante de matrizes.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Calculadora de determinantes**
| :label: Tecnologias | JavaScript, HTML, CSS
| :rocket: URL         | <https://brenomorim.github.io/calculadora-determinantes/>

![Página inicial do projeto](https://github.com/BrenoMorim/calculadora-determinantes/blob/main/imagem-do-projeto.png?raw=true#vitrinedev)

## Detalhes do Projeto

O projeto consiste em uma calculadora que consegue calcular o determinante de matrizes de até ordem 6. Só há uma página na aplicação, que é feita com JavaScript, HTML e CSS puros, sem nenhum framework ou biblioteca externa, exceto o BootStrap que foi utilizado para adicionar alguns estilos. A aplicação é responsiva e contém uma grande quantidade de cálculos matemáticos em JavaScript para realizar a lógica de descobrir o determinante.

## Estrutura

- index.html
  - Contém todos os formulários com as matrizes, usando tags table junto com forms.
- style.css
  - Boa parte dos estilos é aplicada pelo BootStrap, mas foi preciso adicionar alguns estilos a mais para personalizar o cabeçalho e deixar as matrizes organizadas.
- calculos.js
  - É onde ficam as funções com os cálculos para calcular os determinantes das matrizes, assim como a manipulação do DOM para adicionar essa funcionalidade aos botões do HTML. Como o projeto não usa npm ou algum outro gerenciador de pacotes, não foi possível dividir esse arquivo em outros menores por conta da questão de import e export não ser possível fora de módulos.
- limparFormularios.js
  - Adiciona a função de limpar os dados de formulário a todos os formulários da página de uma só vez, usando querySelectorAll e a função reset.

---
