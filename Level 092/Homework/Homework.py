def multiplication_table(N):
    result = []
    for i in range(1,N + 1):
        rows = []
        for char in range(1,N + 1):
            rows.append(i * char)
        result.append(rows)
    return result