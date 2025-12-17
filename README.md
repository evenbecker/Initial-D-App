# The Initial D Cars App

## Configuration
### Asp.Net Core Web API
- Go To `ConfiguredValues.cs`.
- Change the values to your local ports, `GetClient` will be Angulars Default port and `GetServer` will be the server default port, they are defaulty set to: `https://localhost:7099` (server) and `http://localhost:4200` (client).
- Change servername to your local mssql server name, in `appsettings.json`.
- Go to tools in VS studio > nuget package manager > package manager console > write: `Update-Database`

### Angular
- Open the Client using cmd and enter `npm install`.
- Go To `myEnvironment.ts`.
- Change the `ServerUrl` to your server default port, it is defaulty set to: `https://localhost:7099`.


### MSSQL
- Execute the next query scripts in your new created database:

#### Cars:
```
INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Nissan Skyline GT-R R32', 'Nissan','Car-1.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Nissan Skyline GT-R R34', 'Nissan','Car-2.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Nissan Silvia S14', 'Nissan','Car-3.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Nissan Silvia S15', 'Nissan','Car-4.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Toyota AE86', 'Toyota','Car-5.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Toyota Supra', 'Toyota','Car-6.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Toyota MR-S', 'Toyota','Car-7.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Mazda RX-7', 'Mazda','Car-8.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Mazda RX-8', 'Mazda','Car-9.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Mitsubishi Lancer Evolution III', 'Mitsubishi','Car-10.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Mitsubishi Lancer Evolution IV', 'Mitsubishi','Car-11.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Mitsubishi Lancer Evolution V', 'Mitsubishi','Car-12.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Mitsubishi Lancer Evolution VI', 'Mitsubishi','Car-13.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Mitsubishi Lancer Evolution VII', 'Mitsubishi','Car-14.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Honda Civic Type R', 'Honda','Car-15.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Honda Integra Type R', 'Honda','Car-16.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Honda S2000', 'Honda','Car-17.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Honda NSX', 'Honda','Car-18.jpg');

INSERT INTO Cars (Name, Category, ImageSrc)
VALUES ('Subaru Impreza', 'Subaru','Car-19.jpg');

```
#### Users:
```
INSERT INTO Users (Name, Password, LastLogin)
VALUES ('Takumi Fujiwara', 'jumpdafuckup', '2025-12-01 12:00:00');

INSERT INTO Users (Name, Password, LastLogin)
VALUES ('Even Becker', 'whatelse', '2025-12-03 17:30:00');
```
## Running The Project
- Open the Server Project in Visual Studio, then run it (it will also show you the swagger).
- Open the Client using CLI and enter `ng serve`.
- Enter your Angular port url in the browser, it is usually `http://localhost:4200/`.

## Technologies I've Used for the Project
- ASP.Net core 6 Web Api.
- Angular 15.
- Bootstrap 5.
- Microsoft SQL Server.
