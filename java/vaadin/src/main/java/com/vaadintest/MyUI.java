package com.vaadintest;

import javax.servlet.annotation.WebServlet;

import com.vaadin.annotations.Theme;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.icons.VaadinIcons;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.*;

/**
 * This UI is the application entry point. A UI may either represent a browser window 
 * (or tab) or some part of an HTML page where a Vaadin application is embedded.
 * <p>
 * The UI is initialized using {@link #init(VaadinRequest)}. This method is intended to be 
 * overridden to add component to the user interface and initialize non-component functionality.
 */
@Theme("mytheme")
public class MyUI extends UI {

    @Override
    protected void init(VaadinRequest vaadinRequest) {
        initForm();
    }

    private void initForm() {
        VerticalLayout verticalLayout = new VerticalLayout();

        FormLayout formLayout = new FormLayout();

        TextField nameField = new TextField("Name");
        nameField.setIcon(VaadinIcons.USER);
        nameField.setRequiredIndicatorVisible(true);

        TextField emailField = new TextField("Email");
        emailField.setIcon(VaadinIcons.ENVELOPE);
        emailField.setRequiredIndicatorVisible(true);

        formLayout.addComponents(nameField, emailField);
        verticalLayout.addComponent(formLayout);
        verticalLayout.setDefaultComponentAlignment(Alignment.MIDDLE_CENTER);

        setContent(verticalLayout);
    }

    private void initVertical() {
        VerticalLayout verticalLayout = new VerticalLayout();

        TextField nameField = new TextField();
        nameField.setCaption("Name");

        TextField usernameField = new TextField();
        usernameField.setCaption("Username");

        PasswordField passwordField = new PasswordField();
        passwordField.setCaption("Password");

        Label nameLabel = new Label();

        Button login = new Button("Login!");
        login.addClickListener(e-> {
            nameLabel.setValue(usernameField.getValue());
            Notification.show("Hello " + usernameField.getValue());
        });

        verticalLayout.setMargin(true);
        verticalLayout.setSpacing(true);
        verticalLayout.setDefaultComponentAlignment(Alignment.MIDDLE_CENTER);
        verticalLayout.addComponents(nameField, usernameField, passwordField, login, nameLabel);

        setContent(verticalLayout);
    }

    private void initHorizontal() {
        HorizontalLayout horizontalLayout = new HorizontalLayout();

        TextField usernameField = new TextField();
        usernameField.setCaption("Username");

        Label nameLabel = new Label();

        Button login = new Button("Login!");
        login.addClickListener(e-> {
            nameLabel.setValue(usernameField.getValue());
            Notification.show("Hello " + usernameField.getValue());
        });

        horizontalLayout.setMargin(true);
        horizontalLayout.setSpacing(true);
        horizontalLayout.addComponents(usernameField, login, nameLabel);

        setContent(horizontalLayout);
    }

    @WebServlet(urlPatterns = "/*", name = "MyUIServlet", asyncSupported = true)
    @VaadinServletConfiguration(ui = MyUI.class, productionMode = false)
    public static class MyUIServlet extends VaadinServlet {
    }
}
