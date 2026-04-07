This is the imagined APIs endpoints needed.
Update this if there's a smarter and better way:

> Also every Get all should have queries with params.

```md
/auth
    POST /login
    POST /signup
    POST /logout
    POST /refresh   # protected, For access token generation

/users
    GET /                           # Get all users, query params
    GET /:id
    GET /me/comments                # protected, get all user comments, allow query as well (like search by book id or book name)
    GET /me/books                   # protected, my saved books
    GET /me/books/:id               # protected, get one of user books (with bookmark)
    POST /me/books                  # protected, save a book
    DELETE /me/books/:id            # protected,remove a saved book
    PUT /:id                        # protected, admin and ownership checked in service layer
    DELETE /:id                     # protected, admin and ownership checked in service layer

/books
    GET /                           # Get all books, query params (like searching for genre names)
    GET /:id
    POST /                          # Admin required
    PUT /:id                        # Admin required
    DELETE /:id                     # Admin required
    GET /:id/comments               # get comments for a book
    POST /:id/comments              # create a comment — add this back

/comments
    PUT /:id                        # protected
    DELETE /:id                     # protected, admin and ownership checked in service layer

/genres
    GET /                           # Get all genres, queries with params (Like unique name)
    GET /:id                        # Get genre by id
    POST /                          # Admin required, Create genre
    DELETE /:id                     # Admin required
/authors
    GET /                           # Get all author, queries with params
    GET /:id                        # Get author by id
    POST /                          # Admin required, Create author
    DELETE /:id                     # Admin required
/publishers
    GET /                           # Get all publishers, queries with params
    GET /:id                        # Get publishers by id
    POST /                          # Admin required, Create publishers
    DELETE /:id                     # Admin required

<<<<<<< Updated upstream
    /publishers
        GET /, POST /, etc.

/search
    GET /?q=...          # search across books, authors, genres, publishers, users
```
=======
/search # This uses the queries from the service of other endpoints
    GET /?q=...          # search across books, authors, genres, publishers, users
>>>>>>> Stashed changes
