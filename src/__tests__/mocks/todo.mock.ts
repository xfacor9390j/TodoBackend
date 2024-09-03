import { Request, Response } from "express-serve-static-core";


export const mockRequest = {
    params: { id: "97612010" } 
  } as unknown as Request;
export const mockResponse = {
    status: jest.fn(() => mockResponse),
    json: jest.fn(),
    send: jest.fn()
} as unknown as Response;

export const getTodoByIdMock= [
    {
      "_id": "66c995c6423648575a1c82c6",
      "title": "do nothing ",
      "description": "do english homework",
      "status": true,
      "userId": "97612010",
      "deadline": "2024-08-25T08:11:50.226Z",
      "__v": 0
    },
    {
      "_id": "66c9966b423648575a1c82c9",
      "title": "do math here homework",
      "description": "do math homework",
      "status": false,
      "userId": "97612010",
      "deadline": "2024-08-25T08:14:35.642Z",
      "__v": 0
    },
    {
      "_id": "66c996bc8f7c46ae01f4fe05",
      "title": "do math here homework",
      "description": "do math homework",
      "status": false,
      "userId": "97612010",
      "deadline": "2024-08-25T08:15:56.662Z",
      "__v": 0
    },
    {
      "_id": "66c99793aa0c81efc9982354",
      "title": "do math here homework",
      "description": "do math homework",
      "status": false,
      "userId": "97612010",
      "deadline": "2024-08-25T08:19:31.956Z",
      "__v": 0
    },
    {
      "_id": "66c9a3560e7949c3c2f26321",
      "title": "do science",
      "description": "do math homework",
      "status": false,
      "userId": "97612010",
      "deadline": "2024-08-25T09:09:42.686Z",
      "__v": 0
    },
    {
      "_id": "66c9a38d4a6a60d62293da42",
      "title": "do social work",
      "description": "do math homework",
      "status": false,
      "userId": "97612010",
      "deadline": "2024-08-25T09:10:37.133Z",
      "__v": 0
    }
  ]