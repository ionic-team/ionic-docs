# StarPRNT 


* Ionic Native wrappers for the starprnt cordova plugin for Star Micronics Bluetooth/LAN printers


Repo: [https://github.com/auctifera-josed/starprnt](https://github.com/auctifera-josed/starprnt)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-starprnt
$ npm install --save @ionic-native/star-prnt
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { StarPRNT } from '@ionic-native/starprnt';


constructor(private starprnt: StarPRNT) { }

...


this.starprnt.portDiscovery('all')
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```




<p><br></p>

## Instance Members

### AlignmentPosition

Constant for possible AlignmentPosition

### QrCodeModel

Constant for possible QrCodeModel

### QrCodeLevel

Constant for possible QrCodeLevel

### LogoSize

Constant for possible LogoSize

### InternationalType

Constant for possible InternationalType

### FontStyleType

Constant for possible FontStyleType

### CutPaperAction

Constant for possible CutPaperAction

### BlackMarkType

Constant for possible BlackMarkType

### BitmapConverterRotation

Constant for possible BitmapConverterRotation

### BarcodeWidth

Constant for possible BarcodeWidth

### BarcodeSymbology

Constant for possible BarcodeSymbology

### checkStatus

Checks the status of the printer

<dl>
<dt><h4>port</h4><strong>Type: </strong><code>string</code></dt>
<dd>Printer name i.e BT:StarMicronics</dd><dt><h4>emulation</h4><strong>Type: </strong><code>string</code></dt>
<dd>StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"</dd>
</dl>

### connect

Allows you to connect to the printer, keep the connection alive and receive status updates through an observable

<dl>
<dt><h4>port</h4><strong>Type: </strong><code>string</code></dt>
<dd>printer name i.e BT:StarMicronics.</dd><dt><h4>emulation</h4><strong>Type: </strong><code>string</code></dt>
<dd>StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"</dd>
</dl>

### disconnect

Allows to disconnect (close the connection to the peripherals), this is useful to avoid keeping alive a connection when not in the app to save device battery
(energy consumption). You should call this function when the app is paused or closed.

### getStatus

Returns an observable with the device status events. Only fires when a printer is connnected through the connect() function

### openCashDrawer

sends an appendPeripheral command to the printer for channels No1 and No2

<dl>
<dt><h4>port</h4><strong>Type: </strong><code>string</code></dt>
<dd>Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function</dd><dt><h4>emulation</h4><strong>Type: </strong><code>string</code></dt>
<dd>StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"</dd>
</dl>

### portDiscovery

Find available printers

<dl>
<dt><h4>type</h4><strong>Type: </strong><code>string</code></dt>
<dd>Interface Type: All, LAN, Bluetooth, USB</dd>
</dl>

### print

Sends an Array of commands to the command buffer using the Android ICommandBuilderInterface or iOS ISCBBuilderInterface

<dl>
<dt><h4>port</h4><strong>Type: </strong><code>string</code></dt>
<dd>Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function</dd><dt><h4>emulation</h4><strong>Type: </strong><code>string</code></dt>
<dd>StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"</dd><dt><h4>commandsArray</h4><strong>Type: </strong><code>CommandsArray</code></dt>
<dd>See CommandsArray table below</dd>
</dl>

### printImage

Gets an image from a string URI and converts it to bitmap to send it to the printer

<dl>
<dt><h4>port</h4><strong>Type: </strong><code>string</code></dt>
<dd>Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function</dd><dt><h4>emulation</h4><strong>Type: </strong><code>string</code></dt>
<dd>StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"</dd><dt><h4>imageObj</h4><strong>Type: </strong><code>ImageObj</code></dt>
<dd>See ImageObj table below</dd>
</dl>

### printRasterReceipt

Converts the text into a bitmap image and sends it to the printer

<dl>
<dt><h4>port</h4><strong>Type: </strong><code>string</code></dt>
<dd>Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function</dd><dt><h4>emulation</h4><strong>Type: </strong><code>string</code></dt>
<dd>StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"</dd><dt><h4>rasterObj</h4><strong>Type: </strong><code>RasterObj</code></dt>
<dd>See RasterObj table below</dd>
</dl>

### printRawText

Prints plain text

<dl>
<dt><h4>port</h4><strong>Type: </strong><code>string</code></dt>
<dd>Printer name i.e BT:StarMicronics. Send null to use a printer connected via StarIOExtManager using the connect() function</dd><dt><h4>emulation</h4><strong>Type: </strong><code>string</code></dt>
<dd>StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"</dd><dt><h4>printObj</h4><strong>Type: </strong><code>PrintObj</code></dt>
<dd>See PrintObj table below</dd>
</dl>

<p><br></p>

## CommandsArray

<dl>
<dt><h4>Array</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>length</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.</dd>
</dl>

## ImageObj

<dl>
<dt><h4>cutReceipt</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Sends a PartialCutWithFeed command to the printer, defaults to true <span class="tag">optional</span></dd><dt><h4>openCashDrawer</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>sends a appendPeripheral command to the printer for channels No1 and No2 - Defaults to true <span class="tag">optional</span></dd><dt><h4>paperWidth</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Image width (Units: Dots) defaults to 576 <span class="tag">optional</span></dd><dt><h4>uri</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Image URI to print, this can be obtained via the camera or photo library or as a static resource saved on the phone memory</dd>
</dl>

## PrintCommand

<dl>
<dt><h4>BarcodeSymbology</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendBarcode command.
Choose the format of the return value defined in StarPRNT.BarcodeSymbology or the BarcodeSymbology enum.
'Code128' | 'Code39' | 'Code93' | 'ITF' | 'JAN8' | 'JAN13' | 'NW7' | 'UPCA' | 'UPCE' |
Example: {appendBarcode:'{BStar', BarcodeSymbology:BarcodeSymbology.Code128} <span class="tag">optional</span></dd><dt><h4>BarcodeWidth</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendBarcode command.
Choose the format of the return value defined in StarPRNT.BarcodeWidth or the BarcodeWidth enum.
Mode1 | Mode2 | Mode3 | Mode4 | Mode5 | Mode6 | Mode7 | Mode8 | Mode9
Example: {appendBarcode:'{BStar', BarcodeWidth:BarcodeWidth.Mode2} <span class="tag">optional</span></dd><dt><h4>QrCodeLevel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendQrCode command.
Choose the format of the return value defined in StarPRNT.QrCodeLevel or the QrCodeLevel enum. 'No1' | 'No2'. Default 'H'
Example: {appendQrCode:'{BStar', QrCodeLevel:QrCodeLevel.H} <span class="tag">optional</span></dd><dt><h4>QrCodeModel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendQrCode command.
Choose the format of the return value defined in StarPRNT.QrCodeModel or the QrCodeModel enum. 'No1' | 'No2' Default 'No2'
Example: {appendQrCode:'{BStar', QrCodeModel:QrCodeModel.No1} <span class="tag">optional</span></dd><dt><h4>absolutePosition</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendBitmap command, the appendBarcode command, or the appendQrCode command (Units:Dots)
appendBitmap Example: {appendBitmap:uri, absolutePosition:40}.
appendBarcode Example: {appendBarcode:'{BStar', absolutePosition:40}.
appendQrCode Example: {appendQrCode:'{BStar', absolutePosition:40}. <span class="tag">optional</span></dd><dt><h4>alignment</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendBitmap command, the appendBarcode command, or the appendQrCode command (Units:Dots)
Choose the format of the return value defined in StarPRNT.AlignmentPosition or the AlignmentPosition enum. 'Left' | 'Center' | 'Right'.
appendBitmap Example: {appendBitmap:uri, alignment:AlignmentPosition.Center}.
appendBarcode Example: {appendBarcode:'{BStar', alignment:AlignmentPosition.Center}.
appendQrCode Example: {appendQrCode:'{BStar', alignment:AlignmentPosition.Center}. <span class="tag">optional</span></dd><dt><h4>append</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Data (Text and Command) is added to the command buffer. Example: {append:"Star Clothing Boutique\n123 Star Road\nCity, State 12345\n\n"} <span class="tag">optional</span></dd><dt><h4>appendAbsolutePosition</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Absolute position command is generated and added to the command buffer. (Unit: Dots). Send in conjunction with the data property to append absolute position just to that string
Example1: Append data with Absolute position {appendAbsolutePosition:40, data: "Text with absolute position"}
Example2: Append absolute position to subsequent commands: {appendAbsolutePosition:40} <span class="tag">optional</span></dd><dt><h4>appendAlignment</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Alignment command is generated and added to the command buffer. Send in conjunction with the data property to append alignment position just to that string
Choose the format of the return value defined in StarPRNT.AlignmentPosition or the AlignmentPosition enum. 'Left' | 'Center' | 'Right'.
Example1 Append data with Alignment position: {appendAlignment:AlignmentPosition.Center, data: "Text with centered position"}
Example2 Append absolute position to subsequent commands: {appendAlignment:AlignmentPosition.Center} <span class="tag">optional</span></dd><dt><h4>appendBarcode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Print command of the barcode is generated and added to the command buffer.
Additional Properties: BarcodeSymbology, BarcodeWidth, height, hri, absolutePosition, alignment.
Example: {appendBarcode:"{BStar", BarcodeSymbology:BarcodeSymbology.Code128, BarcodeWidth:BarcodeWidth.Mode2, height:40, hri:true }
Example with absolutePosition: {appendBarcode:"{BStar", BarcodeSymbology:BarcodeSymbology.Code128, BarcodeWidth:BarcodeWidth.Mode2, height:40, hri:true, absolutePosition:40 }
Example with alignment:{appendBarcode:"{BStar", BarcodeSymbology:BarcodeSymbology.Code128, BarcodeWidth:BarcodeWidth.Mode2, height:40, hri:true, alignment:alignment:AlignmentPosition.Center } <span class="tag">optional</span></dd><dt><h4>appendBitmap</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Print command of the bitmap is generated and added to the command buffer. Takes a string image URI
this can be obtained via the camera or photo library or as a static resource saved on the phone memory.
Additional Properties: diffusion, width, bothScale, rotation, absolutePosition, alignment.
Example: {appendBitmap:uri, diffusion: true, width:576, bothScale: true}
Example with absolutePosition: {appendBitmap:uri, diffusion: true, width:576, bothScale: true, absolutePosition: 40 }.
Example with alignment: {appendBitmap:uri, diffusion: true, width:576, bothScale: true, alignment:"Center" }. <span class="tag">optional</span></dd><dt><h4>appendBlackMark</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Black mark command is generated and added to the command buffer.
Choose the format of the return value defined in StarPRNT.BlackMarkType or the BlackMarkType enum. 'Valid' | 'Invalid' | 'ValidWithDetection'
Example: {appendBlackMark: BlackMarkType.Valid} <span class="tag">optional</span></dd><dt><h4>appendCharacterSpace</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set command of the character space is generated and added to the command buffer. Character Spacs (Unit: Dots) Example: 4 <span class="tag">optional</span></dd><dt><h4>appendCutPaper</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Paper cut command is generated and added to the command buffer.
Choose the format of the return value defined in StarPRNT.CutPaperAction or the CutPaperAction enum. 'FullCut' | 'FullCutWithFeed' | 'PartialCut' | 'PartialCutWithFeed'
Example: {appendCutPaper:CutPaperAction.PartialCutWithFeed} <span class="tag">optional</span></dd><dt><h4>appendEmphasis</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Select command of the emphasis mode is generated and added to the command buffer. Example: {appendEmphasis:"SALE\n"} <span class="tag">optional</span></dd><dt><h4>appendFontStyle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Select command of the font style is generated and added to the command buffer.
Choose the format of the return value defined in StarPRNT.FontStyleType or the FontStyleType enum. 'A' | 'B'
Example: {appendFontStyle:FontStyleType.A} <span class="tag">optional</span></dd><dt><h4>appendHorizontalTabPosition</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Horizontal tab set/clear command is generated and added to the command buffer. (Only works for certain printer models, check the starSDK documentation for details)
Array of horizontal tab positions (Units: ANK character pitch). Specifying empty array deletes all currently set horizontal tab positions.
Example: {appendHorizontalTabPosition:[15, 35]}
Delete positions Example: {appendHorizontalTabPosition:[]} <span class="tag">optional</span></dd><dt><h4>appendInternational</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Select command of the international character mode is generated and added to the command buffer.
Choose the format of the return value Defined in StarPRNT.InternationalType or the InternationalType enum.
'UK' | 'USA' | 'France' | 'Germany' | 'Denmark' | 'Sweden' | 'Italy' | 'Spain' | 'Japan' | 'Norway' | 'Denmark2' | 'Spain2' | 'LatinAmerica' | 'Korea' | 'Ireland' | 'Legal'
Example {appendInternational:InternationalType.UK} <span class="tag">optional</span></dd><dt><h4>appendInvert</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Select command of the invert mode is generated and added to the command buffer. Example: {appendInvert:"Refunds and Exchanges\n"} <span class="tag">optional</span></dd><dt><h4>appendLineFeed</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Line feed command is generated and added to the command buffer. Paper feed units (Units: Lines) Example: 2 <span class="tag">optional</span></dd><dt><h4>appendLineSpace</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set command of the line space is generated and added to the command buffer. Line spaces (Units: Dots) Example: 32 <span class="tag">optional</span></dd><dt><h4>appendLogo</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Print command of the logo is generated and added to the command buffer. The logo has to be uploaded to the printer using the Star Print utility.
Send in conjuction with the logoSize property to set the logo size
Example: {appendLogo:1}
Example with LogoSize: {appendLogo:1, logoSize:LogoSize.DoubleWidthDoubleHeight} <span class="tag">optional</span></dd><dt><h4>appendMultiple</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Select command of the multiple mode is generated and added to the command buffer.
Additional properties: width:number, height:number
Example: {appendMultiple:"   $156.95\n", width:2, height:2}. <span class="tag">optional</span></dd><dt><h4>appendQrCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Print command of the QR code is generated and added to the command buffer.
Additional Properties: QrCodeModel, QrCodeLevel, cell, absolutePosition, alignment.
Example: {appendQrCode:"{BStar", QrCodeModel:"No2", QrCodeLevel:"L", cell: 8}.
Example with absolutePosition: {appendQrCode:"{BStar", QrCodeModel:"No2", QrCodeLevel:"L", cell: 8, absolutePosition: 40 }.
Example with alignment: {appendQrCode:"{BStar", QrCodeModel:"No2", QrCodeLevel:"L", cell: 8, alignment:"Center" }. <span class="tag">optional</span></dd><dt><h4>appendRaw</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Data (Text and Command) is added to the command buffer. Example: {appendRaw:"Star Clothing Boutique\n123 Star Road\nCity, State 12345\n\n"} <span class="tag">optional</span></dd><dt><h4>appendUnderline</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Select command of the under line mode is generated and added to the command buffer. Example: {appendUnderline:"30 days"} <span class="tag">optional</span></dd><dt><h4>appendUnitFeed</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Unit feed command is generated and added to the command buffer. Paper feed units (Units: Dots) Example: 64 <span class="tag">optional</span></dd><dt><h4>bothScale</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendBitmap command. Height is changed according to the conversion rate of the width property.
true = Valid, false = Invalid. Default true.
Example: {appendBitmap:uri, bothScale: true } <span class="tag">optional</span></dd><dt><h4>cell</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendQrCode command. QRCode Cell size. Default 4.
Example: {appendQrCode:'{BStar', cell:8} <span class="tag">optional</span></dd><dt><h4>diffusion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendBitmap command. Random dither: true = Valid, false = Invalid. Default true.
Example: {appendBitmap:uri, diffusion: false } <span class="tag">optional</span></dd><dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendBarcode command or the appendMultiple command (Units:Dots)
appendBarcode Example: {appendBarcode:'{BStar', height:40}
appendMultiple: {appendMultiple:'text to print', height:40} <span class="tag">optional</span></dd><dt><h4>hri</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendBarcode command.
Under-bar characters. true = Valid, false = Invalid
Example: {appendBarcode:'{BStar', hri:true} <span class="tag">optional</span></dd><dt><h4>logoSize</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendLogo command.
Choose the format of the return value defined in StarPRNT.LogoSize or the LogoSize enum. 'Normal' | 'DoubleWidth' | 'DoubleHeight' | 'DoubleWidthDoubleHeight';
Example: {appendLogo:1, logoSize:LogoSize.DoubleWidthDoubleHeight} <span class="tag">optional</span></dd><dt><h4>openCashDrawer</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>sends a appendPeripheral command to the printer for channel number: Example: 1 = No1, 2 = No2 <span class="tag">optional</span></dd><dt><h4>rotation</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendBitmap command.
Choose the format of the return value defined in StarPRNT.BitmapConverterRotation or the BitmapConverterRotation enum.
'Normal' | 'Left90' | 'Right90' | 'Rotate180'
Example: {appendBitmap:uri, rotation: BitmapConverterRotation.Left90 } <span class="tag">optional</span></dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Property to be used with the appendBitmap command or the appendMultiple command (Units:Dots)
appendBitmap Example: {appendBitmap:uri, width:576}
appendMultiple: {appendMultiple:'text to print', width:40} <span class="tag">optional</span></dd>
</dl>

## PrintObj

<dl>
<dt><h4>cutReceipt</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Sends a PartialCutWithFeed command to the printer, defaults to true <span class="tag">optional</span></dd><dt><h4>openCashDrawer</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>sends a appendPeripheral command to the printer for channels No1 and No2 - Defaults to true <span class="tag">optional</span></dd><dt><h4>text</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>string containing the text to print, Example: "Star Clothing Boutique\n123 Star Road\nCity, State 12345\n\n"</dd>
</dl>

## Printer

<dl>
<dt><h4>USBSerialNumber</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>USB Serial Number (USB Printers Only) <span class="tag">optional</span></dd><dt><h4>macAddress</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Printer Mac Address <span class="tag">optional</span></dd><dt><h4>modelName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Printer model name and model number <span class="tag">optional</span></dd><dt><h4>portName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Printer port name used to create a new port instance of SMPort or StarIOExtManager <span class="tag">optional</span></dd>
</dl>

## PrinterStatus

<dl>
<dt><h4>FirmwareVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Printer Firmware information <span class="tag">optional</span></dd><dt><h4>ModelName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Printer model name and model number <span class="tag">optional</span></dd><dt><h4>coverOpen</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Printer cover status <span class="tag">optional</span></dd><dt><h4>cutterError</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Printer Paper Cutter status <span class="tag">optional</span></dd><dt><h4>offline</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Printer Online/Offline status <span class="tag">optional</span></dd><dt><h4>receiptPaperEmpty</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Printer Paper status <span class="tag">optional</span></dd>
</dl>

## Printers

<dl>
<dt><h4>Array</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>length</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.</dd>
</dl>

## RasterObj

<dl>
<dt><h4>cutReceipt</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Sends a PartialCutWithFeed command to the printer, defaults to true <span class="tag">optional</span></dd><dt><h4>fontSize</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Font size number, defaults to 25 <span class="tag">optional</span></dd><dt><h4>openCashDrawer</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>sends a appendPeripheral command to the printer for channels No1 and No2 - Defaults to true <span class="tag">optional</span></dd><dt><h4>paperWidth</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Paper width (Units: Dots). 2 inches: 384, 3 inches: 576, 4 inches: 832, ESCPos 3 inches: 512, Dot 3 inches: 210. Defaults to 576 <span class="tag">optional</span></dd><dt><h4>text</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>string containing the text to print, Example: "Star Clothing Boutique\n123 Star Road\nCity, State 12345\n\n"</dd>
</dl>

