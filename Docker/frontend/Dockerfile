FROM node:bullseye as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Build
RUN npm init --yes
RUN rm package-lock.json;
RUN npm install
# Build the app
RUN npm run build


# Bundle static assets with nginx
FROM debian:bullseye as production
ENV NODE_ENV production
# Install nginx and required dependencies
RUN apt-get update && apt-get install -y nginx
# Copy built assets from `builder` image
COPY --from=builder /app/build /var/www/html
# Expose port
EXPOSE 80
# Configure nginx logging to stdout
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
