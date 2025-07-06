FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install
CMD ["yarn", "run", "dev"]
#yêu cầu mở cổng 3001 trong container nhưng vẫn không ảnh hưởng nếu app vẫn chạy port 3000
EXPOSE 3001 