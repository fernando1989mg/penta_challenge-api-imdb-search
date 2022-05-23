import { FilmTypes } from "src/common/interfaces/filmtypes.interface"
import { Actor, FullCast, ListDirectors } from "src/common/interfaces/fullcast.interface"
import { ReqResAdvanceSearch } from "src/common/interfaces/search.interface"

export const ReqResAdvanceSearchMockVikingMovie:ReqResAdvanceSearch = {
    "queryString": "?title=viking&title_type=Movie",
    "results": [
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
    ],
    "errorMessage": null
}

export const ReqResAdvanceSearchMockVikingEpisode:ReqResAdvanceSearch = {
    "queryString": "?title=viking&title_type=Episode",
    "results": [
        {
            "id": "tt2306299",
            "image": "https://imdb-api.com/images/original/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6837_AL_.jpg",
            "title": "Vikings",
            "description": "(2013–2020)",
            "runtimeStr": "44 min",
            "genres": "Action, Adventure, Drama",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                }
            ],
            "contentRating": "TV-MA",
            "imDbRating": "8.5",
            "imDbRatingVotes": "509659",
            "metacriticRating": null,
            "plot": "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.",
            "stars": "Katheryn Winnick, Gustaf Skarsgård, Alexander Ludwig, Georgia Hirst",
            "starList": [
                {
                    "id": "tt2306299",
                    "name": "Katheryn Winnick"
                }
            ],
            "linkDirectors": "http://localhost:3000/imdb/viking/tt2306299/directors"
        }
    ],
    "errorMessage": null
}

export const ReqResAdvanceSearchMockAxeMovie:ReqResAdvanceSearch = {
    "queryString": "?title=viking&title_type=Movie",
    "results": [
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
            "imDbRatingVotes": "38221",
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
    ],
    "errorMessage": null
}

export const ReqResAdvanceSearchMockAxeEpisode:ReqResAdvanceSearch = {
    "queryString": "?title=viking&title_type=Movie",
    "results": [
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
                },
                {
                    "key": "Romance",
                    "value": "Romance"
                }
            ],
            "contentRating": "PG-13",
            "imDbRating": "6.4",
            "imDbRatingVotes": "38221",
            "metacriticRating": "54",
            "plot": "A San Francisco poet who fears commitment suspects his girlfriend may have a knack for killing off her significant others.",
            "stars": "Thomas Schlamme, Mike Myers, Nancy Travis, Anthony LaPaglia, Amanda Plummer",
            "starList": [
                {
                    "id": "tt0108174",
                    "name": "Thomas Schlamme"
                },
                {
                    "id": "tt0108174",
                    "name": "Mike Myers"
                }
            ],
            "linkActors": "http://localhost:3000/imdb/axe/tt0108174/actors"
        }
    ],
    "errorMessage": null
}

export const FullCastMock:FullCast = {
    "imDbId": "tt10538348",
    "title": "Viking Warrior Women",
    "fullTitle": "Viking Warrior Women (2019)",
    "type": "Movie",
    "year": "2019",
    "directors": {
        "job": "Director",
        "items": [
            {
                "id": "nm0281507",
                "name": "Richard Fleischer",
                "description": ""
            }
        ]
    },
    "writers": {
        "job": "Writer",
        "items": [
            {
                "id": "nm5483636",
                "name": "Sebastian Peiter",
                "description": ""
            }
        ]
    },
    "actors": [
        {
            "id": "nm0000196",
            "image": "https://imdb-api.com/images/original/MV5BMTY0MTM1MTM5Nl5BMl5BanBnXkFtZTcwNzA1OTM3MQ@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Mike Myers",
            "asCharacter": "Charlie Mackenzie / Stuart Mackenzie"
        },
        {
            "id": "nm0001802",
            "image": "https://imdb-api.com/images/original/MV5BMWUwOGQ3ZjgtZTk2MC00YzEyLThjZTctMDc2YmE4MGZlMjYwXkEyXkFqcGdeQXVyODE5NDg0NTU@._V1_Ratio0.7273_AL_.jpg",
            "name": "Nancy Travis",
            "asCharacter": "Harriet Michaels"
        }
    ],
    "others": [
        {
            "job": "Produced by",
            "items": [
                {
                    "id": "nm1453730",
                    "name": "Tim Evans",
                    "description": "co-producer: Smithsonian Channel"
                },
                {
                    "id": "nm7985915",
                    "name": "Caroline Haidacher",
                    "description": "co-producer: ORF"
                }
            ]
        },
        {
            "job": "Music by",
            "items": [
                {
                    "id": "nm0769561",
                    "name": "Jan Tilman Schade",
                    "description": "(original music by)"
                },
                {
                    "id": "nm7408273",
                    "name": "Klaus Wagner",
                    "description": "(original music by)"
                }
            ]
        }
    ],
    "errorMessage": ""
}

