# Base image: Node.js 18
FROM node:18
# Set working directory inside the container
WORKDIR /app
# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
# Copy application code
COPY . .
# Expose port 5000 for the Express server
EXPOSE 5000
# Command to start the application
CMD ["npm", "start"]