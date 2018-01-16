package com.hello.world;

public class HelloWorld {

	public static void main(String[] args) {


		ProcessHandle currProcess = ProcessHandle.current();
		ProcessHandle.Info currProcessInfo = currProcess.info();
		System.out.println("PID: " + currProcess.pid());
		System.out.println("Info: " + currProcessInfo);

	}

}
