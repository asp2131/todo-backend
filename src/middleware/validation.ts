import { body } from 'express-validator';

export const createTaskValidation = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 100 })
    .withMessage('Title must be less than 100 characters'),
  body('color')
    .optional(),
    // .isIn(['red', 'blue', 'green', 'gray'])
    // .withMessage('Invalid color selection'),
  body('completed')
    .optional()
    .isBoolean()
    .withMessage('Completed must be a boolean'),
];

export const updateTaskValidation = [
  ...createTaskValidation,
];