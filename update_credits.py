import glob

files_to_process = glob.glob('*.html')

developer_credit_block = """            <!-- Developer Credit -->
            <div class="developer-credit">
                <a href="https://github.com/grechakimarcos" target="_blank" rel="noopener noreferrer"
                    class="credit-link">
                    <span class="credit-text">Made with 🖤 by <strong>Marcos Roberto Grechaki</strong></span>
                    <span class="credit-hover">Ver perfil <i data-lucide="arrow-right"></i></span>
                </a>
            </div>"""
            
new_credit_block = """            <!-- Credits -->
            <div class="footer-credits">
                <!-- Designer Credit -->
                <div class="designer-credit">
                    <a href="https://www.instagram.com/by.gabriellyfavero?igsh=MXFtaXJ2NTB2ZnU2dA==" target="_blank" rel="noopener noreferrer"
                        class="credit-link">
                        <span class="credit-text">Design & Photography by <strong>Gabrielly Favero</strong></span>
                        <span class="credit-hover">Ver perfil <i data-lucide="instagram"></i></span>
                    </a>
                </div>
                <!-- Developer Credit -->
                <div class="developer-credit">
                    <a href="https://github.com/grechakimarcos" target="_blank" rel="noopener noreferrer"
                        class="credit-link">
                        <span class="credit-text">Made with 🖤 by <strong>Marcos Roberto Grechaki</strong></span>
                        <span class="credit-hover">Ver perfil <i data-lucide="github"></i></span>
                    </a>
                </div>
            </div>"""

for filepath in files_to_process:
    try:
        with open(filepath, 'r', encoding='utf-8', errors='surrogateescape') as f:
            content = f.read()
            
        new_content = content.replace(developer_credit_block, new_credit_block)
            
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8', errors='surrogateescape') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
