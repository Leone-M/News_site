# syntax=docker.io/docker/dockerfile:1

FROM node:21-alpine

WORKDIR /app

COPY package.json* package-lock.json ./
RUN npm ci
COPY app ./app
COPY next.config.mjs .
COPY .eslintrc.json .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY postcss.config.mjs .
COPY prisma ./prisma
# COPY node_modules ./node_modules
# RUN npm install prisma
RUN npx prisma generate

# CMD \
#     npx prisma migrate dev --name init; \
#     npx tsx ./prisma/seed.ts; \
#     npm run dev; \
#     # if [ -f package-lock.json ]; then npm run dev;