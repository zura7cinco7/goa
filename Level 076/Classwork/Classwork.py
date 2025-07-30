def find_missing(sequence):
    d1 = sequence[1] - sequence[0]
    d2 = sequence[2] - sequence[1]
    
    d = d1 if d1 < d2 else d2 
    
    for i in range(len(sequence) - 1):
        if sequence[i + 1] - sequence[i] != d:
            return sequence[i] + d