import java.io.IOException;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

public class demoMapper
  extends Mapper<LongWritable, Text, Text, Text> {
  
  @Override
  public void map(LongWritable key, Text value, Context context)
      throws IOException, InterruptedException {
    
    String line = value.toString();
    String[] ele = line.split(",");
    String name = ele[0];

    StringBuilder sb = new StringBuilder();
    int i;
    for (i = 1; i < ele.length - 1; i++) {
      sb.append(ele[i]);
      sb.append("*");
    }
    sb.append(ele[ele.length - 1]);

    String trip = sb.toString();


    context.write(new Text(name), new Text(trip));
  }
}

