# API inventary managment

This API was created on node and mongodb for a app of inventary managment.

This repository dont have the file "keys.js" so if you want use remenber create your keys in **dir src**.

---

## Endpoints

### GetAll

/api/products/all

### GetOne
/api/products/:id

### Post
/api/products/add

### Put
/api/products/:id

### Delete
/api/products/

## Model

```
{
	"name": "String",
	"description": "String",
	"category": "String",
	"price": Number,
	"stock": Number
}
```