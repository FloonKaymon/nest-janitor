import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashPasswordInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const body = context.switchToHttp().getRequest().body;

    if (body.encodedPassword) {
      const saltOrRounds = 10;
      return bcrypt
        .hash(body.encodedPassword, saltOrRounds)
        .then((hashedPassword) => {
          body.encodedPassword = hashedPassword;
          return next.handle().pipe(map((data) => data));
        });
    }

    return next.handle();
  }
}
