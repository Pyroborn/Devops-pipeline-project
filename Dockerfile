# Build The App
FROM node:18 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve The App with Nginx
FROM nginx:alpine AS production-stage
# /app/build copy build files from previous stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]
