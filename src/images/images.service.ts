import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ImagesService {
  private readonly apiUrl = 'https://api.thecatapi.com/v1';
  private readonly apiKey = process.env.CAT_API_KEY;

  constructor(private readonly httpService: HttpService) {}

  // GET /images/search?breed_ids=...
  getImagesByBreedId(breedId: string): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`${this.apiUrl}/images/search?breed_ids=${breedId}`, {
        headers: { 'x-api-key': this.apiKey },
      })
      .pipe(map((response) => response.data));
  }
}