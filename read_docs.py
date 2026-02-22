import sys
import subprocess

try:
    import docx
except ImportError:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'python-docx'])
    import docx

paths = [
    r'C:\Users\THINKPAD\My Drive\01_Professional & Career\03_Work Projects & Clients\Personal Projects\Roderic Navarro Professional Website\Latest resume 06292025.docx',
    r'C:\Users\THINKPAD\My Drive\01_Professional & Career\03_Work Projects & Clients\Personal Projects\Roderic Navarro Professional Website\Professional Profile - Roderic G. Navarro - latest.docx'
]

for p in paths:
    print('===', p, '===')
    try:
        doc = docx.Document(p)
        for para in doc.paragraphs:
            if para.text.strip():
                print(para.text)
    except Exception as e:
        print('Error:', e)
