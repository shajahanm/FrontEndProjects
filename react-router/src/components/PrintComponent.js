import { useEffect, useState } from "react";

const PrintComponent = () => {
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
    // Load JSPM from CDN
    const script = document.createElement("script");
    script.src = "https://unpkg.com/jsprintmanager@latest/JSPrintManager.js";
    script.async = true;
    script.onload = () => {
      console.log("JSPM Loaded");
      initializeJSPM();
    };
    document.body.appendChild(script);
  }, []);

  const initializeJSPM = async () => {
    try {
      const JSPM = window.JSPM;

      // Ensure JSPM is installed
      if (!JSPM || !JSPM.JSPrintManager) {
        console.error("JSPrintManager is not available.");
        return;
      }

      // Connect to the service
      JSPM.JSPrintManager.auto_reconnect = true;
      JSPM.JSPrintManager.start();

      // Wait for the connection
      JSPM.JSPrintManager.WS.onStatusChanged = (status) => {
        if (status === JSPM.WSStatus.Open) {
          console.log("JSPM connected");

          // Get printers list
          JSPM.JSPrintManager.getPrinters().then((printerList) => {
            setPrinters(printerList);
            console.log("Available Printers:", printerList);
          });
        }
      };
    } catch (error) {
      console.error("Error initializing JSPM:", error);
    }
  };

  const handlePrint = async () => {
    const JSPM = window.JSPM;
    if (!JSPM || !JSPM.JSPrintManager) return;

    const printJob = new JSPM.ClientPrintJob();
    const printer = new JSPM.InstalledPrinter("Your_Printer_Name");

    // Example text document
    const textFile = new JSPM.PrintFileTXT("Hello, World!", "print.txt", 1);
    printJob.clientPrinter = printer;
    printJob.files.push(textFile);

    // Send the print job
    await printJob.sendToClient();
  };

  return (
    <div>
      <h2>JSPrintManager React Example</h2>
      <p>Available Printers:</p>
      <ul>
        {printers.map((printer, index) => (
          <li key={index}>{printer}</li>
        ))}
      </ul>
      <button onClick={handlePrint}>Print Test</button>
    </div>
  );
};

export default PrintComponent;
