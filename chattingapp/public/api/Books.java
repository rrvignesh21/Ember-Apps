import java.io.IOException;
import java.io.PrintWriter;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

import org.json.*;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServlet;

public class Books extends HttpServlet{
    protected void doPost(HttpServletRequest request,HttpServletResponse response)throws IOException{
        PrintWriter out = response.getWriter();
        try{
            Class.forName("org.postgresql.Driver");
            Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/bookmanagement", "postgres", "Raja@2001");
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("Select * from bookdetails where userid = " + request.getSession().getAttribute("userId"));
            JSONArray data = new JSONArray(); 
            while(resultSet.next()){
                JSONObject book = new JSONObject();
                book.put("id", resultSet.getInt("bookid"));
                book.put("title",resultSet.getString("title"));
                book.put("genre",resultSet.getString("genre"));
                book.put("author",resultSet.getString("author"));
                book.put("status",resultSet.getBoolean("status"));
                book.put("finished",resultSet.getInt("finished"));
                book.put("readdate",resultSet.getString("readdate"));
                book.put("finishdate",resultSet.getString("finishdate"));
                data.put(book);
            }
            JSONObject result = new JSONObject();
            result.put("books",data);
            connection.close();
            statement.close();
            out.print(result.toString());
        }
        catch(Exception e){
        }
    }
    
}