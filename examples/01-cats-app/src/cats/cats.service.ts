import {Component} from '@nestjs/common';
import {Cat} from './interfaces/cat.interface';
import {CatsModule} from './cats.module';

@Component()
export class CatsService {
    private tempCat:Cat={name: 'a', age: 2, breed: 'aass'}
    private readonly cats: Cat[] = [this.tempCat];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}
