# Etapa 1: Build
FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# Compilamos la aplicación
RUN npm run build

# Etapa 2: Producción (adaptada para Lambda)
FROM node:18-alpine
WORKDIR /usr/src/app
# Copiamos solo lo necesario para producción
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

# El CMD ahora apunta al handler de la Lambda.
# Formato: <nombre_del_archivo_compilado>.<nombre_de_la_función_exportada>
CMD [ "dist/lambda.handler" ]