import { Mapper } from '@automapper/core';
import { InjectMapper, MapInterceptor, MapPipe } from '@automapper/nestjs';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Video } from './models/video';
import { VideoDto } from './models/video.dto';
import { VideoQuery } from './models/video.query';
import { VideosService } from './videos.service';

@Controller('videos')
@ApiTags('videos')
export class VideosController {
  constructor(
    private readonly videos: VideosService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Get()
  @ApiOkResponse({ type: [Video] })
  @UseInterceptors(MapInterceptor(VideoDto, Video, { isArray: true }))
  async findAll(@Query() query: VideoQuery): Promise<Video[]> {
    return await this.videos.findAll(query);
  }

  @Get(':id')
  @UseInterceptors(MapInterceptor(VideoDto, Video))
  async findOne(@Param('id') id: string): Promise<Video> {
    return await this.videos.findOne(id);
  }

  @Post()
  @UseInterceptors(MapInterceptor(VideoDto, Video))
  async create(@Body(MapPipe(Video, VideoDto)) video: Video): Promise<Video> {
    return await this.videos.create(video);
  }

  @Delete(':id')
  @UseInterceptors(MapInterceptor(VideoDto, Video))
  async delete(@Param('id') id: string): Promise<Video> {
    return await this.videos.delete(id);
  }

  @Put(':id')
  @UseInterceptors(MapInterceptor(VideoDto, Video))
  async update(
    @Param('id') id: string,
    @Body(MapPipe(Video, VideoDto)) video: Video,
  ) {
    return await this.videos.update(id, video);
  }
}
