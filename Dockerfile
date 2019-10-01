FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY dist/lotto-viewer-frontend .