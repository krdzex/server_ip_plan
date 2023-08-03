# Interview Task

This task involves building a RESTful API using Node.js to perform CRUD (Create, Read, Update, Delete) operations on two entities: servers and IP plans. The API utilizes Prisma as the ORM (Object-Relational Mapping) library to interact with a PostgreSQL database.

## Project Setup Instructions

Follow the steps below to setup this project:

### 1. Clone the Repository

Clone this repository to your local machine using the following command in your terminal:

```bash
git clone https://github.com/krzex/repository.git
```
### 2. Install Dependencies
Navigate into the project directory and install the required dependencies using npm:
```bash
cd server_ip_plan
npm install
```
### 3. Setup PostgreSQL Database
You need to have PostgreSQL installed and running on your machine. If you haven't installed it yet, you can [download it from the official PostgreSQL website](https://www.postgresql.org/download/).

Once installed, create a new PostgreSQL database for the application. You can use pgAdmin or any other PostgreSQL client for this.

### 4. Create .env file
Create DATABASE_URL_PRISMA in the .env file with your PostgreSQL connection string. The connection string should be in the following format:
```bash
DATABASE_URL_PRISMA="postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME"
```
You can add PORT in .env file as well. Default port will be 3000 but you can change it by adding port to .env file in this format:
```bash
PORT=YOUR_PORT
```

### 5. Build project
Use the following command to build project:
```bash
npm run build
```

### 6. Run Prisma Migrations
Use the following command to run Prisma migrations. This will create the necessary tables in your PostgreSQL database:
```bash
npm run prisma:start
```

### 7. Start the Server
Finally, start the server by running the following command:
```bash
npm start
```

## Testing with Postman

You can test the API endpoints using our Postman collection, which includes configured requests for all the endpoints. 

To do this import the collection file into your Postman app. The collection file is located in the `/postman` directory of this repository and is named `Plantec.postman_collection.json`.
