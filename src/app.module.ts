import { Module } from '@nestjs/common';
import { TrainModule } from './train.module';

@Module({
  imports: [TrainModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
