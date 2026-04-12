CREATE DATABASE IF NOT EXISTS online_library;
USE online_library;

CREATE USER 'myuser'@'%' IDENTIFIED BY 'mypassword';
GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE ON online_library.* TO 'myuser'@'%';
FLUSH PRIVILEGES;