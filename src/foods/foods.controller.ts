import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateFoodDto } from "./dto/create-food.dto";
import { FoodService } from "./foods.services";
import { Food } from "./interface/food.interface";

@Controller('Foods')
export class FoodController {
    constructor(private foodsService: FoodService){}

    @Post()
    async create(@Body() createFoodDto:CreateFoodDto){
        this.foodsService.create(createFoodDto);
    }

    @Get()
    async findAll(): Promise<Food[]>{
        return this.foodsService.findAll();
    }

}