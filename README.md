# UpTodd Frontend Assignment

## Objective

-   Design Replication
-   Responsiveness
-   Functionality
-   Code Quality
-   Github

## How to Setup the Form Submission to work:

1. Install the dependencies required:

    ```bash
    npm install express mongoose body-parser
    ```

1. Update the `form` element in [index.html](./index.html)  
   From:
    ```html
    <form class="book-form-body"></form>
    ```
    To:
    ```html
    <form class="book-form-body" action="/submit-form" method="POST"></form>
    ```
    > We need to send a POST request to the sever to make any entries in the server
1. Run the server:

    ```bash
    # Enter the server folder if you haven't already suing:
    cd formSubmmisionServer

    # and then run
    node server.js
    ```
