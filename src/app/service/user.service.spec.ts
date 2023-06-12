import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService',()=>{
  let userService: UserService;

  beforeEach(()=>{
    userService = new UserService();
  })
  it('Deve retornar um usuário existente por ID e por nome', ()=>{
    const userId:number = 2;
    const userName:string = "Maria"
    const user = userService.getUserById(userId, userName);
    expect(user).toBeDefined();
    expect(user?.id).toEqual(userId);
    expect(user?.name).toEqual(userName);
  })
  it('deve retornar undefined para um usuário inexistente por Id', ()=>{
    const userId: number = 10;
    const userName: string = "Paulo";
    const user = userService.getUserById(userId,userName);
    expect(user).toBeUndefined();
  })
})
