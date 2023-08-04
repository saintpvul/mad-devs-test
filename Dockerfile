# Use an official lightweight Node.js image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy the project files into the container
COPY . .

# Expose a port for the web server
EXPOSE 80

# Start a simple HTTP server to serve your files
CMD ["npx", "http-server", "-p", "80"]