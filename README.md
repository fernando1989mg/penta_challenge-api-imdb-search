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
    
    
