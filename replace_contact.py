import os
import glob

replacements = {
    '5548999999999': '5548991391775',
    '+5548999999999': '+5548991391775',
    '(48) 99999-9999': '(48) 99139-1775',
    'contato@faveroadvocacia.com.br': 'juridico@efav.com.br'
}

files_to_process = glob.glob('*.html') + glob.glob('js/*.js')

for filepath in files_to_process:
    try:
        with open(filepath, 'r', encoding='utf-8', errors='surrogateescape') as f:
            content = f.read()
            
        new_content = content
        for old, new in replacements.items():
            new_content = new_content.replace(old, new)
            
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8', errors='surrogateescape') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
