# Building inventory

'Building inventory' é um projeto em desenvolvimento com o intuito de ser utilizado para controle de estoque de materiais de construção.

## Tecnologias utilizadas

- NextJS
- React
- PrismaORM
- SQLite

## Instalação

Assumindo que os comandos `git` e `npm` (ou `pnpm`) estejam disponíveis, abra um terminal na pasta desejada e execute os seguintes comandos:

```bash
git clone https://github.com/evelynlnoro/building_inventory.git
cd building_inventory
npm install # ou pnpm install
```

## Utilização

Após a instalação, abra um terminal na pasta do projeto e execute o comando:

```bash
npm run dev # ou pnpm run dev
```

Em seguida, navegue até [http://localhost:3000](http://localhost:3000) para utilizar o app.

## Banco de dados

O projeto vem com um banco de dados SQLite 3 instalado e configurado. Para verificar seu conteúdo, execute o comando:

```bash
npx prisma studio
```

Para entender melhor os conceitos de _database migrations_ do Prisma, [https://www.prisma.io/docs/concepts/components/prisma-migrate](consulte a documentação).

## Testes

~ Processo de testes será descrito aqui ~

## Bugs

~ Processo de restreamento e solução de bugs será descrito aqui ~

## Contribuições

Projeto em desenvolvimento pelos alunos do curso de Engenharia da Computação, Évelyn Noro e Rafael Lawisch.
