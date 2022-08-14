package Cucumber.Utilities;

import java.net.InetAddress;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;



public class Utilities extends TestProperties {

	static Calendar cal = Calendar.getInstance();
	public static TestProperties _properties = new TestProperties();

	// Get date time
	public java.lang.String xGetDateTime() throws Exception {
		// get current date time with Date() to create unique file name
		DateFormat dateFormat = new SimpleDateFormat("hh_mm_ssaadd_MMM_yyyy");
		// get current date time with Date()
		Date date = new Date();
		return (dateFormat.format(date));
	}
	// DateFormat = "MM/dd/yyyy '-' h:mm a";
	public java.lang.String xGetDTAP() throws Exception {
		Date dNow = new Date( );
		SimpleDateFormat ft = new SimpleDateFormat ("MM/dd/yyyy '-' h:mm a");
		//System.out.println("Current Date: " + ft.format(dNow));
		return (ft.format(dNow));
	}
	// DateFormat = "MMM dd, yyyy";
	public java.lang.String xGetDate(String DateFormat) throws Exception {
		// get current date time with Date() to create unique file name
		DateFormat dateFormat = new SimpleDateFormat(DateFormat);
		// get current date time with Date()
		Date date = new Date();
		return (dateFormat.format(date));
	}

	// Get date time with SelText
	public java.lang.String xGetDateTimeSel() throws Exception {
		// get current date time with Date() to create unique file name
		DateFormat dateFormat = new SimpleDateFormat("hh_mm_ssaadd_MMM_yyyy");
		// get current date time with Date()
		Date date = new Date();
		return ("S_" + dateFormat.format(date));
	}

	public java.lang.String xPreviousDate(String DateFormat) throws Exception {
		// get current date time with Date() to create unique file name
		DateFormat dateFormat = new SimpleDateFormat(DateFormat);
		// get current date time with Date()
		cal.add(Calendar.DATE, -1);
		return (dateFormat.format(cal.getTime()));
	}

	// Get date time with System IP
	public java.lang.String xGetDateTimeIP() throws Exception {
		// get current date time with Date() to create unique file name
		DateFormat dateFormat = new SimpleDateFormat("hh_mm_ssaa_dd_MMM_yyyy");
		// get current date time with Date()
		Date date = new Date();
		// To identify the system
		InetAddress ownIP = InetAddress.getLocalHost();
		return (dateFormat.format(date) + "_IP" + ownIP.getHostAddress());
	}
}
