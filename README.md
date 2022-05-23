# PentaFinanciero Challenge - By Fernando Muñoz

Este proyecto es una API rest que consume la api de IMDB para listar películas
y capítulos de series que tengan la palabra Viking o Axe, está programado en 
Javascript con nodejs y Nestjs como framework

## Cómo ejecutarlo en local?

*   Clonar el proyecto y ejecutar el siguiente comando:

    ```
    npm run start:dev
    ```

## Cómo ejecutar los test?

*   Clonar el proyecto y ejecutar el siguiente comando:

    ```
    npm run test
    ```
    
*   Dismlaimer: por temas de tiempo solo se hicieron test unitarios

## Cómo funciona?

*   El servicio solo expone cuatro endpoint:

    ```
    /imdb/axe
    ```
    ```
    /imdb/viking
    ```
    ```
    /imdb/viking/{id película o serie}/directors
    ```
    ```
    /imdb/axe/{id película o serie}/actors
    ```
    
    
## Ejemplos de respuestas

*   /imdb/axe (respuesta resumida) poner atención a los campos "runtimeStr" y "linkActors":

    ```json
    {
        "movies": [
            {
                "id": "tt0108174",
                "image": "https://imdb-api.com/images/original/MV5BN2VjOTA4MDEtYmZiYy00MTJiLWEwZTItNzM4Y2IwMzdjNjgzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6837_AL_.jpg",
                "title": "So I Married an Axe Murderer",
                "description": "(1993)",
                "runtimeStr": "93 min",
                "genres": "Comedy, Romance",
                "genreList": [
                    {
                        "key": "Comedy",
                        "value": "Comedy"
                    }
                ],
                "contentRating": "PG-13",
                "imDbRating": "6.4",
                "imDbRatingVotes": "38269",
                "metacriticRating": "54",
                "plot": "A San Francisco poet who fears commitment suspects his girlfriend may have a knack for killing off her significant others.",
                "stars": "Thomas Schlamme, Mike Myers, Nancy Travis, Anthony LaPaglia, Amanda Plummer",
                "starList": [
                    {
                        "id": "tt0108174",
                        "name": "Thomas Schlamme"
                    }
                ],
                "linkActors": "http://localhost:3000/imdb/axe/tt0108174/actors"
            }
        ]
    }
    ```
    
    
*   /imdb/viking (respuesta resumida) poner atención a los campos "runtimeStr" y "linkDirectors":

    ```json
    {
        "movies": [
            {
                "id": "tt2290553",
                "image": "https://imdb-api.com/images/original/MV5BNTI0ZjljMzMtNDFlZi00YTM1LTgxY2EtN2Q1ZjNiZTNkMzQ3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.6837_AL_.jpg",
                "title": "Northmen - A Viking Saga",
                "description": "(2014)",
                "runtimeStr": "97 min",
                "genres": "Action, Drama, History",
                "genreList": [
                    {
                        "key": "Action",
                        "value": "Action"
                    }
                ],
                "contentRating": "R",
                "imDbRating": "5.4",
                "imDbRatingVotes": "9944",
                "metacriticRating": "50",
                "plot": "A band of Vikings cross enemy lines and a panicked race begins. The losers will pay with their lives.",
                "stars": "Claudio Fäh, Tom Hopper, Ryan Kwanten, Ken Duken, Charlie Murphy",
                "starList": [
                    {
                        "id": "tt2290553",
                        "name": "Claudio Fäh"
                    }
                ],
                "linkDirectors": "http://localhost:3000/imdb/viking/tt2290553/directors"
            }
        ]
    }
    ```
    
*   /imdb/viking/{id película o serie}/directors

    ```json
    [
        {
            "id": "nm0281507",
            "name": "Richard Fleischer",
            "description": ""
        }
    ]
    ```
    
    
*   /imdb/axe/{id película o serie}/actors

    ```json
    [
        {
            "id": "nm0000196",
            "image": "https://imdb-api.com/images/original/MV5BMTY0MTM1MTM5Nl5BMl5BanBnXkFtZTcwNzA1OTM3MQ@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Mike Myers",
            "asCharacter": "Charlie Mackenzie / Stuart Mackenzie"
        }
    ]
    ```
    
## Cómo está organizado el proyecto

*   Realmente es un proyecto muy pequeño por lo que no me extenderé mucho y explicaré lo relevante, dentro de la carpeta **src** encontrará:

<table>
<tr>
    <th>Carperta&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
    <th>Descripción</th>
</tr>
<tr>
    <td>common</td>
    <td>contiene interfaces o apis de tercero que son transversales para cualquier otro módulo </td>
<tr>
<tr>
    <td>modules</td>
    <td>contiene los módulos del proyecto que en este caso es solo uno, llamado search</td>
<tr>
<tr>
    <td>common/api-providers</td>
    <td>la carpeta api-providers contiene las clases que se usan para llamar a apis de terceros, en este caso la api de IMDB</td>
<tr>
<tr>
    <td>common/interfaces</td>
    <td>contiene las interfaces que son comunes para todos los módulos</td>
<tr>
<tr>
    <td>modules/search</td>
    <td>contiene los archivos que necesarios para que funcione el módule, es decir, controller.ts, service.ts y module.ts</td>
<tr>
<tr>
    <td>modules/search/Test</td>
    <td>contiene los test unitarios para controller y service</td>
<tr>
</table>

*   por último, cabe mencionar que en la raiz del proyecto encontrará un archivo .env.development donde se han declarado variables de entorno
    
    
    
## Cómo se están cumpliendo los requerimientos para producciones Viking?

*   para esto necesitamos revisar algunos de los campos de la respuesta del endpoint /imdb/viking, vamos revisando cómo se cumple lo requerido
    
<table>
<tr>
    <th>Requerimiento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
    <th>Cómo se cumple</th>
</tr>
<tr>
    <td>Obtener los detalles de todas las películas y capítulos de series que contengan la palabra viking en su título</td>
    <td>Se resuelve a través del JSON que responde el endpoint /imdb/viking, el cual contiene dos arrays, movies[] y episodes[]</td>
<tr>
<tr>
    <td>Obtener el listado de directores</td>
    <td>Cada elemento del array de movies o episodes tiene un campo llamado "linkDirectors" que contiene un link para obtener el listado de directores de ese resultado en particular</td>
<tr>
<tr>
    <td>Calcular la duración total de todos los resultados</td>
    <td>Cada elemento del array de movies o episodes tiene un campo llamado "runtimeStr" que indica la duración en minutos de cada resultado</td>
<tr>
</table>



## Cómo se están cumpliendo los requerimientos para producciones Hacha?

*   para esto necesitamos revisar algunos de los campos de la respuesta del endpoint /imdb/axe, vamos revisando cómo se cumple lo requerido
    
<table>
<tr>
    <th>Requerimiento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
    <th>Cómo se cumple</th>
</tr>
<tr>
    <td>Obtener los detalles de todas las películas y capítulos de series que contengan la palabra axe en su título</td>
    <td>Se resuelve a través del JSON que responde el endpoint /imdb/axe, el cual contiene dos arrays, movies[] y episodes[]</td>
<tr>
<tr>
    <td>Obtener el listado de actores principales</td>
    <td>Cada elemento del array de movies o episodes tiene un campo llamado "linkActors" que contiene un link para obtener el listado de actores de ese resultado en particular</td>
<tr>
<tr>
    <td>Calcular la duración total de todos los resultados</td>
    <td>Cada elemento del array de movies o episodes tiene un campo llamado "runtimeStr" que indica la duración en minutos de cada resultado</td>
<tr>
</table>
