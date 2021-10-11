import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDto } from './project.dto';
import { RolesGuard } from '../utils/guard/roles.guard';
import { LoggingInterceptor } from '../utils/interceptor/logging.interceptor';
import { ExcludeNullInterceptor } from '../utils/interceptor/excludeNull.interceptor';
import { ErrorsInterceptor } from '../utils/interceptor/exception.interceptor';
import { TimeoutInterceptor } from '../utils/interceptor/timeout.interceptor';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Project } from './project.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('project')
@ApiTags('项目工程')
// @UseInterceptors(ErrorsInterceptor)
@UseInterceptors(TimeoutInterceptor)
@UseInterceptors(ExcludeNullInterceptor)
// @UseInterceptors(LoggingInterceptor)
// @UseGuards(RolesGuard)
export class ProjectController {
  constructor(
    @InjectModel(Project) private readonly ProjectModel: ReturnModelType<typeof Project>,
    private readonly projectService: ProjectService
  ) {}

  @Get('query')
  async query(){
    return await this.ProjectModel.find()
    // return await this.projectService.findAll()
  }

  @Delete('delete:id')
  @ApiOperation({ summary: '删除单个记录'})
  async remove(@Param('id') id : string){
    await this.ProjectModel.findByIdAndDelete(id)
    return {
      success: true
    }
  }

  @Put('update:id')
  @ApiOperation({ summary: '更新记录'})
  async update(@Param('id') id: string, @Body() updateDto: ProjectDto) {
    await this.ProjectModel.findByIdAndUpdate(id, updateDto)
    return {
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({ summary: '单个明细'})
  async singleQuery(@Param('id') id: string){
    return await this.ProjectModel.findById(id)
  }

  @Post()
  @ApiOperation({ summary: '明细' })
  async setProject(@Body() projectDto: ProjectDto) {
    await this.ProjectModel.create(projectDto)
    return {
      success: true
    }
  }
}
