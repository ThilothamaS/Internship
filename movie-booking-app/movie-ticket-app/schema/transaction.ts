import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const transaction = pgTable('transaction', {
  movieId: varchar('movie_id'),
  theaterId: varchar('theater_id'),
  showName: varchar('show_name'),
  seatNumber: integer('seat_number'),
  bookDate: varchar('book_date'),
  status: varchar('status'),
});
