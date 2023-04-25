# Subsets
The pattern Subsets describes an efficient [BFS](https://github.com/briandgomez/Study/blob/main/Interview/Algorithms/Breadth%20First%20Search.md) approach to handle problems that involve perumtations and combonations of a given set of elements

The pattern looks like this:
- Given a set of `[1, 5, 3]`
  1. Start with an empty set: `[[]]`
  2. Add the first number (`1`) to all the existing subsets to create new subsets: `[[], [1]];`
  3. Add the second number (`5`) to all the existing subsets: `[[], [1], [5], [1,5]];`
  4. Add the third number `(3)` to all the existing subsets: `[[], [1], [5], [1,5], [3], [1,3], [5,3], [1,5,3]];`




### How to identify the Subsets pattern:
- Problems where you need to find the combinations or permutations of a given set
 
### Problems featuring Subsets pattern:
- Subsets With Duplicates (easy)
- String Permutations by changing case (medium)
