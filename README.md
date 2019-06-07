# Front-end task: eCommerce products

Create a web application to manage eCommerce products. Application user should be able to search and _optionally_ add products received from API to the cart. API documentation is available in [`server/README.MD`](https://bitbucket.org/1950710/staples-frontend-task/src/master/server/README.MD), also the application documentation is available at the main endpoint of server [`/`](http://localhost:3005/). Data returned by API are paginated.

__Features to be implemented:__

* On start application should display first page of products.
* Pagination should be implemented under the products section.
* Overview of the product should contain - picture, title, id, button for adding to the cart with quantity input.
* Clicking on the product should show the modal with details. Detailed product information should be displayed in the foreground, what is underneath should be covered with a semi-transparent filling.
* Details of the product should contain - picture, title, id, description, brand, button for adding to the cart with quantity input.
* The application should have a filter (search functionality). Entering the value in the filter should return the results from the API for e.g. query `/products?q=:query`.

__Optional:__

  * User can add products to cart by clicking button. 
  * Products should be placed in the shopping cart displayed with quantity in the top right corner of the screen.  
  * The cart should be kept between page refreshments (Only on the client side - there is no API for this functionality).  
  * Unit tests of created components are welcome :).

## Notes

- Create your project in the `./client` directory.

- The design of the application is up to you :D.

- Use frameworks (Angular/React&Redux/Vue&Vuex etc.). We encourage you to try Vue and Vuex, because we use these tools. We want to see how you deal with Javascript and whether you can design a component structure. _If you prefer to write in pure Javascript and not use any frameworks, this is fine._

- We allow the use of CSS libraries. We propose Tailwind.css because we work in it, of course there is no problem to create css from scratch or use scss.

- Your solution will be judged by its code quality (HTML/CSS/JS) and look and feel of the finished product.

## Running the API

Node.js 8 or greater is required.

```bash
npm start
```

Server address will appear in the terminal.

## How to deliver your solution

- Use whatever repository hosting you want.
- Compress the task in a `.zip` or a `.bundle` file. We want to have all the git history. Easiest way is to run:

```bash
git bundle create staples-frontend-task.bundle --all
```
