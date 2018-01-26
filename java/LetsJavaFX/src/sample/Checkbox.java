package sample;

import javafx.application.Application;
import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.geometry.Orientation;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.CheckBox;
import javafx.scene.control.Label;
import javafx.scene.effect.BoxBlur;
import javafx.scene.effect.Reflection;
import javafx.scene.layout.FlowPane;
import javafx.scene.transform.Rotate;
import javafx.scene.transform.Scale;
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

    private Button rotateButton;
    private Button blurButton;
    private Button scaleButton;

    private Rotate rotate;
    private BoxBlur boxBlur;
    private Scale scale;
    private Reflection reflection;
    private double number = 0.5;

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

        rotateButton = new Button("Rotate");
        blurButton = new Button("Blur");
        scaleButton = new Button("Scale");

        rotateButton.setOnAction(this);
        blurButton.setOnAction(this);
        scaleButton.setOnAction(this);

        rotate = new Rotate();
        boxBlur = new BoxBlur(1.0, 1.0, 1);
        scale = new Scale(number, number);
        reflection = new Reflection();
        reflection.setTopOpacity(0.2);
        reflection.setBottomOpacity(0.2);
        title.setEffect(reflection);

        FlowPane flowPane = new FlowPane(Orientation.VERTICAL, 10, 10);
        flowPane.setAlignment(Pos.TOP_LEFT);
        flowPane.setPadding(new Insets(30));
        flowPane.getChildren().add(title);
        flowPane.getChildren().addAll(maru, hana, mischa, louie, response, selected);
        flowPane.getChildren().addAll(rotateButton, blurButton, scaleButton);
        Scene scene = new Scene(flowPane, 300, 350);
        primaryStage.setScene(scene);
        primaryStage.show();

        showSelected();

        rotateButton.getTransforms().add(rotate);
        scaleButton.getTransforms().add(scale);

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

        if (event.getSource().equals(rotateButton)) {
            System.out.println("Rotate I guess");
            number += 45.0;
            rotate.setAngle(number);
            rotate.setPivotX(rotateButton.getWidth() / 2);
            rotate.setPivotY(rotateButton.getHeight() / 2);

        }
        if (event.getSource().equals(blurButton)) {
            System.out.println("Blur I guess");
            number++;
            blurButton.setEffect(boxBlur);
            boxBlur.setHeight(number);
            boxBlur.setWidth(number);
        }
        if (event.getSource().equals(scaleButton)) {
            System.out.println("Scale I guess");
            System.out.println(number);
            number += 0.1;
            scale.setX(number);
            scale.setY(number);
        }

        if (event.getClass().equals("CheckBox") ) {
            CheckBox checkedCat = (CheckBox) event.getSource();
            if(checkedCat.isSelected()) {
                response.setText(checkedCat.getText() + " selected");
            } else {
                response.setText(checkedCat.getText() + " unselected");
            }
            showSelected();
        }
    }

    public static void main(String[] args) {
        launch(args);
    }
}
