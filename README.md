## API Documentation

#### Addition Endpoint

- **Endpoint:** `/api/addition`
- **Method:** POST
- **Description:** Performs addition of two numbers.
- **Request Format:**
  ```json
  {
    "num1": 5,
    "num2": 10
  }

- **Response Format:**
  ```json
  {
    "result": 15
  }

#### Factorial Endpoint

- **Endpoint:** `/api/factorial/:num`
- **Method:** GET
- **Description:** Calculates the factorial of a number.
- **Request Parameters:** `num` (non-negative)
- **Response Format:**
  ```json
  {
    "result": 120
  }

#### Fibonacci Endpoint

- **Endpoint:** `/api/fibonacci/:num`
- **Method:** GET
- **Description:** Calculates the nth Fibonacci number.
- **Request Parameters:** `num` (non-negative)
- **Response Format:**
  ```json
  {
    "result": 34
  }

## Local Setup Instructions 

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project

2. **Install dependencies:**
    ```bash
   npm install

3. **Set up environment variables:**
  - Create a .env file in the root of your project.
  - Add necessary environment variables (e.g., DATABASE_URL for Prisma).

4. **Install dependencies:**
    ```bash
   npx prisma migrate dev

5. **Running the project locally:**
    ```bash
   npm start

6. **Running tests:**
    ```bash
   npm test
- This command will execute all the Jest unit tests.
