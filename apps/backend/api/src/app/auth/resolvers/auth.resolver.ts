import { Args, Query, Resolver } from '@nestjs/graphql';

import { SignInPayload, SignInResponse } from '@medium-stories/entities';

import { SignIn } from '../decorators/auth.decorator';
import { AuthService } from '../services/auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query('login')
  async login(@SignIn() signInPayload: SignInPayload): Promise<SignInResponse> {
    return await this.authService.login(signInPayload);
  }

  @Query('logout')
  async logout(): Promise<boolean> {
    return true;
  }
}
