import { Controller, Get ,Body} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import {Post} from '@nestjs/common/utils/decorators/request-mapping.decorator';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
  @Post()
  async create(@Body() Photo: Photo) {
      this.photoService.create(Photo);
  }
}
