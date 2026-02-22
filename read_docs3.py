import zipfile
import xml.etree.ElementTree as ET

paths = [
    r'C:\Users\THINKPAD\My Drive\01_Professional & Career\03_Work Projects & Clients\Personal Projects\Roderic Navarro Professional Website\Latest resume 06292025.docx',
    r'C:\Users\THINKPAD\My Drive\01_Professional & Career\03_Work Projects & Clients\Personal Projects\Roderic Navarro Professional Website\Professional Profile - Roderic G. Navarro - latest.docx'
]
out_paths = [
    r'C:\Users\THINKPAD\My Drive\01_Professional & Career\03_Work Projects & Clients\Personal Projects\Roderic Navarro Professional Website\resume1.txt',
    r'C:\Users\THINKPAD\My Drive\01_Professional & Career\03_Work Projects & Clients\Personal Projects\Roderic Navarro Professional Website\resume2.txt'
]

ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

for p, out in zip(paths, out_paths):
    with zipfile.ZipFile(p) as z, open(out, 'w', encoding='utf-8') as f:
        t = ET.XML(z.read('word/document.xml'))
        for pa in t.iter('{'+ns['w']+'}p'):
            tx = [n.text for n in pa.iter('{'+ns['w']+'}t') if n.text]
            if tx:
                f.write(''.join(tx) + '\n')
