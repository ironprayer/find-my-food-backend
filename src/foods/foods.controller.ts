import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('foods')
export class FoodsController {

    @Get()
    getAll(){
        return "This will return all foods"
    }

    @Get("/:id")
    getOne(@Param("id") id:string){
        return `This will return one foods with the id: ${id}`;
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
