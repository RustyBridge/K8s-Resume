#!/bin/sh

. ${OPTION_VENVDIR}/bin/activate

gunicorn app.wsgi \
    --bind=0.0.0.0:${OPTION_GUNICORN_PORT} \
    --workers=${OPTION_GUNICORN_WORKERS} \
    --preload \
    --log-file=- \
    --access-logfile=-
