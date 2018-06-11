
Citibox hiring exercise
====================================

## Intro
En Citibox estamos actualizando nuestros paneles de gestión propios porque ahora mismo están hechos en COBOL y no encontramos gente que sepa COBOL :/ Para la primera versión vamos a tener un solo panel que muestre un listado de las transacciones que ocurren en la plataforma. Ahora mismo el equipo técnico está hasta arriba con unas nuevas funcionalidades así que necesitamos que nos echen un cable :)
Los paneles actuales es una aplicación con muchas ventanas y diferentes tipos de usuarios (roles) y aunque esta es una primera iteratión, en un futuro queremos mover todos los paneles al nuevo sistema.

## Necesidades
Partiendo de nuestra API necesitamos una página web que liste las transacciones que ya está dando el backend. Los chic@s de la oficina (gestión y control) nos cuentan unas primeras necesidades:

### Gente de gestión

La gente de gestión es quien trata con nuestros clientes cuando estos se lían o no saben como seguir, son los primeros en detectar un problema en nuestra plataforma y necesitan toda la información posible. Además tienen unas ideas concretas para agilizar su trabajo:

- Hay que aplicar unos descuentos en función de la cantidad de dinero:
    - Descuento del 30% si el dinero mayor que 8000€
    - Descuento del 20% si el dinero está entre 8000€ y 4000€.
    - Descuento del 10% si el dinero supera los 1000€

- Algunas veces nuestros usuarios sufren de parkinson y pulsan dos veces el botón de realizar envío (en otra web). Así que tenemos envíos duplicados (mismo usuario y dinero). Tenemos que ver que envíos están duplicados.

- Algunos países necesitan documentación especial en la aduana. Necesitamos marcar los envíos con dichos países.
    - Países especiales: ESP, REU, AND, ATA.

No sabemos si en un futuro se van a añadir más casos concretos para la gente de gestión.

### Gente de control
Para comprobar que todo el trabajo se realiza correctamente y sacar alguna que otra métrica. Hay cuatro personas que necesitan ver las transacciones pero no necesitan saber la información de las localizaciones (origen y destino).

## Entorno de Citibox

El equipo de Marketing está muy concienciado con que todos los desarrollos deben mantener una línea uniforme y acorde a la web comercial de Citibox. Sin olvidarnos de la labor de sabueso que desempeña nuestro equipo de QA (son muy meticulosos en su trabajo!).

Un compañero de gestión en un viaje espiritual a Nepal conocio a una chica, él ahora se ha hecho budista y vegetariano. Después de 3 años de noviazgo se casan en unos meses y nuestro compi pasa a trabajar en remoto desde Nepal aunque el internet allí va fatal. Son la pareja más feliz del edificio y su alegría se contagia mucho, ojalá los conozcas. No tenemos claro que velocidad de conexión va a tener o que dispositivos podrá usar nuestro compi.

Además tenemos a un inversor muy importante que le gustan las páginas web en tiempo real, él siempre presume de nuestras webs con sus colegas en su móvil mientras fuman habanos.

## Server API 
### GET hi:
- http://localhost:8080/api
```
{"description":"Hi developer!","version":"0.3.0"}
```

### GET transactions :
- http://localhost:8080/api/transactions?all=false&page=1&numberPerPage=10
- http://localhost:8080/api/transactions?all=true&numberPerPage=30
```
{"transactions":[{"transaction_id":"n4d9s86n3r","origin":{"id":"ING","lat":"-45.89765358649045","lng":"51.42390969869689","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"},"destination":{"id":"MDA","lat":"14.543026546297313","lng":"69.08560348194658","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"},"money_amount":"12401€","user_id":"vmjyktdse8","courier_id":"nhsl9mf","new_user":"no","created_at":"2016-09-06T07:31:06.050Z"}]}
```

## API SERVER

### Arrancar el server

```
cd server
docker build -t server .

El primer arranque: docker run -p 8080:8080 --name server server
El resto de veces: docker start -a server
```

### Parar el server
(En otro terminal)
```
docker stop server
```

## Requisitos del ejercicio
- No se puede modificar el codigo fuente del server.
- Puedes elegir cualquier tecnología para hacer el cliente.

## Soporte
Aunque el equipo de programación este hasta arriba se ha comprometido a resolver dudas y preguntas que te puedan surgir, si tienes algún problema avisa!
