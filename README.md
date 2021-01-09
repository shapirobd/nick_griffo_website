# Nick Griffo's Website
---
## Videos & Images

I had to take out the `videos/` and `images/` folders in order to push to GitHub.

### Videos:
Can be found [here](https://drive.google.com/drive/folders/1cJS3njcyLIe5PUtFPSb-rNPFDRMbOLl1)

<img width="1440" alt="Videos" src="https://user-images.githubusercontent.com/67729880/104086351-11277c00-5225-11eb-9779-1fee090d41a6.png">

### Images:
Can be found [here](https://drive.google.com/drive/folders/1zqT2bEmt2N5K0xk_LFi61xnRuMssPKWU)

<img width="1440" alt="Images" src="https://user-images.githubusercontent.com/67729880/104086338-f48b4400-5224-11eb-93b3-14d7baacd7ae.png">

* Once downloaded, make sure to move the `videos/` folder as well as the `images/` folder into the `static/` folder, which lies within the project root

## Installation

1. Make sure you are in the project root, which contains:

`app.py`\
`models.py`\
`requirements.txt`\
`seed.py`\
`static/`\
`templates/`\
`venv/`

2. Create virtual environment (venv):

```bash
python3 -m venv venv
```

3. Activate virtual environment:

```bash
source venv/bin/activate
```

4. Use the package manager [pip3](https://pip3.pypa.io/en/stable/) to install dependencies.

```bash
pip3 install flask
pip3 install flask_debug_toolbar
pip3 install flask_sqlalchemy
pip3 install psycopg2
```

## Run

Make sure you are in the project root, and then run the following command:

```bash
python3 -m flask run
```
