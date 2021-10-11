import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Project } from './project.model';

@Module({
  imports: [TypegooseModule.forFeature([Project])],
  controllers: [ProjectController],
  providers: [ProjectService]
})

export class ProjectModule {}
