FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies
RUN npm i nodemon -g

# Copy the rest of the application code
COPY bundle/. .

# Expose the port that your app will run on
EXPOSE 5478

# Start the app
CMD ["nodemon", "index.js"]