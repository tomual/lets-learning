package com.coffeemember.members;

import com.vaadin.server.VaadinRequest;
import com.vaadin.spring.annotation.SpringUI;
import com.vaadin.ui.Label;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

@SpringUI(path = "")
public class Home extends UI {

    @Autowired
    private Service service;

    @Override
    protected void init(VaadinRequest vaadinRequest) {
        VerticalLayout layout = new VerticalLayout();
        layout.setMargin(true);
        layout.setSpacing(true);

        Label label = new Label();
        label.setValue(service.getPost().getTitle());

        JSONArray postsJson = service.getPosts();

        System.out.println( postsJson.length() );

        for (int i = 0; i < postsJson.length(); i++) {
            JSONObject post = postsJson.getJSONObject(i);
            String title = post.get("title").toString();
            System.out.println(title);
        }

        // System.out.println(postsJson);

        layout.addComponent(label);

        setContent(layout);
    }
}
