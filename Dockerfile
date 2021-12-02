FROM python:alpine3.14

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ansacore_resumes .

CMD [ "python", "./__main__.py"]
