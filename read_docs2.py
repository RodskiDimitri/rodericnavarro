import zipfile
import xml.etree.ElementTree as ET

paths = [
    r'C:\Users\THINKPAD\My Drive\01_Professional & Career\03_Work Projects & Clients\Personal Projects\Roderic Navarro Professional Website\Latest resume 06292025.docx',
    r'C:\Users\THINKPAD\My Drive\01_Professional & Career\03_Work Projects & Clients\Personal Projects\Roderic Navarro Professional Website\Professional Profile - Roderic G. Navarro - latest.docx'
]

namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

def read_docx(path):
    print(f'\n=== {path} ===\n')
    try:
        with zipfile.ZipFile(path) as docx:
            tree = ET.XML(docx.read('word/document.xml'))
            text_run = []
            for paragraph in tree.iter(f"{{{namespaces['w']}}}p"):
                texts = [node.text for node in paragraph.iter(f"{{{namespaces['w']}}}t") if node.text]
                if texts:
                    text_run.append(''.join(texts))
            print('\n'.join(text_run))
    except Exception as e:
        print('Error:', e)

for p in paths:
    read_docx(p)
