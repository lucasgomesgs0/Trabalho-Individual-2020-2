FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /api
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .

EXPOSE 8000

CMD  ["sh", "-c", "python3 manage.py migrate && gunicorn api.wsgi --bind=:$PORT"]