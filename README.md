
# Vehicle CRUD Backend 

A simple RESTful API built with **Node.js**, **Express**, and **MySQL**. The document is written using **swagger** and **Postman**

##Demo
Hosted URL: [click here](https://vehicle-crud-operation.onrender.com/)
Hosted Swagger Docs: [click here](https://vehicle-crud-operation.onrender.com/api-docs)

## Tech used and their usage 

By exploring this project, you will gain experience with:
- **Express.js** for building APIs efficiently.
- **MySQL** for managing Database interactions.
- **Yup-validator** for request validation.
- **Modularization** to keep code maintainable.
- **RESTful API principles** for proper API design.
- **Swagger** and **Postman** fordocumentaion of apis.

---

## Installation & Setup

### Step 1: Install Dependencies
Clone the repository and install the necessary dependencies:
```bash
npm install
```

## Step 2: Create a .env file
Create a .env at the root of your project and add the following configurations:
  #### For local DB connection:
  ```properties
  DB_HOST=localhost
  DB_USER=<username>
  DB_PASSWORD=<password>
  DB_NAME=vehicle_db
  PORT=3000
  ```
 Replace **username** and **password** with your actual MySQL credentials.

## Step 3: Create DB schema 
### 3.1. Create a database named: vehicle_db
Create schema tables for vehicle, owner and brands
```
-- Drop tables if they exist
DROP TABLE IF EXISTS vehicles;
DROP TABLE IF EXISTS owners;
DROP TABLE IF EXISTS brands;

-- Create table: owners
CREATE TABLE owners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(15),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create table: brands
CREATE TABLE brands (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  country VARCHAR(100)
);

-- Create table: vehicles
CREATE TABLE vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  owner_id INT NOT NULL,
  brand_id INT NOT NULL,
  model VARCHAR(100) NOT NULL,
  registration_no VARCHAR(50) UNIQUE NOT NULL,
  color VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (owner_id) REFERENCES owners(id) ON DELETE CASCADE,
  FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE
);
```

### 3.2. Insert dummy initial values in
1. owners table

```
-- Insert owners
INSERT INTO owners (name, email, phone) VALUES
('Alice Sharma', 'alice@example.com', '9876543210'),
('Bob Verma', 'bob@example.com', '8765432109'),
('Catherine Dsouza', 'catherine@example.com', '9123456780'),
('David Singh', 'david@example.com', '9988776655'),
('Esha Khan', 'esha@example.com', '9090909090'),
('Farhan Ali', 'farhan@example.com', '8888888888'),
('Gauri Mehta', 'gauri@example.com', '8777665544'),
('Himanshu Patel', 'himanshu@example.com', '9998887776'),
('Isha Reddy', 'isha@example.com', '9112233445'),
('Jay Malhotra', 'jay@example.com', '9887766554'),
('Kiran Joshi', 'kiran@example.com', '9012345678'),
('Lakshmi Nair', 'lakshmi@example.com', '9321123456'),
('Manoj Thakur', 'manoj@example.com', '9865432100'),
('Neha Kapoor', 'neha@example.com', '9786543210'),
('Om Prakash', 'om@example.com', '9654321876'),
('Priya Agarwal', 'priya@example.com', '9345678901'),
('Rahul Jain', 'rahul@example.com', '9234567890'),
('Sneha Das', 'sneha@example.com', '9198765432'),
('Tarun Sinha', 'tarun@example.com', '9078563412'),
('Usha Rawat', 'usha@example.com', '9333344455');
```
2. Brands table
```
-- Insert brands
INSERT INTO brands (name, country) VALUES
('Toyota', 'Japan'),
('Hyundai', 'South Korea'),
('Tata', 'India'),
('Honda', 'Japan'),
('Ford', 'USA'),
('Volkswagen', 'Germany'),
('Kia', 'South Korea'),
('Renault', 'France'),
('Nissan', 'Japan'),
('Skoda', 'Czech Republic'),
('Chevrolet', 'USA'),
('Mahindra', 'India'),
('Maruti Suzuki', 'India'),
('Fiat', 'Italy'),
('Mitsubishi', 'Japan'),
('Peugeot', 'France'),
('Jeep', 'USA'),
('Audi', 'Germany'),
('BMW', 'Germany'),
('Mercedes-Benz', 'Germany');

```

3. vehicle table
```
-- Insert vehicles
INSERT INTO vehicles (owner_id, brand_id, model, registration_no, color) VALUES
(1, 1, 'Corolla Altis', 'DL10ABC1234', 'White'),
(1, 3, 'Tata Nexon', 'DL10XYZ5678', 'Red'),
(2, 2, 'Hyundai i20', 'MH12DEF3456', 'Black'),
(3, 4, 'Honda City', 'KA05GH7890', 'Silver'),
(4, 5, 'Ford EcoSport', 'TN10IJ1234', 'Blue'),
(5, 6, 'Volkswagen Polo', 'GJ01KL5678', 'Grey'),
(6, 7, 'Kia Seltos', 'RJ14MN9012', 'Orange'),
(7, 2, 'Hyundai Creta', 'UP32OP3456', 'Brown'),
(3, 5, 'Ford Figo', 'MP09QR7890', 'Yellow'),
(4, 1, 'Toyota Innova', 'DL01ST1234', 'White'),
(5, 6, 'Volkswagen Vento', 'MH31UV5678', 'Black'),
(6, 4, 'Honda Amaze', 'PB10WX9012', 'Red'),
(7, 3, 'Tata Harrier', 'AP16YZ3456', 'Blue'),
(8, 8, 'Renault Duster', 'HR26ZZ7890', 'Brown'),
(9, 9, 'Nissan Magnite', 'CH01AB1234', 'Silver'),
(10, 10, 'Skoda Rapid', 'WB02CD5678', 'Blue'),
(8, 1, 'Toyota Fortuner', 'DL8CAF3456', 'Black'),
(9, 7, 'Kia Sonet', 'TS07GH7890', 'Red'),
(10, 2, 'Hyundai Venue', 'KL05JK1234', 'White'),
(1, 8, 'Renault Kwid', 'GA01LM5678', 'Green');
```
## Step 4: Run the server:

Create build with the following command:
```
npm run build
```
Start server using following command:

```
node src/index.js
```

Your API will now be running on http://localhost:3000

## Step 4: Test the API endpoints

### 4.1. Using swagger 
After running project go to : http://localhost:3000/api-docs
### 4.2. Using Postman

Download the json file for all requests. [Download file](https://drive.google.com/file/d/1vJPGiWar_KxCBymCucAGXc1Wd3HXzqEg/view?usp=drive_link)

Import on Postman to test.
