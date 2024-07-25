CREATE DATABASE baseinfouser;


CREATE TABLE "User" (
    "id" INT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "email" VARCHAR(20) NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "phone_number" VARCHAR(20) NOT NULL,
    "cpf_doc" VARCHAR(20) NOT NULL
);

CREATE TABLE "Lead" (
    "id" INT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "city" VARCHAR(20) NOT NULL,
    "state" VARCHAR(20) NOT NULL,
    "price" FLOAT NOT NULL,
    "supply_type" VARCHAR(20) NOT NULL,
    "mes" VARCHAR (20) NOT NULL
  );