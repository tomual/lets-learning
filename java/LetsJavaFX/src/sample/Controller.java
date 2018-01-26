package sample;

import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.Label;

import java.net.URL;
import java.util.ResourceBundle;

public class Controller implements Initializable {
    public Label testLabel;
    public Button testButton;

    public void testAction() {
        System.out.println("Hello?");
        testLabel.setText("Button Clicked");
    }
    public void testAction2() {
        System.out.println("Can you see me");
    }
    public void whatthehfuck() {
        System.out.println("Can you see me");
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {

    }
}
