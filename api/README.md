# API Documentation

## Endpoints

### POST /user/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- `201 Created`: User successfully registered.
  - Body: JSON object containing the authentication token and user details.
  - Example:
    ```json
    {
      "token": "your_jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- `400 Bad Request`: Validation error.
  - Body: JSON object containing the validation errors.
  - Example:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must be at least 3 character long.",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 character long.",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- `500 Internal Server Error`: Server error.
  - Body: JSON object containing the error message.

### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body should be a JSON object containing the following fields:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- `200 OK`: User successfully logged in.
  - Body: JSON object containing the authentication token and user details.
  - Example:
    ```json
    {
      "token": "your_jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- `400 Bad Request`: Validation error.
  - Body: JSON object containing the validation errors.
  - Example:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 character long.",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- `401 Unauthorized`: Invalid email or password.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- `500 Internal Server Error`: Server error.
  - Body: JSON object containing the error message.

### GET /users/profile

#### Description
This endpoint is used to get the profile of the authenticated user.

#### Request Headers
- `Authorization` (string, required): The Bearer token for the authenticated user.

#### Example Request
```
GET /users/profile
Authorization: Bearer your_jwt_token
```

#### Responses

- `200 OK`: User profile successfully retrieved.
  - Body: JSON object containing the user details.
  - Example:
    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- `401 Unauthorized`: Unauthorized access.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "message": "Unauthorized."
    }
    ```

- `500 Internal Server Error`: Server error.
  - Body: JSON object containing the error message.

### GET /users/logout

#### Description
This endpoint is used to log out the authenticated user.

#### Request Headers
- `Authorization` (string, required): The Bearer token for the authenticated user.

#### Example Request
```
GET /users/logout
Authorization: Bearer your_jwt_token
```

#### Responses

- `200 OK`: User successfully logged out.
  - Body: JSON object containing the success message.
  - Example:
    ```json
    {
      "message": "Logout successfully"
    }
    ```

- `401 Unauthorized`: Unauthorized access.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "message": "Unauthorized."
    }
    ```

- `500 Internal Server Error`: Server error.
  - Body: JSON object containing the error message.

### POST /captains/register

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of 'car', 'motorcycle', or 'auto'.

#### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Responses

- `201 Created`: Captain successfully registered.
  - Body: JSON object containing the authentication token and captain details.
  - Example:
    ```json
    {
      "token": "your_jwt_token",
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "XYZ123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- `400 Bad Request`: Validation error.
  - Body: JSON object containing the validation errors.
  - Example:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "First name must be at least 3 character long.",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 character long.",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- `500 Internal Server Error`: Server error.
  - Body: JSON object containing the error message.

### POST /captains/login

#### Description
This endpoint is used to log in an existing captain.

#### Request Body
The request body should be a JSON object containing the following fields:
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.

#### Example Request
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

#### Responses

- `200 OK`: Captain successfully logged in.
  - Body: JSON object containing the authentication token and captain details.
  - Example:
    ```json
    {
      "token": "your_jwt_token",
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "XYZ123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- `400 Bad Request`: Validation error.
  - Body: JSON object containing the validation errors.
  - Example:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 character long.",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- `401 Unauthorized`: Invalid email or password.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- `500 Internal Server Error`: Server error.
  - Body: JSON object containing the error message.
