interface MovieInterface {
    adult: boolean;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

class Movie {
    private adultsOnly: boolean;
    id: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: Date;
    title: string;
    voteAverage: number;
    voteCount: number;

    constructor (data: MovieInterface) {
        this.adultsOnly = data.adult;
        this.id = data.id;
        this.originalLanguage = data.original_language;
        this.originalTitle = data.original_title;
        this.overview = data.overview;
        this.popularity = data.popularity;
        this.posterPath = data.poster_path;
        this.releaseDate = new Date(data.release_date);
        this.title = data.title;
        this.voteAverage = data.vote_average;
        this.voteCount = data.vote_count;
    }

    isOnlyForAdults (): boolean {
        return (this.adultsOnly);
    }
}

export { Movie, MovieInterface };