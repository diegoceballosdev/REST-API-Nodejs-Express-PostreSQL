CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES 
('Diego Ceballos', 'diego@gmail.com'),
('Mateo Lopez', 'mateo@gmail.com'),
('Juan Perez', 'juan.perez@gmail.com'),
('Lucas Gomez', 'lucas.gomez@gmail.com'),
('Sofia Martinez', 'sofia.martinez@gmail.com'),
('Valentina Ruiz', 'valentina.ruiz@gmail.com'),
('Martin Diaz', 'martin.diaz@gmail.com'),
('Camila Torres', 'camila.torres@gmail.com'),
('Agustin Romero', 'agustin.romero@gmail.com'),
('Micaela Fernandez', 'micaela.fernandez@gmail.com'),
('Franco Herrera', 'franco.herrera@gmail.com'),
('Brenda Castillo', 'brenda.castillo@gmail.com'),
('Tomas Alvarez', 'tomas.alvarez@gmail.com'),
('Luciana Rios', 'luciana.rios@gmail.com'),
('Nicolas Vega', 'nicolas.vega@gmail.com'),
('Florencia Navarro', 'florencia.navarro@gmail.com'),
('Emiliano Castro', 'emiliano.castro@gmail.com'),
('Antonella Silva', 'antonella.silva@gmail.com'),
('Gonzalo Molina', 'gonzalo.molina@gmail.com'),
('Julieta Cabrera', 'julieta.cabrera@gmail.com');