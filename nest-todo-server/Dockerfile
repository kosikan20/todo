FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package*.json ./
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Generate Prisma client and start the application
CMD ["sh", "-c", "npx prisma generate && npx prisma migrate deploy && node dist/main"]