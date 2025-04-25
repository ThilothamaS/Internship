export class ICreateTheaterDto {
  theaterName: string;
  theaterId: string;
  description: string;
  rating: number;
  location: string;
  shows: string[];
  totalNumberOfSeats: number;
}

export class ICreateMovieDto {
  movieName: string;
  movieId: string;
  entryId: string;
  theaterId: string;
  rating: number;
  shows: string[];
  validity: string;
}

export class ICreateBookingDto {
  movieName: string;
  theaterName: string;
  showName: string;
  seatNumber: number[];
  bookDate: string;
  status: string;
}
