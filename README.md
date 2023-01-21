**Simple Rest API using Node JS without any framework.
The goals of this project is implement basic operation (insert, update, delete).**

## Get All Product

Used to show all products.

**URL** : `/`

**Method** : `GET`

### Response

```json
{
    "code": "number",
    "status": "string",
    "data": [
      {
        "id": "number",
        "product": "string"
      }
    ]
}
```

## Create Product

Used to create new product.

**URL** : `/`

**Method** : `POST`

### Request

**Content-Type**: application/json
**Accept**: application/json

```json
{
  "product": "string"
}
```

### Response

```json
{
    "code": "number",
    "status": "string",
    "data": [
      {
        "id": "number",
        "product": "string"
      }
    ]
}
```

## Update Product

Used to update product.

**URL** : `/`

**Method** : `PUT`

### Request

**Content-Type**: application/json
**Accept**: application/json

```json
{
  "id": "number",
  "product": "string"
}
```

### Response

```json
{
    "code": "number",
    "status": "string",
    "data": [
      {
        "id": "number",
        "product": "string"
      }
    ]
}
```

## Delete Product

Used to delete product.

**URL** : `/`

**Method** : `DELETE`

### Request

**Content-Type**: application/json
**Accept**: application/json

```json
{
  "id": "number"
}
```

### Response

```json
{
    "code": "number",
    "status": "string",
    "data": [
      {
        "id": "number",
        "product": "string"
      }
    ]
}
```