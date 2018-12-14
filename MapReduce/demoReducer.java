import java.io.IOException;
//import org.apache.hadoop.io.ArrayWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;


public class demoReducer
  extends Reducer<Text, Text, Text, Text> {
  
  @Override
  public void reduce(Text key, Iterable<Text> values, Context context)
      throws IOException, InterruptedException {


    StringBuilder sb = new StringBuilder();

    for (Text trip : values) {
      sb.append(trip.toString());
      sb.append("#");
    }

    String res = sb.substring(0, sb.length() - 1);


    context.write(key, new Text(res));
  }
}

