from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db import connection
from django.conf import settings
import psycopg2
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@csrf_exempt
def read(request):
    try:
        conn = psycopg2.connect(
            host=settings.DATABASES['default']['HOST'],
            dbname=settings.DATABASES['default']['NAME'],
            user=settings.DATABASES['default']['USER'],
            password=settings.DATABASES['default']['PASSWORD']
        )
        with conn.cursor() as cur:
            cur.execute('SELECT * FROM visitor_count;')
            data = cur.fetchall()

        conn.close()

        for item in data:
            response = item[1]
            return JsonResponse({'statusCode': 200, 'data': response})

    except Exception as e:
        logger.error("An error occurred while processing the GET request: %s", str(e))
        return JsonResponse({'statusCode': 500, 'message': 'Internal Server Error'}, status=500)

@csrf_exempt
def write(request):
    try:
        conn = psycopg2.connect(
            host=settings.DATABASES['default']['HOST'],
            dbname=settings.DATABASES['default']['NAME'],
            user=settings.DATABASES['default']['USER'],
            password=settings.DATABASES['default']['PASSWORD']
        )
        with conn.cursor() as cur:
            cur.execute("UPDATE visitor_count SET quantity=quantity+1 WHERE type='view_count' RETURNING quantity;")
            data = cur.fetchone()
            conn.commit()

        conn.close()

        return JsonResponse({'statusCode': 200, 'data': data[0]})

    except Exception as e:
        logger.error("An error occurred while processing the PUT request: %s", str(e))
        return JsonResponse({'statusCode': 500, 'message': 'Internal Server Error'}, status=500)

