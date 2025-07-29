# Stage 1: Builder
# Use a Node.js image to build your Parcel application
FROM node:20-alpine as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if you have one)
# This step helps with Docker layer caching: if your dependencies don't change,
# this layer won't be rebuilt.
COPY package.json ./
# COPY package-lock.json ./ # Uncomment if you use package-lock.json

# Clear npm cache to ensure a clean install
RUN npm cache clean --force

# Install project dependencies, using --legacy-peer-deps to bypass React 18 incompatibility
RUN npm install --legacy-peer-deps

# Copy the rest of your application source code
COPY . .

# Build the Parcel project
# Ensure you have a "build" script in your package.json, e.g.:
# "scripts": {
#   "build": "parcel build index.html"
# }
# Replace "index.html" with your Parcel entry file if it's different.
RUN npm run build

# Stage 2: Production
# Use a lightweight Nginx image to serve the static files
FROM nginx:alpine

# Set the working directory to Nginx's default static asset directory
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static assets
RUN rm -rf ./*

# Copy the built static assets from the 'builder' stage into the Nginx directory
# The 'dist' directory is where Parcel outputs the built files by default.
COPY --from=builder /app/dist .

# Containers run Nginx with global directives and daemon off to stay in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]
