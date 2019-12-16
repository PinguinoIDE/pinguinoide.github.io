<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
   "http://www.w3.org/TR/html4/strict.dtd">
<html>

    <head>
        <title>Pinguino, open source IDE, compilers and hardware electronics prototyping platform for the Microchip 8- and 32-bit PIC family Microcontrollers.</title>

        <meta http-equiv="content-type"content="text/html; charset=iso-8859-1">
        <meta http-equiv="expires" content="never">
        <meta http-equiv="pragma" content="cache">
        <meta http-equiv="cache-control" content="max-age=200, must-revalidate">

        <meta property="og:url"           content="http://www.pinguino.cc" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="Pinguino, open source IDE, compilers and hardware electronics prototyping platform for the Microchip 8- and 32-bit PIC family Microcontrollers." />
        <meta property="og:description"   content="Pinguino is an Arduino-like board based on 8-Bit (PIC18F) or 32-Bit (PIC32MX) &copy;Microchip PIC Microcontrollers with built-in USB module." />
        <meta property="og:image"         content="http://www.pinguino.cc/img/icone.png" />

        <meta name="description" content="Pinguino is an Arduino-like board based on 8-Bit (PIC18F) or 32-Bit (PIC32MX) &copy;Microchip PIC Microcontrollers with built-in USB module.">
        <meta name="keywords" lang="en" content="pinguino, 18f, 32mx, pic18f, pic32mx, arduino, arduino-like, board, IDE, open source, usb, cdc, zigbee, servo, serial, python, mips, gcc, c++, android, one wire, i2c, spi, rtcc, open hardware, schematics, kicad, fritzing, DIY, microchip, microcontroller, 32 bit, 8 bit, 8-bit, 32-bit, olimex">
        <meta name="robots" content="index, follow">
        <meta name="revisit-after" content="7 days">
        <meta name="identifier-url" content="http://www.pinguino.cc">
        <meta name="coverage" content="worldwide">
        <meta name="google-site-verification" content="1wj77bqqyxatzeqMboas0eMqeCCeamyMnKhWf1vfu8I" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta http-equiv="reply-to" content="rblanchot@gmail.com">

        <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,700italic' rel='stylesheet' type='text/css'>
        <link href='img/icone.png' rel="shortcut icon" type="image/x-icon">
        <link href='css/pinguino.css' rel="stylesheet" type="text/css" charset="utf-8">

        <!-- Load Facebook SDK for JavaScript -->
        <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.8";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
    </head>

    <body>
        <div id="menu">
            <a href="index.php"><img src=img/icons/home.svg alt="home"></a></li>
            <!-- 
		<a href="http://shop.pinguino.cc"><img src=img/icons/shop.svg alt="shop"></a>
            -->
            <a href="download.php"><img src=img/icons/download.svg alt="download"></a>
            <a href="http://wiki.pinguino.cc"><img src=img/icons/wiki.svg alt="wiki"></a>
            <a href="http://forum.pinguino.cc"><img src=img/icons/forum.svg alt="forum"></a>
            <a href="http://blog.pinguino.cc"><img src=img/icons/blog.svg alt="blog"></a>
            <a href="contact.php"><img src=img/icons/contact.svg alt="contact"></a>
        </div>

        <div id="header">
            <!-- Pinguino Logo -->
        </div>

        <div id="container">
            <h1>What Pinguino stands for</h1>
            <div id="cell"><img src=img/icons/computer.svg><br>General-purpose electronic physical computer</div>
            <div id="cell"><img src=img/icons/easy.svg><br>Easily programmable</div>
            <div id="cell"><img src=img/icons/OSHW.svg><br>Open Source Hardware Environment</div>
            <div id="cell"><img src=img/icons/chips.svg><br>Wide range of &copy;Microchip 8- and 32-bit microcontrollers</div>
            <div id="cell"><img src=img/icons/ide.svg><br>Powerful Integrated Development Environement (IDE)</div>
            <div id="cell"><img src=img/icons/os.svg><br>Multi-platform : 32- and 64-bit GNU/Linux, Windows and Mac OS X</div>
            <div id="cell"><img src=img/icons/usb.svg><br>USB bootloader</div>
            <div id="cell"><img src=img/icons/peripherals.svg><br>Multi peripherals on board (USB, Serial, SPI, I2C, ...)</div>
            <div id="cell"><img src=img/icons/group.svg><br>Great supportive community</div>
            <h1><a href="download.php"><img src=img/download.png width=30%></a></h1>
        </div>

        <div id="footer">
            <!--
            <div class="centre">
                <h1>Latest News</h1>
                < ?php
                    include_once("wpget/wpget.php");
                    $wpget = new wpGet;
                    $wpget->dateformat = "d/m/Y";
                    $wpget->showcredit = false;
                    $wpget->showauthor = false;
                    $wpget->showcomment = false;
                    // function getWordpressEntries($number = 5, $chars = 300, $stripimages = true, $stripembed = true, $stripscript = true, $striplinks = false)
                    $wpget->getWordpressEntries(5, 40, true, false, false, false);
                ?>
            </div>
            -->
            <?php include "socialnetwork.inc"; ?>
            <p>v0.9 <?php print "last updated : ".date("d-m-Y", getlastmod()) ?></p>
            <p>Content is available under <a href="http://www.gnu.org/licenses/lgpl.html">LGPL</a></p>
            <p>WordPress integration powered by <a href="http://peter.upfold.org.uk/projects/wpget">WPGet</a> by Peter Upfold.</p>
            </br>
            <p><b>4k4oo2I1fnMrSqya8CVkR</b></p>
            <p>.</p>
        </div>

        <script src="https://apis.google.com/js/platform.js" async defer></script>

    </body>
</html>

