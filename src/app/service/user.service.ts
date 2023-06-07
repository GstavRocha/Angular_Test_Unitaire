import { Injectable } from '@angular/core';
import { User } from '../class/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: {id: number, name: string}[];
  constructor() {
    this.user = [
      {id: 1, name: "João"},
      {id: 2, name: "Maria"},
      {id: 3, name: "Pedro"},
      {id: 4, name: "Gustavo"},

    ];
   }
   getUserById(id: number, name:string): {id: number , name: string}| undefined{
    return this.user.find(user => user.id === id);

   }
}
