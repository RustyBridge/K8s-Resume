# Use a lightweight Debian-based image
FROM debian:bullseye-slim as builder-base

ENV OPTION_ROOTDIR /srv
ENV OPTION_APPDIR ${OPTION_ROOTDIR}/app
ENV OPTION_VENVDIR ${OPTION_ROOTDIR}/venv
ENV OPTION_GUNICORN_PORT 8000
ENV OPTION_GUNICORN_WORKERS 4

FROM builder-base as builder-app

# Install necessary dependencies
RUN apt-get update && apt-get install --no-install-recommends -y \
    libpq-dev \
    gcc \
    g++ \
    swig \
    python3-dev \
    python3-virtualenv \
    virtualenv

RUN python3 -m virtualenv --python=/usr/bin/python3 ${OPTION_VENVDIR}

WORKDIR ${OPTION_APPDIR}
ENV PATH="$OPTION_VENVDIR/bin:$PATH"

# Copy the requirements file and install Python dependencies
ADD requirements.txt ${OPTION_APPDIR}/

RUN pip3 install --no-cache-dir -r requirements.txt

# Create final image
FROM builder-base

RUN apt-get update && apt-get install -y \
    libpq5 \
    python3 \
    python3-distutils

# Copy virtualenv from intermediate container
COPY --from=builder-app ${OPTION_VENVDIR} ${OPTION_VENVDIR}

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONBUFFERED=1

# Copy the application code
ADD . ${OPTION_APPDIR}/
COPY entrypoint.sh /entrypoint.sh

WORKDIR ${OPTION_APPDIR}

# Expose the application port
EXPOSE ${OPTION_GUNICORN_PORT}

RUN chmod +x /entrypoint.sh

# Run the application with Gunicorn
CMD ["/entrypoint.sh"]
