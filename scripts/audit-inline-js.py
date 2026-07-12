import re
import subprocess
import tempfile
import glob

broken = []
total = 0

for f in glob.glob('*.html'):
    with open(f, 'r', errors='ignore') as file:
        content = file.read()
        matches = re.findall(r'<script\b([^>]*)>(.*?)</script>', content, re.DOTALL)
        for attrs, body in matches:
            if 'src=' in attrs:
                continue
            type_match = re.search(r'type="([^"]*)"', attrs)
            t = type_match.group(1).lower() if type_match else ''
            if t and 'javascript' not in t and t != 'module':
                continue
            if not body.strip():
                continue
            total += 1
            with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False) as tf:
                tf.write(body)
                tf.flush()
                result = subprocess.run(['node', '--check', tf.name], capture_output=True)
                if result.returncode != 0:
                    print(f'BROKEN: {f}')
                    print(result.stderr.decode())
                    broken.append(f)

print(f'\n{total - len(broken)}/{total} scripts passed')
if broken:
    print(f'Broken files: {len(set(broken))}')
