import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const booking = pgTable('booking', {
  movieName: varchar('movie_name'),
  theaterName: varchar('theater_name'),
  ticketId: varchar('ticket_id').primaryKey(),
  showName: varchar('show_name'),
  seatNumber: integer('seat_number').array(),
  bookDate: varchar('book_date'),
  status: varchar('status'),
});
