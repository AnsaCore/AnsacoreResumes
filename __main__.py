from jinja2 import Template
from pathlib import Path
import os
import yaml

base_dir = os.path.dirname(os.path.realpath(__file__))

with open(Path(base_dir) / 'template.html', 'r') as web_template:
    tm = Template(web_template.read())

with open(Path(base_dir) / 'data.yml', 'r') as data_file:
    data = yaml.safe_load(data_file)

with open(Path(base_dir) / 'index.html', 'w') as web_instance:
    web_instance.write(tm.render(**data))
