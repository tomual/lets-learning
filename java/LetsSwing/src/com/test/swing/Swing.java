package com.test.swing;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;

public class Swing implements ActionListener {
	
	JLabel jAskLabel;
	JLabel jContentLabel;
	JTextField jTextField;
	JButton submitButton;
	
	public Swing() {
		// Container
		JFrame jFrame = new JFrame("Test Swing Application");
		jFrame.setSize(300, 150);
		jFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		jFrame.setVisible(true);
		jFrame.setLayout(new FlowLayout());
		
		// Contents
		jAskLabel = new JLabel("Are you a cat or a bird");
		jContentLabel = new JLabel("");
		
		submitButton = new JButton("Submit");
		JButton resetButton = new JButton("Reset");
		JButton helpButton = new JButton("Help");
		JButton cancelButton = new JButton("Cancel");
		
		jTextField = new JTextField(10);
		jTextField.setActionCommand("textField");
		
		jFrame.add(jAskLabel);
		jFrame.add(jTextField);
		jFrame.add(submitButton);
		jFrame.add(resetButton);
		jFrame.add(helpButton);
		jFrame.add(cancelButton);
		jFrame.add(jContentLabel);

//		jTextField.addActionListener(new ActionListener() {
//
//			@Override
//			public void actionPerformed(ActionEvent arg0) {
//				System.out.println("Type");
//			}
//			
//		});
//		
//		submitButton.addActionListener(new ActionListener() {
//
//			@Override
//			public void actionPerformed(ActionEvent arg0) {
//				System.out.println("Submit");
//			}
//			
//		});
//		
//		resetButton.addActionListener(new ActionListener() {
//
//			@Override
//			public void actionPerformed(ActionEvent arg0) {
//				System.out.println("Reset");
//			}
//			
//		});
		
		jTextField.addActionListener(this);
		submitButton.addActionListener(this);
		resetButton.addActionListener(this);
		
	}

	public static void main(String[] args) {
		// Start frame
		SwingUtilities.invokeLater(new Runnable() {

			@Override
			public void run() {
				new Swing();				
			}
			
		});
		
	}

	@Override
	public void actionPerformed(ActionEvent arg0) {
		switch (arg0.getActionCommand()) {
		case "Submit":
			System.out.println("Submit Pressed");
			jContentLabel.setText(jTextField.getText());
			break;
		case "Reset":
			System.out.println("Reset Pressed");
			jContentLabel.setText("");
			break;

		case "textField":
			System.out.println("Type Submitted");
			break;


		default:
			break;
		}
		
	}

}
