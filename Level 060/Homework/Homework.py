def egged(year, span):
    if year == 0:
        return "No chickens yet!"
    
    total_eggs = 0
    
    egg_production = 300
    for current_year in range(min(year, span)):
        total_eggs += 3 * egg_production
        egg_production = int(egg_production * 0.8)
    return total_eggs


def greet(name): 
    name = name.capitalize()
    return 'Hello ' + '' + name + '!'

def generate_shape(n):
    result = ''
    for i in range(n):
        result += '+' * n
        if i < n - 1:
            result += '\n'
    return result