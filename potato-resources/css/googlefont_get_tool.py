import requests


for i in range(119):


    if i>=111:
        url = 'https://fonts.gstatic.font.im/s/notosanssc/v26/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.' + str(i) + '.woff2'

        file = './localfont/notosanssc/v26/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.' + str(i) + '.woff2'

        r = requests.get(url)
        with open(file, "wb") as code:
          code.write(r.content)
