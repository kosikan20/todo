# Builder stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./   
COPY --from=builder /app/node_modules ./node_modules  
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public       

# Expose the port
EXPOSE 3001

# Start the application
CMD ["npm","start"]