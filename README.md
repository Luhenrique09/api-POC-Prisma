# api-poc-DragonBall

Api of one of the best animes that marked our lives DragonBall.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```
3. Configure the `.env` file using the `.env.example`
4. Run all migrations

```bash
npx prisma migrate dev
```
6. Seed db

```bash
npm run prisma:seed
```
6. Run the back-end in a development environment:

```bash
npm run dev
```

## Routes

GET: /breed

POST: /characters
Body: { "name": "Goku", "level": 8001, "transformations": 5, "image": "image.jpg", breedId: 7 }

GET: /characters

GET: /characters/id

PATH: /characters/id
Body: { "name": "Goku", "level": 8002, "transformations": 6, "image": "image.jpg", breedId: 7 }

DELETE: /characters/id

GET: /breed

GET: /goods