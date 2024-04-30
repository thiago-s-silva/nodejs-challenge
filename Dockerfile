# Dockerfile for Node.js backend project with database migration

# Use the official Node.js image
FROM node:slim

# Create a working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Install OpenSSL
RUN apt-get update -y && apt-get install -y openssl

# Copy the rest of the code
COPY . ./

# Build the Prisma
RUN npm run db:generate

# Build the backend
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start:migrate"]
