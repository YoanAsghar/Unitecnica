CREATE DATABASE school;
USE school;

CREATE TABLE students(
    id int PRIMARY KEY AUTO_INCREMENT,
    student_name varchar (50) NOT NULL,
    edad INT DEFAULT 18,
    correo VARCHAR(50) UNIQUE 
);

CREATE TABLE courses(
    id INT PRIMARY KEY,
    nombre VARCHAR(20),
    duracion_horas INT
);

ALTER TABLE students
ADD phone_number INT UNIQUE;

ALTER TABLE courses 
ADD course_level int;


