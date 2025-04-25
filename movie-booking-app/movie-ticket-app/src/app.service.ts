import { Injectable } from '@nestjs/common';
import { ICreateTheaterDto } from './data.interface';
import { database } from 'db/database.config';
import { eq } from 'drizzle-orm';
import { theater } from 'schema';
import { generateID } from '@jetit/id';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async createTheater(data: ICreateTheaterDto) {
    const selectTheater = await database()
      .select()
      .from('theater')
      .where(eq(theater.theaterName, data.theaterName));

    if (selectTheater.length > 0) {
      return {
        status: 'SUCCESS',
        data: selectTheater[0].theaterName,
      };
    }

    const newId = generateID('HEX');
    const insertValue = await database().insert('theater').value({
      theaterName: data.theaterName,
      theaterid: newId,
      location: data.location,
    });
  }
}
