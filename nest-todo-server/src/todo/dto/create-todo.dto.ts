import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    description: 'The title of the todo item',
    example: 'Buy groceries',
  })
  title: string;

  @ApiProperty({
    description: 'The description of the todo item',
    example: 'Buy milk and bread',
    required: false,
  })
  description: string;
}
