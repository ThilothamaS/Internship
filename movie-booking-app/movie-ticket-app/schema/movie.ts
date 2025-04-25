import { integer, pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const movie = pgTable('movie', {
  movieName: varchar('movie_name'),
  movieId: varchar('movie_id'),
  entryId: varchar('entry_id').primaryKey(),
  theaterId: varchar('theater_id'),
  rating: integer('rating'),
  shows: text('shows').array(),
  validity: varchar('validity'),
});
