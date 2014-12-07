from itertools import permutations
letters = "abcdefghijklmnopqrstuvwxyz"
numbers = "1234567890"
letter_permutations = permutations(letters, 3)
number_permutations = permutations(numbers, 3)
for i in range(0, 30):
    print ''.join(letter_permutations.next()) + ''.join(number_permutations.next())
