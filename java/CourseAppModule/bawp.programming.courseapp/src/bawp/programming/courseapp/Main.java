package bawp.programming.courseapp;

import bawp.programming.coursedatabase.Course;
import bawp.programming.coursedatabase.CourseServer;
import jdk.incubator.http.HttpClient;
import jdk.incubator.http.HttpRequest;
import jdk.incubator.http.HttpResponse;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        CourseServer courseServer = new CourseServer();
        List<Course> courses = courseServer.getCourseList();
        for (Course course : courses) {
            System.out.println("Courses " + course.getCourseName());
        }

        httpTest();
    }

    public static void httpTest() {
        HttpClient httpClient = HttpClient.newHttpClient();
        try {
            HttpRequest httpRequest = HttpRequest.newBuilder().uri(new URI("https://www.google.com"))
                    .GET().build();
            try {
                HttpResponse<String> httpResponse = httpClient.send(httpRequest,
                        HttpResponse.BodyHandler.asString());
                System.out.println(httpResponse.body());
            } catch (IOException e) {
                e.printStackTrace();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
    }
}
