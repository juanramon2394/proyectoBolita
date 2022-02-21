#!/bin/bash

echo IMAGE_TAG=$IMAGE_TAG > .env
echo VUE_APP_BASE_URL=$VUE_APP_BASE_URL_AWS >> .env
echo VUE_APP_SENTRY_DSN=$VUE_APP_SENTRY_DSN_AWS >> .env
echo VUE_APP_MQTT_URL=$VUE_APP_MQTT_URL >> .env
echo VUE_APP_MQTT_CLIENT_ID=$VUE_APP_MQTT_CLIENT_ID >> .env
echo VUE_APP_CURRENT_BRANCH=$VUE_APP_CURRENT_BRANCH >> .env