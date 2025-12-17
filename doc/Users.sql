CREATE TABLE Users   
(Id int IDENTITY    PRIMARY KEY NOT NULL,  
Name nvarchar(max) NOT NULL,  
Password nvarchar(max) NOT NULL,
LastLogin datetime2 NOT NULL
);

INSERT INTO Users (Name, Password, LastLogin)
VALUES ('Takumi Fujiwara', 'jumpdafuckup', '2025-12-01 12:00:00');

INSERT INTO Users (Name, Password, LastLogin)
VALUES ('Even Becker', 'whatelse', '2025-12-03 17:30:00');