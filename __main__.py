from jinja2 import Template
from pathlib import Path
import os
import yaml

base_dir = os.path.dirname(os.path.realpath(__file__))

with open(Path(base_dir) / 'template.html', 'r') as web_template:
    tm = Template(web_template.read())


_data = {
    'current_title': 'Big Data Cloud Engineer',
    'employee_name': 'Sam Mylle',
    'introduction': ('Hi! I\'m Sam Mylle. I am a Computer Scientist with a big passion for Cloud and Data Engineering. '
                     'For both these fields, I use Python because of its great power and ease-of-use.'),
    'age': 25,
    'work_areas': 'Belgium: Antwerp, Brussels, Leuven',
    'primary_skillset': [
        {
            'name': 'Python',
            'proficiency': 90
        },
        {
            'name': 'AWS',
            'proficiency': 80
        },
        {
            'name': 'TerraForm',
            'proficiency': 70
        }
    ],
    'secondary_skillset': [
        {
            'name': 'Azure Cloud',
            'proficiency': 60
        },
        {
            'name': 'PySpark',
            'proficiency': 70
        },
        {
            'name': 'Apache Airflow',
            'proficiency': 70
        }
    ],
    'work_experience': [
        {
            'title': 'Big Data Cloud Engineer',
            'employer': 'KBC',
            'time': 'April 2021 - Present',
            'Description': 'Foo'
        },
        {
            'title': 'Data Scientist Consultant',
            'employer': 'OMP',
            'time': 'October 2020 - April',
            'Description': 'Bar'
        }
    ],
    'education': [
        {
            'degree': 'Bachelor in Computer Science',
            'institution': 'University of Antwerp',
            'time': '2014 - 2017',
            'Description': 'Foo'
        },
        {
            'degree': 'Master of Engineering Sciences: Computer Science',
            'institution': 'Catholic University of Leuven',
            'time': '2017 - 2019',
            'Description': 'Foo'
        },
        {
            'degree': 'Master Sciences: Management',
            'institution': 'Catholic University of Leuven',
            'time': '2019 - 2020',
            'Description': 'Foo'
        }
    ],
    'linkedin_link': 'https://www.linkedin.com/in/sam-mylle-62b468138/'
}

with open(Path(base_dir) / 'data.yml', 'r') as data_file:
    data = yaml.safe_load(data_file)

with open(Path(base_dir) / 'sammylle.html', 'w') as web_instance:
    web_instance.write(tm.render(**data))
