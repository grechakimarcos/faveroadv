import glob

files_to_process = glob.glob('*.html')

for filepath in files_to_process:
    try:
        with open(filepath, 'r', encoding='utf-8', errors='surrogateescape') as f:
            content = f.read()
            
        # The previous replacement replaced logo_rodape.png with logo_fav_white.png in all HTML files.
        # We need to target the footer specifically to change it to logo_fav_dark.png.
        
        # A simple string replace might replace the header too if they use the same logo image
        # Let's use a simple approach: if we find <img src="img/logo_fav_white.png" alt="Favero Advocacia">
        # inside the footer tag or footer-brand class
        
        # Since the footer structure usually is:
        # <a href="index.html" class="footer-logo">
        #     <img src="img/logo_fav_white.png" alt="Favero Advocacia">
        # </a>
        
        new_content = content.replace(
            '<a href="index.html" class="footer-logo">\n                        <img src="img/logo_fav_white.png"',
            '<a href="index.html" class="footer-logo">\n                        <img src="img/logo_fav_dark.png"'
        )
        
        # Also handle potential single line variations or different indentations
        new_content = new_content.replace(
            '<a href="index.html" class="footer-logo">\n                    <img src="img/logo_fav_white.png"',
            '<a href="index.html" class="footer-logo">\n                    <img src="img/logo_fav_dark.png"'
        )
            
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8', errors='surrogateescape') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
