FROM node:18.17.0

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    openjdk-17-jre-headless \
    wget \
    unzip \
    libnss3 \
    && rm -rf /var/lib/apt/lists/*

ENV JAVA_HOME /usr/lib/jvm/java-17-openjdk-amd64

RUN apt-get update && \
    apt-get install -y wget unzip libnss3

RUN wget -q https://chromedriver.storage.googleapis.com/93.0.4577.63/chromedriver_linux64.zip \
    && unzip chromedriver_linux64.zip \
    && mv chromedriver /usr/local/bin/chromedriver \
    && chmod +x /usr/local/bin/chromedriver \
    && rm chromedriver_linux64.zip

RUN wget -O /tmp/google-chrome.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt-get install -y ./tmp/google-chrome.deb && \
    rm /tmp/google-chrome.deb

WORKDIR /app

COPY . /app

RUN npm install

CMD npm run test:chrome:headless

