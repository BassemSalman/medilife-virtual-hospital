abstract class Button{ 
 String caption; 
 public Button(String caption){  this.caption = caption; 
 System.out.println("Parent");  } 
 public abstract void click(); 
 }