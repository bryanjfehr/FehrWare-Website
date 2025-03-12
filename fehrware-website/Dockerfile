# Build stage: Compile React app
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Inject backend URL as a build-time argument for flexibility
ARG REACT_APP_BACKEND_URL=http://localhost:5000
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
RUN npm run build

# Production stage: Serve with Nginx
FROM nginx:alpine
# Copy built files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html
# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80 for HTTP
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]