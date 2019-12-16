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
