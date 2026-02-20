create schema universidad;
use universidad;

CREATE TABLE profesores (
    id_profesor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100)
);

CREATE TABLE materias (
    id_materia INT AUTO_INCREMENT PRIMARY KEY,
    nombre_materia VARCHAR(100) NOT NULL,
    creditos INT NOT NULL,
    id_profesor INT NOT NULL,
    CONSTRAINT fk_materias_profesor
        FOREIGN KEY (id_profesor)
        REFERENCES profesores(id_profesor)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

INSERT INTO profesores (nombre, apellido, especialidad) VALUES
('Carlos', 'Matematicas'),
('Ana','Fisica'),
('Luis', 'Programacion'),
('Maria', 'Quimica'),
('Jorge', 'Historia');

INSERT INTO materias (nombre_materia, creditos, id_profesor) VALUES
('Algebra', 4, 1),
('Calculo', 5, 1),
('Fisica I', 4, 2),
('Programacion I', 5, 3),
('Historia Universal', 3, 5);

SELECT 
    materias.nombre_materia,
    materias.creditos,
    profesores.nombre AS nombre_profesor,
    profesores.apellido
FROM materias
INNER JOIN profesores 
ON materias.id_profesor = profesores.id_profesor;

SELECT 
    profesores.nombre,
    profesores.apellido,
    COUNT(materias.id_materia) AS total_materias
FROM profesores
LEFT JOIN materias 
ON profesores.id_profesor = materias.id_profesor
GROUP BY profesores.id_profesor;


CREATE TABLE estudiantes (
    id_estudiante INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    edad INT
);

CREATE TABLE estudiantes (
    id_estudiante INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    edad INT
);

CREATE TABLE estudiantes_materias (
    id_estudiante INT,
    id_materia INT,
    PRIMARY KEY (id_estudiante, id_materia),
    CONSTRAINT fk_estudiante
        FOREIGN KEY (id_estudiante)
        REFERENCES estudiantes(id_estudiante)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_materia
        FOREIGN KEY (id_materia)
        REFERENCES materias(id_materia)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);