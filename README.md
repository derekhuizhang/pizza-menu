This is a pizza menu for Derek's Pizza Shop!

### How to Run
To run:

```
npm install
npm start
```

### Design considerations
1. The menu options were left as an array in the root src folder. In an actual application, it would be retrieved via an API to retrieve the most updated list of pizzas, their menu descriptions, etc. from, say, a file kept on AWS S3. This was chosen as opposed to having separate pages for each pizza, so that in the future the admin could add new pizzas or update existing ones via a separate API and not have to make new pages/add additional pages, allowing for increased scalability and flexibility. 
2. The menu items were kept as a picture and a name for maximum simplicity, as no other details (price, ingredients list, etc.) were specified in the problem description. I believe that panels are better than lists when there is very little information needed, as the bigger image is most important for attracting the customer.
3. I used React Semantic UI because it's really easy to use for smaller projects and handles a lot of the CSS. However, generally I would use a bigger framework like Bootstrap for bigger projects
