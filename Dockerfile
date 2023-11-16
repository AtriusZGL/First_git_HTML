# node版本
FROM node as build
WORKDIR /app
COPY package.json .
RUN npm cache verify && npm cache clean -f
RUN npm install --registry https://registry.npm.taobao.org 
COPY . /app
RUN npm run build

# 生产容器
FROM nginx

WORKDIR /usr/share/nginx/html
RUN rm -f *
COPY --from=build /app/dist .

COPY --from=build /app/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]