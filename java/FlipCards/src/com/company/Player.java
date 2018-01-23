package com.company;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;

import static javax.swing.SwingUtilities.updateComponentTreeUI;

public class Player {

    private JTextArea question;
    private JTextArea answer;
    private ArrayList<FlipCard> cardList;
    private JFrame frame;
    private int cursor;
    private JButton nextButton;

    public Player() {

        cardList = new ArrayList<FlipCard>();

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

        nextButton = new JButton("Next");
        JButton showAnswerButton = new JButton("Answer");

        JLabel questionLabel = new JLabel("Question");
        JLabel answerLabel = new JLabel("Answer");

        questionLabel.setFont(new Font("Calibri", Font.PLAIN, 12));
        answerLabel.setFont(new Font("Calibri", Font.PLAIN, 12));

        // Content
        mainPanel.add(questionLabel);
        mainPanel.add(questionPane);
        mainPanel.add(answerLabel);
        mainPanel.add(answerPane);
        mainPanel.add(showAnswerButton);
        mainPanel.add(nextButton);

        JMenuBar menuBar = new JMenuBar();
        JMenu fileMenu = new JMenu("File");
        JMenuItem openMenuItem = new JMenuItem("Open");
        fileMenu.add(openMenuItem);
        menuBar.add(fileMenu);

        showAnswerButton.addActionListener(new ShowAnswerListener());
        nextButton.addActionListener(new NextCardListener());
        openMenuItem.addActionListener(new OpenMenuListener());

        frame.getContentPane().add(BorderLayout.CENTER, mainPanel);
        frame.setSize(200, 330);
        frame.setJMenuBar(menuBar);
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new Player();
            }
        });
    }

    private void nextCard() {
        question.setText("");
        answer.setText("");
        showCard(++cursor);
        if (cardList.size() + 1 == cursor) {
            nextButton.setEnabled(false);
        }
    }

    private void showAnswer() {
        answer.setText(cardList.get(cursor).getAnswer());
    }

    private void openFile(File selectedFile) {
        System.out.println(selectedFile.getName());
        FileReader fileReader = null;
        try {
            fileReader = new FileReader(selectedFile);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String line = "";

            while ((line = bufferedReader.readLine()) != null) {
                String[] data = line.split("\\|");
                System.out.println(data.length);
                System.out.println('-');
                if (data.length == 2) {
                    System.out.print(data[0]);
                    System.out.print(" and ");
                    System.out.println(data[1]);
                    cardList.add(new FlipCard(data[0], data[1]));
                }
            }

            cursor = -1;
            nextCard();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void showCard(int i) {
        if (cardList.size() > i) {
            question.setText(cardList.get(i).getQuestion());
        }
    }

    private class NextCardListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            System.out.println("Next Card");
            nextCard();
        }
    }

    private class ShowAnswerListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            System.out.println("Show Answer");
            showAnswer();
        }
    }

    private class OpenMenuListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            System.out.println("Open Card");
            nextButton.setEnabled(true);

            JFileChooser fileChooser = new JFileChooser();
            fileChooser.showOpenDialog(frame);
            openFile(fileChooser.getSelectedFile());
        }
    }

}
