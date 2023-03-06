FROM node:latest as build
COPY . /app
WORKDIR /app
RUN npm install yarn \
    && yarn install \
    && yarn build

FROM node:latest as run
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
WORKDIR /app/dist
EXPOSE 8000
ENTRYPOINT [ "node" ]
CMD [ "app.js" ]