export const SearchVikingMock: FilmTypes = {
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
        }],
    "episodes": [
        {
            "id": "tt2306299",
            "image": "https://imdb-api.com/images/original/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6837_AL_.jpg",
            "title": "Vikings",
            "description": "(2013–2020)",
            "runtimeStr": "44 min",
            "genres": "Action, Adventure, Drama",
            "genreList": [
                {
                    "key": "Action",
                    "value": "Action"
                }
            ],
            "contentRating": "TV-MA",
            "imDbRating": "8.5",
            "imDbRatingVotes": "509659",
            "metacriticRating": null,
            "plot": "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.",
            "stars": "Katheryn Winnick, Gustaf Skarsgård, Alexander Ludwig, Georgia Hirst",
            "starList": [
                {
                    "id": "tt2306299",
                    "name": "Katheryn Winnick"
                }
            ],
            "linkDirectors": "http://localhost:3000/imdb/viking/tt2306299/directors"
        }
    ]  
}

export const SearchAxeMock: FilmTypes = {
    movies:[{
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
        "imDbRatingVotes": "38221",
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
    }],
    episodes:[{
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
            },
            {
                "key": "Romance",
                "value": "Romance"
            }
        ],
        "contentRating": "PG-13",
        "imDbRating": "6.4",
        "imDbRatingVotes": "38221",
        "metacriticRating": "54",
        "plot": "A San Francisco poet who fears commitment suspects his girlfriend may have a knack for killing off her significant others.",
        "stars": "Thomas Schlamme, Mike Myers, Nancy Travis, Anthony LaPaglia, Amanda Plummer",
        "starList": [
            {
                "id": "tt0108174",
                "name": "Thomas Schlamme"
            },
            {
                "id": "tt0108174",
                "name": "Mike Myers"
            }
        ],
        "linkActors": "http://localhost:3000/imdb/axe/tt0108174/actors"
    }]
}

export const DirectorsMock: ListDirectors[] = [
    {
        "id": "nm0281507",
        "name": "Richard Fleischer",
        "description": ""
    }
]

export const ActorsMock: Actor[] = [
    {
        "id": "nm0000196",
        "image": "https://imdb-api.com/images/original/MV5BMTY0MTM1MTM5Nl5BMl5BanBnXkFtZTcwNzA1OTM3MQ@@._V1_Ratio0.7273_AL_.jpg",
        "name": "Mike Myers",
        "asCharacter": "Charlie Mackenzie / Stuart Mackenzie"
    },
    {
        "id": "nm0001802",
        "image": "https://imdb-api.com/images/original/MV5BMWUwOGQ3ZjgtZTk2MC00YzEyLThjZTctMDc2YmE4MGZlMjYwXkEyXkFqcGdeQXVyODE5NDg0NTU@._V1_Ratio0.7273_AL_.jpg",
        "name": "Nancy Travis",
        "asCharacter": "Harriet Michaels"
    }
]