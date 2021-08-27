import { Module } from '@nestjs/common';
import { FoodsController } from './foods/foods.controller';
import { FoodsService } from './foods/foods.service';

@Module({
  imports: [],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class AppModule {}
