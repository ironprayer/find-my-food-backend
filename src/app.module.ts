import { Module } from '@nestjs/common';
import { FoodsController } from './foods/foods.controller';

@Module({
  imports: [],
  controllers: [FoodsController],
  providers: [],
})
export class AppModule {}
