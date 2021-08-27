import { Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Food } from './entities/food.entity';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
    constructor(private readonly foodService: FoodsService){}

    @Get()
    getAll():Food[]{
        return this.foodService.getAll();
    }

    @Get("search")
    search(@Query("year") searchingYear: string){
        return `We are searching for movie with a title:`
    }

    @Get("/:id")
    getOne(@Param("id") id:string){
        return this.foodService.getOne(id);
    }

    @Post()
    create(){
        return "This will create a foods";
    }

    @Delete("/:id")
    remove(@Param("id") id:string){
        return `This will delete foods with thi id : ${id}`
    }

    @Patch('/:id')
    path(@Param("id") id:string){
        return `This will update foods with this id : ${id}`
    }


}
