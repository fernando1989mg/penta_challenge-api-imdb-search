export interface FullCast {
    imDbId:       string;
    title:        string;
    fullTitle:    string;
    type:         string;
    year:         string;
    directors:    Directors;
    writers:      Directors;
    actors:       Actor[];
    others:       Directors[];
    errorMessage: string;
}

export interface Actor {
    id:          string;
    image:       string;
    name:        string;
    asCharacter: string;
}

export interface Directors {
    job:   string;
    items: ListDirectors[];
}

export interface ListDirectors {
    id:          string;
    name:        string;
    description: string;
}
