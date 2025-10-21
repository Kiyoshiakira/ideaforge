#!/usr/bin/env python3
"""
Fix HTML issues found by the validator:
- Normalize DOCTYPE to <!DOCTYPE html>
- Add lang="en" to <html> tags missing lang
- Replace raw '&' with '&amp;' except when already a valid entity

Usage:
  # Dry-run, shows files that would be changed
  python3 scripts/fix_html.py

  # Apply changes (writes files)
  python3 scripts/fix_html.py --apply
"""
import re
import glob
import argparse
from pathlib import Path

DOC_TYPE_PATTERN = re.compile(r'(?i)^\s*<!doctype\s+html\s*>', re.MULTILINE)
HTML_OPEN_TAG_PATTERN = re.compile(r'<html(?!\s+lang=)([^>]*)>', re.IGNORECASE)

# Match & not followed by valid entity patterns:
# Valid entities: &word; &#digits; &#xHEX;
# We want to replace & that's NOT followed by (word|#digits|#xHEX) followed by semicolon
RAW_AMPERSAND_PATTERN = re.compile(r'&(?!([a-zA-Z]+|#[0-9]+|#x[0-9a-fA-F]+);)')


def fix_doctype(content):
    """Normalize DOCTYPE to uppercase at the beginning of file."""
    # Only replace the first occurrence at the top of the file
    match = DOC_TYPE_PATTERN.search(content)
    if match:
        # Replace with standardized uppercase DOCTYPE
        return DOC_TYPE_PATTERN.sub('<!DOCTYPE html>', content, count=1)
    return content


def fix_html_lang(content):
    """Add lang='en' to <html> tags that are missing it."""
    def replacer(match):
        other_attrs = match.group(1).strip()
        if other_attrs:
            return f'<html lang="en" {other_attrs}>'
        else:
            return '<html lang="en">'
    
    return HTML_OPEN_TAG_PATTERN.sub(replacer, content)


def fix_raw_ampersands(content):
    """Replace raw & with &amp; except when it's already part of a valid entity.
    
    This function is careful to avoid replacing ampersands in:
    - HTML comments
    - Script/style tags
    - Already encoded entities like &amp; &nbsp; &#123; &#x7B;
    """
    # Split content to avoid modifying comments and script/style blocks
    # For simplicity, we'll use a regex that works on the text content
    # This is a simplified approach - more robust would parse HTML properly
    
    # Match ampersands NOT in comments, NOT in script/style tags
    # For this implementation, we'll do a simpler approach:
    # Replace & that's not followed by an entity pattern
    
    lines = content.split('\n')
    result_lines = []
    in_script_or_style = False
    
    for line in lines:
        # Check if we're entering/exiting script or style tags
        if re.search(r'<(script|style)\b', line, re.IGNORECASE):
            in_script_or_style = True
        if re.search(r'</(script|style)>', line, re.IGNORECASE):
            in_script_or_style = False
        
        # Don't modify lines in script/style or comments
        if in_script_or_style or line.strip().startswith('<!--'):
            result_lines.append(line)
        else:
            # Replace raw ampersands
            fixed_line = RAW_AMPERSAND_PATTERN.sub('&amp;', line)
            result_lines.append(fixed_line)
    
    return '\n'.join(result_lines)


def fix_html_file(filepath, apply=False):
    """Fix HTML validation issues in a file.
    
    Returns True if changes were made (or would be made in dry-run).
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        original_content = f.read()
    
    content = original_content
    
    # Apply all fixes
    content = fix_doctype(content)
    content = fix_html_lang(content)
    content = fix_raw_ampersands(content)
    
    # Check if changes were made
    if content != original_content:
        if apply:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Fixed: {filepath}")
        else:
            print(f"Would fix: {filepath}")
        return True
    
    return False


def main():
    parser = argparse.ArgumentParser(
        description='Fix HTML validation issues in public/ directory'
    )
    parser.add_argument(
        '--apply',
        action='store_true',
        help='Apply changes to files (default is dry-run)'
    )
    args = parser.parse_args()
    
    # Find all HTML files in public/ directory
    html_files = sorted(glob.glob('public/*.html'))
    
    if not html_files:
        print("No HTML files found in public/ directory")
        return
    
    if not args.apply:
        print("DRY RUN - No files will be modified")
        print("Run with --apply to make changes\n")
    
    changed_count = 0
    for filepath in html_files:
        if fix_html_file(filepath, apply=args.apply):
            changed_count += 1
    
    print(f"\n{changed_count} file(s) {'fixed' if args.apply else 'would be fixed'}")


if __name__ == '__main__':
    main()
