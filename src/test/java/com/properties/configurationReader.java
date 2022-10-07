package com.properties;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class configurationReader {
public static Properties p;
public configurationReader() throws IOException {
File f = new File("C:\\Users\\sures\\eclipse-workspace\\Adactinucumber\\src\\test\\java\\com\\properties\\Adactin.properties");
FileInputStream fis = new FileInputStream(f);
p = new Properties();
p.load(fis);

}
public String getBrowser() {
	String browser = p.getProperty("browser");
	return browser;
	
	
}
public String getUrl() {
	String url = p.getProperty("url");
	return url;
}

}
