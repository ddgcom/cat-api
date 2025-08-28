import { Controller, Get, Param, Query } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('/breeds')
  getBreeds() {
    return this.catsService.getBreeds();
  }

  @Get('/breeds/search')
  searchBreeds(@Query('q') query: string) {
    return this.catsService.searchBreeds(query);
  }

  @Get('/breeds/:breed_id')
  getBreedById(@Param('breed_id') breed_id: string) {
    return this.catsService.getBreedById(breed_id);
  }
}