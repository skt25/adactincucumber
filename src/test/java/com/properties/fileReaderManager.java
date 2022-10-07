package com.properties;

import java.io.IOException;

public class fileReaderManager {
	private fileReaderManager() {
		// TODO Auto-generated constructor stub
	}
	public static fileReaderManager getInstance() {
		fileReaderManager helper = new fileReaderManager();
		return helper;
	}
	public configurationReader getInstanceCR() throws IOException {
		configurationReader reader = new configurationReader();
		return reader;
	}
	

}
