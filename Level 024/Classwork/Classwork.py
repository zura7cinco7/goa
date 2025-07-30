def duplicate_count(text):
    text = text.lower()
    duplicates = []
    
    for char in text:
        if text.count(char) > 1 and char not in duplicates:
            duplicates.append(char)
    
    
    return len(duplicates)