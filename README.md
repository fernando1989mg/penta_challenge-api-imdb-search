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
