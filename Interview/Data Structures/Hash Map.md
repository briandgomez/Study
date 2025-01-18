* Hashmap - data structure that stores information in a {key,value} pair format  
   - In order to acccess a specific value its corresponding key is required
   - Inserting a duplicate key will overwrite the value for the exisiting key
 ![image](https://github.com/user-attachments/assets/94718741-3bfe-40bd-a7d7-e4a51a787e27)

##### Basic Hashmap 
```
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        hashMap();
    }

    public static void hashMap() {
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        map.put("Pair 1", 1);
        map.put("Pair 2", 2);
        map.put("Pair 3", 3);
        System.out.println(map);
    }
}
```

### When and when NOT to use a doubly linked list
#### When:  
- Counting the frequency of elements

#### When NOT:
- Order matters
- Memory usage is important
