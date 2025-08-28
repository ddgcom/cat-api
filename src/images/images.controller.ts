import { Controller, Get, Query } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get('/by-breed')
  getImagesByBreedId(@Query('breed_id') breedId: string) {
    return this.imagesService.getImagesByBreedId(breedId);
  }
}