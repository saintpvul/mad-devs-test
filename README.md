-   # Running "mad-devs-test" Using Docker

To run the "mad-devs-test" application using Docker, follow these steps:

1.  **##Install Docker**: Ensure that Docker is installed on your computer. If Docker is not installed, you can download it [here](https://www.docker.com/get-started).

2.  **##Clone the Repository**: First, clone the "mad-devs-test" repository to your computer using bash or command prompt:

        ```bash
        git clone https://github.com/saintpvul/mad-devs-test.git
        ```

3.  **##Navigate to the directory**: Change your working directory to the project's directory:

        ```bash
        cd mad-devs-test
        ```

4.  **##Build and Run the Container**: To build and run the "mad-devs-test" container, follow these steps:

    -   Open a terminal and navigate to the root directory of the repository.

    -   Build the Docker image using the following command:

        ```bash
        docker build -t mad-devs-test .
        ```

    -   Run the Docker container in detached mode and map port 8080 on the host to port 80 on the container:

        ```bash
        docker run -d -p 8080:80 mad-devs-test
        ```

    The application will now be accessible at http://localhost:8080 or just [here](http://localhost:8080).

    > :warning: **Warning:** Remember, these commands assume that you have Docker installed on your machine. If not, you can download and install Docker from [here](https://www.docker.com/get-started).

5.  **##Stop the Container**: To stop the container, run the following command:

        ```bash
        docker stop <CONTAINER_ID>
        ```

    Where <CONTAINER_ID> is the container ID, which you can obtain using the docker ps command.

That's it! You've successfully run the application using Docker.

-   # Running "mad-devs-test"

    To run this application locally on your machine, follow these steps:

1.  **Clone the Repository:** Start by cloning this repository to your local machine. You can do this by running the following command in your terminal:

        ```bash
        git clone https://github.com/saintpvul/mad-devs-test.git
        ```

2.  **Navigate to the Directory:** Change your working directory to the project's directory:

         ```bash
        cd mad-devs-test
        ```

3.  **Install a Local Server:** You'll need a local server to properly serve the files. If you have Node.js installed (if you have not click [here](https://nodejs.org/en)), you can use the `http-server` package:

         ```bash
        cd mad-devs-test
        ```

4.  **Start the Local Server:** Run the following command to start the local server:

         ```bash
        http-server
        ```

5.  **Open the Application:** Once the server is running, open your web browser and navigate to the provided URL (usually http://localhost:8080).

6.  **Explore the Application:** You should now be able to explore and interact with the application in your web browser.

That's it! You've successfully run the application on your local machine using a local server.
