-- SQLNESS PROTOCOL MYSQL
CREATE TABLE integers (
    val INT,
    ts TIMESTAMP,
    TIME INDEX(ts)
);

-- SQLNESS PROTOCOL MYSQL
INSERT INTO integers VALUES (11, 1), (12, 2);

-- SQLNESS PROTOCOL MYSQL
INSERT INTO integers VALUES ('13', '3'), ('14', '4');

-- SQLNESS PROTOCOL MYSQL
INSERT INTO integers VALUES ('15a', 5), ('16', 6);

-- SQLNESS PROTOCOL MYSQL
SELECT * FROM integers ORDER BY ts;

-- SQLNESS PROTOCOL MYSQL
DROP TABLE integers;
