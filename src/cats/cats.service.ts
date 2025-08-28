import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class CatsService {
  private readonly apiUrl = 'https://api.thecatapi.com/v1';
  private readonly apiKey = process.env.CAT_API_KEY;

  constructor(private readonly httpService: HttpService) {}

  // GET /breeds
  getBreeds(): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`${this.apiUrl}/breeds`, {
        headers: { 'x-api-key': this.apiKey },
      })
      .pipe(map((response) => response.data));
  }

  // GET /breeds/:breed_id
  getBreedById(breedId: string): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`${this.apiUrl}/breeds/${breedId}`, {
        headers: { 'x-api-key': this.apiKey },
      })
      .pipe(map((response) => response.data));
  }

  // GET /breeds/search?q=...
  searchBreeds(query: string): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`${this.apiUrl}/breeds/search?q=${query}`, {
        headers: { 'x-api-key': this.apiKey },
      })
      .pipe(map((response) => response.data));
  }
}