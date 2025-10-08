# Binary System & Data Storage

- Computers operate using 0s and 1s (binary).
    
- Compilers translate binary via virtual machines to produce meaningful instructions.
    
- 1 bit = 2 states
    
- 2 bits = 4 states
    
- 8 bits = 1 byte
    
- Binary numbers (e.g. `1001`) can represent either values or instructions.
    
- These representations are called **symbols** in low-level computation.
    

---

# Data Types, Data Structures, and Memory Usage

## Array

- Arrays hold multiple values that are logically grouped.
    
- In **static arrays**, elements are stored in contiguous memory.
    
- If memory is insufficient, the array must be relocated entirely.
    
- **Dynamic arrays** allocate extra memory (buffer) to allow growth.
    
- The trade-off: may consume more memory than needed.
    

## Linked List

- Elements are stored in non-contiguous memory locations.
    
- Each element (node) contains:
    
    - A value
        
    - A pointer (reference) to the next node
        
- Easier to insert or remove values without relocating the entire structure.
    
- Efficient in dynamic data scenarios.
    

## Array vs Linked List

### Array

- Constant-time access by index (random access).
    
- Uses less memory (only values stored).
    
- Efficient when data size is known and rarely changes.
    

### Linked List

- Accessing a value requires traversal from the head node.
    
- More memory usage (stores value + pointer).
    
- Better performance when frequent insertions/deletions are required.
    

## Stack

- A stack is like a physical pile of objects.
    
- Operates on a **Last In, First Out (LIFO)** principle.
    
- `Push` adds to the top, `Pop` removes from the top.
    
- Useful in undo features, recursion, browser history.
    

## Queue

- Like a line of people waiting their turn.
    
- Operates on a **First In, First Out (FIFO)** principle.
    
- `Enqueue` adds to the end, `Dequeue` removes from the front.
    
- Used in printers, task scheduling, and messaging systems.
    

## Hash Table & Hash Function

- Stores data using key-value pairs.
    
- A **hash function** converts a key into an index within an array.
    
- Characteristics of a good hash function:
    
    - Fast to compute
        
    - Returns same output for same input
        
    - Avoids returning same index for different inputs
        
    - Output must remain within array bounds
        

## Hash Collision

- Occurs when two different keys produce the same index.
    
- Example: `"apple"` and `"apricot"` might hash to the same index.
    
- Solution: **chaining** (store values at the same index in a list).
    
- Downside: accessing becomes linear (`O(n)`) instead of constant (`O(1)`).
    
- Minimize collisions by using better hash functions.
    

---

# Algorithms

## Algorithm Analysis

- Algorithms are step-by-step paths to a goal.
    
- Cannot rely on runtime alone (depends on hardware/language).
    
- Analysis must be hardware-independent and fair.
    
- Measured using growth rate — not execution time.
    

## RAM Model

- Assumes a theoretical computer with uniform memory access.
    
- All simple operations take 1 unit of time.
    
- Loops take time proportional to iteration count.
    
- Memory reads also cost 1 unit each.
    

## Time Complexity

- Algorithm performance varies based on input.
    
- Example: looking up a word in a dictionary may take more or fewer steps depending on the word.
    
- We categorize by:
    
    - Best case
        
    - Average case
        
    - Worst case (most commonly used for guarantees)
        

## Big O Notation

- Describes how runtime scales as input size grows.
    
- Doesn't measure actual time — only growth rate.
    
- Examples:
    
    - Linear search → `O(n)`
        
    - Binary search → `O(log n)`
        
    - Bubble sort → `O(n²)`
        

## Sorting Algorithms

- Help in:
    
    - Faster searching
        
    - Comparing elements
        
    - Finding nearest values
        
    - Finding most frequent values (modes)
        

## Insertion Sort

- Example array: `[65, 27, 13, 23, 10]`
    
- Compares and shifts elements to correct position.
    
- Worst case time complexity: `O(n²)`
    
- Suitable for small or nearly sorted data sets.
    

---

# Recursion

- A recursive function calls itself.
    
- Breaks problems into smaller subproblems.
    
- Must include a **base case** to stop recursion.
    
- Once the base case is hit, the function unwinds and resolves each previous step.
    

### Example:

`function factorial(n) {   if (n === 1) return 1;   return n * factorial(n - 1); }
console.log(factorial(5)); // Output: 120`