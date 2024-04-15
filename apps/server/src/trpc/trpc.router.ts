import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trcp: TrpcService) {}

  appRouter = this.trcp.router({
    hello: this.trcp.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(({ input }) => {
        return `Hello ${input.name ? input.name : 'Peter'}`;
      }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
