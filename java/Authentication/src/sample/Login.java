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
            FXMLLoader loader = new FXMLLoader();
            loader.setLocation(getClass().getResource("page.fxml"));
            try {

                loader.load();
            } catch (IOException e) {
                e.printStackTrace();
            }

            Parent root = loader.getRoot();
            Scene scene = new Scene(root);
            Page page = loader.getController();
            pageStage.setScene(scene);
            page.initialize();
            page.setPageText(usernameInput.getText());
            pageStage.show();
        }
    }


    @Override
    public void initialize(URL location, ResourceBundle resources) {

    }
}
