export interface ReqResAdvanceSearch {
    queryString:  string;
    results:      Film[];
    errorMessage: null;
}

export interface Film {
    id:               string;
    image:            string;
    title:            string;
    description:      string;
    runtimeStr:       null | string;
    genres:           null | string;
    genreList:        GenreList[] | null;
    contentRating:    null | string;
    imDbRating:       null | string;
    imDbRatingVotes:  null | string;
    metacriticRating: null | string;
    plot:             null | string;
    stars:            null | string;
    starList:         StarList[] | null;
    linkDirectors?:    string;
    linkActors?:    string;
}

export interface GenreList {
    key:   string;
    value: string;
}

export interface StarList {
    id:   string;
    name: string;
}