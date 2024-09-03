// import { validationResult } from "express-validator";
// import { getTodoById } from "../../controllers/todo.controller";
// import { todoDb } from "../../models/todo.model";
// import { getTodoByIdMock, mockRequest, mockResponse } from "../mocks/todo.mock";



// // describe('getTodoById', () => {
// //     it('get todo by id', async () => {
// //         await getTodoById(mockRequest, mockResponse,)
// //         expect(mockResponse.send)
// //             .toHaveBeenCalledWith(getTodoByIdMock)
// //     })
// // })

// jest.mock('../models/todo.model', () => ({
//     find: jest.fn().mockResolvedValue(mockTodoDb)
//   }));
  
//   // Test for getTodoById
//   describe('getTodoById', () => {
//     it('should return todos for a given user ID', async () => {
//       const mockValidationResult = validationResult as jest.Mock;
//       mockValidationResult.mockReturnValue({ isEmpty: () => true }); // Simulate successful validation
  
//       await getTodoById(mockRequest, mockResponse);
  
//       expect(mockResponse.status).toHaveBeenCalledWith(200); // Expect status 200
//       expect(mockResponse.json).toHaveBeenCalledWith(mockTodoDb); // Expect the response to contain the mock data
//     });
  
//     it('should return 400 if validation fails', async () => {
//       const mockValidationResult = validationResult as jest.Mock;
//       mockValidationResult.mockReturnValue({
//         isEmpty: () => false,
//         array: () => [{ msg: 'Invalid ID' }]
//       }); // Simulate validation error
  
//       await getTodoById(mockRequest, mockResponse);
  
//       expect(mockResponse.status).toHaveBeenCalledWith(400); // Expect status 400
//       expect(mockResponse.json).toHaveBeenCalledWith({ errors: [{ msg: 'Invalid ID' }] });
//     });
  
//     it('should return 500 if there is a server error', async () => {
//       jest.spyOn(todoDb, 'find').mockRejectedValueOnce(new Error('Server error')); // Simulate a DB error
  
//       await getTodoById(mockRequest, mockResponse);
  
//       expect(mockResponse.status).toHaveBeenCalledWith(500); // Expect status 500
//       expect(mockResponse.json).toHaveBeenCalledWith(new Error('Server error'));
//     });
//   });