export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  [key: string]: string | boolean | number | null;
}

export interface MovieResponse {
  page?: number;
  total_pages?: number;
  total_results?: number;
  results?: Movie[];
}
