package sample;

import com.jfoenix.controls.JFXButton;
import javafx.application.Application;
import javafx.fxml.FXML;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class Page extends Application {

    @FXML
    private Text pageText;

    @FXML
    private Text pagTitle;

    @FXML
    private JFXButton cloeButton;

    @FXML
    private JFXButton nextButton;

    void initialize() {

    }

    void setPageText(String name) {
        pageText.setText(pageText.getText() + " " + name);
    }

    @FXML
    void linkClick() {
        getHostServices().showDocument("http://google.com");
    }

    @Override
    public void start(Stage primaryStage) throws Exception {

    }
}
