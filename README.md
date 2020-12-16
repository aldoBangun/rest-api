# REST API With Express & MySQL

> Simple Backend API for simple e-commerce site

---

## Usage

Before you start make sure you have been installed [MySQL](https://dev.mysql.com/downloads/installer/) on your machine. See the [installation](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/) guide here.

---

### Create new database

open _MySQL 8.0 Command Line Client_ and run this query :

```sql
CREATE DATABASE IF NOT EXISTS online_shop;
```

If you got this message:

_Query OK, 1 row affected (0.04 sec)_

then create the following tables :

-  **Items**
-  **Transactions**
-  **Users**

with these queries:

**Items table**

```sql
CREATE TABLE IF NOT EXISTS items(
   id int(11) PRIMARY KEY AUTO_INCREMENT,
   name varchar(255) NOT NULL,
   price int(11) NOT NULL,
   cost int(11) NOT NULL,
   stock int(11) NOT NULL,
   description varchar(255) NOT NULL
);
```

**Users table**

```sql
CREATE TABLE IF NOT EXISTS users(
   id int(11) PRIMARY KEY AUTO_INCREMENT,
   firstName varchar(255) NOT NULL,
   lastName varchar(255) NOT NULL,
   email varchar(255) NOT NULL UNIQUE,
   password varchar(255) NOT NULL,
   gender varchar(10) NOT NULL
);
```

**Transactions table**

```sql
CREATE TABLE IF NOT EXISTS transactions(
   id int(11) PRIMARY KEY AUTO_INCREMENT,
   id_item int(11),
   id_user int(11),
   purchased_at date,
   FOREIGN KEY (id_item) REFERENCES items(id),
   FOREIGN KEY (id_user) REFERENCES users(id)
);
```

---

### Edit Environment Configuration

Rename `"example.env"` to `".env"`, open it and edit the value to your own.

---

### Install Dependencies

```bash
npm install
```

---

### Notes

-  This is not finished yet and also just for learning
-  The structure is not the best, consider to compare with others file structures
-  Any question? [Chat Me](https://t.me/aldobangun)
