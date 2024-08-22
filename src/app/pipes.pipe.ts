import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes',
  standalone: true
})
export class PipesPipe implements PipeTransform {

  transform(tasks: any[], status: string): any[] {
    return tasks.filter(task => task.status === status);
  }
}
