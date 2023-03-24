• Classes - a template used to make objects that have the same properties but different data saved to them  
   ◇ object - a unordered collection of key-value pairs. A object is an example of a class  
   ◇ instance - a specific example of a class  
   ◇ this - refers to the current object that is being executed  
      ▪ Ex:  
      **Main.java**  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        //instances
        Cookie cookieOne = new Cookie("green");
        Cookie cookieTwo = new Cookie("blue");

        cookieOne.setColor("yellow");

        System.out.println(cookieOne.getColor());
        System.out.println(cookieTwo.getColor());
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Cookie.java**  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// class
public class Cookie {
    // class variable
    private String color;

    // properties
    public Cookie(String color) {
        this.color = color;
    }
    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




• Pointers - the location of something in memory  
   ◇ Ex:  
      ▪ map1 = map2 meaning they are both "pointing" to the SAME HashMap in memory. Assigning a new value to either map1 or map2 will also affect the other.    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import java.util.HashMap;

class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map1 = new HashMap<>();
        HashMap<String, Integer> map2 = new HashMap<>();

        map1.put("value", 11);
        map2 = map1;

        map1.put("value", 22);

        System.out.println(map1);
        System.out.println(map2);
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
