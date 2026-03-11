import os
import glob

replacements = {
    '"img/logo_cabecalho.png"': '"img/logo_fav_white.png"',
    '"img/logo_rodape.png"': '"img/logo_fav_white.png"'
}

files_to_process = glob.glob('*.html')

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
