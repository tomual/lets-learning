package bawp.programming.coursedatabase;

import java.util.ArrayList;
import java.util.List;

public class CourseServer {

    public List<Course> getCourseList() {

        List<Course> courseList = new ArrayList();

        for (int i = 0; i < 10; i++) {
            Course course = new Course();
            course.setCourseName("Course Name " + i);
            course.setCourseAuthor("Author " + i);

            courseList.add(course);
        }


        return courseList;
    }
}
