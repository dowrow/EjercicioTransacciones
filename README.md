
Citibox hiring exercise
====================================

## Intro
En Citibox estamos actualizando nuestros paneles de gestión propios porque ahora mismo están hechos en COBOL y no encontramos gente que sepa COBOL :/ Para la primera versión vamos a tener un solo panel que muestre un listado de las transacciones que ocurren en la plataforma. Ahora mismo el equipo técnico está hasta arriba con unas nuevas funcionalidades así que necesitamos que nos echen un cable :)

## Requisitos funcionales
Partiendo de nuestra API necesitamos una página web que liste las transacciones que ya está dando el backend. Los chic@s de la oficina (gestión y control) nos cuentan unas primeras necesidades:

### Gente de gestión

Este perfil necesita ver toda la información de la API además de unas necesidades concretas:

- Hay que aplicar unos descuentos en función de la cantidad de dinero:
    - Descuento del 30% si el dinero mayor que 8000€
    - Descuento del 20% si el dinero está entre 8000€ y 4000€.
    - Descuento del 10% si el dinero supera los 1000€

- Algunas veces nuestros usuarios sufre de parkinson y pulsa dos veces el botón de mandar envío (en otra web). Así que tenemos envíos duplicados (mismo usuario y dinero). Tenemos que ver que envíos están duplicados.

- Algunos países necesitan documentación especial en la aduana. Necesitamos marcar los envíos con dichos países.
    - Países especiales: ESP, REU, AND, ATA.

No obstante no sabemos si en un futuro se van a añadir más casos concretos para la gente de gestión.

### Gente de control
Para comprobar que todo el trabajo se realiza correctamente y sacar alguna que otra métrica. Hay dos personas que necesitan ver las transacciones pero no necesitan saber la información de las localizaciones (origen y destino).

El equipo de Marketing está muy concienciado con que todos los desarrollos deben mantener una línea uniforme y acorde a la web comercial de Citibox. Sin olvidarnos de la labor de sabueso que desempeña nuestro equipo de QA (son muy meticulosos en su trabajo!).

Además de todo lo anterior tenemos a un inversor muy importante que le gustan las páginas web en tiempo real y que se vean en todos los equipos.

## Server API 
### GET hi:
- http://localhost:8080/api
```
{"description":"Hi developer!","version":"0.3.0"}
```

### GET transactions :
- http://localhost:8080/api/transactions?all=false&numberPerPage=10
- http://localhost:8080/api/transactions?all=true&numberPerPage=30
```
{"transactions":[{"transaction_id":"n4d9s86n3r","origin":{"id":"ING","lat":"-45.89765358649045","lng":"51.42390969869689","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"},"destination":{"id":"MDA","lat":"14.543026546297313","lng":"69.08560348194658","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"},"money_amount":"12401€","user_id":"vmjyktdse8","courier_id":"nhsl9mf","new_user":"no","created_at":"2016-09-06T07:31:06.050Z"}]}
```

## API SERVER

### Arrancar el server
```
cd server
docker build -t server .
docker run -i -t server
```

### Parar el server
```
docker stop elated_tereshkova
```

## Requisitos del ejercicio
- No se puede modificar el codigo del server
- Puedes elegir cualquier tecnología para hacer el cliente

## Soporte

Aunque el equipo de programación este hasta arriba se ha comprometido a resolver dudas y preguntas que te puedan surgir, si tienes algún problema avisa!
