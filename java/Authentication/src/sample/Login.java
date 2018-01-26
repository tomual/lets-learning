package sample;

import com.jfoenix.controls.JFXButton;
import com.jfoenix.controls.JFXPasswordField;
import com.jfoenix.controls.JFXTextField;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

public class Login implements Initializable {

    @FXML
    private JFXTextField usernameInput;

    @FXML
    private JFXButton loginButton;

    @FXML
    private JFXPasswordField passwordInput;

    public void loginButtonClicked(ActionEvent actionEvent) {

        loginButton.getScene().getWindow().hide();

        System.out.println(usernameInput.getText());
        System.out.println(passwordInput.getText());

        if (!usernameInput.getText().trim().equals("") && !passwordInput.getText().trim().equals("")) {
            Stage pageStage = new Stage();
            try {
                Parent root = FXMLLoader.load(getClass().getResource("page.fxml"));
                Scene scene = new Scene(root);
                pageStage.setScene(scene);
                pageStage.show();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


    @Override
    public void initialize(URL location, ResourceBundle resources) {

    }
}
