# Running "mad-devs-test" Using Docker

To run the "mad-devs-test" application using Docker, follow these steps:

1. **Install Docker**: Ensure that Docker is installed on your computer. If Docker is not installed, you can download it [here](https://www.docker.com/get-started).

2. **Clone the Repository**: First, clone the "mad-devs-test" repository to your computer using bash or command prompt:

    ```bash
    git clone https://github.com/saintpvul/mad-devs-test.git
    cd mad-devs-test
    ```

3. **Build and Run the Container**: To build and run the "mad-devs-test" container, follow these steps:

-   Open a terminal and navigate to the root directory of the repository.

-   Build the Docker image using the following command:

    ```bash
    docker build -t mad-devs-test .
    ```

-   Run the Docker container in detached mode and map port 8080 on the host to port 80 on the container:

    ```bash
    docker run -d -p 8080:80 mad-devs-test
    ```

The application will now be accessible at http://localhost:8080.

4.  **Stop the Container**: To stop the container, run the following command:

        ```bash
        docker stop <CONTAINER_ID>
        ```

    Where <CONTAINER_ID> is the container ID, which you can obtain using the docker ps command.
