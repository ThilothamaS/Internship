import { integer, pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const theater = pgTable('theater', {
  theaterName: varchar('theater_name'),
  theaterId: varchar('theater_id').primaryKey(),
  location: varchar('location'),
  description: varchar('description'),
  totalNumberOfSeats: integer('total_number_of_seats'),
  shows: text('shows').array(),
  rating: integer('rating'),
});
