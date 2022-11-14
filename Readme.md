# REST API Using Mongoose

### CRUD operations on Mongodb DB using node.js and Mongoose

```
This Api contains  following for /api/products:

1.  Layered Architecture Model:

product.model: Sets the schema and model for the product.
productRepository: Performs all Interactions with DB.No interact with HTTP.
productController: Has logic of all handlers and handles of all requests and doesnt have interaction with DB.
productRouter: Routes according to the request to the proper handlers.
index.js: entry point for the api.

utils: This folder has all logging code written in it for both request and application logging.
        Morgan Library is taking care of Request Logging.
        Bunyan Library is taking care of Application Logging.
        
        More logic will be later added to this folder.
        

logs: This folder has all logs stored in it.
        

2. Installing, including and connecting to mongodb using mongoose.

3. Using middlewares like expressjson() to parse the incoming json files and many more middlewares.

4. CRUD Operations on DB.
    GET, POST,GETBYID,DELETE,PUT, PATCH.
5. Pagination

6. Sorting

7.Searching

8.Input Validations

9.Formatting Errors


```