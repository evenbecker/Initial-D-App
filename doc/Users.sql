CREATE TABLE Users   
(Id int IDENTITY    PRIMARY KEY NOT NULL,  
Name nvarchar(max) NOT NULL,  
Password nvarchar(max) NOT NULL,

);

INSERT INTO Users (Name, Password)
VALUES ('Takumi Fujiwara', 'jumpdafuckup');

INSERT INTO Users (Name, Password)
VALUES ('Even Becker', 'whatelse');