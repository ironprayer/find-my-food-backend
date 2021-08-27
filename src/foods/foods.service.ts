import { Injectable } from '@nestjs/common';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodsService {
    private food:Food[] = [];

    getAll():Food[]{
        return this.food;
    }

    getOne(id:string):Food{
        return this.food.find(food => food.number === +id)
    }

    deleteOne(id:string):boolean{
        this.food.filter(food=>food.number !== +id);
        return true;
    }

    create(foodData){
        
    }
}
