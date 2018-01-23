package sample;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.FlowPane;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class Main extends Application {

    private Label label;
    private Label label2;
    private TextField textField;

    @Override
    public void start(Stage primaryStage) throws Exception{
        primaryStage.setTitle("JavaFX Test");

        label = new Label();
        label.setText("Label One");

        label2 = new Label();
        label2.setText("Label Two");

        textField = new TextField();
        textField.setPromptText("Placeholder");

        Button button = new Button();
        button.setText("Button");
        button.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                System.out.println("Button Clicked");
                String string = textField.getText().trim();
                label.setText(string);
            }
        });

        FlowPane flowPane = new FlowPane(10, 10);
        flowPane.setAlignment(Pos.CENTER);
        flowPane.getChildren().add(button);
        flowPane.getChildren().add(label);
        flowPane.getChildren().add(textField);
        Scene scene = new Scene(flowPane, 250,250);

//        StackPane stackPane = new StackPane();
//        stackPane.getChildren().add(button);
//        stackPane.getChildren().add(label);
//        Scene scene = new Scene(stackPane, 250,250);

        primaryStage.setScene(scene);
        primaryStage.show();
    }


    public static void main(String[] args) {
        launch(args);
    }
}
