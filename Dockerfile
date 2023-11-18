# Sử dụng một hình ảnh chính thức của Node.js v21
FROM node:21

# Đặt thư mục làm việc trong /src
WORKDIR /src

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package.json package-lock.json ./

# Sao chép toàn bộ dự án vào thư mục làm việc
COPY . .

# Cài đặt các dependencies và rebuild để đảm bảo sự tương thích
RUN npm install && npm rebuild

# Cài đặt nodemon toàn cầu (nếu bạn muốn sử dụng nodemon global)
RUN npm install -g nodemon

# Mở cổng 3000 để ứng dụng có thể truy cập
EXPOSE 3000

# Lệnh CMD để chạy ứng dụng khi container được khởi chạy
CMD ["npm", "start"]
