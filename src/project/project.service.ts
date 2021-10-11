import { Injectable } from '@nestjs/common';
import { ProjectInterface } from './project.interface';

@Injectable()
export class ProjectService {
  private readonly projects: Array<ProjectInterface> = [];

  async create(project: ProjectInterface) {
    // return await ProjectModel.create(project)
  }

  // Promise<Array<ProjectInterface>>
  async findAll() {
    // return await ProjectModel.find();
  }

  single(id: string): ProjectInterface {
    return this.projects.find(item => String(item.id) === id);
  }
}
