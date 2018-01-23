package sample;

import javafx.application.Application;
import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.geometry.Orientation;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.CheckBox;
import javafx.scene.control.Label;
import javafx.scene.layout.FlowPane;
import javafx.stage.Stage;

public class Checkbox extends Application implements EventHandler {

    private Label title;
    private Label response;
    private Label selected;

    private CheckBox maru;
    private CheckBox hana;
    private CheckBox mischa;
    private CheckBox louie;

    private String cats;

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("Cat Collection");

        title = new Label("Collect the Cats");
        response = new Label("");
        selected = new Label("");

        maru = new CheckBox("Maru");
        hana = new CheckBox("Hana");
        mischa = new CheckBox("Mischa");
        louie = new CheckBox("Louie");

        maru.setOnAction(this);
        hana.setOnAction(this);
        mischa.setOnAction(this);
        louie.setOnAction(this);

        FlowPane flowPane = new FlowPane(Orientation.VERTICAL, 10, 10);
        flowPane.setAlignment(Pos.CENTER);
        flowPane.getChildren().add(title);
        flowPane.getChildren().addAll(maru, hana, mischa, louie, response, selected);
        Scene scene = new Scene(flowPane, 300, 300);
        primaryStage.setScene(scene);
        primaryStage.show();

        showSelected();
    }

    void showSelected() {
        cats = "";
        CheckBox checkBoxes[] = {maru, hana, mischa, louie};
        for ( CheckBox cat : checkBoxes ) {
            if (cat.isSelected()) {
                cats += cat.getText() + " ";
            }
        }
        selected.setText(cats);
    }

    @Override
    public void handle(Event event) {
        CheckBox checkedCat = (CheckBox) event.getSource();
        if(checkedCat.isSelected()) {
            response.setText(checkedCat.getText() + " selected");
        } else {
            response.setText(checkedCat.getText() + " unselected");
        }
        showSelected();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
