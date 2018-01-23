package com.company;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.font.TextAttribute;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.UUID;

import static javax.swing.SwingUtilities.updateComponentTreeUI;

public class Builder {
    private JTextArea question;
    private JTextArea answer;
    private ArrayList<FlipCard> cardList;
    private JFrame frame;

    public Builder() {

        cardList = new ArrayList<FlipCard>();

        // Frame and Panel
        frame = new JFrame("Flip Card");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel mainPanel = new JPanel();
        Font font = new Font("Calibri", Font.PLAIN, 14);

        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (UnsupportedLookAndFeelException e) {
            e.printStackTrace();
        }
        updateComponentTreeUI(frame);

        question = new JTextArea(5, 15);
        question.setLineWrap(true);
        question.setWrapStyleWord(true);
        question.setFont(font);
        JScrollPane questionPane = new JScrollPane(question);
        questionPane.setVerticalScrollBarPolicy(ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED);
        questionPane.setHorizontalScrollBarPolicy(ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER);

        answer = new JTextArea(5, 15);
        answer.setLineWrap(true);
        answer.setWrapStyleWord(true);
        answer.setFont(font);
        JScrollPane answerPane = new JScrollPane(answer);
        answerPane.setVerticalScrollBarPolicy(ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED);
        answerPane.setHorizontalScrollBarPolicy(ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER);

        JButton nextButton = new JButton("Next");

        JLabel questionLabel = new JLabel("Question");
        JLabel answerLabel = new JLabel("Answer");

        questionLabel.setFont(new Font("Calibri", Font.PLAIN,12));
        answerLabel.setFont(new Font("Calibri", Font.PLAIN,12));

        // Content
        mainPanel.add(questionLabel);
        mainPanel.add(questionPane);
        mainPanel.add(answerLabel);
        mainPanel.add(answerPane);
        mainPanel.add(nextButton);

        JMenuBar menuBar = new JMenuBar();
        JMenu fileMenu = new JMenu("File");
        JMenuItem newMenuItem = new JMenuItem("New");
        JMenuItem saveMenuItem = new JMenuItem("Save");
        fileMenu.add(newMenuItem);
        fileMenu.add(saveMenuItem);
        menuBar.add(fileMenu);

        nextButton.addActionListener(new NextCardListener());
        newMenuItem.addActionListener(new NewMenuItemListener());
        saveMenuItem.addActionListener(new SaveMenuItemListener());

        frame.getContentPane().add(BorderLayout.CENTER, mainPanel);
        frame.setSize(200, 330);
        frame.setJMenuBar(menuBar);
        frame.setVisible(true);
    }

    public static void main(String[] args) {

        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new Builder();
            }
        });
    }

    class NextCardListener implements ActionListener {

        @Override
        public void actionPerformed(ActionEvent e) {
            System.out.println("Next");
            FlipCard flipCard = new FlipCard(question.getText(), answer.getText());
            cardList.add(flipCard);
            resetForm();
            for (FlipCard flippy: cardList ) {
                System.out.print(flippy.getQuestion());
                System.out.print(" : ");
                System.out.println(flippy.getAnswer());
            }
        }
    }

    private void resetForm() {
        question.setText("");
        answer.setText("");
        question.requestFocus();
    }

    class NewMenuItemListener implements ActionListener {

        @Override
        public void actionPerformed(ActionEvent e) {
            System.out.println("New");
            resetForm();
            cardList = new ArrayList<FlipCard>();
        }
    }

    class SaveMenuItemListener implements ActionListener {

        @Override
        public void actionPerformed(ActionEvent e) {
            System.out.println("Save");

            FlipCard flipCard = new FlipCard(question.getText(), answer.getText());
            cardList.add(flipCard);
            resetForm();

            JFileChooser fileChooser = new JFileChooser();
            fileChooser.showSaveDialog(frame);
            saveFile(fileChooser.getSelectedFile());
        }
    }

    private void saveFile(File selectedFile) {
        try {
            FileWriter fileWriter = new FileWriter(selectedFile);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            for (FlipCard flippy: cardList ) {
                bufferedWriter.write(flippy.getQuestion() + "|");
                bufferedWriter.write(flippy.getAnswer() + "\n");
            }
            bufferedWriter.close();
        } catch (IOException e1) {
            e1.printStackTrace();
        }
    }
}
