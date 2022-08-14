package Cucumber.Libraries;

import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import jxl.Workbook;
import jxl.format.Colour;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableHyperlink;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;

public class Utilities {

	static Calendar cal = Calendar.getInstance();
	protected static WritableWorkbook resultWritebook;
	protected static WritableSheet resultWriteSheet;
	public static int RowNo=1;
	public String NewFileNamePath;

	protected WritableSheet addLables() throws IOException, Exception {

		File dir=new File (".//");
		if (resultWriteSheet == null) {
			/*String DataTime = xGetDateTime();
			File fileExisting = new File(dir.getCanonicalPath()+"\\CucumberExcelReport"+"\\Cucumber_TestResults"+".xls");  
			if (fileExisting.exists()){  
				Path RSource = Paths.get(dir.getCanonicalPath()+"\\CucumberExcelReport"+"\\Cucumber_TestResults"+".xls");
				Path RTarget= Paths.get(dir.getCanonicalPath()+"\\CucumberExcelReport"+"\\Cucumber_TestResults"+DataTime+".xls");
				Files.copy(RSource, RTarget);
			}
			Path source = Paths.get(dir.getCanonicalPath()+"\\CucumberExcelReport");
			Path target = Paths.get(dir.getCanonicalPath()+"\\CucumberExcelReport"+"\\Cucumber_TestResults.xls");
			Files.copy(source, target,REPLACE_EXISTING);*/
			resultWritebook = Workbook.createWorkbook(new File(dir.getCanonicalPath()+"\\CucumberExcelReport"+"\\Cucumber_TestResults.xls"));
			resultWriteSheet = resultWritebook.createSheet("Results",0);
			resultWriteSheet.addCell(new Label(0,0,"ScenarioName",xFillCell(Colour.GRAY_50)));
			resultWriteSheet.addCell(new Label(1,0,"Steps",xFillCell(Colour.GRAY_50)));
			resultWriteSheet.addCell(new Label(2,0,"Status",xFillCell(Colour.GRAY_50)));
			resultWriteSheet.addCell(new Label(3,0,"Exception",xFillCell(Colour.GRAY_50)));
			resultWriteSheet.addCell(new Label(4,0,"Snapshot",xFillCell(Colour.GRAY_50)));
			resultWriteSheet.addCell(new Label(5,0,"Start Time",xFillCell(Colour.YELLOW2)));
			resultWriteSheet.addCell(new Label(6,0,"End Time",xFillCell(Colour.YELLOW2)));
			resultWriteSheet.addCell(new Label(7,0,"Total Time",xFillCell(Colour.YELLOW2)));
		}
		return resultWriteSheet;
	}

	public void resultwriteScenario(String ScenarioName, String StepName) throws RowsExceededException, WriteException {
		RowNo=RowNo+1;
		resultWriteSheet.addCell(new Label(0,RowNo,ScenarioName));
		resultWriteSheet.addCell(new Label(1,RowNo+1,StepName));
		resultWriteSheet.addCell(new Label(2,RowNo+1,"Pass",xFillCell(Colour.GREEN)));


	}
	
	public void resultwriteScenario(String ScenarioName, String StepName, String status, WebDriver aDriver, String MethodName) throws Exception {
		RowNo=RowNo+1;
		resultWriteSheet.addCell(new Label(0,RowNo,ScenarioName));
		resultWriteSheet.addCell(new Label(1,RowNo+1,StepName));
		resultWriteSheet.addCell(new Label(2,RowNo+1,"Fail",xFillCell(Colour.RED)));
		resultWriteSheet.addCell(new Label(3,RowNo+1,status));
		File scrFile = ((TakesScreenshot)aDriver).getScreenshotAs(OutputType.FILE);
		String FilePath=xRandomTimeStampName(MethodName);
		FileUtils.copyFile(scrFile, new File(FilePath));
		WritableHyperlink hyperlink = new WritableHyperlink(4, RowNo+1, new File(FilePath),MethodName);
		resultWriteSheet.addHyperlink(hyperlink);
	}

	public void resultwriteSteps(String StepName) throws RowsExceededException, WriteException {
		RowNo=RowNo+1;
		resultWriteSheet.addCell(new Label(1,RowNo+1,StepName));
		resultWriteSheet.addCell(new Label(2,RowNo+1,"Pass",xFillCell(Colour.GREEN)));
	}
	
	public void resultwriteSteps(String StepName, WebDriver aDriver, String status, String MethodName) throws Exception {
		RowNo=RowNo+1;
		resultWriteSheet.addCell(new Label(1,RowNo+1,StepName));
		resultWriteSheet.addCell(new Label(2,RowNo+1,"Fail",xFillCell(Colour.RED)));
		resultWriteSheet.addCell(new Label(3,RowNo+1,status));
		File scrFile = ((TakesScreenshot)aDriver).getScreenshotAs(OutputType.FILE);
		String FilePath=xRandomTimeStampName(MethodName);
		FileUtils.copyFile(scrFile, new File(FilePath));
		WritableHyperlink hyperlink = new WritableHyperlink(4, RowNo+1, new File(FilePath),MethodName);
		resultWriteSheet.addHyperlink(hyperlink);

	}
	
	public String xRandomTimeStampName(String MethodName) throws Exception {

		// Get the dir path
		File directory = new File(".//");

		// get current date time with Date() to create unique file name
		DateFormat dateFormat = new SimpleDateFormat("MMM_dd_yyyy__hh_mm_ssaa");

		// get current date time with Date()
		Date date = new Date();

		// To identify the system
		InetAddress ownIP = InetAddress.getLocalHost();

		NewFileNamePath = directory.getCanonicalPath() + "\\ScreenShots\\"+ MethodName + "_" + dateFormat.format(date) + "_" + ownIP.getHostAddress()+".png";
		return NewFileNamePath;
	}

	/**
	 * Get Date Time Sec stamp
	 * 
	 */
	@SuppressWarnings("deprecation")
	public static String RND() throws Exception {
		String DTStamp = (((new Date()).getMonth())+1)+((new Date()).getDate())+((new Date()).getYear())+""+((new Date()).getHours())+((new Date()).getMinutes())+((new Date()).getSeconds());
		return (DTStamp);
	}

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

	public static String xGetCustomizedDate(int Day_argument,int Month_argument, int Year_argument) throws Exception {

		SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy"); 

		cal.add(Calendar.DATE, Day_argument);

		cal.add(Calendar.MONTH, Month_argument);		

		cal.add(Calendar.YEAR, Year_argument);

		String CustomizedDate=dateFormat.format(cal.getTime());

		return(CustomizedDate);
	}

	public WritableCellFormat xFillCell(Colour colour) throws WriteException{
		WritableFont cellFont = new WritableFont(WritableFont.ARIAL, 12);
		WritableCellFormat cellFormat = new WritableCellFormat(cellFont);
		cellFormat.setBackground(colour);
		return cellFormat;
	}

}
