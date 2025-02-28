FROM node:latest

# Set the working directory in the container.
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the container.
COPY package*.json ./

# Install the app dependencies inside the container.
RUN npm install --silent

# Copy the rest of the application to the container.
COPY . .

# Bind the app to port 3001.
EXPOSE 3001

# Run the server when the container starts.
CMD [ "npm", "start" ]