export const createTodoValidationSchema = {
    title: {
        isLength: {
            options: {
                min:5,
                max:20,
            },
            errorMessage: 'Title must be between 5 and 10 characters',
        },
        notEmpty: {
            errorMessage: 'Title is required',
        },
        isString: {
            errorMessage: 'Title must be a string',
        }
    },
    description: {
        isLength: {
            options: {
                min:7,
                max:32
            },
            errorMessage: 'Description must be between 7 and 32 characters',
        },
        notEmpty: {
            errorMessage: 'Description is required',
        },
        isString: {
            errorMessage: 'Description must be a string',
        }
    },
    userId: {
        notEmpty: {
            errorMessage: 'userId is required',
        },
        isString: {
            errorMessage: 'userId must be a string',
        }
    },
    // status: {
    //     notEmpty: {
    //         errorMessage: 'status is required',
    //     },
    //     isBoolean: {
    //         errorMessage: 'status must be a boolean',
    //     }
    // }
   


}
export const getTodoByIdValidatioonSchema = {
    id: {
        notEmpty: {
            errorMessage: 'id is required',
        },
        isString: {
            errorMessage: 'id must be a string',
        }
    },
}
export const validateId = {
    id: {
        notEmpty: {
            errorMessage: 'id is required',
        },
        isString: {
            errorMessage: 'id must be a string',
        },
    },
}

