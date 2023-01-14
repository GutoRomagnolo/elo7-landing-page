# Elo7 Landing Page - Extraordinariamente criativo

Esse é o projeto de uma landing page do site Elo7. Nessa página, estão presentes algumas características e benefícios da carreira na empresa. 

## Tecnologias utilizadas e justificativas
| Abrangência                | Utilizado              
| :------------------------: | ---------------------         
| Linguagem                  | TypeScript        
| Estilo                     | SCSS                     
| Requisição                 | HTTP Client (Angular)
| *Framework (opcional)*      | Angular

Por ser uma oportunidade boa para construir uma aplicação do zero utilizando Angular, acabei aproveitando para experimentar um pouco mais a fundo do TypeScript. Como essa linguagem é um superset do JavaScript, acabei utilizando do mesmo jeito todo o meu conhecimento em JS. 

Ademais, adicionei a biblioteca Pupeteer para poder realizar um teste em Karma & Jasmine utilizando do Google Chrome Headless, sem necessariamente ter o Browser instalado no computador.

Sobre o client de requisições, não vejo a necessidade utilizar o Axios (que é baseada no Angular HTTP Client, inclusive), pois o Angular já oferece o HTTP Client para trabalhar com requisições. Utilizei também algumas funcionalidades da biblioteca RxJS e também a biblioteca QuickLink para aplicar uma estratégia de pré-carregamento.

Em estilos, trabalhei com o SCSS e media queries para construir a responsividade da página. =)

## Modificações no layout sugerido

As únicas coisas que modifiquei do layout original foram:

- A imagem do header. Tive que aplicar um blur nessa imagem, pois a resolução dela estava muito baixa, deixando-a pixelada em monitores maiores;
- Os textos. Após achar e assistir ao vídeo inteiro do Carlos Curioni (o vídeo do template original rs), decidi trocar os textos genéricos de lorem ipsum para textos escritos. Alguns aproveitei de materiais prontos, outros escrevi baseado no que consumi sobre a empresa e sua história.

## Requisitos

- NodeJS v19.4.0

Caso possua o [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm), basta rodar no terminal:
```sh
  nvm install
  nvm use
```

## Instalação

Após obter a versão correta do NodeJS, rode no terminal:
```sh
  npm install
```

## Inicializar a aplicação

Após todas as instalacões:
```sh
  npm run start
```

A página irá abrir automaticamente na URL ``http://localhost:4200/``


