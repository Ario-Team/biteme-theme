# Base image
FROM node:16-alpine
# Update the system
RUN apk update && \
    apk upgrade
# Install bash
RUN apk add bash
# Set workdirectory
WORKDIR /usr/src/app
CMD [ "bash" ]
# Expose the port
EXPOSE 3000
