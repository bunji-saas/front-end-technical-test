# 🧪 Front-end Technical Test

Welcome to the technical test!

In this challenge, you'll build a real estate agent directory (annuaire agent immobilier) app using React, TypeScript and Vite.
Feel free to use any necessary front-end library you deem necessary.

![image alt text](https://i.ibb.co/213tw3B4/desktop-view.png 'Desktop')
![image alt text](https://i.ibb.co/Kk9pD7T/mobile-view.png 'Mobile')
![image alt text](https://i.ibb.co/dwLNsrmq/creation-form.png 'Formulaire')

## Accepetance Criteria

- [] As a user, I can list the real estate agents in a page (see picture). The agents a are shown in cards with an avatar, firstname and lastname, email and formated creation date
- [] As a user, I can view page on a small screen (see picutre)
- [] As a user, I can see the total number of real esate agents.
- [] As a user, I can navigate to next and previous pages if it exists
- [] As a user, I create new real estate agents and add them to the list
- [] As a user, i want results to be refreshed every 30 seconds

Bonus

- [] As a user, I can access direclty pages of results using query params

## Evaluation Criteria

- [] Tasks completed
- [] Api handling
- [] Good use of Typescript
- [] Component architecture

# Backend API Doc

## Authentication

All requests must include the following header:

```
x-api-token: your-secret-api-token
```

Replace `your-secret-api-token` with your actual API token.

---

## Endpoints

### Create Agent

- **POST** `/agents`
- **Headers:** `x-api-token: your-secret-api-token`
- **Body:**
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string|null"
  }
  ```
- **Response:** `201 Created`
  ```json
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string|null",
    "createdAt": "string (ISO date)",
    "updatedAt": "string (ISO date)"
  }
  ```
- **Errors:**
  - `400 Bad Request` if body is missing or invalid
  - `401 Unauthorized` if token is missing/invalid

---

### Update Agent

- **PATCH** `/agents/:id`
- **Headers:** `x-api-token: your-secret-api-token`
- **Body:** (any of the following fields, all optional)
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string|null"
  }
  ```
- **Response:** `200 OK`
  ```json
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string|null",
    "createdAt": "string (ISO date)",
    "updatedAt": "string (ISO date)"
  }
  ```
- **Errors:**
  - `400 Bad Request` if body is missing or invalid
  - `401 Unauthorized` if token is missing/invalid
  - `404 Not Found` if agent does not exist

---

### Delete Agent

- **DELETE** `/agents/:id`
- **Headers:** `x-api-token: your-secret-api-token`
- **Response:** `204 No Content`
- **Errors:**
  - `401 Unauthorized` if token is missing/invalid
  - `404 Not Found` if agent does not exist

---

### List Agents (Paginated)

- **GET** `/agents?page=1`
- **Headers:** `x-api-token: your-secret-api-token`
- **Query Params:**
  - `page` (optional, default: 1)
- **Response:** `200 OK`
  ```json
  {
    "data": [
      {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string|null",
        "createdAt": "string (ISO date)",
        "updatedAt": "string (ISO date)"
      }
    ],
    "total": 1,
    "page": 1,
    "pageSize": 10
  }
  ```
- **Errors:**
  - `401 Unauthorized` if token is missing/invalid

---

## Agent Object

| Field     | Type           | Description        |
| --------- | -------------- | ------------------ |
| id        | string         | Unique agent ID    |
| firstName | string         | Agent's first name |
| lastName  | string         | Agent's last name  |
| email     | string \| null | Agent's email      |
| createdAt | string         | ISO date created   |
| updatedAt | string         | ISO date updated   |

---

## Notes

- All dates are in ISO 8601 format.
- Pagination returns 12 agents per page.
- All endpoints require authentication.
